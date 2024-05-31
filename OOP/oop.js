//Object Literal

const user={
    userName: "KSM",
    isLoggedIn: true,
    loginCount: 5,
    getUserDetails:function(){
        console.log(this.userName)
    }
}

console.log(this)
console.log(user.userName)
user.getUserDetails()

//Constructor Function

function User(userName, loginCount, isLoggedIn){
    this.userName=userName
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    this.greeting=function(){
        console.log(`Welcome ${this.userName}`)
    }
    return this
}

 //To create new instances every time we need to use a keyword called new (else new instance will overewrite preivious one)

 //new=> it is used to create an empty object first and then it will take a constructor function and through that it creates a new instance
const userOne= new User("KSM", 5, true)
const userTwo= new User("VSM", 4, false)
 
console.log(userOne)
console.log(userTwo)