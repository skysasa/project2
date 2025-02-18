//유저가 값을 입력한다(Task를 입력)
//Add 버튼을 클릭하면, Task가 추가 된다
// delete 버튼을 누르면 할일이 삭제된다
//not done, done 탭을 누르면, 언더바가 이동한다
//각 탭마다 task 상황이 들어가 있다
//ALL task를 누르면 모든 상황이 돌아옴

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = [];

addButton.addEventListener("click", addTask);

function addTask() {
  let taskContent = taskInput.value;
  taskList.push(taskContent);
  render();
}

function render() {
  let resultHTML = "";

  for (let i = 0; i < taskList.length; i++) {
    resultHTML += `<div class="task">
            <div>${taskList[i]}</div>
            <div>
              <button>Check</button>
              <button>Delete</button>
            </div>
          </div>`;
  }

  document.getElementById("task-board").innerHTML = resultHTML;
}
