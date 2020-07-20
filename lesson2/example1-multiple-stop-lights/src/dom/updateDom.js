import {
  getEastToWestColor,
  getNorthToSouthColor,
} from '../appState/appState';


const getImgElSrc = (color) => `${color}-light.jpg`;

const updateEastToWest = () => {
  const color = getEastToWestColor();
  const imgEl = document.querySelector('#eastToWest');

  imgEl.src =  getImgElSrc(color);
}

const updateNorthToSouth = () => {
  const color = getNorthToSouthColor();
  const imgEl = document.querySelector('#northToSouth');

  imgEl.src =  getImgElSrc(color);
}

const updateDom = () => {
  updateEastToWest();
  updateNorthToSouth()
}

export default updateDom;
