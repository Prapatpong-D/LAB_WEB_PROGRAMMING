แลป 9 พลาด
1. db.get != db.all (.get ใช้ส่งข้อมูลไปหา ejs) (.all ใช้แค่กึงข้อมูลจากฐานข้อมูล)
2. shadowbox รับ 2 parameter ถึงจะแสดง + ใช้ line-height กับ padding เพื่อขยายช่อง Table
3. ้href='/' href="/detail/:id"
4.database ถ้าเขามีให้ก็เชื่อม ไม่ต้องสร้างใหม่
5. body จัดให้ทุกอย่างอยู่ตรงกลางได้
6. const p = req.params.id อันนี้เอาไว้ เรียกใช้ตอนจะเอาไอดีมาใช้ เผื่อต้องเปิด detail อีกหน้า
    const id = 'SELECT * FROM users WHERE id = ?'
