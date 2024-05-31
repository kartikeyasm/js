const promiseOne=new Promise(function(resolve,reject){     //New Instance/Object of promise
    setTimeout(()=>{
        console.log("Async Task Complete")
        resolve()
    },2000)
})  


promiseOne.then(function(){
    console.log("Promise Consumed")
})

//Cake Baking Example 

const promiseTwo=new Promise((resolve,reject)=>{
    let cakeIsGood=false
    if(cakeIsGood){
        resolve("The Cake is ready to eat")          //resolve(message/value)
    }
    else{
        reject("The cake got burnt")                //reject(message/value)
    }
})

const value=promiseTwo
    .then((message)=>{               //If promise is resolved
        console.log(message)
        return "KSM"
    })
    .then((name)=>{                  //gets the returend value of first then (chaining)
        console.log(name)
    })
    .catch((error)=>{               //If promise is rejected
        console.log(error)
        return "VSM"
    })
    .then((name)=>{                 //gets the returend value of first catch (chaining)
        console.log(name)
    })
    .finally(()=>{                  //Final message for both cases(runs anyways irrespective of resolve/reject)
        console.log("Baking is finished")
    })

/*  //Using Async await function
async function consumePromise(){
    try{
        const response= await promiseTwo
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

consumePromise() 
*/


fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        for (i of data){
            console.log(i.name)
        }
    })
    .catch((error)=>{
        console.log("Error")
    })


/* //Using Asyn Funtion 
async function getAllUsers(){
    try{
        const response= await fetch("https://jsonplaceholder.typicode.com/users")
        //console.log(typeof response)
        const data=await response.json()
        for (i of data){
            console.log(i.id)
        }
        
    }
    catch(error){
        console.log("Error")
    }
    
}

getAllUsers()
 */