import mongoose = require('mongoose');
import { AuditLogModel, IAuditLog } from './models/AuditLog-model';

mongoose.connect('mongodb://localhost/mongoose-example', { useMongoClient: true, promiseLibrary: Promise });

let log: IAuditLog = {
  timestamp: new Date(),
  ipAddress: '192.168.1.2'
};

let record = new AuditLogModel(log);

record.save()
  .then(() => console.log('saved'))
  .then(() => AuditLogModel.find({}).exec())
  .then(results => console.log(results));