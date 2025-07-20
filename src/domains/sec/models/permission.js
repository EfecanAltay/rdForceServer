import BaseSecObject from './base-sec-object.js';

class Permission extends BaseSecObject {
    
    Role = undefined;
    Description = "";

    constructor() {
        super(Permission.name);
    }
}

export default Permission;