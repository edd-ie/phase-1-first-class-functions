function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    function no (){
        console.log("Doesn't make sense")
    }
    return no;
}

function returnsAnAnonymousFunction(){
    return () => {console.log("huh!")}
}