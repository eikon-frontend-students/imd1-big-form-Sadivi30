function changeQty(btn, delta) {
  const span = btn.parentElement.querySelector("span");
  let val = parseInt(span.textContent) + delta;

  if (val < 0) val = 0;
  if (val > 6) val = 6;

  span.textContent = val;
}
