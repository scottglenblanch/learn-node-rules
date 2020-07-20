import {
  GREEN_COLOR,
  RED_COLOR,
} from '../colors/colors'

let northToSouthColor = GREEN_COLOR;
let eastToWestColor = RED_COLOR;

export const getNorthToSouthColor = () => northToSouthColor;

export const getEastToWestColor = () => eastToWestColor;

export const setNorthToSouthColor = color => {
  northToSouthColor = color;
};

export const setEastToWestColor = color => {
  eastToWestColor = color;
};
