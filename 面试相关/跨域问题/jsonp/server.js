const app = require('express')()
app
  .get('/data', (req, res) => {
    const { cb } = req.query
    const data = {
      name: 'haohao',
      age: 10
    }
    res.send(`${cb}('hhh')`)
  })
  .listen(3000, () => {
    console.log('running')
  })