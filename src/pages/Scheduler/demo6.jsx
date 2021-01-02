import * as Scheduler from '../../react/packages/scheduler'

function work() {
  while(!Scheduler.unstable_shouldYield()) {
    console.log('work')
  }
}

Scheduler.unstable_scheduleCallback(1, function func2(){
  work()
  console.log('yield to host')
})
