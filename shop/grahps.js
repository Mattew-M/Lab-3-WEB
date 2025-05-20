// // graphs.js

// document.addEventListener('DOMContentLoaded', () => {
//   const chartTypeSelect = document.getElementById('chartType');
//   const ctx = document.getElementById('productsChart').getContext('2d');

//   let productsChart;

//   // Функція для отримання даних про кількість товарів за категоріями
//   function getCategoryData(items) {
//     const counts = {};
//     items.forEach(item => {
//       counts[item.category] = (counts[item.category] || 0) + 1;
//     });
//     return counts;
//   }

//   // Функція для підготовки даних для графіка
//   function prepareChartData(items) {
//     const counts = getCategoryData(items);
//     const labels = Object.keys(counts).map(label => label.charAt(0).toUpperCase() + label.slice(1));
//     const data = Object.values(counts);
//     return { labels, data };
//   }

//   // Функція створення графіка
//   function createChart(type, data) {
//     if (productsChart) {
//       productsChart.destroy();
//     }

//     productsChart = new Chart(ctx, {
//       type: type,
//       data: {
//         labels: data.labels,
//         datasets: [{
//           label: 'Кількість товарів',
//           data: data.data,
//           backgroundColor: [
//             '#FF6384',
//             '#36A2EB',
//             '#FFCE56',
//             '#4BC0C0',
//             '#9966FF',
//             '#FF9F40'
//           ],
//           borderColor: '#fff',
//           borderWidth: 1,
//           fill: type === 'line' ? false : true,
//           tension: 0.3,
//         }]
//       },
//       options: {
//         responsive: true,
//         plugins: {
//           legend: {
//             display: true,
//             position: 'bottom'
//           },
//           tooltip: {
//             enabled: true
//           }
//         },
//         scales: type === 'bar' || type === 'line' ? {
//           y: {
//             beginAtZero: true,
//             ticks: {
//               stepSize: 1,
//             }
//           }
//         } : {}
//       }
//     });
//   }

//   // Функція оновлення графіка при зміні фільтрів або типу графіка
//   function updateChart() {
//     // Отримаємо товари з вашого shop.js, вони мають бути доступні глобально або через window.items
//     let filteredItems = window.filteredItems || window.items || [];

//     // Підготуємо дані
//     const chartData = prepareChartData(filteredItems);

//     // Створимо графік потрібного типу
//     createChart(chartTypeSelect.value, chartData);
//   }

//   // При зміні вибору типу графіка оновлюємо візуалізацію
//   chartTypeSelect.addEventListener('change', updateChart);

//   // Підписуємося на кастомний івент для оновлення при зміні фільтрів у shop.js
//   window.addEventListener('shopFilterChanged', updateChart);

//   // Початкове відображення
//   updateChart();
// });
