import { Dirent } from "fs";
import FolderScaner from "./FolderScaner";
import Constnts from "./Setttings";
import TemplateScaner from "./TemplateScaner";

function setRootFolder(folderPath: string) {
  Constnts.Settings.rootFolder = folderPath;
}

const scaner = new FolderScaner(Constnts.Settings.rootFolder);
const templates = new TemplateScaner(Constnts.Settings.rootFolder);

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

function isRoot(dir: Dirent) {
  return scaner.isRoot(dir);
}

function isRootFolder(dir: Dirent) {
  return scaner.isRootFolder(dir);
}

function isRootDir(dir: string) {
  return scaner.isRootDir(dir);
}

function getAllTemplates() {
  return templates.getAllTemplates();
}

export {
  setRootFolder,
  getAllGroups,
  getAllProjects,
  getAllFiles,
  isGroup,
  isProject,
  isRoot,
  isRootFolder,
  isRootDir,
  getAllTemplates,
};
