const lines = [
  '1', '2', '3', '4', '5', '6', '7',
  'A', 'C', 'E', 'B', 'D', 'F', 'M',
  'G', 'J', 'Z', 'L', 'N', 'Q', 'R', 'W'
];

const fromButtonsContainer = document.getElementById('from-buttons');
const toButtonsContainer = document.getElementById('to-buttons');
const toSection = document.getElementById('to-section');
const summary = document.getElementById('summary');
const resetButton = document.getElementById('reset-button');

let selectedFrom = null;
let selectedTo = null;

function createButton(line) {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = line;
  button.className = 'line-button';
  return button;
}

function renderFromButtons() {
  fromButtonsContainer.innerHTML = '';
  lines.forEach((line) => {
    const button = createButton(line);
    button.addEventListener('click', () => selectFrom(line, button));
    if (selectedFrom === line) {
      button.classList.add('selected');
    }
    fromButtonsContainer.appendChild(button);
  });
}

function renderToButtons() {
  toButtonsContainer.innerHTML = '';
  const available = lines.filter((line) => line !== selectedFrom);
  available.forEach((line) => {
    const button = createButton(line);
    button.addEventListener('click', () => selectTo(line, button));
    if (selectedTo === line) {
      button.classList.add('selected');
    }
    toButtonsContainer.appendChild(button);
  });
}

function selectFrom(line) {
  selectedFrom = line;
  selectedTo = null;
  renderFromButtons();
  renderToButtons();
  toSection.classList.remove('hidden');
  summary.classList.add('hidden');
  resetButton.classList.remove('hidden');
}

function selectTo(line) {
  selectedTo = line;
  renderToButtons();
  showSummary();
}

function showSummary() {
  if (!selectedFrom || !selectedTo) return;
  summary.textContent = `Selected route: FROM ${selectedFrom} → TO ${selectedTo}`;
  summary.classList.remove('hidden');
}

function resetSelection() {
  selectedFrom = null;
  selectedTo = null;
  renderFromButtons();
  toSection.classList.add('hidden');
  summary.classList.add('hidden');
  resetButton.classList.add('hidden');
}

resetButton.addEventListener('click', resetSelection);

renderFromButtons();
