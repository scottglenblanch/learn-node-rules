import {
  getEastToWestColor,
  getNorthToSouthColor,
  setEastToWestColor,
  setNorthToSouthColor,
} from '../appState/appState';

export const getFact = (eventName) => ({
  eventName,
  state: {
    eastToWestColor: getEastToWestColor(),
    northToSouthColor: getNorthToSouthColor(),
  },
  mutators: {
    setEastToWestColor,
    setNorthToSouthColor,
  }
});