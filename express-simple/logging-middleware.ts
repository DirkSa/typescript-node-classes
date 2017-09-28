import { Request, Response } from 'express';
import { AuditLog } from './interfaces/audit-log';

export const logs: AuditLog[] = [];

export function loggingMiddleware(req: Request, res: Response, next: Function): void {
  logs.push({
    ipAddress: req.connection.remoteAddress || 'not available',
    timestamp: new Date()
  });
  next();
}
