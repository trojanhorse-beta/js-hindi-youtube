// Imeediately Invoked Function Expression (IIFE)
// Global scope variable causes pollutions in many occasion while running the functions. To overcome that, IIFE is used

// IIFE doesn't know where to end the context so you have to add a semi colon at the end of the execution parenthesis

// IIFE can run without us calling them explicitly.

(function chai(){                     // Wrap function in () and then add another () for its execution
    // This func is a named IIFE
    console.log(`DB CONNECTED`);
})();

( () => {
    // This func is an unnamed IIFE
    console.log(`DB CONNECTED INSIDE ARROW FUNCTION`);
})();

// Passing and taking arguments in IIFE

( (name) => {
    console.log(`Welcome ${name}`);
})('Anmolveer');