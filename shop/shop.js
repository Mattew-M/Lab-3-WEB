// модальні вікна
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

// Масив елементів
const items = [
    { image: "/img/shop/tactical-1.jpg", description: "Тактичний ніж Gerber Fast AO Folder Tanto 21,8 см "+
        "(1027848)Складний тактичний ніж Gerber Fast AO Folder Tanto поєднує стильний військовий дизайн та функціональність."+
        " Ідеальний вибір для роботи, комплекту EDC або активного відпочинку.", category: "tactical" },
    { image: "/img/shop/tactical-2.jpg", description: "Ніж Gerber Strongarm FE – це професійний ніж для виживання, "+
        "який розроблений як інструмент для виживання, що забезпечує повну надійність незалежно від ситуації.Лезо "+
        "виготовлене з високоякісної сталі 420HC, яка відрізняється стійкістю до розтріскування та розтріскування.Гумова,"+
        " текстурована та нековзна ручка забезпечує надійне зчеплення в будь-яких умовах. Надзвичайно привабливий зовнішній "+
        "вигляд та збалансований дизайн – додаткова перевага цієї моделі.У комплекті з ножем кобура із міцного пластику із системою"+
        " кріплення Snap-in Molle.", category: "tactical" },
    { image: "/img/shop/hunting-1.png", description: "Ультратонкий ніж Convoy - ідеальний супутник для ваших пригод на природі."+
        " Зручна всепогодна рукоятка з матеріалу Micarta в поєднанні з лезом із загостреним кінчиком ідеально підходить для багатозадачного"+
        " використання в кемпінгу, а також достатньо легка, щоб носити її з собою в глибинку. Легко ховайте Convoy в бардачок, рюкзак або"+
        " похідне спорядження, коли він не використовується.ОсобливостіЕргономічна рукоятка MicartaЛезо зі сталі 440А з покриттям під "+
        "каміньНейлонові піхви зі скловолокна, що складаютьсяВторинний фіксуючий реміньЗнімне руків'я з петлею для ременяПіхвиЗагальна "+
        "довжина: 8.52 Довжина клинка: 3.9 ,Загальна вага (з піхвами): 6.69 унцій.Вага (тільки ножа): 4.06 унції.", category: "hunting" },
    { image: "/img/shop/hunting-2.png", description: "Ніж Gerber Exo-Mod Fixed співслужить хорошу службу мисливцеві, також може застосовуватися"+
        " під час пішого туризму, на кемпінгу чи інших заняттях. Він чудово підійде любителям активного відпочинку в оточенні природи. "+
        "Специфіка виробу – його нестандартна рукоять, зі скелетонізованою конструкцією, яка дає легку структуру за збереження міцності.", category: "hunting" },
    { image: "/img/shop/tourism-1.jpg", description: "Ніж моделі Gerber Principle Bushcraft Fixed призначений для використання у туризмі та активному відпочинку. "+
        "Це потужний інструмент, розрахований виконання різних завдань", category: "tourism" },
    { image: "/img/shop/tourism-2.png", description: "Ніж Gerber Paralite Silver/Blue Повсякденний ніж для носіння повинен бути міцним і простим у використанні"+
        " - Paralite має саме такі якості. Завдяки каркасній рамі, повністю сталевій конструкції та міцному сучасному клинку з кліпсою, цей"+
        " тонкий ніж поміщається в кишені і є надзвичайно міцним. ", category: "tourism" },
    { image: "/img/shop/folding-1.jpg", description: "Ніж Gerber Highbrow Compact Onyx FE 17,5 см 1028497 - складаний ніж із загальною довжиною 17,5 см. Ручка"+
        " чорного кольору. Складні ножі займають менше місця при зберіганні та перенесенні, ніж ножі з фіксованим клинком.", category: "folding" },
    { image: "/img/shop/folding-2.jpg", description: "Складаний ніж Gerber Affinity є стильною EDC-моделлю. Ергономічний інструмент, має витончений вигляд, "+
        "зручну кліпсу для фіксації та носіння ножа. Замок різновиду Frame Lock, просте та зручне управління. Пряме заточення леза оптимально впорається"+
        " з різними видами робіт у польових умовах.", category: "folding" },
    { image: "/img/shop/kitchen-1.jpg", description: "Традиційний сербський кухарський ніж відрізняється винятковим дизайном і чудовими характеристиками. Дуже гостре лезо"+
        " і ідеально збалансована вага ножа дозволяють зручно нарізати м'ясо, шинкувати або подрібнювати зелень і овочі. Японська нержавіюча cталь AUS-8, з якої"+
        " виготовлений ніж, має гарну корозійну стійкість, відмінну стійкість ріжучої кромки, легко полірується і шліфується. Рукоять ножа, яка виконана з волого- "+
        "і термостійкого вуглецевого волокна, зручно лежить в руці, не ковзає і стійка до агресивних середовищ. У комплекті йде шкіряний "+
        "чохол для дбайливого зберігання ножа.", category: "kitchen" },
    { image: "/img/shop/kitchen-2.jpg", description: "Кухонний ніж для нарізки з серії Sultan точно повторює форму середньоазіатського Пчака. За рахунок своєї "+
        " унікальної форми і пропорцій, ніж може виконувати різні види робіт: нарізати скибочками і шматочками, обробляти продукти на філе. "+
        "Центральний шар ножа - високовуглецева сталь VG-10, яка забезпечує ножеві бездоганні ріжучі властивості: тривалу гостроту і відмінний, "+
        "агресивний рез. Візерункові обкладки надають більшу пружність, міцність і чудовий зовнішній вигляд. Рукоять ножа, яка виконана з волого-"+
        " і термостійкого матеріалу G-10, зручно лежить в руці, не ковзає і стійка до агресивних середовищ. Ніж з серії Sultan відмінно підійде для "+
        " приготування східних страв і займе гідне місце на будь-якій кухні.", category: "kitchen" },

];

let visibleItems = [...items];  // Масив для відображених елементів

// Завантаження елементів на сторінку
function loadItems(itemsToLoad) {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';

    itemsToLoad.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
            <img src="${item.image}" alt="Product Image">
            <div class="card-description">
                <p>${item.description}</p>
            </div>
            <button class="toggle-description">Розгорнути опис</button>
        `;
        
        card.querySelector('.toggle-description').addEventListener('click', () => {
            const description = card.querySelector('.card-description');
            description.classList.toggle('visible');
        });

        cardContainer.appendChild(card);
    });
}

// Обробка фільтру категорій
document.getElementById('category').addEventListener('change', (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory === 'all') {
        visibleItems = [...items];
    } else {
        visibleItems = items.filter(item => item.category === selectedCategory);
    }
    loadItems(visibleItems);
});

// Поступове завантаження
let loadCount = 0;
document.getElementById('load-more').addEventListener('click', () => {
    loadCount += 3;
    loadItems(visibleItems.slice(0, loadCount));
});

// Показ вікна для підписки
setTimeout(() => {
    if (!localStorage.getItem('subscribed')) {
        document.getElementById('subscribe-popup').classList.add('visible');
    }
}, 5000);

// Обробка кнопок підписки
document.getElementById('accept-subscription').addEventListener('click', () => {
    localStorage.setItem('subscribed', 'true');
    document.getElementById('subscribe-popup').classList.remove('visible');
});

document.getElementById('decline-subscription').addEventListener('click', () => {
    document.getElementById('subscribe-popup').classList.remove('visible');
});

// Показ модального вікна з рекламою
let timeSpent = 0;
const timer = setInterval(() => {
    timeSpent += 1;

    if (timeSpent >= 30 && !localStorage.getItem('adClosed')) {
        document.getElementById('ad-popup').classList.add('visible');
    }
}, 1000);

// Закриття реклами
document.getElementById('close-ad').addEventListener('click', () => {
    localStorage.setItem('adClosed', 'true');
    document.getElementById('ad-popup').classList.remove('visible');
});

// При завантаженні сторінки перевіряємо, чи була реклама закрита
window.onload = () => {
    if (localStorage.getItem('adClosed')) {
        document.getElementById('ad-popup').classList.remove('visible');
    }
};

// Завантаження перших елементів
loadItems(visibleItems.slice(0, 3));

