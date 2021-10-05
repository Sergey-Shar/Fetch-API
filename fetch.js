const list = document.createElement("ul")
document.body.append(list)

function getTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(response => response.forEach(printTodos))
}

function printTodos({
    id,
    title
}) {
    const listItem = document.createElement("li")
    listItem.textContent = `${id}, ${title}`
    list.append(listItem)
}

getTodos()