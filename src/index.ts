import { Folder } from "./uses/folder";
import path from "path";

const OPTIONS = { encoding: "utf-8", withFileTypes: false };
const COORDS_PATH = path.join(__dirname, "COORDS");

const dataFolder = Folder.readDir({ COORDS_PATH, OPTIONS });
const dataFiles = Folder.readFile({ COORDS_PATH, OPTIONS }, dataFolder);

interface IFinalPositionProps {
  x: number;
  y: number;
  direction: string;
}

dataFiles.forEach((probes) => {
  Object.entries(probes).forEach((probe) => {
    const moviments = probe[1].directions.split(",");
    const initialPosition = probe[1].initialPosition.split(",");
    const finalPosition: IFinalPositionProps = {
      x: +initialPosition[0],
      y: +initialPosition[1],
      direction: initialPosition[2],
    };

    moviments.forEach((moviment: string) => {
      const left = {
        N: () => (finalPosition.direction = "W"),
        W: () => (finalPosition.direction = "S"),
        S: () => (finalPosition.direction = "E"),
        E: () => (finalPosition.direction = "N"),
      };

      const right = {
        N: () => (finalPosition.direction = "E"),
        E: () => (finalPosition.direction = "S"),
        S: () => (finalPosition.direction = "W"),
        W: () => (finalPosition.direction = "N"),
      };

      const move = {
        N: () => finalPosition.y++,
        E: () => finalPosition.x++,
        S: () => finalPosition.y--,
        W: () => finalPosition.x--,
      };

      if (moviment === "L") left[finalPosition.direction]();
      if (moviment === "R") right[finalPosition.direction]();
      if (moviment === "M") move[finalPosition.direction]();
    });
    console.log("finalPosition", finalPosition);
  });
});
