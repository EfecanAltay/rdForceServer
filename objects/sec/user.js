import BaseObject from "../../common/base-object.js";

class User extends BaseObject {
    
    UserName = "";
    FirstName = "Noname";
    Surname = "Noname";
    DateOfBirthday = new Date();

    constructor() {
        super("user");
    }
}

export default User;