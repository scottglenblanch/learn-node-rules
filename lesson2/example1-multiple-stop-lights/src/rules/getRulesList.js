import {GREEN_COLOR, RED_COLOR, YELLOW_COLOR} from '../colors/colors';
import { TIMER_EVENT } from '../ruleEvents/ruleEventNames';

import { DIRECTION_EAST_TO_WEST, DIRECTION_NORTH_TO_SOUTH } from '../directions/directions';

const rulesList = [
// north to south
{
  condition: function(R) {
    const { eventName } = this;
    const {
      northToSouthColor,
      eastToWestColor
    } = this.state;

    R.when(
      eventName === TIMER_EVENT &&
      eastToWestColor === RED_COLOR &&
      northToSouthColor === GREEN_COLOR
    )
  },
  consequence: function(R) {
    const {
      setNorthToSouthColor,
      setPreviousDirection,
    } = this.mutators;
    const {
      updateDomNorthToSouth
    } = this.domChangers;

    setNorthToSouthColor(YELLOW_COLOR);
    setPreviousDirection(DIRECTION_NORTH_TO_SOUTH);
    updateDomNorthToSouth();

    R.stop();
  },
},
{
  condition: function(R) {
    const { eventName } = this;
    const {  northToSouthColor, eastToWestColor } = this.state;

    R.when(
        eventName === TIMER_EVENT &&
        eastToWestColor === RED_COLOR &&
        northToSouthColor === YELLOW_COLOR
    )
  },
  consequence: function(R) {
    const {
      setNorthToSouthColor,
      setPreviousDirection,
    } = this.mutators;
    const {
      updateDomNorthToSouth
    } = this.domChangers;


    setNorthToSouthColor(RED_COLOR);
    setPreviousDirection(DIRECTION_NORTH_TO_SOUTH);
    updateDomNorthToSouth();

    R.stop();
  },
},
{
  condition: function(R) {
    const { eventName } = this;
    const {
      northToSouthColor,
      eastToWestColor,
      previousDirection
    } = this.state;

    R.when(
      eventName === TIMER_EVENT &&
      eastToWestColor === RED_COLOR &&
      northToSouthColor === RED_COLOR &&
      previousDirection !== DIRECTION_NORTH_TO_SOUTH,
    )
  },
  consequence: function(R) {
    const {
      setNorthToSouthColor,
      setPreviousDirection,
    } = this.mutators;
    const {
      updateDomNorthToSouth
    } = this.domChangers;

    setNorthToSouthColor(GREEN_COLOR);
    setPreviousDirection(DIRECTION_NORTH_TO_SOUTH);
    updateDomNorthToSouth();

    R.stop();
  },
},
// east to west
{
  condition: function(R) {
    const { eventName } = this;
    const {  northToSouthColor, eastToWestColor } = this.state;

    R.when(
      eventName === TIMER_EVENT &&
      eastToWestColor === GREEN_COLOR &&
      northToSouthColor === RED_COLOR
    )
  },
  consequence: function(R) {
    const {
      setEastToWestColor,
      setPreviousDirection
    } = this.mutators;
    const {
      updateDomEastToWest
    } = this.domChangers;

    setEastToWestColor(YELLOW_COLOR);
    setPreviousDirection(DIRECTION_EAST_TO_WEST)
    updateDomEastToWest();

    R.stop();
  },
},
{
  condition: function(R) {
    const { eventName } = this;
    const {  northToSouthColor, eastToWestColor } = this.state;

    R.when(
        eventName === TIMER_EVENT &&
        eastToWestColor === YELLOW_COLOR &&
        northToSouthColor === RED_COLOR
    )
  },
  consequence: function(R) {
    const {
      setEastToWestColor,
      setPreviousDirection
    } = this.mutators;
    const {
      updateDomEastToWest
    } = this.domChangers;

    setEastToWestColor(RED_COLOR);
    setPreviousDirection(DIRECTION_EAST_TO_WEST);
    updateDomEastToWest();

    R.stop();
  },
},
{
  condition: function(R) {
    const { eventName } = this;
    const {
      northToSouthColor,
      eastToWestColor,
      previousDirection,
    } = this.state;

    R.when(
        eventName === TIMER_EVENT &&
        eastToWestColor === RED_COLOR &&
        northToSouthColor === RED_COLOR &&
        previousDirection !== DIRECTION_EAST_TO_WEST,
    )
  },
  consequence: function(R) {
    const {
      setEastToWestColor,
      setPreviousDirection
    } = this.mutators;
    const {
      updateDomEastToWest
    } = this.domChangers;

    setEastToWestColor(GREEN_COLOR);
    setPreviousDirection(DIRECTION_EAST_TO_WEST);
    updateDomEastToWest();

    R.stop();
  },
},

];

export default () => rulesList;