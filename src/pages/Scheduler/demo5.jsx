import * as Scheduler from '../../react/packages/scheduler'

const NoPriority = 0;
const ImmediatePriority = 1;
const UserBlockingPriority = 2;
const NormalPriority = 3;
const LowPriority = 4;
const IdlePriority = 5;

Scheduler.unstable_scheduleCallback(UserBlockingPriority, function func1 () {
  console.log('aaa')
  console.log(performance.now())
})

const task = Scheduler.unstable_scheduleCallback(ImmediatePriority, function func2(){
  console.log('bbb')
  console.log(performance.now())
})

Scheduler.unstable_cancelCallback(task)