let news = [
  {id: 1, title: "Новина 1", content: "Це детальний текст новини 1.", date: new Date('2025-05-20T09:00:00'), important: false},
  {id: 2, title: "Важлива новина 2", content: "Детальний опис важливої новини 2.", date: new Date('2025-05-20T09:15:00'), important: true},
  {id: 3, title: "Новина 3", content: "Опис новини 3 для користувачів.", date: new Date('2025-05-20T09:30:00'), important: false},
];

const newsList = document.getElementById('news-list');
const newsDetail = document.getElementById('news-detail');

function formatDate(date) {
  return date.toLocaleDateString('uk-UA') + ' ' + date.toLocaleTimeString('uk-UA', {hour: '2-digit', minute: '2-digit'});
}

function renderNewsList() {
  newsList.innerHTML = '';
  news.sort((a,b) => b.date - a.date).forEach(item => {
    const div = document.createElement('div');
    div.className = 'news-item' + (item.important ? ' important' : '');
    div.tabIndex = 0;
    div.innerHTML = `
      <div>${item.title}</div>
      <div class="news-date">${formatDate(item.date)}</div>
    `;
    div.onclick = () => showDetail(item.id);
    div.onkeypress = e => { if (e.key === 'Enter' || e.key === ' ') showDetail(item.id); };
    newsList.appendChild(div);
  });
}

function showDetail(id) {
  const item = news.find(n => n.id === id);
  if (!item) return;
  newsDetail.style.display = 'block';
  newsDetail.innerHTML = `
    <h2>${item.title}</h2>
    <p><em>${formatDate(item.date)}</em></p>
    <p>${item.content}</p>
    <button id="close-detail">Закрити</button>
  `;
  document.getElementById('close-detail').onclick = () => {
    newsDetail.style.display = 'none';
  };
}

let nextId = 4;
setInterval(() => {
  const now = new Date();
  const newNews = {
    id: nextId++,
    title: `Автоматично додана новина №${nextId}`,
    content: `Це автоматично згенерований контент новини №${nextId}.`,
    date: now,
    important: Math.random() > 0.7 // приблизно 30% шанс, що новина буде важливою
  };
  news.push(newNews);
  renderNewsList();
}, 1000); //  кожні 1 секунд

renderNewsList();


document.addEventListener("DOMContentLoaded", function () {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const newsList = document.getElementById('news-list');

  newsList.addEventListener('scroll', () => {
    if (newsList.scrollTop > 50) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    newsList.scrollTo({ top: 0, behavior: 'smooth' });
  });
});