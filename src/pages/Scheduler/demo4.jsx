import * as Scheduler from '../../react/packages/scheduler'

function createLinkedList(n) {
  let p = {
    value: `Node 1`,
    next: null
  }
  const head = p

  for (let index = 1; index < n; index++) {
    p.next = {
      value: `Node ${index+1}`,
      next: null
    }
    p = p.next
  }

  return head
}

const head = createLinkedList(9000)
let workInProgress = head

function workLoopConcurrent() {
  while (workInProgress !== null && !Scheduler.unstable_shouldYield()) {
    performUnitOfWork(workInProgress);
  }
}

function workLoopSync() {
  while (workInProgress !== null) {
    performUnitOfWork(workInProgress);
  }
}

function performUnitOfWork(unitOfWork) {
  for (let i = 0; i< 999999;i++){}

  console.log(performance.now(), unitOfWork.value)
  workInProgress = unitOfWork.next
}

function run(didTimeout) {
  // 当前这个 task 已经过期了，啥都不管了，同步把剩下的工作完成
  if (didTimeout) workLoopSync()
  // 当前这个 task 还没过期，可以悠着点，干一会歇一会
  else workLoopConcurrent()

  if (workInProgress !== null) {
    return run
  }
  return null
}

const NormalPriority = 3;


Scheduler.unstable_scheduleCallback(NormalPriority, run)
