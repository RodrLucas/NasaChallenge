import fs from "fs";

export class Folder {
  static createDir(EXIT_FILES_PATH) {
    fs.mkdir(EXIT_FILES_PATH, (err) => {
        if(err) console.error(err)
        console.log('Directory created successfully!')
    });

    return {
      EXIT_FILES_PATH,
    };
  }
}
