import fs from "fs";

export class Folder {
  static createDir(EXIT_FILES_PATH) {
    fs.mkdir(EXIT_FILES_PATH, (err) => {
      if (err) console.error(err);
      else console.log("Directory created successfully!");
    });
    return {
      EXIT_FILES_PATH,
    };
  }

  static readDir({ COORDS_PATH, OPTIONS }) {
    const dataFolder = fs.readdirSync(COORDS_PATH, OPTIONS);
    return dataFolder;
  }

  static readFile({ COORDS_PATH, OPTIONS }, dataFolder: string[]) {
    const dataFiles = dataFolder.reduce((acc: any, name): string[] => {
      const FILE_PATH = `${COORDS_PATH + "/" + name}`;
      acc.push(fs.readFileSync(FILE_PATH, OPTIONS));
      return acc;
    }, []);

    return dataFiles;
  }
}
