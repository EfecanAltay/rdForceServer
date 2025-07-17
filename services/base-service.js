class BaseService {
    constructor() {
        if (this.instance) {
            throw new Error("Cannot create multiple instances of baseService.");
        }
        this.instance = this;
        return this;
    }

    async initialize() {
        return Promise.resolve();
    }

    getInstance() {
        if (!this.instance) {
            this.instance = this.constructor();
        }
        return this.instance;
    }     
}

export default BaseService;