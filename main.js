//유저가 값을 입력한다(Task를 입력)
//Add 버튼을 클릭하면, Task가 추가 된다
//체크 버튼을 클릭하는 순간 false>true
//true 테스크가 끝났으면 밑줄
//false 테스크가 안 끝났으면 노 밑줄
// delete 버튼을 누르면 할일이 삭제된다
//not done, done 탭을 누르면, 언더바가 이동한다
//각 탭마다 task 상황이 들어가 있다
//ALL task를 누르면 모든 상황이 돌아옴

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = [];

addButton.addEventListener("click", addTask);
//enter키를 눌렀을때 add Task 실행할려면
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  // let taskContent = taskInput.value;
  // 추가 정보를 입력하기 위해 객체를 사용해야한다.
  // 밑에 확인

  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  };

  taskList.push(task);
  console.log(taskList);
  render();
  taskInput.value = "";
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].isComplete == true) {
      resultHTML += `
            <div class="task task-color">
            <div class="task-done">${taskList[i].taskContent}</div>
            <div class="icon">
              <i onClick="toggleComplete('${taskList[i].id}')" class="fa-solid fa-thumbs-up fa-lg"></i>
              <i onClick="deleteTask('${taskList[i].id}')" class="fa-regular fa-trash-can fa-lg"></i>
            </div>
          </div>`;
    } else {
      resultHTML += `<div class="task">
      <div>${taskList[i].taskContent}</div>
      <div class="icon">
        <i onClick="toggleComplete('${taskList[i].id}')" class="fa-regular fa-thumbs-up fa-lg"></i>
        <i onClick="deleteTask('${taskList[i].id}')" class="fa-regular fa-trash-can fa-lg"></i>
      </div>
    </div>`;
    }
  }

  document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id) {
  //console.log("check");
  //console.log("id",id);
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
}

function deleteTask(id) {
  console.log("삭제");
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      break;
    }
  }
  render();
}

function randomIDGenerate() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
