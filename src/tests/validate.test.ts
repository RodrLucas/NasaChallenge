import { MoveProbe } from "../uses/moveProbe";

const probes = {
  firstProbe: {
    moviments: ["L", "M", "L", "M", "L", "M", "L", "M", "M"],
    initialPosition: ["1", "2", "N"],
  },
  seccondProbe: {
    moviments: ["M", "M", "R", "M", "M", "R", "M", "R", "R", "M"],
    initialPosition: ["3", "3", "E"],
  },
};

describe("Send coords with initial position and the moviments that the probe must do", () => {
  it("Should return the final position e directon of first probe", () => {
    expect(
      MoveProbe.move(
        probes.firstProbe.moviments,
        probes.firstProbe.initialPosition
      )
    ).toEqual({
      x: 1,
      y: 3,
      direction: "N",
    });
  });
  it("Should return the final position e directon of seccond probe", () => {
    expect(
      MoveProbe.move(
        probes.seccondProbe.moviments,
        probes.seccondProbe.initialPosition
      )
    ).toEqual({
      x: 5,
      y: 1,
      direction: "E",
    });
  });
});
