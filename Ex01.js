// Khởi tạo danh sách công việc từ localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Hàm hiển thị danh sách công việc
function displayTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = ""; // Xóa danh sách cũ

  tasks.forEach((task, index) => {
    const li = document.createElement("li"); // Tạo phần tử <li>
    li.textContent = task; // Gán nội dung công việc

    const deleteBtn = document.createElement("button"); // Tạo nút "Xóa"
    deleteBtn.textContent = "Xóa";
    deleteBtn.onclick = function () {
      deleteTask(index); // Gọi hàm xóa công việc
    };

    const editBtn = document.createElement("button"); // Tạo nút "Sửa"
    editBtn.textContent = "Sửa";
    editBtn.onclick = function () {
      editTask(index); // Gọi hàm sửa công việc
    };

    li.appendChild(deleteBtn); // Thêm nút "Xóa" vào <li>
    li.appendChild(editBtn); // Thêm nút "Sửa" vào <li>
    taskList.appendChild(li); // Thêm <li> vào danh sách
  });
}

// Hàm thêm công việc mới
function addTask() {
  const taskInput = document.getElementById("task-input"); // Lấy giá trị từ ô input
  const task = taskInput.value.trim(); // Loại bỏ khoảng trắng thừa

  if (task) {
    tasks.push(task); // Thêm công việc vào danh sách
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Lưu vào localStorage
    taskInput.value = ""; // Xóa nội dung trong ô input
    displayTasks(); // Cập nhật danh sách hiển thị
  } else {
    alert("Vui lòng nhập công việc!"); // Thông báo nếu ô trống
  }
}

// Hàm xóa công việc
function deleteTask(index) {
  tasks.splice(index, 1); // Xóa công việc khỏi danh sách
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Cập nhật localStorage
  displayTasks(); // Cập nhật danh sách hiển thị
}

// Hàm sửa công việc
function editTask(index) {
  const taskInput = document.getElementById("task-input"); // Lấy giá trị từ ô input
  const newTask = taskInput.value.trim(); // Loại bỏ khoảng trắng thừa

  if (newTask) {
    tasks[index] = newTask; // Sửa công việc trong danh sách
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Cập nhật localStorage
    taskInput.value = ""; // Xóa nội dung trong ô input
    displayTasks(); // Cập nhật danh sách hiển thị
  } else {
    alert("Vui lòng nhập công việc!"); // Thông báo nếu ô trống
  }
}

// Hiển thị danh sách công việc khi tải trang
displayTasks();
