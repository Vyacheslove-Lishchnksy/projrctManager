export class Constnts {
  static readonly Settings: ISettings = {
    rootFolder: "D:\\root",
  };

  public static setRootFolder(folderPath: string) {
    this.Settings.rootFolder = folderPath;
  }
}

export interface ISettings {
  rootFolder: string;
}

export default Constnts;
