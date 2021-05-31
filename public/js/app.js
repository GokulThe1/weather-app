console.log('Client side javascript file is loaded!')

// fetch('http://localhost:3000/weather?search=kanchipuram').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })

const weatherform=document.querySelector('form')
const search=document.querySelector('input')
const message1=document.querySelector('#message-1')
const message2=document.querySelector('#message-2')
weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location =search.value
     message1.textContent='loading...'
     message2.textContent=''
fetch('/weather?search='+location).then((response)=>{
    response.json().then((data)=>{
       if(data.error){
        // console.log('error')
        message1.textContent='data.error'
       }
       else{
        //    console.log(data)
           message1.textContent=data.place_name
           message2.textContent=data.forecastdata
       }
    })
})
})