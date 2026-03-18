const express = require('express')
const app = express()
const sql = require('sqlite3').verbose()
const port = 3000

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))
app.use(express.json())

let db = new sql.Database('todo.db',(err)=>{ // สร้าง db อย่าลืม .db
    if (err){
        console.log('cant connect to db')
    }else {
        console.log('db is connect'); // ใช้ backtick สร้าง table ++++ AITIINCREMENT ต้องเป็น PRIMARY KEY
        db.run(`CREATE TABLE IF NOT EXISTS todo(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            deadline TEXT,
            description TEXT,
            status INTEGER DEFAULT 0
            );`)
    }
})

app.get('/api/todo',(req,res)=>{
    const showtodo = 'SELECT * FROM todo ORDER BY id ASC'
    db.all(showtodo,[],(err,rows)=>{
        if(err){
            console.error(err.message)
        }else{
            res.json(rows) // api ส่งคือเป็น json
        }
    })
})

app.post('/api/todo',(req,res)=>{
    const {title,description,deadline} = req.body
    const status = 0

    const edit = `INSERT INTO todo (title,description,deadline,status) VALUES (?,?,?,?)`
    db.run(edit,[title,description,deadline,status],(err)=>{
        if(err){
            console.log('cant insert data')
        }
        res.redirect('/')
    })
})

app.get('/',(req,res)=>{
    const ed = 'http://localhost:3000/api/todo'
    fetch(ed)
        .then(repo=>repo.json())
        .then(file =>{
            res.render('home',{data:file})
        })
})

app.listen(port,()=>{
    console.log(`opening at http://localhost:3000/`)
})

// name ในหน้า home ต้องเขียน เพื่อที่ req.body จะดึงข้อมูลออกมาได้
