function oil(dat){
    let home = document.getElementById('01')

    for (let i=0;i<dat.length;i++)
    {
        let person = dat[i]

        let card = document.createElement('div')
        card.className = 'card';

        let name = person.name
        let namebox = document.createElement('h1')
        let nametxt = document.createTextNode([i]+'. '+name)
        namebox.appendChild(nametxt)

        let physics = person.physics
        let physicsbox = document.createElement('p')
        let physicstxt = document.createTextNode('Physics : '+physics)
        physicsbox.appendChild(physicstxt)

        let maths = person.maths
        let mathsbox = document.createElement('p')
        let mathstxt = document.createTextNode(maths)
        mathsbox.appendChild(mathstxt)

        let english = person.english
        let englishbox = document.createElement('p')
        let englishtxt = document.createTextNode(english)
        englishbox.appendChild(englishtxt)

        let img = document.createElement('img')
        if (person.gender == 'Male') {
            img.src ='img_male.png'

        } else {
            img.src = 'img_female.png'
        }

        card.appendChild(img)
        card.appendChild(namebox)
        card.appendChild(physicsbox)
        card.appendChild(mathsbox)
        card.appendChild(englishbox)
        home.appendChild(card)
    }
}


fetch ('sss.json')
    .then(Response=>Response.json())
    .then(dat=>oil(dat))
    .catch(error=> console.error('eror', error));