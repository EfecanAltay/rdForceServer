import express from 'express';
import AppService from './services/app-service.js';
import LoggerService from './services/logger-service.js';
import ExceptionService from './services/exception-service.js';
import ConfigService from './services/config-service.js';
import Project from './objects/app/project.js';
import ServiceRegistry from './common/service-registry.js';

const app = express();
const port = 3000;

// initialize services
await ServiceRegistry.registerServices([
  new ConfigService(),
  new ExceptionService(),
  new AppService(),
  new LoggerService()
]);

const project = new Project();
project.Name = "New Project";
project.Description = "This is a new project.";
project.StartDate = new Date();
project.EndDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 gün sonra
project.Status = "Active";
project.Budget = 10000;
project.TeamMembers = ["member1", "member2"];
project.Client = "Client Name";
project.CreatedAt = new Date();
project.UpdatedAt = new Date();
project.CreatedBy = "admin";
project.UpdatedBy = "admin";
//project.upsert();
project._id = '2c08d448-a294-4ce9-818d-4d441bbd73b4';

// project.fetch().then((res)=>{
//   console.log(res);
// });


import mainRoute from './api/main-route.js';
app.use('/', mainRoute);

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
