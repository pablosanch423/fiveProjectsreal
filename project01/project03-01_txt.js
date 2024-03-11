/* JavaScript 7th Edition Chapter 3 Project 03-01
   Application to calculate total order cost
   Author:
   Date:
   Filename: project03-01.js
*/

const items = document.querySelectorAll('.menuItem');
let total = 0;

items.forEach(item => {
  item.addEventListener('change', () => {
    if (item.checked) {
      total += parseFloat(item.value);
    } else {
      total -= parseFloat(item.value);
    }

    document.getElementById('billTotal').innerText = `$${total.toFixed(2)}`;
  });
});

function CalculateTotal(value) {
  return "$" + eval(total + value.Number).toString();
}
