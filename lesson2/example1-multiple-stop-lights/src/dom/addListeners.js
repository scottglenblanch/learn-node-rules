import updateDom from './updateDom';
import { fireTriggerTimer } from '../ruleEvents/fireRuleEvent';

const buttonClickListener = function(e) {
  fireTriggerTimer().then(() => {
    updateDom();
  });
}

const getButtonElement = () => document.body.querySelector('#button');

const addEventListenerToButton = () => {
  const el = getButtonElement();

  el.addEventListener('click', buttonClickListener)
}

export default () => {
  addEventListenerToButton();
}