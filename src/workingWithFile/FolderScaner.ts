import { readdirSync, statSync } from "fs";
import { join } from "path";

class FolderScaner {
  private rootDir: string;
  constructor(dir: string) {
    this.rootDir = dir;
  }

  public isGroup(dir: string) {
    return this.hasFolder(".group")(dir);
  }

  public isProject(dir: string) {
    return this.hasFolder(".project")(dir);
  }

  public isRoot(dir: string) {
    return this.hasFolder(".root")(dir);
  }

  public isRootFolder(dir: string) {
    return this.hasFolder(".rootFolder")(dir);
  }

  public isDirectory(dir: string) {
    const stat = statSync(dir);
    return stat.isDirectory();
  }

  public isRootDir(dir: string) {
    const files = readdirSync(dir);
    return files.reduce<boolean>((prev, curr) => {
      if (prev) {
        return prev;
      } else if (curr === ".root") {
        return true;
      } else {
        return false;
      }
    }, false);
  }

  private hasFolder(dirName: string) {
    return (path: string) => {
      const stat = statSync(path);
      if (stat.isDirectory()) {
        const files = readdirSync(path);

        return files.reduce<boolean>((prev, current) => {
          if (prev) {
            return prev;
          } else if (current === dirName) {
            return true;
          } else {
            return false;
          }
        }, false);
      } else {
        return false;
      }
    };
  }

  public getAllGroups() {
    const files = readdirSync(this.rootDir, { withFileTypes: true });
    const directorys = files.filter((item) => item.isDirectory());
    const groups = directorys.filter((dir) =>
      this.isGroup(join(dir.parentPath, dir.name))
    );

    return groups;
  }

  public getAllProjects(directory: string) {
    const files = readdirSync(directory, { withFileTypes: true });
    const directorys = files.filter((item) => item.isDirectory());
    const groups = directorys.filter((dir) =>
      this.isProject(join(dir.parentPath, dir.name))
    );

    return groups.map((dir) => dir.name);
  }

  public getAllFiles(directory: string) {
    let files = readdirSync(directory, { withFileTypes: true });
    files = files.filter((file) => {
      return file.name !== "desktop.ini";
    });
    return files.map((file) => join(file.parentPath, file.name));
  }
}

export default FolderScaner;
