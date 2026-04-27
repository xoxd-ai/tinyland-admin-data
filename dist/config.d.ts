export interface AdminDataLogger {
    info: (msg: string, ...args: unknown[]) => void;
    warn: (msg: string, ...args: unknown[]) => void;
    error: (msg: string, ...args: unknown[]) => void;
}
export interface AdminDataConfig {
    dataDir?: string;
    getRolePermissions?: (role: string) => string[];
    getLogger?: () => AdminDataLogger;
}
export declare function configureAdminData(c: AdminDataConfig): void;
export declare function getAdminDataConfig(): Required<AdminDataConfig>;
export declare function resetAdminDataConfig(): void;
export declare function getLogger(): AdminDataLogger;
//# sourceMappingURL=config.d.ts.map