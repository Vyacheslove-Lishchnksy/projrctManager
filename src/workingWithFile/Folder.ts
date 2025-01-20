import { accessSync, mkdirSync, rmSync, statSync } from "fs";

class Folder {
  public static makeFolder(path: string) {
    try {
      accessSync(path);
    } catch (error) {
      mkdirSync(path);
    }
  }

  public static removeFolder(path: string) {
    const stat = statSync(path);
    if (stat.isDirectory()) {
      rmSync(path, { recursive: true });
    } else {
      rmSync(path);
    }
  }
}

export default Folder;
