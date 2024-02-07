function filterProducts() {
  const categoryFilter = document.getElementById('categoryFilter').value;
  const minPrice = document.getElementById('minPrice').value;
  const maxPrice = document.getElementById('maxPrice').value;

  fetch(API_URL + 'products')
      .then(response => response.json())
      .then(products => {
          // Lọc sản phẩm dựa trên danh mục và khoảng giá
          const filteredProducts = products.filter(product =>
              (!categoryFilter || product.cate_id == categoryFilter) &&
              (!minPrice || product.price >= minPrice) &&
              (!maxPrice || product.price <= maxPrice)
          );

          // Hiển thị sản phẩm đã lọc ra màn hình
          const productsContainer = document.getElementById('productsContainer');
          let html = '';
          filteredProducts.forEach(element => {
              html +=
                  `<div id="${element.id}" class="col-sm-6 col-lg-4 all pizza">
                          <div class="box">
                              <div>
                                  <div class="img-box">
                                      <img src="../assets/images/${element.image}" alt="${element.name}">
                                  </div>
                                  <div class="detail-box">
                                      <h5>${element.name}</h5>
                                      <p>${element.detail}</p>
                                      <div class="options">
                                          <h6>${element.price}đ</h6>
                                          <button class=" class="" style="width: 100px; height: 35px; text-align: justify; border-radius: 25px; background-color: gold; border: none; 	color: #fff;
                                          " type="submit" name="them"" onclick="addToCart(${element.id})">
                                          Order Now
                                          </button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>`;
          });
          productsContainer.innerHTML = html;
      })
      .catch(error => {
          console.error('Lỗi này là:', error);
      });
}
