const defaultLogger = {
    info: console.log.bind(console),
    warn: console.warn.bind(console),
    error: console.error.bind(console),
};
let config = {};
export function configureAdminData(c) {
    config = { ...config, ...c };
}
export function getAdminDataConfig() {
    return {
        dataDir: config.dataDir ?? process.cwd() + '/content/auth',
        getRolePermissions: config.getRolePermissions ?? ((_role) => ['read']),
        getLogger: config.getLogger ?? (() => defaultLogger),
    };
}
export function resetAdminDataConfig() {
    config = {};
}
export function getLogger() {
    return getAdminDataConfig().getLogger();
}
