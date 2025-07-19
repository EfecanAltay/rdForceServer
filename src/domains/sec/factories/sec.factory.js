import SecObjects from "../objects/sec/index.js";

class SecFactory {
  static createObject(ObjectName) {
    switch (ObjectName.toUpperCase()) {
      case "USER":
        return new SecObjects.User();
      case "ROLE":
        return new SecObjects.Role();
    }
  }
}

export default SecFactory;
