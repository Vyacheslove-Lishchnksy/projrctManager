import { readdirSync } from "fs";
import { join, relative } from "path";
import Template from "./Template";

class TemplateScaner {
  private rootTemplatePath: string;

  constructor(rootPath: string) {
    this.rootTemplatePath = join(rootPath, "Templates");
  }

  public getAllTemplates() {
    const folders = readdirSync(this.rootTemplatePath, { withFileTypes: true });
    return folders.map((folder) => {
      return new Template(
        folder.name,
        this.newPaths(join(folder.parentPath, folder.name))
      );
    });
  }

  private newPaths(
    folder: string,
    baseFolder: string = folder,
    result: string[] = []
  ) {
    const folders = readdirSync(folder, {
      withFileTypes: true,
    });

    folders.forEach((item) => {
      const absolutePath = join(folder, item.name);
      const relativePath = relative(baseFolder, absolutePath);

      if (item.isDirectory()) {
        result.push(`${relativePath}\\`);
        this.newPaths(absolutePath, baseFolder, result);
      } else {
        result.push(relativePath);
      }
    });
    return result;
  }
}

export default TemplateScaner;
