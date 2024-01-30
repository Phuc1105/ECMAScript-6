const API_URL_CATEGORY = 'http://localhost:3000/';
let showCategory = function () {
    let showhtml = '';
    fetch(API_URL_CATEGORY + 'categories')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const categoryContainer = document.getElementById('categoryContainer');
            showhtml += '<li class="active" data-filter="*">Tất cả</li>';

            data.forEach(element => {
                showhtml +=
                    `<li data-filter=".pizza">${element.name}</li>`;
            });
            categoryContainer.innerHTML = showhtml;
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
};
showCategory();
