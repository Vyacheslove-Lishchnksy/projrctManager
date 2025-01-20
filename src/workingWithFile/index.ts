import FolderScaner from "./FolderScaner";
import Constnts from "./Setttings";
import TemplateScaner from "./TemplateScaner";
import Folder from "./Folder";

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

function isGroup(dir: string) {
  return scaner.isGroup(dir);
}

function isProject(dir: string) {
  return scaner.isProject(dir);
}

function isRoot(dir: string) {
  return scaner.isRoot(dir);
}

function isDirectory(dir: string) {
  return scaner.isDirectory(dir);
}

function isRootFolder(dir: string) {
  return scaner.isRootFolder(dir);
}

function isRootDir(dir: string) {
  return scaner.isRootDir(dir);
}

function getAllTemplates() {
  return templates.getAllTemplates();
}

function initTemplate(dirPath: string, template: string, name: string) {
  return templates.initTemplate(dirPath, template, name);
}

function makeFolder(path: string) {
  return Folder.makeFolder(path);
}

function removeFolder(path: string) {
  return Folder.removeFolder(path);
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
  isDirectory,
  isRootDir,
  getAllTemplates,
  makeFolder,
  removeFolder,
  initTemplate,
};
