import * as Scheduler from '../../react/packages/scheduler'

const NoPriority = 0;
const ImmediatePriority = 1;
const UserBlockingPriority = 2;
const NormalPriority = 3;
const LowPriority = 4;
const IdlePriority = 5;

function func2(didTimeout) {
  if (didTimeout) return
  console.log(2)
}

function func1() {
  console.log(1)
  return func2
}

Scheduler.unstable_scheduleCallback(1, func1)


