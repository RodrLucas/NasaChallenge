import { Folder } from "./uses/folder";
import path from "path";

const OPTIONS = { encoding: "utf-8", withFileTypes: false };
const COORDS_PATH = path.join(__dirname, "COORDS");

const dataFolder = Folder.readDir({ COORDS_PATH, OPTIONS });
const dataFiles = Folder.readFile({ COORDS_PATH, OPTIONS }, dataFolder);

dataFiles.forEach(
  (probes) => {
    Object.entries(probes).forEach((probe) => {
      const moviments = probe[1].directions.split(",");
      const initialPosition = probe[1].initialPosition.split(",");
      const finalPosition = {
        x: +initialPosition[0],
        y: +initialPosition[1],
        direction: initialPosition[2],
      };

      moviments.forEach((moviment) => {
        if (moviment === "L") {
          if (finalPosition.direction === "N") {
            finalPosition.direction = "W";
          } else if (finalPosition.direction === "W") {
            finalPosition.direction = "S";
          } else if (finalPosition.direction === "S") {
            finalPosition.direction = "E";
          } else if (finalPosition.direction === "E") {
            finalPosition.direction = "N";
          }
        }

        if (moviment === "R") {
          if (finalPosition.direction === "N") {
            finalPosition.direction = "E";
          } else if (finalPosition.direction === "E") {
            finalPosition.direction = "S";
          } else if (finalPosition.direction === "S") {
            finalPosition.direction = "W";
          } else if (finalPosition.direction === "W") {
            finalPosition.direction = "N";
          }
        }

        if (moviment === "M") {
          if (finalPosition.direction === "N") {
            finalPosition.y++;
          } else if (finalPosition.direction === "E") {
            finalPosition.x++;
          } else if (finalPosition.direction === "S") {
            finalPosition.y--;
          } else if (finalPosition.direction === "W") {
            finalPosition.x--;
          }
        }
      });
      console.log('finalPosition', finalPosition)
    });
  });