const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/',(req,res)=>{
    const ed = 'http://webdev.it.kmitl.ac.th:4000/restaurant'
    fetch(ed)
        .then(reso=>reso.json())
        .then(food =>{
            res.render('home',{data:food})
        })
})

app.get('/food_detail/id',(req,res)=>{
    const ed = `http://webdev.it.kmitl.ac.th:4000/detail/${id}`
    fetch(ed)
        .then(reso=>reso.json())
        .then(food =>{
            res.render('food_detail',{data:food})
        })

})

app.listen(port,()=>{
    console.log('running at 3000')
})