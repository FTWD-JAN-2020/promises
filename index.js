// async function getAllTheData(){
//     let promises = [
//         await axios.get('call1'), //2000
//         await axios.get('call2'), //100
//         await axios.get('call3') //100000
//     ]
//     Promise.all(promises).then(res => {
//         //result will contain all data from every call //100000
//     }).catch(err =>  console.log(err))
// }


let myFirstPromise = new Promise((resolve, reject) => {
    setTimeout( function() {        
        resolve('first promise good')
    }, 17500) 
}) 

let secondPromise = new Promise((resolve, reject) => {
    setTimeout( function(){
        resolve("second promise is good")
    }, 1000)
})

// function callPromise() {
//   myFirstPromise
//     .then((successMessage) => {
//         console.log(successMessage) 
//     })
//     .catch( err => {
//       console.log('error is ',err)
//     })
// }

// async function callAsyncPromise(){
//     let successMessage = await secondPromise
//     console.log(successMessage)
// }

Promise.all([myFirstPromise, secondPromise]).then(res => {
    console.log(res)
})


  

// callPromise()
// callAsyncPromise()