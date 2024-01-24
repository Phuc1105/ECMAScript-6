const API_URL = 'http://localhost:3000/';

    let showProducts = function () {
        let html = '';
        fetch(API_URL + 'products')
            .then(response => response.json())
            .then(data => {
                const productTableBody = document.getElementById('productTableBody');
                data.forEach(element => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${element.id}</td>
                        <td>${element.name}</td>
                        <td>${element.cate_id}</td>
                        <td>${element.price}</td>
                        <td>${element.detail}</td>
                        <td><img src="../assets/images/${element.image}" alt="${element.name}" style="max-width: 100px;"></td>

                    `;
                    productTableBody.appendChild(row);
                });
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    };

    showProducts();