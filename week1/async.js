function asynchronousFunction(callback) {
    console.log("Start");
    setTimeout(() => {
        console.log("End");
        callback();
    }, 2000); // Simulates a long-running task with a 2-second delay
}

asynchronousFunction(() => {
    console.log("This runs after asynchronousFunction is done.");
});
