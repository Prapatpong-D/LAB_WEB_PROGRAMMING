function ilikeurcutg(dat){
    let home =document.getElementById('00')

    for (let i=0;i<dat.length;i++)
    {
        let person = dat[i]

        let id = person.id
        let idbox =document.createElement('td')
        let idx =document.createTextNode(id)
        idbox.appendChild(idx)

        let gen = person.Gender
        let genbox =document.createElement('td')
        let genx =document.createTextNode(gen)
        genbox.appendChild(genx)

        let first = person.FirstName
        let last = person.LastName
        let numebox =document.createElement('td')
        let numex =document.createTextNode(first+last)
        numebox.appendChild(numex)

        let Position = person.Position
        let Positionbox =document.createElement('td')
        let Positionx =document.createTextNode(Position)
        Positionbox.appendChild(Positionx)

        let Address = person.Address
        let Addressbox =document.createElement('td')
        let Addressx =document.createTextNode(Address)
        Addressbox.appendChild(Addressx)

        let all = document.createElement('tr')
        all.appendChild(idbox)
        all.appendChild(numebox)
        all.appendChild(genbox)
        all.appendChild(Positionbox)
        all.appendChild(Addressbox)
        home.appendChild(all)
    }

}


fetch ('eee.json')
    .then(Response => Response.json())
    .then(dat => ilikeurcutg(dat))
    .catch(error => console.error('Error:', error))

    /* ข้อผิดพลาด
    1. เขียนไฟล์ที่ fetch ผิด
    2. display flex ทำให้ค่าในตารางไป อยู่ข้างๆตาตราง
    ---------------------------------------------------------------------------------------
    ข้อความรู็
    1. <table> สร้างตาราง <th> หัวข้ออในตาราง <td> ขัอมูลในตาราง ใส่อัจโนมมัติ อันแรก == ช่องแรก
    2. เช็คคนใน json ใช้ .length ได้
    3. dat[i] คือ คนที่ i
    */