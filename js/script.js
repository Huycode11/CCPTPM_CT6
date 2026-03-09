// Shopping Cart System
let cartItems = [];
let cartCount = 0;

// Add to cart function
function addToCart(productName, price) {
    const item = {
        id: Date.now(),
        name: productName,
        price: price,
        quantity: 1
    };

    // Check if item already exists
    const existingItem = cartItems.find(p => p.name === productName);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push(item);
    }

    cartCount++;
    updateCartCount();
    showNotification(`${productName} đã được thêm vào giỏ hàng`);
}

// Update cart count display
function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #27ae60;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 1000;
        animation: slideIn 0.3s ease-in-out;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 2000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Cảm ơn bạn đã gửi tin nhắn! Chúng tôi sẽ liên hệ sớm.');
        this.reset();
    });
}

// Cart icon click handler
document.querySelector('.cart-icon').addEventListener('click', function() {
    if (cartItems.length === 0) {
        showNotification('Giỏ hàng trống');
    } else {
        showCartSummary();
    }
});

// Show cart summary
function showCartSummary() {
    let total = 0;
    let summary = 'Giỏ hàng của bạn:\n';

    cartItems.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        summary += `${item.name} x ${item.quantity} = ${itemTotal.toLocaleString('vi-VN')} VND\n`;
    });

    summary += `\nTổng: ${total.toLocaleString('vi-VN')} VND`;

    alert(summary);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website đã tải thành công!');
    updateCartCount();
});

// Add animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
