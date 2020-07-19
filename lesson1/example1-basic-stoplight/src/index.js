import RuleEngine from 'node-rules';

const R = new RuleEngine();

const GREEN_COLOR = 'green';
const YELLOW_COLOR = 'yellow';
const RED_COLOR = 'red';

const TIMER_EVENT = 'TIMER_EVENT';
const initialColor = GREEN_COLOR;

let currentColor = initialColor;

const setCurrentColor = (newColor) => {
  currentColor = newColor;
}

const getRulesList = () => [{
  condition: function(R) {
    const { eventName } = this.state;
    const { currentColor } = this.state;
    const isPass = eventName === TIMER_EVENT && currentColor === GREEN_COLOR;

    R.when(isPass)
  },
  consequence: function(R) {
    const { setCurrentColor } = this.mutatorFunctions;
    const newColor = YELLOW_COLOR;

    setCurrentColor(newColor);

    this.result = true;
    R.stop();
  },
}, {
  condition: function(R) {
    const { eventName } = this.state;
    const { currentColor } = this.state;
    const isPass = eventName === TIMER_EVENT && currentColor === YELLOW_COLOR;

    R.when(isPass)
  },
  consequence: function(R) {
    const { setCurrentColor } = this.mutatorFunctions;
    const newColor = RED_COLOR;

    setCurrentColor(newColor);

    this.result = true;
    R.stop();
  },
}, {
  condition: function(R) {
    const { eventName } = this.state;
    const { currentColor } = this.state;
    const isPass = eventName === TIMER_EVENT && currentColor === RED_COLOR;

    R.when(isPass)
  },
  consequence: function(R) {
    const { setCurrentColor } = this.mutatorFunctions;
    const newColor = GREEN_COLOR;

    setCurrentColor(newColor);

    this.result = true;
    R.stop();
  },
}]

const addRulesToRulesEngine = () => {
  getRulesList().forEach((rule) => R.register(rule));
}

const getFact = () => ({
  state: { eventName: 'TIMER_EVENT', currentColor },
  mutatorFunctions: { setCurrentColor }
})

const fireTimerEvent = function() {
  R.execute(getFact(), (data) => {
    console.log(currentColor)
    updateDOM();

  })
}

const buttonClickListener = function(e) {
  fireTimerEvent();
}

const addEventToButton = () => {
  document.body.querySelector('#button').addEventListener('click', buttonClickListener)
}

const updateDOM = () => {
  updateDOMLightElement();
  updateDOMImageElement();
}

const updateDOMLightElement = (value) => {
  document.body.querySelector('#light-container').innerHTML = currentColor;
}

const updateDOMImageElement = (value) => {
  document.body.querySelector('#light-image').src = `${currentColor}-light.jpg`;
}

const initApp = () => {
  addRulesToRulesEngine();
  addEventToButton();
  updateDOM();
}

window.onload = function() {
  initApp();
}


