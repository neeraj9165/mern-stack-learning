function AsyncFunction(){
    let p = new Promise(function(resolve){
        resolve("hi there")
    });
    return p;
}
function main(){
    AsyncFunction().then (function(value){
        console.log(value);
    });
}
main();