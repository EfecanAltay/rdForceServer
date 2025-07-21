import projectUsecase from '../usecases/project.usecase.js';

async function CreateProjectHandler(req, res) {
  try {
    const result = await projectUsecase.GetProject.execute(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function GetProjectHandler(req, res) {
  try {
    const result = await projectUsecase.GetProject(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function GetAllProjectHandler(req, res) {
  try {
    const result = await projectUsecase.GetAllProject();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


export default {CreateProjectHandler, GetProjectHandler, GetAllProjectHandler};