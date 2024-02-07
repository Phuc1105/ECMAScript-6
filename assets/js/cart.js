document.addEventListener('DOMContentLoaded', function () {
    // Truy xuất dữ liệu giỏ hàng từ localStorage
    const cartData = JSON.parse(localStorage.getItem('cart'));
    if (cartData) {
        // Hiển thị sản phẩm trong giỏ hàng
        showCartItems(cartData);
    }
});

function showCartItems(cartData) {
    const cartContainer = document.getElementById('cartContainer');
    let html = '';
    cartData.forEach(element => {
        html += `
        <tr>
            <td><img src="../assets/images/${element.image}" alt="${element.name}" width="90px" height="80px"> ${element.name}</td>
            <td>${element.price}</td>
            <td width="300px">${element.detail}</td>
            <td>3</td>
            <td><button type="button" class="btn btn-primary delete-btn">Xóa</button></td>
        </tr>
        `;
    });
    cartContainer.innerHTML = html;

    // Thêm sự kiện click cho nút xóa
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Xóa sản phẩm khỏi giỏ hàng
            cartData.splice(index, 1);
            // Cập nhật lại dữ liệu giỏ hàng trong localStorage
            localStorage.setItem('cart', JSON.stringify(cartData));
            // Hiển thị lại giỏ hàng sau khi xóa
            showCartItems(cartData);
        });
    });
}
