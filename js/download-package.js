/**
 * 安装包直链 — 通过版本检查 GET 接口取 d.downloadUrl（海外优先 d.downloadUrlOverseas），失败时用兜底链接。
 * 站内下载与 GTM file_download 统计均应对 resolveDownloadPackageUrl() 的返回值解析埋点字段。
 */
const PLUGIN_PACKAGE_CHECK_URL =
    'https://www.coohom.com/cooverse/plugin/3dmax/check?currentVersion=0';

/** 接口不可用时的兜底，避免断下载 */
const FALLBACK_DOWNLOAD_PACKAGE_URL =
    'https://cooverse-cos.kujiale.com/plugin/3dmax/3.1.6.exe';

/**
 * @returns {Promise<string>}
 */
async function resolveDownloadPackageUrl() {
    try {
        const res = await fetch(PLUGIN_PACKAGE_CHECK_URL, {
            method: 'GET',
            credentials: 'omit',
            cache: 'no-store'
        });
        if (!res.ok) {
            throw new Error('plugin check http ' + res.status);
        }
        const body = await res.json();
        const d = body && body.d;
        if (!d || typeof d !== 'object') {
            throw new Error('plugin check invalid payload');
        }
        const overseas = d.downloadUrlOverseas;
        const main = d.downloadUrl;
        const pick = (u) =>
            typeof u === 'string' && u.trim().toLowerCase().startsWith('http') ? u.trim() : null;
        const url = pick(overseas) || pick(main);
        if (url) {
            return url;
        }
    } catch (err) {
        console.warn('resolveDownloadPackageUrl:', err);
    }
    return FALLBACK_DOWNLOAD_PACKAGE_URL;
}

/**
 * 由安装包 URL 解析 GTM / 埋点可用的 file_name、file_extension（pathname 末段）。
 */
function parseDownloadUrlForTracking(packageUrl) {
    try {
        const basename = new URL(packageUrl).pathname.split('/').filter(Boolean).pop() || 'download';
        const dot = basename.lastIndexOf('.');
        if (dot <= 0) {
            return { file_name: basename, file_extension: '' };
        }
        return {
            file_name: basename.slice(0, dot),
            file_extension: basename.slice(dot + 1).toLowerCase()
        };
    } catch (err) {
        return { file_name: 'download', file_extension: '' };
    }
}
