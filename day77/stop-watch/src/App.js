import React, { Fragment, useState } from 'react'
import ControlButtons from './components/ControlButtons'
import MajorClock from './components/MajorClock'
import SplitTimes from './components/SplitTimes'

import ms2Time from './utils/ms2Time'

const StopWatch = () => {
  const initState = {
    milliseconds: 0, // 毫秒
    isStart: false, // 是否开始
    active: false, // 激活状态
    splits: [] // 计次数组
  }

  const [data, setData] = useState(initState)

  // 启动（start）
  const onStart = () => {
    let startTime = new Date()
    StopWatch.intervalHandle = setInterval(() => {
      let currentTime = new Date()
      setData({
        milliseconds: currentTime - startTime, // 毫秒
        isStart: true, // 是否开始
        active: true,
        splits: data.splits
      })
    }, 1000 / 60)
  }
  // 停止（pause）
  const onPause = () => {
    clearInterval(StopWatch.intervalHandle)
    setData({
      ...data,
      isStart: false
    })
  }
  // 计次（split）
  const onSplit = () => {
    clearInterval(StopWatch.intervalHandle)
    setData({
      milliseconds: 0,
      isStart: false,
      active: false,
      splits: [...data.splits, ms2Time(data.milliseconds)]
    })
  }
  // 复位（reset）
  const onReset = () => {
    clearInterval(StopWatch.intervalHandle)
    setData(initState)
  }

  return (
    <Fragment>
      <style jsx>{`
          h1 {
            color: red;
          }
        `}
      </style>
      <h1>秒表</h1>
      <MajorClock milliseconds={data.milliseconds} />
      <ControlButtons active={data.active} onStart={onStart} onPause={onPause} onSplit={onSplit} onReset={onReset} />
      <SplitTimes splits={data.splits} />
    </Fragment>
  )
}

export default StopWatch
