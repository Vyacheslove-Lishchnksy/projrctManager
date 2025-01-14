import { Dirent, readdirSync } from "fs";
import { join } from "path";

class FolderScaner {
  private rootDir: string;
  constructor(dir: string) {
    this.rootDir = dir;
  }

  public isGroup(dir: Dirent) {
    return this.hasFolder(".group")(dir);
  }

  public isProject(dir: Dirent) {
    return this.hasFolder(".project")(dir);
  }

  public isRoot(dir: Dirent) {
    return this.hasFolder(".root")(dir);
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
    return (dir: Dirent) => {
      const files = readdirSync(join(dir.parentPath, dir.name));

      return files.reduce<boolean>((prev, current) => {
        if (prev) {
          return prev;
        } else if (current === dirName) {
          return true;
        } else {
          return false;
        }
      }, false);
    };
  }

  public getAllGroups() {
    const files = readdirSync(this.rootDir, { withFileTypes: true });
    const directorys = files.filter((item) => item.isDirectory());
    const groups = directorys.filter((dir) => this.isGroup(dir));

    return groups;
  }

  public getAllProjects(directory: string) {
    const files = readdirSync(directory, { withFileTypes: true });
    const directorys = files.filter((item) => item.isDirectory());
    const groups = directorys.filter((dir) => this.isProject(dir));

    return groups.map((dir) => dir.name);
  }

  public getAllFiles(directory: string) {
    const files = readdirSync(directory, { withFileTypes: true });
    return files.filter((file) => {
      return file.name !== "desktop.ini";
    });
  }
}

export default FolderScaner;
