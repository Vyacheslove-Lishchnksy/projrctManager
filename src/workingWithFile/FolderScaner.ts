import { Dirent, readdirSync } from "fs";
import { join } from "path";

class FolderScaner {
  private rootDir: string;
  constructor(dir: string) {
    this.rootDir = dir;
  }

  private isGroup(dir: Dirent) {
    const files = readdirSync(join(dir.parentPath, dir.name));

    return files.reduce<boolean>((prev, current) => {
      if (prev) {
        return prev;
      } else if (current === ".group") {
        return true;
      } else {
        return false;
      }
    }, false);
  }

  private isProject(dir: Dirent) {
    const files = readdirSync(join(dir.parentPath, dir.name));

    return files.reduce<boolean>((prev, current) => {
      if (prev) {
        return prev;
      } else if (current === ".project") {
        return true;
      } else {
        return false;
      }
    }, false);
  }

  public getAllGroups() {
    const files = readdirSync(this.rootDir, { withFileTypes: true });
    const directorys = files.filter((item) => item.isDirectory());
    const groups = directorys.filter((dir) => this.isGroup(dir));

    return groups.map((dir) => dir.name);
  }

  public getAllProjects(directory: string) {
    const files = readdirSync(directory, { withFileTypes: true });
    const directorys = files.filter((item) => item.isDirectory());
    const groups = directorys.filter((dir) => this.isProject(dir));

    return groups.map((dir) => dir.name);
  }
}

export default FolderScaner;
