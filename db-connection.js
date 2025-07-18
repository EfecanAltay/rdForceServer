import couchbase from "couchbase";
import ServiceRegistry from './common/service-registry.js';

class DBConnection {
  constructor() {
    this.cluster = null;
  }

  async connect() {

    const configService = ServiceRegistry.getService("ConfigService");
    const dbHost = await configService.getKeyStoreConfig("DB_HOST");
    const dbUser = await configService.getKeyStoreConfig("DB_USER");
    const dbPass = await configService.getKeyStoreConfig("DB_PASS");

    if(!dbHost || !dbUser || !dbPass )
    {
        console.error("DB Config ayarlı değil !");
        throw new Error("DB Config ayarlı değil !");
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

  async runCommandAsync(query) {
    return await this.cluster.query(query);
  }
}

class AppDBConnection extends DBConnection {
  constructor() {
    super()
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
}

export default AppDBConnection;
