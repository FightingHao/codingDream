// import React from 'react'
// import { For } from 'react-loops'

// const List = () => {
//   // const arr = [1, 2, 3, 4]
//   const arr = {
//     name: 'haohao',
//     age: 18,
//   }
//   // const arr = new Set([1, 2, 3, 4])
//   // const arr = new Map([['name', 'haohao']])
//   console.log(arr);


//   return (
//     <div>
//       <For in={arr} as={item => <li >{item}</li>} />
//     </div>
//   )
// }

// export default List

import React from 'react'

const List = () => {
  const obj = {
    name: 'z',
    age: 20
  }

  return (
    <ul>
      {
        Object.keys(obj).map((item, index) => <li key={index}>{obj[item]}</li>)
      }
    </ul>
  )
}

export default List