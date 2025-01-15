import folderRootSVG from "@/folderRoot.svg";
import folderPrigectSVG from "@/folderProject.svg";
import folderGroupSVG from "@/folderGroup.svg";
import folderSVG from "@/folder.svg";
import fileSVG from "@/icon.svg";

import { isGroup, isProject, isRoot, isRootFolder } from "api/index";

import { Dirent } from "original-fs";

export function getCurrentIcon(file: Dirent) {
  if (isGroup(file)) {
    return folderGroupSVG;
  } else if (isProject(file)) {
    return folderPrigectSVG;
  } else if (isRoot(file) || isRootFolder(file)) {
    return folderRootSVG;
  } else if (file.isDirectory()) {
    return folderSVG;
  } else {
    return fileSVG;
  }
}
