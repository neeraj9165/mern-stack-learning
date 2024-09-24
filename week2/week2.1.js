function AsyncFunction(callback){
    callback("hi there")
}
async function main() {
    AsyncFunction(function(value){
        console.log(value);
    });
    
}
main();