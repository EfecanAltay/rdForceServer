import BaseObject from "#shared/models/base-object.js";

class Project extends BaseObject {
    
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