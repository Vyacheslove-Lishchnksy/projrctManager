import { mkdirSync, readdirSync } from "fs";
import { join, relative } from "path";
import Template from "./Template";

class TemplateScaner {
  private rootTemplatePath: string;
  private templates: Template[] = [];

  constructor(rootPath: string) {
    this.rootTemplatePath = join(rootPath, "Templates");
  }

  public initTemplate(dirPath: string, template: string, name: string) {
    const currentTemplate = this.templates.find(
      (item) => item.name === template
    );
    if (!!currentTemplate) {
      mkdirSync(join(dirPath, name));
      currentTemplate.init(join(dirPath, name));
    }
  }

  public getAllTemplates() {
    if (this.templates.length <= 0) {
      const folders = readdirSync(this.rootTemplatePath, {
        withFileTypes: true,
      });
      this.templates = folders.map((folder) => {
        return new Template(
          folder.name,
          this.newPaths(join(folder.parentPath, folder.name))
        );
      });
    }

    return this.templates;
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
