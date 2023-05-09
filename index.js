// function toggleButton() {
//   const cards = document.querySelectorAll('[data-js="card"]');
//   const buttons = card.querySelectorAll('[data-js="buttons"]');
//   cards.forEach(card => {
//     const button = card.querySelector('[data-js="button"]');
//     const link = cards.querySelector('[data-js="link"]');
//     const arrow = card.querySelector('[data-js="arrow"]');
//     button.addEventListener('click', () => {
//       link.classList.toggle('hide');
//       arrow.classList.toggle('rotate');
//     });
//   });
// }

const buttons = document.querySelectorAll("[data-js='button']");

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const link = button.nextElementSibling;
    if (link.classList.contains('hidden')) {
      link.classList.remove('hidden');
    } else {
      link.classList.add('hidden');
    }
  });
});
