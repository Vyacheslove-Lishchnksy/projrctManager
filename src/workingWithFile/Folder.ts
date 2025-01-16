import { accessSync, mkdirSync } from "fs";

class Folder {
  public static makeFolder(path: string) {
    try {
      console.log(path);

      accessSync(path);
    } catch (error) {
      mkdirSync(path);
    }
  }
}

export default Folder;
