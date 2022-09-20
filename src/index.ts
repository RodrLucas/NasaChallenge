import { Folder } from "./uses/folder";
import path from "path";
import { IFinalPositionProps } from "./interfaces/FinalPosition";

const OPTIONS = { encoding: "utf-8", withFileTypes: false };
const COORDS_PATH = path.join(__dirname, "COORDS");

const dataFolder = Folder.readDir({ COORDS_PATH, OPTIONS });
const dataFiles = Folder.readFile({ COORDS_PATH, OPTIONS }, dataFolder);

dataFiles.forEach((probes) => {
  Object.entries(probes).forEach((probe: string[] | object) => {
    const moviments: string[] = probe[1].directions.split(",");
    const initialPosition: string[] = probe[1].initialPosition.split(",");

    const results = moviments.reduce(
      ({ x, y, direction }: IFinalPositionProps, moviment) => {
        const left = {
          N: () => (direction = "W"),
          W: () => (direction = "S"),
          S: () => (direction = "E"),
          E: () => (direction = "N"),
        };

        const right = {
          N: () => (direction = "E"),
          E: () => (direction = "S"),
          S: () => (direction = "W"),
          W: () => (direction = "N"),
        };

        const move = {
          N: () => y++,
          E: () => x++,
          S: () => y--,
          W: () => x--,
        };

        if (moviment === "L") left[direction]();
        if (moviment === "R") right[direction]();
        if (moviment === "M") move[direction]();

        return { x, y, direction };
      },
      {
        x: +initialPosition[0],
        y: +initialPosition[1],
        direction: initialPosition[2],
      }
    );

    console.log('results', results)
  });
});
