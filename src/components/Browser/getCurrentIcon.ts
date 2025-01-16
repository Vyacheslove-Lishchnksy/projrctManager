import folderRootSVG from "@/folderRoot.svg";
import folderPrigectSVG from "@/folderProject.svg";
import folderGroupSVG from "@/folderGroup.svg";
import folderSVG from "@/folder.svg";
import fileSVG from "@/icon.svg";

import {
  isDirectory,
  isGroup,
  isProject,
  isRoot,
  isRootFolder,
} from "api/index";

export function getCurrentIcon(file: string) {
  if (isGroup(file)) {
    return folderGroupSVG;
  } else if (isProject(file)) {
    return folderPrigectSVG;
  } else if (isRoot(file) || isRootFolder(file)) {
    return folderRootSVG;
  } else if (isDirectory(file)) {
    return folderSVG;
  } else {
    return fileSVG;
  }
}
