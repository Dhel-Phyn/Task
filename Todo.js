window.addEventListener("load", () => {
  const form = document.querySelector('#new-task-form"');
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const tasks = input.value;

    if (!tasks) {
      alert("Please the task for the day");
    }

    const tasks_el = document.createElement("div");
    tasks_el.classList.add("tasks");

    const tasks_content_el = document.createElement("div");
    tasks_content_el.classList.add("content");
    // task_content_el.innerText = task;

    tasks_el.appendChild(tasks_content_el);

    const tasks_input_el = document.createElement("input");
    tasks_input_el.classList.add("text");
    tasks_input_el.type = "text";
    tasks_input_el.value = "task";
    tasks_input_el.setAttribute("readonly", "readonly");

    tasks_content_el.appendChild(tasks_input_el);

    const tasks_actions_el = document.createElement("div");
    tasks_actions_el.classList.add("actions");

    const tasks_edit_el = document.createElement("button");
    tasks_edit_el.classList.add("edit");
    tasks_edit_el.innerHTML = "Edit";

    const tasks_delete_el = document.createElement("button");
    tasks_delete_el.classList.add("delete");
    tasks_delete_el.innerHTML = "Delete";

    tasks_actions_el.appendChild(tasks_edit_el);
    tasks_actions_el.appendChild(tasks_delete_el);

    tasks_el.appendChild(tasks_actions_el);

    list_el.appendChild(tasks_el);

    input.value = " ";

    tasks_edit_el.addEventListener("click", () => {
      if (tasks_input_el.innerText.toLowerCase() == "edit") {
        tasks_input_el.focus();
        tasks_edit_el.innerText = "Save";
      } else {
        tasks_input_el.setAttribute("readonly", "readonly");
        tasks_edit_el.innerText = "Edit";
      }
    });
    tasks_delete_el.addEventListener("click", () => {
        list_el.removeChild();
    })
  });
});
