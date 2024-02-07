let cart = []; // Biến để lưu trữ giỏ hàng
const API_URL = "http://localhost:3000/"
let showProducts = function () {
    let html = '';
    fetch(API_URL + 'products')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const productsContainer = document.getElementById('productsContainer');
            data.forEach(element => {
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
            console.error('Error fetching products:', error);
        });
};

// Hàm để thêm sản phẩm vào giỏ hàng
let addToCart = function (productId) {
    let existingProduct = cart.find(item => item.id === productId);
    
    if (existingProduct) {
        existingProduct.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cart)); // Cập nhật giỏ hàng trong localStorage
        window.location.href = "cart.html";
    } else {
        fetch(API_URL + 'products/' + productId)
            .then(response => response.json())
            .then(product => {
                product.quantity = 1;
                cart.push(product);
                updateCartCount();
                console.log('Product added to cart:', product);
                localStorage.setItem('cart', JSON.stringify(cart)); // Cập nhật giỏ hàng trong localStorage
                window.location.href = "cart.html";
            })
            .catch(error => {
                console.error('Error fetching product:', error);
            });
    }
};




// Hàm để cập nhật số lượng sản phẩm trong giỏ hàng trên giao diện
let updateCartCount = function () {
    const cartCountElement = document.getElementById('cartCount'); // Truy xuất phần tử theo ID
    cartCountElement.textContent = cart.length; // Hiển thị số lượng sản phẩm trong giỏ hàng
};



showProducts();
