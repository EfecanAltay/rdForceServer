import Project from '#app/models/project.js';
import AppFactory from '../factories/app.factory.js';

async function GetProject(id){
    let project = AppFactory.createObject("project");
    project.id = id;
    return await project.fetch();
}

async function GetAllProject(){
    let project = AppFactory.createObject("project");
    return await project.getAll();
}


export default {GetProject, GetAllProject};