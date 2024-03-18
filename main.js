function addTask() {
    let text = document.getElementById('add-search-task').value;

    let todo_section = document.getElementById('todo-items');

    let checkbox_elem_container = document.createElement("div");

    let checkbox_elem = document.createElement("input");
    checkbox_elem.type = "checkbox";

    checkbox_elem_container.appendChild(checkbox_elem);
    checkbox_elem_container.appendChild(document.createTextNode(text));

    todo_section.appendChild(checkbox_elem_container);
}