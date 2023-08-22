const { Hook } = require("mocha")

function receivesAFunction(spy){
    spy()
}
function returnsANamedFunction(hook){
    return function namedFunction() {
        console.log("before all")
    } 
    
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log(`before all`)
    }
}


