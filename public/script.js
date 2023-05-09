
async function load() {
    const response = await fetch("gallery/data.json");
    const data = await response.json();
    data.forEach(exhibition => {
        const article = `
            <article>
                <h2>${exhibition.title}</h2>
                <p>${exhibition.description}</p>
                <img src="gallery/${exhibition.image}">
            </article>
        `;
        document.querySelector("main").innerHTML += article;
    });
}

window.onload = load;
