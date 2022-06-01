interface Random {
  (from?: number, to?: number): number;
}
export const castomRandom: Random = (from = 1, to = 999) => {
  return Math.random() * (to - from) + to;
};
