"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const AuditLog_model_1 = require("./models/AuditLog-model");
mongoose.connect('mongodb://localhost/mongoose-example', { useMongoClient: true, promiseLibrary: Promise });
let log = {
    timestamp: new Date(),
    ipAddress: '192.168.1.2'
};
let record = new AuditLog_model_1.AuditLog(log);
record.save()
    .then(() => console.log('saved'))
    .then(() => AuditLog_model_1.AuditLog.find({}).exec())
    .then(results => console.log(results));
