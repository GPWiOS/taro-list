export enum ALIGN {
  START = 'start',
  END = 'end',
  CENTER = 'center',
  Auto = 'auto'
}

export enum DIRECTION {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal'
}

export const scrollProp = {
  [DIRECTION.VERTICAL]: 'scrollTop',
  [DIRECTION.HORIZONTAL]: 'scrollLeft'
};

export const sizeProp = {
  [DIRECTION.VERTICAL]: 'height',
  [DIRECTION.HORIZONTAL]: 'width'
};

export const positionProp = {
  [DIRECTION.HORIZONTAL]: 'left',
  [DIRECTION.VERTICAL]: 'top'
};

export const DEFAULT_ITEMSIZE = 50;

export const DEFAULT_ZINDEX = 10;

export const DEFAULT_OVERSCAN = 3;

export const DEFAULT_COLUMN = 1;

export interface CellCacheItem {
  width: number;
  height: number;
}

export type ItemSize = number | number[] | ((index: number) => number);

export type ItemSizeGetter = (indx: number) => number;

export type EstimatedSizeGetter = () => number;

export interface SizeAndPositionDataItem {
  size: number;
  offset: number;
}
