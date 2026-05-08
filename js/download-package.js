/**
 * 安装包直链唯一来源 — 站内下载跳转与 GTM file_download 统计均通过此函数取值。
 */
function getDownloadPackageUrl() {
    return 'https://cooverse-cos.kujiale.com/plugin/3dmax/3.1.6.exe';
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
