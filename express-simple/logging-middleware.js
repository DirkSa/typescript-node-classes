"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logs = [];
function loggingMiddleware(req, res, next) {
    exports.logs.push({
        ipAddress: req.connection.remoteAddress || 'not available',
        timestamp: new Date()
    });
    next();
}
exports.loggingMiddleware = loggingMiddleware;
