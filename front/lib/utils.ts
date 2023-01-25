import Vibrant from "node-vibrant";
import { invoke } from "lodash";

export const randomNumber = (
  from: number,
  to: number,
  float: boolean = false
): number => {
  if (float) return +(Math.random() * (to - from) + from).toFixed(2);

  return Math.floor(Math.random() * (to - from) + from);
};

export const randomArray = (
  length: number,
  from: number,
  to: number,
  float: boolean = false
): number[] => {
  if (float) {
    return Array.from({ length }, () => randomNumber(from, to, float));
  }

  return Array.from({ length }, () => randomNumber(from, to, float));
};

export const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(" ");
};

export const getColors = async (src: string): Promise<any> => {
  const palette = await Vibrant.from(src).getPalette();

  const createColorsArray = (acc: any, color: string) => {
    if (invoke(palette, [color, "getPopulation"]) > 0) {
      return [
        ...acc,
        {
          name: color,
          hex: invoke(palette, [color, "getHex"]) as string,
        },
      ];
    }

    return [...acc];
  };

  return Object.keys(palette).reduce(createColorsArray, []);
};