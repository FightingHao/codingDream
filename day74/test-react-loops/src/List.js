import React from 'react'
import { For } from 'react-loops'

const List = () => {
  const arr = [1, 2, 3, 4]

  return (
    <div>
      <For of={arr} as={(item, obj) => {
        console.log(obj)
        return <li>{item}</li>
      }} />
    </div>
  )
}

export default List

// import React from 'react'

// const List = () => {
//   const arr = [1, 2, 3, 4]
  
//   return (
//     <ul>
//       {
//         arr.map((item, index) => <li >{item}</li>) // 需要带上 key 属性
//       }
//     </ul>
//   )
// }

// export default List