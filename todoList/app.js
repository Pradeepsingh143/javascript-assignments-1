const todoList = document.querySelector(".todo_list");
const todoTitle = document.getElementById("todo_title");
const todoText = document.getElementById("todo_text");
const todoAddBtn = document.getElementById("add_todo_btn");

window.addEventListener("load", getTodoList);
function setTodoList() {
    todoAddBtn.addEventListener("click", () => {
        const todoNotes = localStorage.getItem("todos");
        if (todoNotes == null) {
            todos = [];
        } else {
            todos = JSON.parse(todoNotes);
        }
        const date = new Date();
        const dateFormat  = `${(date.toDateString()).split(' ').join("-")}  (${date.toLocaleTimeString()})`;
        const todoObj = new Object();
        todoObj.title = `Tittle: ${todoTitle.value}`;
        todoObj.text = todoText.value;
        todoObj.date = dateFormat;
        todos.push(todoObj);
        localStorage.setItem("todos", JSON.stringify(todos));
        getTodoList();
        messageBox("Your todo has been created successfully");
    });
}
setTodoList();

// get todolist from localStorage and show
function getTodoList() {
    const todoNotes = localStorage.getItem("todos");
    if (todoNotes == null) {
        todoList.innerHTML = "Todo is empty please add notes";
    } else {
        const todoArr = JSON.parse(todoNotes);
        // clear all strings then add new strings
        todoList.innerHTML = '';
        todoArr.forEach((element, index) => {
            todoList.innerHTML += `
        <div class="todo_content">
            <div class="date"><h2>${element.date}</h2></div>
            <h1 id="todo_title">${element.title}</h1>
            <p id="todo_text">${element.text}</p>
            <div class="edit_btn edit_btn_div">
            <input type="text" placeholder="edit todo text" class="edit_todo_input" hidden="true">
            <button id="${index}" class="edit_todo_done btn" hidden="true">Done</button>
            <button class="edit_todo"><i class="fa fa-edit"></i></button>
            <button id="${index}" onclick="removeBtnFunc(this.id)" class="todo_remove"><i class="fa fa-trash-o"></i></button>
            </div>
        </div>
        `
        });
    }
    editTodoFunc();
}



// remove todo list item
function removeBtnFunc(index) {
    todoObj = localStorage.getItem("todos");
    if (todoObj == null) {
        todos = [];
    }
    else {
        todos = JSON.parse(todoObj);
    }
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    if (todos.length == 0) {
        localStorage.clear();
    }
    getTodoList();
    messageBox("Your todo has been removed successfully");
}




// edit todo list
function editTodoFunc() {
    const editBtn = document.querySelectorAll(".edit_todo");
    const editInput = document.querySelectorAll(".edit_todo_input");
    const doneEditTodo = document.querySelectorAll(".edit_todo_done");
    editBtn.forEach((ele, index) => {
        ele.addEventListener("click", () => {
            doneEditTodo[index].hidden = false;
            editInput[index].hidden = false;
            editBtn[index].hidden = true;
        });
        doneEditTodo[index].addEventListener("click", () => {
            const editInputText = editInput[index].value;
            if (editInputText.length == 0) {
                const input = editInput[index];
                input.placeholder = "please enter text to edit todo";
                input.classList.add("colorWhite");
            } else {
                let todoObj = localStorage.getItem("todos");
                todos = JSON.parse(todoObj);
                todos.splice(index, 1, {
                    title: todos[index].title,
                    text: editInputText,
                    date : todos[index].date,
                });
                localStorage.setItem("todos", JSON.stringify(todos));
                getTodoList();
                messageBox("Your todo has been edited successfully");
            }
        });
    });
}


//message box
function messageBox(message) {
    const messageBox = document.querySelector(".message_box");
    messageBox.innerHTML = message;
    messageBox.hidden = false;
    setTimeout(() => {
        messageBox.hidden = true;
    }, 3000);
}