import {GREEN_COLOR, RED_COLOR, YELLOW_COLOR} from '../colors/colors';
import { TIMER_EVENT } from '../ruleEvents/ruleEventNames';


const rulesList = [
{
  condition: function(R) {
    const { eventName } = this;
    const {  northToSouthColor, eastToWestColor } = this.state;
    R.when(
      eventName === TIMER_EVENT &&
      eastToWestColor === RED_COLOR &&
      northToSouthColor === GREEN_COLOR
    )
  },
  consequence: function(R) {
    const { setNorthToSouthColor } = this.mutators;

    setNorthToSouthColor(YELLOW_COLOR);

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
    const { setNorthToSouthColor } = this.mutators;

    setNorthToSouthColor(RED_COLOR);

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
        northToSouthColor === RED_COLOR
    )
  },
  consequence: function(R) {
    const { setNorthToSouthColor } = this.mutators;

    setNorthToSouthColor(GREEN_COLOR);

    R.stop();
  },
},
];

export default () => rulesList;