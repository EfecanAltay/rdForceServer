import BaseAppObject from "#shared/models/base-object.js";

class Commit extends BaseAppObject {
    
    Message = "";

    constructor() {
        super("commit");
    }
}

export default Commit;