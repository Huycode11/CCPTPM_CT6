// Product Detail Page Script

// Product data (có thể lấy từ URL params hoặc API)
const products = {
    'product1': {
        name: 'Sản phẩm 1',
        price: 99000,
        oldPrice: 149000,
        image: 'images/product1.jpg',
        description: 'Đây là một sản phẩm chất lượng cao với thiết kế hiện đại và tính năng vượt trội. Sản phẩm được làm từ nguyên liệu tốt nhất, đảm bảo độ bền và hiệu suất cao. Phù hợp cho mọi nhu cầu sử dụng hàng ngày.',
        material: 'Cao cấp',
        size: 'Tiêu chuẩn',
        color: 'Đa dạng',
        warranty: '12 tháng'
    },
    'product2': {
        name: 'Sản phẩm 2',
        price: 149000,
        oldPrice: 199000,
        image: 'images/product2.jpg',
        description: 'Sản phẩm 2 với thiết kế sang trọng, chất lượng vượt trội. Được sản xuất theo tiêu chuẩn quốc tế, đảm bảo an toàn và bền bỉ theo thời gian.',
        material: 'Premium',
        size: 'Lớn',
        color: 'Nhiều màu',
        warranty: '24 tháng'
    },
    'product3': {
        name: 'Sản phẩm 3',
        price: 199000,
        oldPrice: 249000,
        image: 'images/product3.jpg',
        description: 'Sản phẩm 3 là lựa chọn hoàn hảo cho những ai đang tìm kiếm chất lượng và giá trị. Với nhiều tính năng nổi bật, sản phẩm này sẽ đáp ứng mọi nhu cầu của bạn.',
        material: 'Cao cấp',
        size: 'Vừa',
        color: 'Đen, Trắng',
        warranty: '18 tháng'
    },
    'product4': {
        name: 'Sản phẩm 4',
        price: 129000,
        oldPrice: 179000,
        image: 'images/product4.jpg',
        description: 'Sản phẩm 4 được thiết kế với phong cách hiện đại, phù hợp với mọi không gian. Chất lượng đảm bảo, giá cả hợp lý.',
        material: 'Chất lượng tốt',
        size: 'Nhỏ',
        color: 'Xanh, Đỏ',
        warranty: '12 tháng'
    }
};

// Lấy thông tin sản phẩm từ URL
function getProductFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || 'product1';
    return products[productId] || products['product1'];
}

// Hiển thị thông tin sản phẩm
function displayProduct() {
    const product = getProductFromURL();
    
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-image').alt = product.name;
    document.getElementById('product-price').textContent = product.price.toLocaleString('vi-VN') + ' VND';
    document.getElementById('product-old-price').textContent = product.oldPrice.toLocaleString('vi-VN') + ' VND';
    
    const discount = Math.round((1 - product.price / product.oldPrice) * 100);
    document.getElementById('product-discount').textContent = '-' + discount + '%';
    
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('spec-material').textContent = product.material;
    document.getElementById('spec-size').textContent = product.size;
    document.getElementById('spec-color').textContent = product.color;
    document.getElementById('spec-warranty').textContent = product.warranty;
}

// Tăng số lượng
function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    let currentValue = parseInt(quantityInput.value);
    if (currentValue < 99) {
        quantityInput.value = currentValue + 1;
    }
}

// Giảm số lượng
function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}

// Thêm vào giỏ hàng từ trang chi tiết
function addToCartFromDetail() {
    const product = getProductFromURL();
    const quantity = parseInt(document.getElementById('quantity').value);
    
    // Thêm sản phẩm vào giỏ hàng với số lượng
    for (let i = 0; i < quantity; i++) {
        addToCart(product.name, product.price);
    }
    
    // Reset số lượng về 1
    document.getElementById('quantity').value = 1;
}

// Mua ngay
function buyNow() {
    addToCartFromDetail();
    // Chuyển đến trang giỏ hàng
    window.location.href = 'cart.html';
}

// Khởi tạo khi trang load
document.addEventListener('DOMContentLoaded', function() {
    displayProduct();
    updateCartCount();
});
