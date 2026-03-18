const express = require('express')
const cook = require('cookie-parser')
const port = 3000
const sql = require('sqlite3').verbose()
const app = express()

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))
app.use(cook())

let db = new sql.Database('customers.db',(err)=>{
    if(err){
        console.log(err.message)
    }else{
        console.log('db is connect')
    }
})

app.get('/',(req,res)=>{
    const ranuser = `SELECT CustomerId, FirstName, LastName, Address, Phone, Email FROM customers ORDER BY RANDOM() LIMIT 1`
    db.get(ranuser,[],(err,rows)=>{
        if(err){
            console.error(err.message)
        }
        res.render('home',{data:rows})
    })
    
})

app.post('/save',(req,res)=>{
    const newinfo = req.body
    res.cookie('newinfo',newinfo,{maxAge:24*60*60*1000});
    res.render('home',{data:{}})
})

app.get('/show',(req,res)=>{
    const pullinfo = req.cookies.newinfo || {};
    res.render('home',{data:pullinfo})
})

app.get('/clear',(req,res)=>{
    res.clearCookie('newinfo')
    res.render('home',{data:{}})
})

app.listen(port,()=>{
    console.log('running at http://localhost:3000/')
})