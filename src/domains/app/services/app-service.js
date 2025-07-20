import BaseDBService from "#shared/services/base-db-service.js";

class AppService extends BaseDBService {
    
    constructor() {
        super("app");
    }

    getCollection(collectionName) {
        super.getCollection(collectionName,"app")
    }
}

export default AppService;