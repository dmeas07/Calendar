var importantIcon = "fas fa-exclamation";

var nonImportantIcon = "fas fa-thumbtack";

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

    visible = false;

    console.log("hidden");
  } else {
    $("#taskList").show();

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

function changeIcon() {}

function toggleSelection() {}

function init() {
  console.log("Task Manager");

  // load prev data

  // catch events
  $("#btnSave").click(saveTask);
  $("#btnChangeIcon").click(iconClick);
  $("#hideBtnBtn").click(hide);
}

window.onload = init;
