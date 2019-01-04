export const REGISTER_USER = 'REGISTER_USER'

export const registerAction = (newUser) => {
  return {
    type: REGISTER_USER,
    data: newUser
  }
}