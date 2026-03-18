1. ได้ฝึกcookie มี res.ClearCookie , res.cookies.<ชื่อคุกกี้> || {} , res.cookie('<<ชื่อคุกกี้>>, <ข้อมูลที่รับมา>, MaxAge')
2.  `SELECT CustomerId, FirstName, Lastname, Address, Phone, Email FROM customers ORDER BY RANDOM() LIMIT 1` และการส่ง res.render เปล่า
3. <button type=submit> , <button type="button" onclick="window.location.href= ' /show ' ">Show Data</button>
4.ย้ำเรื่อง name-"" ในหน้า ejs เพื่อให้คุกกี้ดึง และ value คือตั้งให้ค่าขึ้นมาในฟอร์มก่อนฃ
5. ถ้าใช้ FORM <form method="POST" action="/save">
6. render path ใน index.js res.render('home',{data:{}}) ไม่มี '/'