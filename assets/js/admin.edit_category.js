let updateCategory = function () {
    const updatedCategoryId = document.getElementById('editCategoryId').value;
    const updatedCategoryName = document.getElementById('editCategoryName').value;

    // Kiểm tra nếu cả hai trường đã được điền
    if (!updatedCategoryId || !updatedCategoryName) {
        alert('Vui lòng điền đầy đủ thông tin danh mục sản phẩm.');
        return;
    }

    // Gửi yêu cầu PUT để cập nhật danh mục sản phẩm
    fetch(API_URL_CATEGORY + 'categories/' + updatedCategoryId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: updatedCategoryName
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Category updated successfully:', data);
        // Redirect back to category list page after updating
        window.location.href = 'category.html';
    })
    .catch(error => {
        console.error('Error updating category:', error);
        alert('Đã xảy ra lỗi khi cập nhật danh mục sản phẩm.');
    });
};
