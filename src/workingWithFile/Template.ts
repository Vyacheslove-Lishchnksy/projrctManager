class Template {
  public name: string;
  private paths: string[];

  constructor(name: string, paths: string[]) {
    this.name = name;
    this.paths = paths;
  }
}

export default Template;
