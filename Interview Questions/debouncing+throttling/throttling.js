// throttling means ki ek time frame mei function ek baar hi call ho skta hai. agar time 2 min hai to user chahe kitni baar bhi keypress kare us time frame mei , vo function ek hi baar call hoga


function output(query) {
    console.log("returning result for:", query);
}

function throttleFunction(func, delay) {
    let lastTime = 0; //This variable keeps track of when the function was last executed

    return function (...args) {
        const currentTime = Date.now();

        if (currentTime - lastTime < delay) {
            console.log("This call is skipped! Value: ",args[0]);
            return; 
        }

        lastTime = currentTime;
        return func(...args);
    };
}

const throttledOutput = throttleFunction(output, 2000);

throttledOutput("Hi"); // should run

setTimeout(() => throttledOutput("Hello"), 500);   // skipped
setTimeout(() => throttledOutput("Welcome"), 1500); // skipped
setTimeout(() => throttledOutput("Done"), 2500);   // runs