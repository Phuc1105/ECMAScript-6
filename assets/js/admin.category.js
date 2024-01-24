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
                    `<tr>
                        <td>${element.id}</td>
                        <td>${element.name}</td>
                        <td><button type="button" class="btn btn-primary" onclick="editCategory(${element.id}, '${element.name}')">Edit</button></td>
                    </tr>`;
            });
            categoryContainer.innerHTML = showhtml;
        })
        .catch(error => {
            console.error('Error fetching categories:', error);
        });
};

let editCategory = function (categoryId, categoryName) {
    localStorage.setItem('editCategoryId', categoryId);
    localStorage.setItem('editCategoryName', categoryName);
    window.location.href = `edit_category.html?id=${categoryId}`;
};

document.addEventListener('DOMContentLoaded', function() {
    const categoryId = localStorage.getItem('editCategoryId');
    const categoryName = localStorage.getItem('editCategoryName');

    document.getElementById('editCategoryId').value = categoryId;
    document.getElementById('editCategoryName').value = categoryName;

});


showCategory();
