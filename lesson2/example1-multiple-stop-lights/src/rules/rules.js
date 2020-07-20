import RuleEngine from 'node-rules';
import getRulesList from './getRulesList';

const R = new RuleEngine();

getRulesList().forEach((rule) => R.register(rule));

export const execute = async (fact) => {
  console.log('s')
  await new Promise((resolve) => {
    R.execute(fact, () => {
      resolve()
    })
  })
}