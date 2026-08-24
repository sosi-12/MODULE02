const state = {
  transactions: [], 
  search: "",       
  filter: "all",     
};

const listEl = document.querySelector("#txn-list");
const searchEl = document.querySelector("#search");
const filtersEl = document.querySelector("#filters");
const formEl = document.querySelector("#txn-form");


async function loadTransactions() {
  listEl.textContent = "Loading transactions…";
  try {
    const res = await fetch("data/transactions.json");
    if (!res.ok) throw new Error("HTTP " + res.status);
    const seed = await res.json();
    const saved = localStorage.getItem("birrbudget");
    state.transactions = saved ? JSON.parse(saved) : seed;
    render();
  } catch (err) {
    listEl.textContent = "Could not load transactions.";
  }
}


function render() {
  const term = state.search.toLowerCase();
  const shown = state.transactions.filter(t =>
    (t.description.toLowerCase().includes(term) || t.category.toLowerCase().includes(term)) &&
    (state.filter === "all" || t.type === state.filter)
  );

  listEl.innerHTML = shown.map(t => `
    <li class="txn" data-id="${t.id}">
      <div class="txn-info">
        <span class="txn-desc">${t.description}</span>
        <span class="txn-meta">${t.category} · ${t.date}</span>
      </div>
      <div class="txn-actions">
        <span class="txn-amount ${t.type}">${t.type === "income" ? "+" : "-"}${t.amount} ETB</span>
        <button class="rm" aria-label="Remove ${t.description}">✕</button>
      </div>
    </li>`).join("") || `<li class="empty-state">No transactions found.</li>`;

  renderSummary();
}

function renderSummary() {
  const income = state.transactions.filter(t => t.type === "income").reduce((sum, t) => sum + t.amount, 0);
  const expense = state.transactions.filter(t => t.type === "expense").reduce((sum, t) => sum + t.amount, 0);

  document.querySelector("#balance").textContent = (income - expense) + " ETB";
  document.querySelector("#total-income").textContent = income + " ETB";
  document.querySelector("#total-expense").textContent = expense + " ETB";
}


searchEl.addEventListener("input", (e) => {
  state.search = e.target.value;
  render();
});


filtersEl.addEventListener("click", (e) => {
  if (!e.target.matches(".filter-chip")) return;
  state.filter = e.target.dataset.filter;
  filtersEl.querySelectorAll(".filter-chip").forEach(btn => btn.classList.remove("active"));
  e.target.classList.add("active");
  render();
});


listEl.addEventListener("click", (e) => {
  if (!e.target.matches(".rm")) return;
  const id = Number(e.target.closest(".txn").dataset.id);
  state.transactions = state.transactions.filter(t => t.id !== id);
  save();
  render();
});


formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const description = formEl.description.value.trim();
  const amount = Number(formEl.amount.value);
  const category = formEl.category.value.trim();
  const type = formEl.type.value;

  document.querySelector("#err-description").hidden = description.length > 0;
  document.querySelector("#err-amount").hidden = amount > 0;
  document.querySelector("#err-category").hidden = category.length > 0;
  if (!description || !(amount > 0) || !category) return;

  state.transactions.push({
    id: Date.now(),
    description,
    category,
    type,
    amount,
    date: new Date().toISOString().slice(0, 10),
  });

  save();
  render();
  formEl.reset();
});


function save() {
  localStorage.setItem("birrbudget", JSON.stringify(state.transactions));
}

loadTransactions();