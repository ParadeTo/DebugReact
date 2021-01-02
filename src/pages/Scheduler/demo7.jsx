import * as Scheduler from '../../react/packages/scheduler'

Scheduler.unstable_scheduleCallback(2, function func2(){
  Scheduler.unstable_scheduleCallback(1, function func2(){

  })
})
