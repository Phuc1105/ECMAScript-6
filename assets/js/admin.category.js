const API_URL_CATEGORY = 'http://localhost:3000/';

let showCategory = function () {
    let showhtml = '';
    fetch(API_URL_CATEGORY + 'categories')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const categoryContainer = document.getElementById('categoryContainer');
            let index = 1; // Khởi tạo index ban đầu

            data.forEach(element => {
                showhtml +=
                    `<tr>
                        <td>${index}</td>
                        <td>${element.name}</td>
                        <td><button type="button" class="btn btn-primary" onclick="editCategory('${element.id}', '${element.name}')">Sửa</button></td>
                        <td><button type="button" class="btn btn-danger" onclick="deleteCategory('${element.id}')">Xóa</button></td>
                    </tr>`;
                index++;
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

document.addEventListener('DOMContentLoaded', function () {
    const categoryId = localStorage.getItem('editCategoryId');
    const categoryName = localStorage.getItem('editCategoryName');

    document.getElementById('editCategoryId').value = categoryId;
    document.getElementById('editCategoryName').value = categoryName;

});
let deleteCategory = function (categoryId) {
    if (confirm('Bạn có chắc chắn muốn xóa danh mục này không?')) {
        fetch(API_URL_CATEGORY + 'categories/' + categoryId, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                console.log('Category deleted successfully:', data);
                // Sau khi xóa thành công, cập nhật lại danh sách loại sản phẩm
                showCategory();
            })
            .catch(error => {
                console.error('Error deleting category:', error);
                alert('Đã xảy ra lỗi khi xóa danh mục sản phẩm.');
            });
    }
};

showCategory();
