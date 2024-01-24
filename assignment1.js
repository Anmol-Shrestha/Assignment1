const table = document.getElementById("tbl");
let count = 15;

function updateTable(event) {
  event.preventDefault();
  const newCount = parseInt(document.getElementById("inputNumber").value);
  console.log(typeof newCount);
  count = newCount;
  table.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const row = table.insertRow();
    for (let j = 0; j < count; j++) {
      const cell = row.insertCell();
      cell.textContent = `${i + 1},${j + 1}`;
    }
  }
}

for (let i = 0; i < count; i++) {
  const row = table.insertRow();
  for (let j = 0; j < count; j++) {
    const cell = row.insertCell();
    cell.textContent = `${i + 1},${j + 1}`;
  }
}