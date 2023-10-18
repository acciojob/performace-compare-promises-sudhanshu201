const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

async function fetchDataWithPromiseAll(apiUrls) {
  const start = Date.now();
  try {
    const responses = await Promise.all(
      apiUrls.map((url) => fetch(url))
    );
    const data = await Promise.all(responses.map((response) => response.json()));
    const end = Date.now();
    return end - start;
  } catch (error) {
    return "Error";
  }
}

async function fetchDataWithPromiseAny(apiUrls) {
  const start = Date.now();
  try {
    const responses = await Promise.any(
      apiUrls.map((url) => fetch(url))
    );
    const data = await responses.json();
    const end = Date.now();
    return end - start;
  } catch (error) {
    return "Error";
  }
}

async function displayData() {
  const timeAll = await fetchDataWithPromiseAll(apiUrls);
  const timeAny = await fetchDataWithPromiseAny(apiUrls);

  document.getElementById("output-all").textContent = timeAll + " ms";
  document.getElementById("output-any").textContent = timeAny + " ms";
}

displayData();
