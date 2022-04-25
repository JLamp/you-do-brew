import { transparentize } from "polished";

export const theme = {
  colors: {
    ink: "#302E2A",
    ink01: transparentize(0.2, "#302E2A"),
    paper: "#F4F1E0",
    line: "#D8D2BB",
  },
  font: {
    regular: "Inter var, sans-serif",
    mono: "JetBrains Mono",
  },
};
