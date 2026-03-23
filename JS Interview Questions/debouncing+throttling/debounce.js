// We are making API calls for every keystroke, but we want to delay it so that the API is only called after the user stops typing.
// For every keystroke, we call a function with the latest value.
// Inside that function, we clear the previous timer and start a new timer with the same delay.
// If the user types again before the delay finishes, the previous timer is canceled and a new one starts.
// So only the last input after the delay triggers the API call.

// simple bole to hume seach sirf tab karna hai jab user ne type karna band kar diya ho, agar use type kara and then continue kara to fir naye wale input ke saath search karege , jaise hi vo rukega then us time tak jitna input hume mil chuka hai uske according hum apna function run karege

function search(query) {
  console.log("Searching now for" + query);
}

function debounce(func, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId); //clear the old api call which is going on
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const debouncingfunction = debounce(search, 1000);

debouncingfunction("S");
debouncingfunction("Se");
debouncingfunction("Sea");
debouncingfunction("Sear");
debouncingfunction("Searc");
debouncingfunction("Search");
