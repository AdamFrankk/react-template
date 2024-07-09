export interface SpritesMap {
  common: "arrow" | "user";
}
export const SPRITES_META = {
  common: ["arrow", "user"],
} satisfies {
  common: Array<"arrow" | "user">;
};
