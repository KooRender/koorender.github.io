/**
 * 安装包直链 — 直接使用固定下载地址，不再通过 API 获取。
 * 站内下载与 GTM file_download 统计均应对 DOWNLOAD_PACKAGE_URL 解析埋点字段。
 */
const DOWNLOAD_PACKAGE_URL =
    'https://qhstaticssl.coohom.com/application/octetstream/1779098114731/bootstrap.exe';

/**
 * @returns {Promise<string>}
 */
async function resolveDownloadPackageUrl() {
    return DOWNLOAD_PACKAGE_URL;
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
