document.addEventListener("DOMContentLoaded", () => {
    // Fetch JSON data for the header
    fetch("./scripts/json/header.json")
        .then((response) => response.json())
        .then((data) => {
            const menuContainer = document.getElementById("menu-header");
            const heading = document.createElement("h1");
            heading.textContent = "Jason Gianni || ITIS 3135";
            menuContainer.appendChild(heading);

            const navContainer = document.createElement("nav");
            const lastItemsContainer = document.createElement("div");

            // Process JSON data for header
            data.forEach((item, index) => {
                const menuItem = document.createElement("a");
                menuItem.textContent = item.name;
                menuItem.href = item.url;

                // Add separator (||) except for the last item
                if (index < data.length - 3) {
                    navContainer.appendChild(menuItem);
                    navContainer.appendChild(document.createTextNode(" || "));
                } else {
                    // For the last 3 items, add them to the new container
                    lastItemsContainer.appendChild(menuItem);
                    if (index < data.length - 1) {
                        lastItemsContainer.appendChild(document.createTextNode(" || "));
                    }
                }
            });

            // Append the navContainer and lastItemsContainer to the menuContainer
            menuContainer.appendChild(navContainer);
            menuContainer.appendChild(lastItemsContainer);
        })
        .catch((error) => console.error("Error fetching header menu:", error));

    // Fetch JSON data for the footer
    fetch("./scripts/json/footer.json")
        .then((response) => response.json())
        .then((data) => {
            const menuContainer = document.getElementById("menu-footer");
            const navContainer = document.createElement("nav");

            // Process JSON data for footer
            data.forEach((item, index) => {
                const menuItem = document.createElement("a");
                menuItem.textContent = item.name;
                menuItem.href = item.url;

                // Add separator (|) except for the last item
                navContainer.appendChild(menuItem);
                if (index < data.length - 1) {
                    navContainer.appendChild(document.createTextNode(" | "));
                }
            });

            menuContainer.appendChild(navContainer);

            // Add footer details
            menuContainer.innerHTML += `
                <p>Website made by <a id="dynamic" href="#">CDevDesigns &copy;2024</a>, 
                <em>Certified in 
                    <a href="https://www.freecodecamp.org/certification/cdoucett/responsive-web-design" target="_new">Responsive Web Design</a>
                </em>, 
                <em>Certified in 
                    <a href="https://www.freecodecamp.org/certification/cdoucett/javascript-algorithms-and-data-structures-v8" target="_new">JS</a>
                </em>.
                </p>
                <section>
                    <a id="validation-link-html">
                        <img src="images/button_validation_html5.png" width="88" height="31" alt="Validate webpage HTML.">
                    </a>
                    <a id="validation-link-css">
                        <img src="images/button_validation_css.png" width="88" height="31" alt="Validate webpage CSS.">
                    </a>
                </section>
            `;

            // Update validation links dynamically
            const currentURL = encodeURIComponent(window.location.href);
            document.getElementById("validation-link-html").setAttribute(
                "href",
                `https://validator.w3.org/nu/?doc=${currentURL}`
            );
            document.getElementById("validation-link-css").setAttribute(
                "href",
                `https://jigsaw.w3.org/css-validator/validator?uri=${currentURL}&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en`
            );
        })
        .catch((error) => console.error("Error fetching footer menu:", error));
});
