import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/albums"

let albums = []

// without asyn/await (run in parralels)
function fetchAlbumsNoAsyncAwait(){
    let response = fetch(url)
    .then(response => response.json())
    .then(response =>{
        albums = response
        console.log('Albums are fetched')
    })
}
//albums = fetchAlbumsNoAsyncAwait() // it's empty..... it's async :/ :(


// with async/await (wait for answer)
async function fetchAlbums(){
    let response = await fetch(url)
    let albumsJson =  response.json()
    return albumsJson
}
//albums = await fetchAlbums()



// with axios:
// with async/await (wait for answer)
async function fetchAlbumsAxios(){
    return await axios(url)
}

//albums = await fetchAlbumsAxios(url)
//console.log(albums)


async function testPromise(){
    let p = new Promise((res, rej)=> {
        let a = 1
        
        if(a==1) 
          res("YES")
        else
          rej("NO")
    })

    return p
    
}

let myPromise = await testPromise()
console.log(myPromise)

