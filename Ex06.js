document.addEventListener("DOMContentLoaded", () => {
  const categoryTableBody = document.querySelector("#categoryTable tbody");
  const statusFilter = document.getElementById("statusFilter");

  // Dữ liệu danh mục mẫu
  const categories = [
    { id: "DM001", name: "Quần áo", status: "Đang hoạt động" },
    { id: "DM002", name: "Kính mắt", status: "Ngừng hoạt động" },
    { id: "DM003", name: "Giày dép", status: "Đang hoạt động" },
    { id: "DM004", name: "Thời trang nam", status: "Ngừng hoạt động" },
    { id: "DM005", name: "Thời trang nữ", status: "Ngừng hoạt động" },
    { id: "DM006", name: "Hoa quả", status: "Ngừng hoạt động" },
    { id: "DM007", name: "Râu", status: "Đang hoạt động" },
    { id: "DM008", name: "Điện thoại", status: "Ngừng hoạt động" },
  ];

  // Hiển thị danh mục
  const displayCategories = (filter) => {
    categoryTableBody.innerHTML = "";
    categories
      .filter((cat) => filter === "Tất cả" || cat.status === filter)
      .forEach((cat) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                    <td>${cat.id}</td>
                    <td>${cat.name}</td>
                    <td><span class="${
                      cat.status === "Đang hoạt động" ? "active" : "inactive"
                    }">${cat.status}</span></td>
                    <td>
                        <button class="edit">Chỉnh sửa</button>
                        <button class="delete">Xóa</button>
                    </td>
                `;
        categoryTableBody.appendChild(row);

        // Xử lý nút xóa
        row.querySelector(".delete").addEventListener("click", () => {
          row.remove();
        });

        // Xử lý nút chỉnh sửa
        row.querySelector(".edit").addEventListener("click", () => {
          alert("Chức năng chỉnh sửa hiện chưa được hỗ trợ!");
        });
      });
  };

  // Lọc danh mục theo trạng thái
  statusFilter.addEventListener("change", () => {
    displayCategories(statusFilter.value);
  });

  // Hiển thị toàn bộ danh mục ban đầu
  displayCategories("Tất cả");
});
