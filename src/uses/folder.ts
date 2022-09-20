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
    console.log('dataFolder', dataFolder)
    dataFolder.forEach((fileName) => {
      const FILE_PATH = `${COORDS_PATH + "/" + fileName}`
      fs.readFile(FILE_PATH, OPTIONS, (err, dataFile: string) => {
        if(err) console.error(err)
        return console.log(JSON.parse(dataFile))
      })
    })
  }
}
