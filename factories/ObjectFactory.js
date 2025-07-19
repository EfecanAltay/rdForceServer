import AppObjects from "../objects/app/index.js";
import SecObjects from "../objects/sec/index.js";

class ObjectFactory {
  static createObject(ObjectName) {
    switch (ObjectName.toUpperCase()) {
      case "PROJECT":
        return new AppObjects.Project();
      case "COMMIT":
        return new AppObjects.Commit();
      case "USER":
        return new SecObjects.User();
      case "ROLE":
        return new SecObjects.Role();
    }
  }
}

export default ObjectFactory;
