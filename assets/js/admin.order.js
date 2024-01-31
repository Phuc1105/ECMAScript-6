const API_URL_ORDERS = "http://localhost:3000/";
fetch(API_URL_ORDERS + 'orders')
    .then(response => response.json())
    .then(data => {
        const orderTableBody = document.getElementById('orderTableBody');
        data.forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `
                    <td>${order.id}</td>
                    <td>${order.customer_name}</td>
                    <td>${order.customer_address}</td>
                    <td>${order.customer_email}</td>
                    <td>${order.customer_phone_number}</td>
                    <td>${order.created_date}</td>
                    <td>${order.status}</td>
                    <td><button type="button" class="btn btn-primary" onclick="orderDetail(${order.id})">Chi tiết</button></td>
                `;
            orderTableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching orders:', error));

    // let orderDetail = function(order_id){
    //     localStorage.setItem('orderId', order_id);
    //     window.location.href = `order_details.html?id=${order_id}`;
    // }

    