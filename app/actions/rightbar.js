export const TOGGLE_BAR = 'TOGGLE_BAR';

export function toggleBar(isVisable) {
  return {
    type: TOGGLE_BAR,
    isVisable
  };
}
