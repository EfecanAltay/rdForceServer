import BaseAppObject from "#shared/models/base-object.js";

class Commit extends BaseAppObject {
    
    Message = "";

    constructor() {
        super("app", "commit");
    }
}

export default Commit;