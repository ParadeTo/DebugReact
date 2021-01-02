import * as Scheduler from '../../react/packages/scheduler'


Scheduler.unstable_scheduleCallback(2, function func1() {
  console.log('1')
  console.log(performance.now())
})

console.time('t')
Scheduler.unstable_scheduleCallback(1, function func2(){
  console.timeEnd('t')
  console.log('2')
  console.log(performance.now())
}, {delay: 100})