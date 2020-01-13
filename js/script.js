if ('serviceWorker' in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register('sw.js')
            .then((reg)=> console.log("Service worker is " +
                "registered for the scope "+reg.scope))
            .catch((error) => console.log(error))
    })
} else {
    console.log("Service Worker not supported");
}

document.getElementById("addnote").addEventListener("click",
    (event) => {
        console.log("Add note to localStorage")
        // get notes from textarea
        // store them in the localStorage localStorage.setItem()...
    })

// retrieve and display the content of the localStorage
function showNotes() {

}