const btn = document.getElementById("btn");
const quoteEl = document.getElementById("quote");

btn.addEventListener("click", () => {
    fetch("http://localhost:3000/quote")
        .then(res => res.json())
        .then(data => {
            quoteEl.textContent = `"${data.quote}"`;
        })
        .catch(err => {
            quoteEl.textContent = "Oops! Something went wrong.";
            console.error(err);
        });
});
