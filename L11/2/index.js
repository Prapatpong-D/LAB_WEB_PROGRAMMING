const express = require('express')
const session = require('express-session')
const port = 3000
const app = express()

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session( // วิธีใช้ session
    {
        secret:'manga',
        resave:false,
        saveUninitialized:true
    }
))

app.get('/',(req,res)=>{
    const ed = 'http://webdev.it.kmitl.ac.th:4000/restaurant'
    fetch(ed)
        .then(resp=>resp.json())
        .then(rows=>{
            res.render('home',{data:rows})
        })
})

app.post('/addtocart',(req,res)=>{ //แสดง ลิส ของสินค้าในตระกร้าเลย
    const fod_id = req.body.product_id // req.body.product_id โปรดักไอดีต้องไปเปิดดูในเว้บเด้บ

    if(!req.session.cart){ //ดึง session ที่เข้ามาสร้างตระกร้า
        req.session.cart = []
    }
    //haveitem คือตัวแปรของ สินค้าที่มีอยู่แล้วในตระกร้า
    const haveitem = req.session.cart.find(item => item.id == fod_id) // ในวงเล็บคือเช็คตระกร้า ให้ item เป็นสินค้า ถ้าไอดีสินค้า = ไอดีสินค้าที่เพิ่มมา 
    if(haveitem){
        haveitem.qty += 1
        res.redirect('/cart')
    }else{
        const pt = `http://webdev.it.kmitl.ac.th:4000/detail/${fod_id}`
    fetch(pt)
        .then(resp=>resp.json())
        .then(rows =>{
            req.session.cart.push({
                id:rows.product_id,
                name:rows.name,
                price:rows.price,
                qty:1
            })
            res.redirect('/cart')
        })
    }    
})

app.get('/cart',(req,res)=>{
    const bracket = req.session.cart || []
    let total = 0
    bracket.forEach(item => {
        total += (item.price * item.qty) // คูณจำนวนด้วยถ้าซื้อหลายอัน
    });
    res.render('cart',{cart:bracket, total:total})
})

app.post('/confirm',(req,res)=>{
    req.session.cart = []
    res.redirect('cart')
})

app.listen(port,()=>{
    console.log('ruunung at localhost 3000')
})