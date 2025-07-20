import DBConnection from '../utils/db-connection.js';
import BaseService from './base-service.js';

class BaseDBService extends BaseService {

    /**
     * @type {Collection | undefined}
     */
    _dbCollection = undefined;

    /**
     * @type {Cluster | undefined}
     */
    _cluster = undefined;

    /**
     * @type {Cluster | undefined}
     */
    _moduleCode = undefined;
    
    constructor(moduleCode) {
        this._moduleCode = moduleCode;
        super();
    }

    async initialize() {
        this._dbCollection = new DBConnection(this._moduleCode);
        await this._dbCollection.initialize();
        this._cluster = this._dbCollection.getCluster(); 
    }

    async runDBCommandAsync(query){
        return await this._dbCollection.runCommandAsync(query);
    }

    getCollection(collectionName, scope) {
        if(!this._cluster) {
            throw new Error("Cluster is not initialized.");
        }
        return this._cluster.bucket('rd-force').scope(scope).collection(collectionName);
    }
}

export default BaseDBService;