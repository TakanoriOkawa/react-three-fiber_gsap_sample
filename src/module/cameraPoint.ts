import { Vector3Tuple } from 'three';

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
    x: 0,
    y: 0,
    z: 2,
    duration: 1,
  },
  right: {
    x: 0,
    y: 3,
    z: 12,
    duration: 2,
  },
};

// スクロールターゲットを配列でまとめる
export const numbers: number[] = [];

// Geometryの位置情報を格納
export const objectPosition: Vector3Tuple[] = [
  [-1.6, 0, 0],
  [0, 0, 0],
  [1.6, 0, 0],
];
