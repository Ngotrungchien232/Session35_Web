// Khởi tạo danh sách bookmark từ Local Storage
let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

// Hàm hiển thị danh sách bookmark
function displayBookmarks() {
  const bookmarkList = document.getElementById("bookmark-list");
  bookmarkList.innerHTML = "";

  bookmarks.forEach((bookmark, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <a href="${bookmark.url}" target="_blank">${bookmark.title}</a>
      <button class="delete-btn" data-index="${index}">Xóa</button>
    `;
    bookmarkList.appendChild(li);
  });
}

// Hàm thêm mới bookmark
function addBookmark() {
  const titleInput = document.getElementById("title");
  const urlInput = document.getElementById("url");
  const title = titleInput.value.trim();
  const url = urlInput.value.trim();

  if (title && url) {
    bookmarks.push({ title, url });
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    titleInput.value = "";
    urlInput.value = "";
    displayBookmarks();
    document.getElementById("add-bookmark-form").style.display = "none";
  } else {
    alert("Vui lòng nhập đầy đủ thông tin!");
  }
}

// Hàm xóa bookmark
function deleteBookmark(index) {
  bookmarks.splice(index, 1);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  displayBookmarks();
}
document.getElementById("add-bookmark-btn").addEventListener("click", () => {
  document.getElementById("add-bookmark-form").style.display = "block";
});
document
  .getElementById("save-bookmark-btn")
  .addEventListener("click", addBookmark);
document.getElementById("cancel-bookmark-btn").addEventListener("click", () => {
  document.getElementById("add-bookmark-form").style.display = "none";
});
document.getElementById("bookmark-list").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const index = e.target.dataset.index;
    deleteBookmark(index);
  }
});

// Hiển thị danh sách bookmark khi tải trang
displayBookmarks();
