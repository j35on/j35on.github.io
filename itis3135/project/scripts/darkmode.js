function toggleDarkMode(isNightTime) {
    const elements = [document.body, document.querySelector('header'), document.querySelector('footer'), document.querySelector('nav')];
    const forms = document.querySelectorAll('form, input, textarea, button, .btn');

    if (isNightTime) {
        elements.forEach((el) => el.classList.add('dark-mode'));
        forms.forEach((el) => el.classList.add('dark-mode'));
    } else {
        elements.forEach((el) => el.classList.remove('dark-mode'));
        forms.forEach((el) => el.classList.remove('dark-mode'));
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const currentHour = new Date().getHours();
    const isNightTime = currentHour >= 18 || currentHour < 6;
    toggleDarkMode(isNightTime);
});
