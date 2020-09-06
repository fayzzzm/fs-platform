const form = document.getElementById('form');

form.onsubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:8080/code_check/file', {
            method: 'POST',
            body: new FormData(form),
        });

        console.log(await response.text());
    } catch (e) {
        console.error(e);
    }
};

// Could be used as Fetch tester

// setInterval(() => {
//     fetch('https://random-word-api.herokuapp.com/word?number=10')
//         .then((response) => response.text())
//         .then((data) => console.log(data))
//         .catch((err) => console.error(err));
// }, 2000);

// Ensure that the browser supports the service worker API
if (navigator.serviceWorker) {
    // Start registration process on every page load
    window.addEventListener('load', () => {
        navigator.serviceWorker
            // The register function takes as argument
            // the file path to the worker's file
            .register('/public/service-worker.js')
            // Gives us registration object
            .then((reg) => {
                console.log('Service Worker Registered');
                // To get the scope of your service worker
                console.log(reg.scope);
            })
            .catch((swErr) => console.log(`Service Worker Installation Error: ${swErr}}`));
    });
}
