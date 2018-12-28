export const storeChange = (store, action) => {
  switch (action.type) {
    case 'HEAD':
      return {
        ...store,
        // head: action.head
        head: action.payload
      }
    case 'BODY':
      return {
        ...store,
        // body: action.body
        body: action.payload
      }
    default:
      return { ...store }
  }
}