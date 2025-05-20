const items = [
    { image: "/img/shop/tactical-1.jpg", description: "Тактичний ніж Gerber Fast AO Folder Tanto 21,8 см (1027848) Складний тактичний ніж Gerber Fast AO Folder Tanto поєднує стильний військовий дизайн та функціональність. Ідеальний вибір для роботи, комплекту EDC або активного відпочинку.", category: "tactical", price: 1200, rating: 4.5 },
    { image: "/img/shop/tactical-2.jpg", description: "Ніж Gerber Strongarm FE – це професійний ніж для виживання, який розроблений як інструмент для виживання, що забезпечує повну надійність незалежно від ситуації. Лезо виготовлене з високоякісної сталі 420HC, яка відрізняється стійкістю до розтріскування та розтріскування. Гумова, текстурована та нековзна ручка забезпечує надійне зчеплення в будь-яких умовах. Надзвичайно привабливий зовнішній вигляд та збалансований дизайн – додаткова перевага цієї моделі. У комплекті з ножем кобура із міцного пластику із системою кріплення Snap-in Molle.", category: "tactical", price: 1500,rating: 4.8 },
    { image: "/img/shop/hunting-1.png", description: "Ультратонкий ніж Convoy - ідеальний супутник для ваших пригод на природі. Зручна всепогодна рукоятка з матеріалу Micarta в поєднанні з лезом із загостреним кінчиком ідеально підходить для багатозадачного використання в кемпінгу, а також достатньо легка, щоб носити її з собою в глибинку. Легко ховайте Convoy в бардачок, рюкзак або похідне спорядження, коли він не використовується. Особливості Ергономічна рукоятка Micarta Лезо зі сталі 440А з покриттям під камінь Нейлонові піхви зі скловолокна, що складаються Вторинний фіксуючий ремінь Знімне руків'я з петлею для ременя Піхви Загальна довжина: 8.52 Довжина клинка: 3.9, Загальна вага (з піхвами): 6.69 унцій. Вага (тільки ножа): 4.06 унції.", category: "hunting", price: 900,rating: 4.2 },
    { image: "/img/shop/hunting-2.png", description: "Ніж Gerber Exo-Mod Fixed співслужить хорошу службу мисливцеві, також може застосовуватися під час пішого туризму, на кемпінгу чи інших заняттях. Він чудово підійде любителям активного відпочинку в оточенні природи. Специфіка виробу – його нестандартна рукоять, зі скелетонізованою конструкцією, яка дає легку структуру за збереження міцності.", category: "hunting", price: 1100,rating: 4.4 },
    { image: "/img/shop/tourism-1.jpg", description: "Ніж моделі Gerber Principle Bushcraft Fixed призначений для використання у туризмі та активному відпочинку. Це потужний інструмент, розрахований виконання різних завдань", category: "tourism", price: 1300,rating: 4.1 },
    { image: "/img/shop/tourism-2.png", description: "Ніж Gerber Paralite Silver/Blue Повсякденний ніж для носіння повинен бути міцним і простим у використанні - Paralite має саме такі якості. Завдяки каркасній рамі, повністю сталевій конструкції та міцному сучасному клинку з кліпсою, цей тонкий ніж поміщається в кишені і є надзвичайно міцним.", category: "tourism", price: 800,rating: 4.0 },
    { image: "/img/shop/folding-1.jpg", description: "Ніж Gerber Highbrow Compact Onyx FE 17,5 см 1028497 - складаний ніж із загальною довжиною 17,5 см. Ручка чорного кольору. Складні ножі займають менше місця при зберіганні та перенесенні, ніж ножі з фіксованим клинком.", category: "folding", price: 1000,rating: 4.3 },
    { image: "/img/shop/folding-2.jpg", description: "Складаний ніж Gerber Affinity є стильною EDC-моделлю. Ергономічний інструмент, має витончений вигляд, зручну кліпсу для фіксації та носіння ножа. Замок різновиду Frame Lock, просте та зручне управління. Пряме заточення леза оптимально впорається з різними видами робіт у польових умовах.", category: "folding", price: 950, rating: 4.6 },
    { image: "/img/shop/kitchen-1.jpg", description: "Традиційний сербський кухарський ніж відрізняється винятковим дизайном і чудовими характеристиками. Дуже гостре лезо і ідеально збалансована вага ножа дозволяють зручно нарізати м'ясо, шинкувати або подрібнювати зелень і овочі. Японська нержавіюча cталь AUS-8, з якої виготовлений ніж, має гарну корозійну стійкість, відмінну стійкість ріжучої кромки, легко полірується і шліфується. Рукоять ножа, яка виконана з волого- і термостійкого вуглецевого волокна, зручно лежить в руці, не ковзає і стійка до агресивних середовищ. У комплекті йде шкіряний чохол для дбайливого зберігання ножа.", category: "kitchen", price: 1700,rating: 4.9 },
    { image: "/img/shop/kitchen-2.jpg", description: "Кухонний ніж для нарізки з серії Sultan точно повторює форму середньоазіатського Пчака. За рахунок своєї унікальної форми і пропорцій, ніж може виконувати різні види робіт: нарізати скибочками і шматочками, обробляти продукти на філе. Центральний шар ножа - високовуглецева сталь VG-10, яка забезпечує ножеві бездоганні ріжучі властивості: тривалу гостроту і відмінний, агресивний рез. Візерункові обкладки надають більшу пружність, міцність і чудовий зовнішній вигляд. Рукоять ножа, яка виконана з волого- і термостійкого матеріалу G-10, зручно лежить в руці, не ковзає і стійка до агресивних середовищ. Ніж з серії Sultan відмінно підійде для приготування східних страв і займе гідне місце на будь-якій кухні.", category: "kitchen", price: 1800,rating: 5.0 },
];

function groupByCategory(items) {
  const result = {};

  items.forEach(item => {
    const category = item.category;
    if (!result[category]) {
      result[category] = { totalRating: 0, count: 0, ratings: [] };
    }
    result[category].totalRating += item.rating;
    result[category].count += 1;
    result[category].ratings.push(item.rating);
  });

  return result;
}

function renderCharts() {
  const grouped = groupByCategory(items);
  const categories = Object.keys(grouped);
  const avgRatings = categories.map(cat => (grouped[cat].totalRating / grouped[cat].count).toFixed(2));
  const counts = categories.map(cat => grouped[cat].count);

  // 📊 Гістограма (середній рейтинг по категоріях)
  new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
      labels: categories,
      datasets: [{
        label: "Середній рейтинг",
        data: avgRatings,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          suggestedMin: 0,
          suggestedMax: 5
        }
      }
    }
  });
  document.getElementById("chartSelector").addEventListener("change", function () {
  const selected = this.value;

  document.getElementById("barChartContainer").style.display = selected === "bar" ? "block" : "none";
  document.getElementById("pieChartContainer").style.display = selected === "pie" ? "block" : "none";
  document.getElementById("lineChartContainer").style.display = selected === "line" ? "block" : "none";
});


  // 🥧 Кругова діаграма (кількість товарів у категоріях)
  new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: {
      labels: categories,
      datasets: [{
        data: counts,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)"
        ]
      }]
    }
  });

  // 📉 Лінійна діаграма рейтингів всередині категорій
  const lineLabels = [];
  const lineData = [];

  categories.forEach(cat => {
    grouped[cat].ratings.forEach((rating, index) => {
      lineLabels.push(`${cat} #${index + 1}`);
      lineData.push(rating);
    });
  });

  new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: {
      labels: lineLabels,
      datasets: [{
        label: "Рейтинг товару",
        data: lineData,
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1
      }]
    }
  });
}

// Викликаємо побудову графіків після завантаження DOM
document.addEventListener("DOMContentLoaded", () => {
  renderCharts();
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("loginBtn").addEventListener("click", () => openModal("loginModal"));
  document.getElementById("registerBtn").addEventListener("click", () => openModal("registerModal"));

  document.getElementById("category").addEventListener("change", filterItems);
  document.getElementById("load-more").addEventListener("click", loadMoreItems);

  document.getElementById("accept-subscription").addEventListener("click", () => {
    localStorage.setItem("subscribed", "true");
    closeModal("subscribePopup");

  });

  document.getElementById("sortPrice").addEventListener("change", sortItems);


  document.getElementById("decline-subscription").addEventListener("click", () => {
    closeModal("subscribePopup");
  });

  document.getElementById("close-ad").addEventListener("click", () => {
    localStorage.setItem("adClosed", "true");
    closeModal("adPopup");
  });

  // Кнопка відкриття кошика (пам'ятайте додати її в HTML з id="cartBtn")
  document.getElementById("cartBtn").addEventListener("click", showCart);

  if (!localStorage.getItem("adClosed")) {
    setTimeout(() => {
      openModal("adPopup");
    }, 30000);
  }

  setTimeout(() => {
    if (!localStorage.getItem("subscribed")) {
      openModal("subscribePopup");
    }
  }, 5000);

  loadItems(visibleItems.slice(0, loadCount));

  // Приховуємо кнопку "Завантажити ще", якщо всі товари показані
  toggleLoadMoreButton();
});

// Модальні вікна
function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add("open");
  modal.style.display = "flex";
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove("open");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

function submitForm(type) {
  alert(type === "login" ? "Вхід успішний!" : "Реєстрація успішна!");
  closeModal(type === "login" ? "loginModal" : "registerModal");
}

// Ініціалізація кошика (тримайте його в актуальному стані)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Додаємо товар у кошик
function addToCart(item, quantity) {
  // Оновлюємо локальне копіювання кошика
  cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Шукаємо, чи є вже такий товар
  const existingItemIndex = cart.findIndex(cartItem => cartItem.description === item.description);
  if (existingItemIndex !== -1) {
    // Збільшуємо кількість
    cart[existingItemIndex].quantity += quantity;
  } else {
    // Додаємо новий товар з кількістю
    cart.push({ ...item, quantity });
  }

  // Зберігаємо оновлений кошик у localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`Додано ${quantity} одиниць товару до корзини!`);
  updateCartTotal();
}

// Відображаємо вміст кошика
function showCart() {
  cart = JSON.parse(localStorage.getItem("cart")) || [];

  const html = cart.length
    ? cart.map((item, index) => `
      <div class="cart-item" style="margin-bottom: 10px;">
        <img src="${item.image}" alt="product" style="width: 50px; vertical-align: middle;">
        <p style="display: inline-block; max-width: 60%; margin-left: 10px; vertical-align: middle;">
          ${item.description.substring(0, 100)}...
          <br>
          Кількість: ${item.quantity} шт.
          <br>
          Ціна за одиницю: ${item.price} грн
          <br>
          Сума: ${item.price * item.quantity} грн
        </p>
        <button style="vertical-align: middle;" onclick="removeFromCart(${index})">🗑 Видалити</button>
      </div>`).join("")
    : "<p>Корзина порожня.</p>";

  document.getElementById("cartModalContent").innerHTML = `
    <h2>🛒 Корзина</h2>
    ${html}
    <p id="cartTotal"></p>
    <button onclick="closeModal('cartModal')">Закрити</button>
  `;

  updateCartTotal();
  openModal("cartModal");
}

// Видаляємо товар з кошика за індексом
function removeFromCart(index) {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
  updateCartTotal();
}

// Оновлюємо загальну суму в кошику
function updateCartTotal() {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalElem = document.getElementById("cartTotal");
  if (totalElem) {
    totalElem.textContent = `Загальна сума: ${total} грн`;
  }
}

// Завантаження карточок
let visibleItems = [...items];
let loadCount = 3;

function loadItems(data) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  data.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="Product Image">
      <div class="card-description"><p>${item.description}</p></div>
      <p class="price">Ціна: <strong>${item.price} грн</strong></p>
      <p class="rating">Рейтинг: ⭐ ${item.rating}</p>
      <label for="quantity-${index}">Кількість:</label>
      <input type="number" id="quantity-${index}" class="quantity-input" min="1" value="1" style="width: 50px; margin-left: 5px;">
      <button class="add-to-cart">🛒 Додати до корзини</button>
    <button class="toggle-description">Розгорнути опис</button>
    `;

    card.querySelector(".toggle-description").addEventListener("click", () => {
      card.querySelector(".card-description").classList.toggle("visible");
    });

    card.querySelector(".add-to-cart").addEventListener("click", () => {
      const qtyInput = card.querySelector(`#quantity-${index}`);
      const quantity = parseInt(qtyInput.value);
      if (isNaN(quantity) || quantity < 1) {
        alert("Вкажіть коректну кількість!");
        return;
      }
      addToCart(item, quantity);
    });

    cardContainer.appendChild(card);
  });

  toggleLoadMoreButton();
}

function loadMoreItems() {
  loadCount += 3;
  loadItems(visibleItems.slice(0, loadCount));
}

function filterItems(event) {
  const selected = event.target.value;
  visibleItems = selected === "all" ? [...items] : items.filter(i => i.category === selected);

  // застосовуємо сортування після фільтрації
  const sortValue = document.getElementById("sortPrice").value;
  if (sortValue === "asc") {
    visibleItems.sort((a, b) => a.price - b.price);
  } else if (sortValue === "desc") {
    visibleItems.sort((a, b) => b.price - a.price);
  }

  loadCount = 3;
  loadItems(visibleItems.slice(0, loadCount));
}

function toggleLoadMoreButton() {
  const loadMoreBtn = document.getElementById("load-more");
  if (loadCount >= visibleItems.length) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "block";
  }
}

function sortItems(event) {
  const sortValue = event.target.value;

  if (sortValue === "asc") {
    visibleItems.sort((a, b) => a.price - b.price);
  } else if (sortValue === "desc") {
    visibleItems.sort((a, b) => b.price - a.price);
  } else if (sortValue === "rating-asc") {
    visibleItems.sort((a, b) => a.rating - b.rating);
  } else if (sortValue === "rating-desc") {
    visibleItems.sort((a, b) => b.rating - a.rating);
  } else {
    visibleItems = document.getElementById("category").value === "all"
      ? [...items]
      : items.filter(i => i.category === document.getElementById("category").value);
  }

  loadCount = 3;
  loadItems(visibleItems.slice(0, loadCount));
}

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
