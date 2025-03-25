document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginBtn").addEventListener("click", function () {
        openModal("loginModal");
    });

    document.getElementById("registerBtn").addEventListener("click", function () {
        openModal("registerModal");
    });

    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.add("open");  // Додаємо клас для анімації
        modal.style.display = "flex"; // Робимо модальне вікно видимим
    }

    window.closeModal = function (modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.remove("open");  // Відбираємо клас анімації
        setTimeout(() => { 
            modal.style.display = "none"; // Прибираємо модальне вікно після анімації
        }, 300); // Час, на який анімація триває
    }

    window.submitForm = function (type) {
        alert(type === "login" ? "Вхід успішний!" : "Реєстрація успішна!");
        closeModal(type === "login" ? "loginModal" : "registerModal");
    }
});
