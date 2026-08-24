// Keep this file for simple interactive changes.
// Edit the links directly in index.html when you add your real xat/GitHub URLs.

document.querySelectorAll('.card[data-card]').forEach((card) => {
  card.addEventListener('click', (event) => {
    if (card.getAttribute('href') === '#') {
      event.preventDefault();
      console.log(`Card selected: ${card.dataset.card}`);
    }
  });
});
