import AppObjects from "../models/index.js";

class AppFactory {
  static createObject(ObjectName) {
    switch (ObjectName.toUpperCase()) {
      case "PROJECT":
        return new AppObjects.Project();
      case "COMMIT":
        return new AppObjects.Commit();
    }
  }
}

export default AppFactory;
