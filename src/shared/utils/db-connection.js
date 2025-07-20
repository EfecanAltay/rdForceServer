import couchbase from "couchbase";
import ServiceRegistry from './service-registry.js';

class DBConnection {

  _moduleCode = undefined;
  constructor(moduleCode) {
    this._moduleCode = moduleCode;
    this.cluster = null;
  }

  async connect() {

    const configService = ServiceRegistry.getService("ConfigService");
    const dbHost = await configService.getKeyStoreDBConfig(this._moduleCode, "DB_HOST");
    const dbUser = await configService.getKeyStoreDBConfig(this._moduleCode, "DB_USER");
    const dbPass = await configService.getKeyStoreDBConfig(this._moduleCode, "DB_PASS");

    if(!dbHost || !dbUser || !dbPass )
    {
        console.error(`${this._moduleCode} DB Config ayarlı değil !`);
        throw new Error(`${this._moduleCode} DB Config ayarlı değil !`);
    }

    // User inputs
    const clusterConnStr = dbHost;
    console.debug("Connecting to Couchbase cluster at:", clusterConnStr);
    this.cluster = await couchbase
      .connect(clusterConnStr, {
        username: dbUser,
        password: dbPass,
        configProfile: "wanDevelopment", // Use the pre-configured profile to avoid latency issues
        timeout: 10000, // Set a timeout for the connection
      })
      .catch((err) => {
        console.error("Failed to connect to Couchbase cluster:", err);
        throw err;
      });
  }

  async initialize() {
    try {
      const configService = ServiceRegistry.getService("ConfigService");
      console.debug("Database connection initialized started.");
      await this.connect();
      console.debug("Database connection initialized successfully.");
    } catch (error) {
      throw error;
    }
  }

  getCluster() {
    return this.cluster;
  }

  async runCommandAsync(query) {
    return await this.cluster.query(query);
  }
}

export default DBConnection;
