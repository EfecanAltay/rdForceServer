import BaseAppObject from "../../common/base-object.js";

class Commit extends BaseAppObject {
    
    Message = "";

    constructor() {
        super("commit");
    }
}

export default Commit;