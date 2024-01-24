const API_CATEGORY = "http://localhost:3000/categories";
let addCategory = () => {
    const categoryName = document.getElementById('categoryName').value;
    if (!categoryName.trim()) {
        console.error('Category name rỗng');
        return;
    }
    fetch(API_CATEGORY, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: categoryName }),
    })
        .then(response => response.json())
        .then(data => console.log('Category added:', data))
        .catch(error => console.error('Error adding category:', error));
}