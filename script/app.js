var importantIcon = "fas fa-exclamation";

var nonImportantIcon = "fas fa-thumbtack";

var showTaskBtn = "fas fa-bars";

var hideTaskBtn = "fas fa-minus";

var isImportant = false;

var visible = true;

function iconClick() {
  if (isImportant == false) {
    // change to important
    $("#btnChangeIcon").removeClass(nonImportantIcon).addClass(importantIcon);
    isImportant = true;
    console.log("is important");
  } else {
    // change to non important
    $("#btnChangeIcon").removeClass(importantIcon).addClass(nonImportantIcon);
    isImportant = false;
    console.log("is not important");
  }
}

function hide() {
  if (visible) {
    $("#taskList").hide();

    $("#hideBtnBtn").removeClass(hideTaskBtn).addClass(showTaskBtn);

    visible = false;

    console.log("hidden");
  } else {
    $("#taskList").show();

    $("#hideBtnBtn").removeClass(showTaskBtn).addClass(hideTaskBtn);

    visible = true;

    console.log("reveal");
  }
}

function saveTask() {
  console.log("button clicked");

  let title = $("#txtTitle").val();
  let date = $("#txtDate").val();
  let description = $("#txtDescription").val();
  let tag = $("#txtTag").val();
  let color = $("#txtColor").val();
  let category = $("#txtCategory").val();

  let task = new Task(title, date, description, tag, color, category);

  // save on server
  $.ajax({
    type: "POST",
    url: "https://fsdiapi.azurewebsites.net/api/tasks/",
    data: JSON.stringify(task),
    contentType: "application/json",
    success: function (response) {
      displayTask(task);
      clearForm();
    },
    error: function (details) {
      console.log("Save failed", details);
      alert("error");
    },
  });

  displayTask(task);

  clearForm();
}

function clearForm() {
  $("#txtTitle").val("");
  $("#txtDate").val("");
  $("#txtDescription").val("");
  $("#txtTag").val("");
  $("#txtColor").val("");
  $("#txtCategory").val("");
}

function displayTask(task) {
  console.log(task);

  let syntax = `<div class="task">

    <div class="infoTask">
      <h3>${task.title}</h3>
      <p>${task.description}</p>
    </div>
    
    <label class="date">
      ${task.date}
    </label>

    <div class="extra">
      <label>${task.category}</label>
      <label>${task.tag}</label>
    </div>

    </div>`;

  $("#taskList").append(syntax);
}

// function testRequest() {
//   // this is a test HTTP request
//   $.ajax({
//     type: "GET",
//     url: "https://fsdiapi.azurewebsites.net/",
//     success: function (data) {},
//     error: function (details) {},
//   });
// }

function fetchTask() {
  $.ajax({
    type: "GET",
    url: "https://fsdiapi.azurewebsites.net/api/tasks",
    success: function (response) {
      console.log("Fetch response", response);

      let allTasks = JSON.parse(response);

      for (let i = 0; i < allTasks.length; i++) {
        // displayTask(allTasks[i]);
        let task = allTasks[i];

        if (task.name == "Daravy") {
          displayTask(task);
        } else {
          console.log("nothing found");
        }
      }
    },
    error: function (details) {
      console.log("Error", details);
    },
  });
}

function init() {
  console.log("Task Manager");

  // load prev data
  fetchTask();

  // catch events
  $("#btnSave").click(saveTask);
  $("#btnChangeIcon").click(iconClick);
  $("#hideBtnBtn").click(hide);
}

window.onload = init;
