import DBConnection from '../utils/db-connection.js';

class BaseService {    
    /**
     * @type {boolean}
     */
    constructor() {
        if (this.instance) {
            throw new Error("Cannot create multiple instances of baseService.");
        }
        this.instance = this;
        return this;
    }

    async initialize() {
      //...
    }

    getInstance() {
        if (!this.instance) {
            this.instance = this.constructor();
        }
        return this.instance;
    } 
}

export default BaseService;