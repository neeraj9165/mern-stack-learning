
function synchronousFunction() {
    console.log("Start");
    // Simulating a long-running task
    for (let i = 0; i < 1e9; i++) {} // This will block
    console.log("End");
}

synchronousFunction();
console.log("This will wait until synchronousFunction is done.");
