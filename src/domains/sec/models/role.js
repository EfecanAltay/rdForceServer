import BaseSecObject from './base-sec-object.js';

class Role extends BaseSecObject {
    
    RoleName = "";

    constructor() {
        super(Role.name);
    }
}

export default Role;