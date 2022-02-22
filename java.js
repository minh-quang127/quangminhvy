const adresssbtn = document.querySelector('#adress-form')
const adresssclose = document.querySelector('#adress-close')
const rightbtn = document.querySelector('.fa-chevron-circle-right')
console.log(rightbtn)
adresssbtn.addEventListener("click", function()
{
    document.querySelector('.adress-form').style.display = "flex"
})
adresssclose.addEventListener("click", function()
{
    document.querySelector('.adress-close').style.display = "none"
})