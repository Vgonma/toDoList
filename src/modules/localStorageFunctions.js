export function save(key, object) {
  localStorage.setItem(key, JSON.stringify(object));
}

export function load(key) {
  if (!localStorage.getItem(key)) return null;
  return JSON.parse(localStorage.getItem(key));
}
