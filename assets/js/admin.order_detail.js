const API_URL_ORDER_DETAILS = `http://localhost:3000/order_details?order_id=${orderId}`;

function clickOrderDetails(orderId){
    fetch(API_URL_ORDER_DETAILS)
    .then(response => response.json())
    .then(data => {
        const orderDetailsTableBody = document.getElementById('orderDetailsTableBody');
        data.forEach(order_details => {
            const row = document.createElement('tr');
            row.innerHTML = `
                    <td>${order_details.order_id}</td>
                    <td>${order_details.product_id}</td>
                    <td>${order_details.quantity}</td>
                    <td>${order_details.unit_price}</td>
                   
                `;
                orderDetailsTableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching orders:', error));
}