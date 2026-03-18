
1.สร้าง db อย่าลืม .db
2.ใช้ backtick สร้าง table ++++ AUTOINCREMENT ต้องเป็น INTEGER PRIMARY KEY
3.api จะส่งเป็น json ให้ ('/') แล้วจะเอาไปเฟ็ตต่อ

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

4. <input type="checkbox"> ไว้เช็ค
5. <input type="text" name="title"> name ตรงนี้เอาไป req.body ใน index.js
6. ได้รู้ css กับวิธีเขียนฟอร์ม เริ่มเขียน table ได้
7.อย่าลืมตอนดึงข้อมูล ejs <%= data.title %> (กุลืมเท่ากับ ถ้าลืมมันจะขึ้นเป็น text แทน)
8. ใช้ backtick ในการเขียน query ข้อมูล
9.วิธีจัดกึ่งกลางอย่าลืมกำหนดความสูง 100vh
10.ระวัง พาธ ตอนจะ fetch api
11.ดาต้าเบสคำสั่ง db.get เอาแถวเดียว db.all เอาทุกแถว db.run = INSERT / UPDATE / DELETE / CREATE TABLE
12.วิธีกดไปอีกหน้า <a href="/createtohere"></a> a href แล้วใส่ชื่อ path ย่อใน index.js ให้สร้างชื่อพาธนั้นไว้ app.get('/createtohere') แล้ว res.render('createtohere') หน้าที่สร้างด้วย ejs ไว้
