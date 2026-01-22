
function eiei(dat){
    let con = document.getElementById('00')
    for (let i=0;i<dat.songs.length;i++)
    {
        let song = dat.songs[i]
        
        let trbox = document.createElement('tr')

        let id = song.id
        let tdbox =  document.createElement('td')
        let tdtxt =  document.createTextNode(id)
        tdbox.appendChild(tdtxt)

        let title = song.title
        let titletdbox =  document.createElement('td')
        let titletdtxt =  document.createTextNode(title)
        titletdbox.appendChild(titletdtxt)

        let artist = song.artist
        let artisttdbox =  document.createElement('td')
        let artisttdtxt =  document.createTextNode(artist)
        artisttdbox.appendChild(artisttdtxt)

        trbox.appendChild(tdbox)
        trbox.appendChild(titletdbox)
        trbox.appendChild(artisttdbox)
        con.appendChild(trbox)
    }
}



//จดวิธีนี้ด้วย
fetch('kut.json')
    .then(response => response.json())
    .then(data => eiei(data))
    .catch(error => console.error('Error:', error))