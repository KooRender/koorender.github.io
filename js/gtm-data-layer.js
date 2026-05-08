/**
 * koorender 网站转化追踪 Data Layer（GTM）
 * 需求文档：https://cf.qunhequnhe.com/pages/viewpage.action?pageId=81452872210
 */
(function (global) {
    function resolveDownloadUri(linkEl, explicitUrl) {
        if (explicitUrl && typeof explicitUrl === 'string') {
            return explicitUrl.trim();
        }
        if (!linkEl) {
            return '';
        }
        if (linkEl.dataset && linkEl.dataset.downloadUrl) {
            return String(linkEl.dataset.downloadUrl).trim();
        }
        var hrefAttr = linkEl.getAttribute && linkEl.getAttribute('href');
        if (hrefAttr && !/^javascript:/i.test(hrefAttr.trim())) {
            return hrefAttr.trim();
        }
        return '';
    }

    function parseFileFromUri(uri) {
        if (!uri) {
            return { file_name: '', file_extension: '' };
        }
        try {
            var basePage =
                typeof global.location !== 'undefined' ? global.location.href : 'https://localhost/';
            var u = new URL(uri, basePage);
            var segments = u.pathname.split('/').filter(Boolean);
            var base = segments.length ? segments[segments.length - 1] : '';
            if (!base) {
                return { file_name: '', file_extension: '' };
            }
            var decoded = base;
            try {
                decoded = decodeURIComponent(base);
            } catch (decErr) {
                decoded = base;
            }
            var dot = decoded.lastIndexOf('.');
            var ext = dot >= 0 ? decoded.slice(dot + 1).toLowerCase() : '';
            return { file_name: decoded, file_extension: ext };
        } catch (err) {
            return { file_name: '', file_extension: '' };
        }
    }

    global.pushDataLayerSignUp = function (method) {
        global.dataLayer = global.dataLayer || [];
        global.dataLayer.push({
            event: 'sign_up',
            method: method || 'email',
        });
    };

    /** 已注册用户登录成功：method 如 email、google（与 sign_up 的 method 命名一致便于 GTM 映射） */
    global.pushDataLayerLogin = function (method) {
        global.dataLayer = global.dataLayer || [];
        global.dataLayer.push({
            event: 'login',
            method: method || 'email',
        });
    };

    /** linkEl：取 href 或 data-download-url；explicitUrl：脚本跳转时传入 */
    global.pushDataLayerFileDownload = function (linkEl, explicitUrl) {
        global.dataLayer = global.dataLayer || [];
        var linkText = '';
        if (linkEl && typeof linkEl.innerText === 'string') {
            linkText = linkEl.innerText.trim();
        }
        var uri = resolveDownloadUri(linkEl, explicitUrl);
        var parsed = parseFileFromUri(uri);
        global.dataLayer.push({
            event: 'file_download',
            file_extension: parsed.file_extension || 'unknown',
            file_name: parsed.file_name || 'unknown',
            link_text: linkText,
        });
    };
})(window);
