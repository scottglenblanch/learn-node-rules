import { fireTriggerTimer } from '../ruleEvents/fireRuleEvent';

const buttonClickListener = function(e) {
  Promise.resolve(fireTriggerTimer());
}

const getButtonElement = () => document.body.querySelector('#button');

const addEventListenerToButton = () => {
  const el = getButtonElement();

  el.addEventListener('click', buttonClickListener)
}

export default () => {
  addEventListenerToButton();
}