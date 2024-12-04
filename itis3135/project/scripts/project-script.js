function loadContent(url, elementId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data[elementId.replace("dynamic-", "")];
        })
        .catch(error => console.error(error));
}

document.addEventListener("DOMContentLoaded", () => {
    loadContent("../../json/header.json", "dynamic-header");
    loadContent("../../json/footer.json", "dynamic-footer");
});
