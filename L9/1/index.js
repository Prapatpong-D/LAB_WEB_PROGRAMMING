const express = require('express')
const path = require('path')
const sql = require('sqlite3').verbose()
const app = express()
const port = 3000

app.set('view engine','ejs')
app.use(express.urlencoded({ extended: true })) // อย่าลืม
app.use(express.static('public'))

let db = new sql.Database('userdata.db',(err)=>{
    if(err){
        console.error(err.message)
    }
    else {
        console.log('db is connect')
    }
})

app.get('/',(req,res)=>{
    const dbwork = 'SELECT * FROM users ORDER BY id'
    db.all(dbwork,[],(err,rows)=>{ // เขียนลงกระดาษ
        if(err){
            console.log('cant pull db')
        }
        res.render('home',{data:rows})
    })
})

app.get('/detail/:id',(req,res)=>{
    const person = req.params.id
    const personinfo = 'SELECT * FROM users WHERE id = ?'
    db.get(personinfo,[person],(err,rows)=>{
        if(err){
            console.error(err.message)
        }
        res.render('detail',{data:rows})
    })
})

app.listen(port,()=>{
    console.log('open at localhost:3000')
})


