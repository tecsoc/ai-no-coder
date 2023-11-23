export const AtcoderLanks = {
  GRAY: "灰",
  BROWN: "茶",
  GREEN: "緑",
  CYAN: "水",
  BLUE: "青",
  YELLOW: "黄",
  ORANGE: "橙",
  RED: "赤",
} as const;

export type AtcoderLank = keyof typeof AtcoderLanks;

export const atcoderLankList = Object.values(AtcoderLanks);