export function getList() {
    return fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(data => data.json())
  }
