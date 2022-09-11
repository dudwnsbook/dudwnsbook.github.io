const loginBef = document.querySelector(".login-beforBox")
const loginAft = document.querySelector(".login-afterBox")
const listWrap = document.querySelector(".list-wrap");

const loginForm = document.querySelector("#login-form");
const loginInp = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");

function loginFun(event){
    event.preventDefault();
    if(loginInp.value ===""){
        return false;
    }
    localStorage.setItem("name",loginInp.value);
    loginBef.classList.add("hidden");
    loginAft.classList.remove("hidden");
    listWrap.classList.remove("hidden");

}

loginForm.addEventListener("submit", loginFun);





const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("list-box")

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos(params) {
  localStorage.setItem("toDos", JSON.stringify(toDos));

}
function deleteToDo(event) {
  const li = event.target.parentElement;
    li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));  
  saveToDos();

}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id=newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X"
  button.addEventListener("click", deleteToDo)
  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);

  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

