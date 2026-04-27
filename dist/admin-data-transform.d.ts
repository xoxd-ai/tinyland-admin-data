import type { AdminUser, AdminActivityLog } from './types.js';
export declare function transformAdminUserToCamelCase(user: any): AdminUser;
export declare function transformAdminUserToSnakeCase(user: AdminUser): any;
export declare function transformActivityLogToCamelCase(log: any): AdminActivityLog;
export declare function transformActivityLogToSnakeCase(log: AdminActivityLog): any;
export declare function transformAdminUserArrayToCamelCase(users: any[]): AdminUser[];
export declare function transformActivityLogArrayToCamelCase(logs: any[]): AdminActivityLog[];
export declare function isSnakeCaseAdminUser(user: any): boolean;
export declare function isSnakeCaseActivityLog(log: any): boolean;
export declare function migrateAdminUsersFile(data: any): AdminUser[];
export declare function migrateActivityLogsFile(data: any): AdminActivityLog[];
//# sourceMappingURL=admin-data-transform.d.ts.map