import AppService from "../services/app-service.js";
import ServiceRegistry from "./service-registry.js";
import {Collection, DocumentNotFoundError} from "couchbase";
import { randomUUID } from "crypto";

class BaseAppObject {

    /**
     * @type {UUID}
     */
    _id = null;

    /**
    * @type {Collection} collection
    */
    _collection = null;
    
    /**
    * @type {Service} collection
    */
    _service = ServiceRegistry.getService(AppService.name);

    _objectName = "";
    constructor(objectName) {
        this._objectName = objectName;
        this._collection = this._service.getCollection(this._objectName);
    }

    async getAll(){
        try {
            console.log("Get All projects...");
            const result = await this._service.runDBCommandAsync("Select * from `rd-force`.app."+this._objectName);
            console.log(result);
            const objects = [];
            result.rows.forEach(row => {
                const object = row[this._objectName];
                objects.push(object);
            });
            return Promise.resolve({ status: 'success', data: objects });
        }
        catch (error) {
             if(error instanceof DocumentNotFoundError) {
                console.error("Document not found:", error);
                return Promise.resolve({ status: 'success', message: [] });
             }
             else {
                console.error("Error fetching projects:", error);
                return Promise.reject({ status: 'error', message: error.message });
             }
        }
    }

    async fetch(){
        try {
            if(this._id === null) {
                return Promise.reject({ status: 'failed', message: 'ID is not set' });
            }
            console.log("Fetching object...");
            const result = await this._collection.get(this._id);
            if(result === null) {
                return Promise.resolve({ status: 'failed', message: 'Object not found' });
            }
            return result.content;
        }
        catch (error) {
             if(error instanceof DocumentNotFoundError) {
                console.error("Document not found:", error);
                return Promise.resolve({ status: 'failed', message: 'Object not found' });
             }
             else {
                console.error("Error fetching projects:", error);
                return Promise.reject({ status: 'error', message: error.message });
             }
        }
    }

    async upsert(){
        try {
            if(!this._id) {
               this._id = randomUUID();
            }
            console.debug("Upsert object...");
            ServiceRegistry.getService(AppService.name);
            const result = await this._collection.upsert(this._id, this);
            if(result === null) {
                return Promise.resolve({ status: 'failed', message: 'Object not found' });
            }
            console.debug(`added object with id: ${this._id}`);
            return Promise.resolve({ status: 'success' });
        }
        catch (error) {
            throw new DBException(error);
             
            if(error instanceof DocumentNotFoundError) {
                console.error("Document not found:", error);
              
                return Promise.resolve({ status: 'failed', message: 'Object not found' });
             }
             else {
                console.error("Error fetching projects:", error);
                return Promise.reject({ status: 'error', message: error.message });
             }
        }
    }

    toJSON() {
        const ownProps = {};
        for (const key of Object.keys(this)) {
            if (this.hasOwnProperty(key) && !["_collection","_service"].includes(key)) {
                ownProps[key] = this[key];
            }
        }
        return ownProps;
    }
}

export default BaseAppObject;