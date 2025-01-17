import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

class Template {
  public name: string;
  private paths: string[];

  constructor(name: string, paths: string[]) {
    this.name = name;
    this.paths = paths;
  }

  public init(dirPath: string, name: string) {
    this.paths.forEach((path) => {
      if (path.endsWith("\\")) {
        mkdirSync(join(dirPath, name), { recursive: true });
      } else {
        writeFileSync(join(dirPath, name), "");
      }
    });
  }
}

export default Template;
