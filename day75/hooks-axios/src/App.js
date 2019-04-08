import React, { Fragment, useState, useEffect } from 'react'
import { For } from 'react-loops'
import axios from 'axios'

const baseUrl = `http://hn.algolia.com/api/v1/search?query=`

// 接口请求函数
const useHackerNewsApi = (fullUrl) => {
  const [data, setData] = useState([])
  const [url, setUrl] = useState(fullUrl)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  // 获取接口数据
  const getData = async () => {
    setIsError(false)
    setIsLoading(true)

    try {
      const result = await axios(url)
      console.log(result)
      setData(result.data.hits)
    } catch (error) {
      setIsError(true)
    }

    setIsLoading(false)
  }

  const doFetch = (e) => {
    e.preventDefault()
    setUrl(fullUrl)
  }

  useEffect(() => {
    getData()
  }, [url])

  return { data, isLoading, isError, doFetch }
}

// UI 展示组件
const App = () => {
  const [query, setQuery] = useState('redux')
  const fullUrl = baseUrl + query
  const { data, isLoading, isError, doFetch } = useHackerNewsApi(fullUrl)

  return (
    <Fragment>
      <form onSubmit={doFetch}>
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
        <button type="submit">查询</button>
      </form>
      {
        isError && <div>Something went wrong ...</div>
      }
      {
        !isError && isLoading ? (
          <div>loading...</div>
        ) : (
            <ul>
              <For of={data} as={item => <li>{item.author} <a href={item.url}>{item.title}</a></li>} />
            </ul>
          )
      }

    </Fragment>
  )
}

export default App
