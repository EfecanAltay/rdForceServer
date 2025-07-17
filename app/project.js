import BaseAppObject from "../common/base-app-object.js";

class Project extends BaseAppObject {
    
    Name = "";
    Description = "";
    StartDate = null;
    EndDate = null;
    Status = "";
    Budget = 0;
    TeamMembers = [];
    Client = "";
    CreatedAt = null;
    UpdatedAt = null;
    CreatedBy = "";
    UpdatedBy = "";

    constructor() {
        super("project");
    }
}

export default Project;