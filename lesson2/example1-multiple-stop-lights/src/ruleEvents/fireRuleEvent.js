import { getFact } from '../fact/facts';
import { TIMER_EVENT } from './ruleEventNames';
import { execute } from '../rules/rules';

export const fireTriggerTimer = async () => {
  const fact = getFact(TIMER_EVENT);

  await execute(fact);
}

