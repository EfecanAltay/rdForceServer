import BaseService from "../../../shared/services/base-service.js";

class AppService extends BaseService {
    
    constructor() {
        return super();
    }

    getCollection(collectionName) {
        super.getCollection(collectionName,"app")
    }
}

export default AppService;