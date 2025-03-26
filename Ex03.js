let products = [
  {
    id: 1,
    name: "Laptop Dell XPS 15",
    price: "35990000",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSQayPCHcSG5yD40X21VRyUcx2KlT71WacaGjUXGlxDuqNNtQxWBBc_9QxUm0F0A6wZp-ZVF8nN7qbYOiz6Xr0kJZ0pUX3dUPfCFN5SS4eZHMwfPf_BWJrGZ2dnEOzd6L1ferrC&usqp=CAc",
    description:
      "Laptop cao cấp với màn hình 15 INCH, CPU Intel Core i7 và RAM 16GB.",
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max",
    price: "32990000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT0QboG6JWTOSRKDEuU6tgTCOoqjDSIapL1A&s",
    description:
      "Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.",
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 Ultra",
    price: "28990000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn9GcTUM-29t_hCYs5jJTbnRxiYG7eKERs60tFy9Q&s",
    description:
      "Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.",
  },
  {
    id: 4,
    name: "Tai nghe Sony WH-1000XM5",
    price: "7999000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn9GcTCMx9FgjID1GY_hEDSOPqC5HC1oJngMzsyvw&s",
    description:
      "Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.",
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    price: "11990000",
    image:
      "https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all",
    description:
      "Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.",
  },
  {
    id: 6,
    name: "Loa JBL Charge 5",
    price: "3999000",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn9GcTttk2L3eQZw_41TEGa2OeX5yYslFLcdMbLi59ngE2sE3rDkOW8zDLdWCrjAcB90lJ0I4ch8XHEFDvmkvrxU2TsynvLyUKn2ZvAJGRM8AeJBxCToSTBVMnr71ypF7GQ1d3_yw&usqp=CAc",
    description: "Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.",
  },
];

// Hàm hiển thị sản phẩm
function displayProducts(productArray) {
  let productList = document.getElementById("productList");
  productList.innerHTML = ""; // Xóa nội dung cũ

  // Nếu không có sản phẩm nào
  if (productArray.length === 0) {
    productList.innerHTML =
      '<div class="col-12 text-center text-muted">Không tìm thấy sản phẩm nào.</div>';
    return;
  }

  // Hiển thị từng sản phẩm
  productArray.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "col-md-4 product-card"; // Sử dụng Bootstrap grid

    productCard.innerHTML = `
          <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${
      product.name
    }">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text description">${product.description}</p>
              <p class="card-text price">${parseInt(
                product.price
              ).toLocaleString()} VNĐ</p>
              <button class="btn btn-buy">Mua hàng</button>
            </div>
          </div>
        `;

    productList.appendChild(productCard);
  });
}

// Hàm tìm kiếm sản phẩm
function searchProducts() {
  let searchInput = document.getElementById("searchInput").value.toLowerCase();
  let filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchInput) ||
      product.description.toLowerCase().includes(searchInput)
  );
  displayProducts(filteredProducts);
}

// Hiển thị tất cả sản phẩm ban đầu
displayProducts(products);

// Tìm kiếm khi nhấn Enter
document
  .getElementById("searchInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      searchProducts();
    }
  });
// Lưu vào localStorage
localStorage.setItem("products", JSON.stringify(products));

// Hàm lấy dữ liệu từ localStorage và hiển thị sản phẩm
function displayProductsFromLocalStorage() {
  const storedProducts = JSON.parse(localStorage.getItem("products"));
  displayProducts(storedProducts);
}

// Hiển thị sản phẩm ban đầu từ localStorage
displayProductsFromLocalStorage();
