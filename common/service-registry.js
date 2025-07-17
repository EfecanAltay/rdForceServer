import BaseService from "../services/base-service.js";

class ServiceRegistry {
    static _serviceList = [];
    constructor() {
    }

    static async registerService(service) {
        if (service instanceof BaseService) {
            console.debug(`${service.constructor.name} Initializing...`);
            await service.initialize();
            this._serviceList.push(service);
        } else {
            throw Error("Service must be an instance of BaseService");
        }
    }

    static async registerServices(services) {
        for (let index = 0; index < services.length; index++) {
          await ServiceRegistry.registerService(services[index]);
        }
    }
    
    static getService(name) {
        const srv = this._serviceList.find(service => service.constructor.name === name);
        if(!srv)
            throw new Error(`${name} Service Not Registered !`);
        return srv;
    }
}

export default ServiceRegistry;