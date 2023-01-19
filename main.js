 
 
 
let form = document.querySelector("form")
let input = document.querySelector("input")
let image = document.querySelector("img")
// let select = document.querySelector("select")
let download = document.querySelector("a")
let select = document.querySelector("select")

async function getQR(e){
    e.preventDefault()
    const size = select.value
    const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${input.value}`)
    const qrImage = response.url
    image.setAttribute("src" , qrImage)
    download.setAttribute("href" , qrImage)
    download.setAttribute("download" , qrImage)
}




form.addEventListener("submit" , getQR)