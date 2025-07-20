import BaseDBService from "#shared/services/base-dv-service.js";

class SecService extends BaseDBService {
    
    constructor() {
        super("sec");
    }

    getCollection(collectionName) {
        super.getCollection(collectionName, "sec")
    }
}

export default SecService;