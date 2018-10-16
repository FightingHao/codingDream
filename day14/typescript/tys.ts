function greeting(person: string): string {
  return 'hello, ' + person
}

let user: string = 'hao'

document.body.innerHTML = greeting(user);