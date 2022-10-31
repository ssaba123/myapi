const express = require('express')
const app = express()
const PORT = 3000


app.get('/', (req,res)=>{
    res.send('<h1>Welcome to the home page</h1>')
})

app.get('/api/v1/canada', (req,res)=>{
    const users = ['winterlover43', 'badbadg00d', '_xXsk8erXx_', 'silly-billy', 'justanotheruser', 'randomguy99']   
    res.status(200).json(users)
})

app.get('/api/v1/usa', (req,res)=>{
    const users = ['truP4tri0t', 'tennesaw', 'useruseruser', 'jennyfromtheblock', 'meepmop']
    res.status(200).json(users)
})

app.get('/api/v1/brazil', (req,res)=>{
    const users = ['guyfierri', 'myBackpackIsUnzipped', 'acleverusername','taken444']
    res.status(200).json(users)
})

app.get('/api/v1/:id', (req,res)=>{
    res.status(200).json(`${req.params.id} page has not been set up yet`)
})


app.listen(PORT, ()=>{
    console.log('Listening on port' + " " + PORT)
})
