document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginBtn").addEventListener("click", function () {
        openModal("loginModal");
    });

    document.getElementById("registerBtn").addEventListener("click", function () {
        openModal("registerModal");
    });

    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.add("open");
        modal.style.display = "flex";
    }

    window.closeModal = function (modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.remove("open");
        setTimeout(() => { 
            modal.style.display = "none";
        }, 300);
    }

    window.submitForm = function (type) {
        alert(type === "login" ? "Вхід успішний!" : "Реєстрація успішна!");
        closeModal(type === "login" ? "loginModal" : "registerModal");
    }
});


document.addEventListener("DOMContentLoaded", function () {
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    if (scrollY > 50) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});