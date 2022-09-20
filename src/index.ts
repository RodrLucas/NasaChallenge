import { Folder } from "./uses/folder";
import path from 'path'

const OPTIONS = { encoding: "utf-8", withFileTypes: false }
const COORDS_PATH = path.join(__dirname, "COORDS");
const EXIT_FILES_PATH = path.join(__dirname, "EXIT_COORDS")

Folder.createDir(EXIT_FILES_PATH)
const dataFolder = Folder.readDir({COORDS_PATH, OPTIONS})
const dataFiles = Folder.readFile({COORDS_PATH, OPTIONS}, dataFolder)

console.log(dataFiles)

