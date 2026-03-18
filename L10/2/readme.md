1.    <%data.forEach(d => { %>
        <div class="card">
            <img src="<%=d.image_url%>">
            <h3><%=d.name%></h3>
            <p><%=d.description%></p>
            <button href='/food_detail/<%=d.product_id%>'>Detail</button>
        </div>  ไอโค้ดนี้สามารถ forEach ดึงข้อมูลจาก api มาได้ทุกตัวไม่ต้องเขียนใน ejs ทุกอัน

        <% }) %>

2.  index   const ed = `http://webdev.it.kmitl.ac.th:4000/detail/${id}`
    ejs     <a href="/detail/<%=d.product_id%>" type="button">Detail</a>

    วิธีไปหน้าที่ต้องการใช้ไอดี