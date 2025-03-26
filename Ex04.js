const employeeForm = document.getElementById("employeeForm");
const employeeList = document.getElementById("employeeList");
const pagination = document.getElementById("pagination");
const employees = JSON.parse(localStorage.getItem("employees")) || [];
const itemsPerPage = 3; // Số nhân viên hiển thị trên mỗi trang
let currentPage = 1;

// Lưu danh sách nhân viên vào Local Storage
function saveToLocalStorage() {
  localStorage.setItem("employees", JSON.stringify(employees));
}

// Hiển thị danh sách nhân viên trên trang hiện tại
function renderEmployees() {
  employeeList.innerHTML = ""; // Xóa nội dung cũ trong danh sách
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedEmployees = employees.slice(start, end); // Lấy danh sách nhân viên theo trang

  paginatedEmployees.forEach((employee) => {
    const li = document.createElement("li");
    li.textContent = `${employee.name} (${employee.role})`; // Hiển thị tên và vai trò
    employeeList.appendChild(li);
  });

  renderPagination(); // Hiển thị các nút phân trang
}

// Hiển thị các nút phân trang với "Previous" và "Next"
function renderPagination() {
  pagination.innerHTML = ""; // Xóa các nút cũ
  const totalPages = Math.ceil(employees.length / itemsPerPage); // Tính tổng số trang

  // Nút "Previous"
  const prevButton = document.createElement("button");
  prevButton.textContent = "Previous";
  prevButton.disabled = currentPage === 1; // Vô hiệu hóa nếu đang ở trang đầu
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderEmployees();
    }
  });
  pagination.appendChild(prevButton);

  // Các nút số trang
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i; // Số trang
    if (i === currentPage) {
      button.style.backgroundColor = "#007bff"; // Màu xanh dương cho trang đang chọn
      button.style.color = "#fff";
      button.style.fontWeight = "bold";
    }
    button.addEventListener("click", () => {
      currentPage = i;
      renderEmployees(); // Cập nhật danh sách nhân viên theo trang
    });
    pagination.appendChild(button);
  }

  // Nút "Next"
  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.disabled = currentPage === totalPages; // Vô hiệu hóa nếu đang ở trang cuối
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderEmployees();
    }
  });
  pagination.appendChild(nextButton);
}

// Thêm nhân viên mới và cập nhật danh sách
employeeForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Ngăn tải lại trang
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;

  if (name && role) {
    employees.push({ name, role });
    saveToLocalStorage();
    renderEmployees();
    employeeForm.reset();
  }
});

// Hiển thị danh sách ban đầu
renderEmployees();
