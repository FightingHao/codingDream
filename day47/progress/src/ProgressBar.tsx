import * as PropTypes from 'prop-types'
import * as React from 'react'
import './progress.css'

// 内部参数需要实现的接口
export interface IProgressProps {
  // ? 表示可传可不传
  color?: string
  // 前缀类名
  prefixCls?: string
  showInfo?: boolean
  step: number
  total?: number
}

const percentDeal = (step: number | undefined, total: number | undefined): number => {
  if (!step || !total) {
    return 0
  }

  return (step / total) * 100
}

const parseIntPercent = (text: number): string => `${Math.ceil(text)}%`

const validProgress = (progress: number | undefined): number => {
  if (!progress || progress < 0) {
    return 0
  } else if (progress > 100) {
    return 100
  }
  return progress
}

export default class ProgressBar extends React.Component<IProgressProps> {
  // 给组件Prop提供默认值 外界不传使用默认值 类的静态属性
  public static defaultProps = {
    color: '#ffe103',
    prefixCls: 'tiger-progress',
    showInfo: false,
    step: 2,
    total: 10,
  }

  public static propTypes = {
    color: PropTypes.string,
    showInfo: PropTypes.bool,
    step: PropTypes.number,
    total: PropTypes.number
  }

  public render() {
    const { prefixCls, step, total, showInfo, color, ...reserProps } = this.props
    let progress
    let text
    let percent
    let progressInfo

    percent = percentDeal(step, total)
    text = parseIntPercent(validProgress(percent))
    if (showInfo) {
      progressInfo = (
        <div className={`${prefixCls}-show-info`}>
          <span className={`${prefixCls}-text`}>{text}</span>
        </div>
      )
    }

    const fixOuterStyle = {
      marginTop: '30px'
    }
    const percentStyle = {
      background: color,
      borderRadius: '100px',
      height: '12px',
      width: text
    }

    progress = (
      <div>
        <div className={`${prefixCls}-outer`} style={fixOuterStyle}>
          <div className={`${prefixCls}-inner`}>
            <div className={`${prefixCls}-bg`} style={percentStyle}>
              {progressInfo || null}
            </div>
          </div>
        </div>
      </div>
    )
    return (
      <div
        {...reserProps}
        className="tiger-progress"
      >
        {progress}
      </div>
    )
  }
}