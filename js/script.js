// ===============================
// SHOPPING CART SYSTEM
// ===============================

// Lấy dữ liệu giỏ hàng từ localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ===============================
// THÊM SẢN PHẨM VÀO GIỎ
// ===============================
function addToCart(name, price) {

    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: Date.now(),
            name: name,
            price: price,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();
    showNotification(name + " đã được thêm vào giỏ hàng");
}

// ===============================
// LƯU GIỎ HÀNG
// ===============================
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// ===============================
// CẬP NHẬT SỐ LƯỢNG ICON GIỎ
// ===============================
function updateCartCount() {

    const countElement = document.querySelector(".cart-count");

    if (!countElement) return;

    let totalQuantity = 0;

    cart.forEach(item => {
        totalQuantity += item.quantity;
    });

    countElement.textContent = totalQuantity;
}

// ===============================
// HIỂN THỊ GIỎ HÀNG TRONG cart.html
// ===============================
function displayCart() {

    const table = document.getElementById("cart-items");
    const totalElement = document.getElementById("cart-total");

    if (!table || !totalElement) return;

    table.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const row = `
        <tr>
            <td>${item.name}</td>

            <td>
                ${item.price.toLocaleString("vi-VN")} VND
            </td>

            <td>
                ${item.quantity}
            </td>

            <td>
                ${itemTotal.toLocaleString("vi-VN")} VND
            </td>

            <td>
                <button onclick="removeItem(${index})">
                    Xóa
                </button>
            </td>
        </tr>
        `;

        table.innerHTML += row;
    });

    totalElement.textContent = total.toLocaleString("vi-VN");
}

// ===============================
// XÓA SẢN PHẨM
// ===============================
function removeItem(index) {

    cart.splice(index, 1);

    saveCart();

    displayCart();

    updateCartCount();
}

// ===============================
// THÔNG BÁO
// ===============================
function showNotification(message) {

    const notification = document.createElement("div");

    notification.textContent = message;

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 15px 20px;
        border-radius: 6px;
        font-size: 14px;
        z-index: 9999;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// ===============================
// SMOOTH SCROLL
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// ===============================
// FORM LIÊN HỆ
// ===============================
const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        showNotification("Cảm ơn bạn đã gửi tin nhắn!");

        this.reset();

    });

}

// ===============================
// KHI WEBSITE LOAD
// ===============================
document.addEventListener("DOMContentLoaded", function () {

    updateCartCount();

    displayCart();

});