"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
let AuditLogSchema = new mongoose_1.Schema({
    timestamp: Date,
    ipAddress: String
});
exports.AuditLog = mongoose.model('AuditLog', AuditLogSchema);
