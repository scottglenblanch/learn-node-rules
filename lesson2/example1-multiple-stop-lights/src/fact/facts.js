import {
  getEastToWestColor,
  getNorthToSouthColor, getPreviousChangedDirection,
  setEastToWestColor,
  setNorthToSouthColor,
  setPreviousDirection,
} from '../appState/appState';
import {
  updateDomEastToWest,
  updateDomNorthToSouth,
} from '../dom/updateDom';


export const getFact = (eventName) => ({
  eventName,
  state: {
    eastToWestColor: getEastToWestColor(),
    northToSouthColor: getNorthToSouthColor(),
    previousDirection: getPreviousChangedDirection(),
  },
  mutators: {
    setEastToWestColor,
    setNorthToSouthColor,
    setPreviousDirection,
  },
  domChangers: {
    updateDomEastToWest,
    updateDomNorthToSouth,
  }
});