import BaseService from "./base-service.js";
import AppDBConnection from "../db-connection.js";
import {Cluster, Collection} from "couchbase";

class AppService extends BaseService {
    
    /**
     * @type {Collection | undefined}
     */
    _dbCollection = undefined;

    /**
     * @type {Cluster | undefined}
     */
    _cluster = undefined;

    constructor() {
        return super();
    }

    async initialize() {
        this._dbCollection = new AppDBConnection();
        await this._dbCollection.initialize();
        this._cluster = this._dbCollection.getCluster(); 
    }

    // Example method
    exampleMethod() {
        console.log("This is an example method in AppService.");
    }

    async runDBCommandAsync(query){
        return await this._dbCollection.runCommandAsync(query);
    }

    getCollection(collectionName) {
        if(!this._cluster) {
            throw new Error("Cluster is not initialized.");
        }
        return this._cluster.bucket('rd-force').scope('app').collection(collectionName);
    }
}

export default AppService;