import BaseDBService from "#shared/services/base-db-service.js";

class SecService extends BaseDBService {
    
    constructor() {
        super("sec");
    }

    getCollection(collectionName) {
        super.getCollection(collectionName, "sec")
    }
}

export default SecService;