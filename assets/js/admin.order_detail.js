const API_URL_ORDER_DETAILS = "http://localhost:3000/";
function orderDetail(order_id) {
    // Lấy dữ liệu từ server và lưu vào localStorage
    fetch(API_URL_ORDER_DETAILS + `order_details?order_id=${order_id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('orderDetail', JSON.stringify(data));
            window.location.href = `order_details.html?id=${order_id}`;
        })
        .catch(error => {
            console.error('Lỗi ở đây là:', error);
        });
}
document.addEventListener('DOMContentLoaded', function () {
    // Lấy dữ liệu từ localStorage và hiển thị trên trang
    const dataDetails = JSON.parse(localStorage.getItem('orderDetail'));
    const orderDetailsTable = document.getElementById('orderDetailsTableBody');

    if (dataDetails) {
        dataDetails.forEach(order_details => {
            let html = "";
            html = `
                <td>${order_details.order_id}</td>
                <td>${order_details.product_id}</td>
                <td>${order_details.quantity}</td>
                <td>${order_details.unit_price}đ</td>
            `;
            orderDetailsTable.innerHTML = html;
        });
    }
});
