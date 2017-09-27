import mongoose = require('mongoose');
import { Schema, Model, Document } from 'mongoose';

let AuditLogSchema: Schema = new Schema({
  timestamp: Date,
  ipAddress: String
});

export interface IAuditLog {
  timestamp: Date,
  ipAddress: string  
}

interface IAuditLogModel extends IAuditLog, Document {}

export const AuditLogModel = mongoose.model<IAuditLogModel>('AuditLog', AuditLogSchema);
