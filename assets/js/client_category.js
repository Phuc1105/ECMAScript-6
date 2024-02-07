const API_URL_CATEGORY = 'http://localhost:3000/';
let showCategory = function () {
    let showhtml = '';
    fetch(API_URL_CATEGORY + 'categories')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const categoryContainer = document.getElementById('categoryContainer');
            data.forEach(element => {
                showhtml +=
                    ` <li class="list-group-item">
                    <a class="d-block text-dark"
                        href="">${element.name}</a>
                </li> `;
            });
            categoryContainer.innerHTML = showhtml;
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
};
showCategory();
