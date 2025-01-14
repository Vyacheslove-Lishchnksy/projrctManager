import { Dirent } from "fs";
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

function getAllFiles(path: string) {
  return scaner.getAllFiles(path);
}

function isGroup(dir: Dirent) {
  return scaner.isGroup(dir);
}

function isProject(dir: Dirent) {
  return scaner.isProject(dir);
}

export {
  setRootFolder,
  getAllGroups,
  getAllProjects,
  getAllFiles,
  isGroup,
  isProject,
};
