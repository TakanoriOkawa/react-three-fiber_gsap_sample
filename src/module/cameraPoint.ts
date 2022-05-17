export interface ViewPosition {
  [key: string]: {
    x: number;
    y: number;
    z: number;
    duration: number;
  };
}
export const viewsPoint: ViewPosition = {
  initial: {
    x: 0,
    y: 0,
    z: 5,
    duration: 2,
  },
  left: {
    x: 3,
    y: 1,
    z: 2,
    duration: 2,
  },
  right: {
    x: 0,
    y: 3,
    z: 12,
    duration: 2,
  },
};