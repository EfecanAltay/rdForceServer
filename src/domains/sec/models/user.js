import BaseSecObject from './base-sec-object.js';

class User extends BaseSecObject {
    
    UserName = "";
    FirstName = "Noname";
    Surname = "Noname";
    DateOfBirthday = new Date();
    AppRole = undefined;

    constructor() {
        super(User.name);
    }
}

export default User;