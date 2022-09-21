import { Folder } from "./uses/folder";
import path from "path";
import { MoveProbe } from "./uses/moveProbe";

const OPTIONS = { encoding: "utf-8", withFileTypes: false };
const COORDS_PATH = path.join(__dirname, "COORDS");

const dataFolder = Folder.readDir({ COORDS_PATH, OPTIONS });
const dataFiles = Folder.readFile({ COORDS_PATH }, dataFolder);

dataFiles.forEach((probes) => {
  Object.entries(probes).forEach((probe: string[] | object) => {
    const moviments: string[] = probe[1].moviments.split(",");
    const initialPosition: string[] = probe[1].initialPosition.split(",");
    
    MoveProbe.move(moviments, initialPosition)
  });
});
