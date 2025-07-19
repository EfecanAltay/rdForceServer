import DBConnection from '../db-connection.js';

class BaseService {

    /**
     * @type {Collection | undefined}
     */
    _dbCollection = undefined;

    /**
     * @type {Cluster | undefined}
     */
    _cluster = undefined;

    /**
     * @type {boolean}
     */
    _isActiveDBConnection = true;
    constructor(isActiveDBConnection = true) {
        this._isActiveDBConnection = isActiveDBConnection;
        if (this.instance) {
            throw new Error("Cannot create multiple instances of baseService.");
        }
        this.instance = this;
        return this;
    }

    async initialize() {
        if(this._isActiveDBConnection){
            this._dbCollection = new DBConnection();
            await this._dbCollection.initialize();
            this._cluster = this._dbCollection.getCluster(); 
        }
    }

    getInstance() {
        if (!this.instance) {
            this.instance = this.constructor();
        }
        return this.instance;
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

export default BaseService;