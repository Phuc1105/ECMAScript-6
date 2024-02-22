// URL của Firebase Realtime Database
const firebaseUrl = 'https://asm-ecmascript-fad69-default-rtdb.asia-southeast1.firebasedatabase.app/';

// Hiển thị danh sách danh mục
function Categories() {
    axios.get(`${firebaseUrl}/categories.json`)
        .then(response => {
            const categoryBody = document.getElementById('categoryBody');
            categoryBody.innerHTML = '';
            let index = 1;
            if (response.data) {
                Object.keys(response.data).forEach(key => {
                    const category = response.data[key];
                    categoryBody.innerHTML += `
                        <tr>
                            <td>${index}</td>
                            <td>${category.name}</td>
                            <td><button type="button" class="btn btn-primary" name="editCategory" onclick="editCategory('${key}', '${category.name}')" id="editCategory">Sửa</button></td>
                            <td><button onclick="deleteCategory('${key}')" class="btn btn-danger">Xóa</button></td>
                        </tr>
                    `;
                    index++;
                });
            }
        })
        .catch(error => {
            console.error('Lỗi khi tải danh sách danh mục:', error);
        });
}

// Thêm danh mục mới
document.getElementById('addCategory').addEventListener('click', () => { // lấy id và thực hiện sự kiện click
    const nameCategory = document.getElementById('nameCategory').value.trim();
    if (nameCategory !== '') {
        axios.post(`${firebaseUrl}/categories.json`, { name: nameCategory })
            .then(response => {
                Categories();
                document.getElementById('nameCategory').value = ''; // Xóa giá trị nhập trong input
            })
            .catch(error => {
                console.error('Lỗi khi thêm danh mục:', error);
            });
    }else{
        alert("Vui lòng nhập tên danh mục!!!!!")

    }
});

// Xóa danh mục
function deleteCategory(categoryId) {
    if(confirm("Bạn có chắc chắn muốn xóa!!")){
        axios.delete(`${firebaseUrl}/categories/${categoryId}.json`)
        .then(response => {
            
            Categories();
        })
        .catch(error => {
            console.error('Lỗi khi xóa danh mục:', error);
        });
    }
}

// Chỉnh sửa danh mục
function editCategory(categoryId, categoryName) {
    const newName = prompt('Nhập tên mới cho danh mục:', categoryName);
    if (newName !== null) {
        axios.patch(`${firebaseUrl}/categories/${categoryId}.json`, { name: newName })
            .then(response => {
                Categories();
            })
            .catch(error => {
                console.error('Lỗi khi chỉnh sửa danh mục:', error);
            });
    }
}
Categories();
