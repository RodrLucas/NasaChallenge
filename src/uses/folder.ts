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
    let results = dataFolder.reduce((acc: string[], file) => {
      const FILE_PATH = `${COORDS_PATH + "/" + file}`;

      const data = fs.readFileSync(FILE_PATH, 'utf-8')
      acc.push(data)
      return acc;
    }, []);

    results = results.map((result) => {
      return JSON.parse(result)
    })

    return results
  }
}
