import FolderScaner from "./FolderScaner";
import Constnts from "./Setttings";

function setRootFolder(folderPath: string) {
  Constnts.Settings.rootFolder = folderPath;
}

const scaner = new FolderScaner(Constnts.Settings.rootFolder);

function getAllGroups() {
  return scaner.getAllGroups();
}

function getAllProjects(groupPath: string) {
  return scaner.getAllProjects(groupPath);
}

export { setRootFolder, getAllGroups, getAllProjects };
