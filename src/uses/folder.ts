import fs from "fs";

export class Folder {
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
