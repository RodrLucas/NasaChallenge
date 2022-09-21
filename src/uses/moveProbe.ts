import { IFinalPositionProps } from "../interfaces/FinalPosition";

export class MoveProbe {
  static move(moviments: string[], initialPosition: string[]) {
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

        if (moviment.toUpperCase() === "L") left[direction]();
        if (moviment.toUpperCase() === "R") right[direction]();
        if (moviment.toUpperCase() === "M") move[direction]();

        return { x, y, direction };
      },
      {
        x: +initialPosition[0],
        y: +initialPosition[1],
        direction: initialPosition[2],
      }
    );
    return results;
  }
}
