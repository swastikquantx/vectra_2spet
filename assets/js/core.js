// Global Vectra Logic
window.Vectra = {
  save: (key, val) => localStorage.setItem(key, JSON.stringify(val)),
  load: (key) => JSON.parse(localStorage.getItem(key) || 'null')
};
