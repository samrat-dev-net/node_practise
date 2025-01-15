import express from 'express'

const app = express()
const port = process.env.PORT || 7000

app.get('/', (request, response) => {
    response.send("<h1>Hello World</h1>")
})
app.get('/login', (request, response) => {
    response.send("<p>login page</p>")
})
app.listen(port, () => {
    console.log(`app is runing on port http://localhost:${port}`)
})