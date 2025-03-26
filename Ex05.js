document.addEventListener("DOMContentLoaded", () => {
  const addCategoryBtn = document.getElementById("addCategoryBtn");
  const modal = document.getElementById("modalForm");
  const close = document.querySelector(".close");
  const categoryForm = document.getElementById("categoryForm");
  const categoryTableBody = document.querySelector("#categoryTable tbody");
  const searchInput = document.getElementById("searchInput");

  addCategoryBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  close.addEventListener("click", () => {
    modal.style.display = "none";
  });

  categoryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const categoryName = document.getElementById("categoryName").value;
    const categoryStatus = document.getElementById("categoryStatus").value;

    if (categoryName.trim() !== "") {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
                <td>${Date.now()}</td>
                <td>${categoryName}</td>
                <td><span class="${
                  categoryStatus === "Hoạt động" ? "active" : "inactive"
                }">${categoryStatus}</span></td>
                <td>
                    <button class="edit">Chỉnh sửa</button>
                    <button class="delete">Xóa</button>
                </td>
            `;
      categoryTableBody.appendChild(newRow);
      modal.style.display = "none";
      categoryForm.reset();

      newRow.querySelector(".delete").addEventListener("click", () => {
        newRow.remove();
      });

      newRow.querySelector(".edit").addEventListener("click", () => {
        alert("Chức năng chỉnh sửa hiện chưa được hỗ trợ!");
      });
    }
  });

  searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();
    const rows = categoryTableBody.querySelectorAll("tr");
    rows.forEach((row) => {
      const categoryName = row.cells[1].textContent.toLowerCase();
      row.style.display = categoryName.includes(filter) ? "" : "none";
    });
  });
});
