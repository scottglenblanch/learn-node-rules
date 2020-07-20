import {
  GREEN_COLOR,
  RED_COLOR,
} from '../colors/colors';

let northToSouthColor = GREEN_COLOR;
let eastToWestColor = RED_COLOR;

let previousDirection = null;


export const getNorthToSouthColor = () => northToSouthColor;

export const getEastToWestColor = () => eastToWestColor;

export const getPreviousChangedDirection = () => previousDirection;

export const setPreviousDirection = (direction) => {
  previousDirection = direction;
}

export const setNorthToSouthColor = color => {
  northToSouthColor = color;
};

export const setEastToWestColor = color => {
  eastToWestColor = color;
};
