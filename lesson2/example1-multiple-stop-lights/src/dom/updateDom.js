import {
  getEastToWestColor,
  getNorthToSouthColor,
} from '../appState/appState';


const getImgElSrc = (color) => `${color}-light.jpg`;

export const updateDomEastToWest = () => {
  const color = getEastToWestColor();
  const imgEl = document.querySelector('#eastToWest');

  imgEl.src =  getImgElSrc(color);
}

export const updateDomNorthToSouth = () => {
  const color = getNorthToSouthColor();
  const imgEl = document.querySelector('#northToSouth');

  imgEl.src =  getImgElSrc(color);
}

