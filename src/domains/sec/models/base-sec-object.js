import BaseObject from "#shared/models/base-object.js";

class BaseSecObject extends BaseObject {
    
    constructor(objectname) {
        super("sec", objectname);
    }
}

export default BaseSecObject;