// ===============================
// THÔNG TIN CỬA HÀNG
// ===============================

const shopInfo = {
    // Thông tin chung
    name: "ShopStore",
    slogan: "Những sản phẩm chất lượng cao với giá cả phải chăng",
    
    // Thông tin liên lạc
    contact: {
        phone: "0909 123 456",
        email: "info@shopstore.com",
        address: "123 Đường ABC, Thành phố, Quốc gia",
        hours: "9:00 AM - 10:00 PM, Thứ 2 - Chủ Nhật"
    },
    
    // Danh sách sản phẩm
    products: [
        {
            id: 1,
            name: "Sản phẩm 1",
            price: 99000,
            image: "images/product1.jpg",
            description: "Mô tả sản phẩm 1",
            category: "Danh mục 1"
        },
        {
            id: 2,
            name: "Sản phẩm 2",
            price: 149000,
            image: "images/product2.jpg",
            description: "Mô tả sản phẩm 2",
            category: "Danh mục 2"
        },
        {
            id: 3,
            name: "Sản phẩm 3",
            price: 199000,
            image: "images/product3.jpg",
            description: "Mô tả sản phẩm 3",
            category: "Danh mục 1"
        },
        {
            id: 4,
            name: "Sản phẩm 4",
            price: 129000,
            image: "images/product4.jpg",
            description: "Mô tả sản phẩm 4",
            category: "Danh mục 3"
        }
    ],
    
    // Thông tin về cửa hàng
    about: {
        description: "Chúng tôi cung cấp những sản phẩm chất lượng cao, được lựa chọn kỹ càng từ các nhà cung cấp uy tín.",
        mission: "Mang đến cho khách hàng những sản phẩm tốt nhất với giá cả hợp lý",
        founded: "2024"
    },
    
    // Chính sách
    policies: {
        shipping: "Miễn phí vận chuyển cho đơn hàng trên 500.000 VND",
        return: "Hỗ trợ đổi trả trong 7 ngày",
        payment: "Hỗ trợ thanh toán bằng thẻ, chuyển khoản, COD"
    },
    
    // ===============================
    // BỐ CỤC FOOTER - NHIỀU CỘT
    // ===============================
    
    // Cột 1: Dịch vụ khách hàng
    customerService: [
        { label: "Trung Tâm Trợ Giúp", link: "#" },
        { label: "ShopStore Blog", link: "#" },
        { label: "ShopStore Mall", link: "#" },
        { label: "Hướng Dẫn Mua Hàng/Đặt Hàng", link: "#" },
        { label: "Hướng Dẫn Bán Hàng", link: "#" },
        { label: "Vì ShopStore Pay", link: "#" },
        { label: "ShopStore Xu", link: "#" },
        { label: "Đơn Hàng", link: "#" },
        { label: "Trả Hàng/Hoàn Tiền", link: "#" },
        { label: "Liên Hệ ShopStore", link: "#" },
        { label: "Chính Sách Bảo Hành", link: "#" }
    ],
    
    // Cột 2: ShopStore Việt Nam
    aboutShop: [
        { label: "Về ShopStore", link: "#" },
        { label: "Tuyên Dung", link: "#" },
        { label: "Điều Khoản ShopStore", link: "#" },
        { label: "Chính Sách Bảo Mật", link: "#" },
        { label: "ShopStore Mall", link: "#" },
        { label: "Kênh Người Bán", link: "#" },
        { label: "Flash Sale", link: "#" },
        { label: "Tiếp Thị Liên Kết", link: "#" },
        { label: "Liên Hệ Truyền Thông", link: "#" }
    ],
    
    // Cột 3: Thanh toán
    paymentMethods: [
        { name: "VISA", icon: "🏦" },
        { name: "MasterCard", icon: "💳" },
        { name: "JCB", icon: "💳" },
        { name: "American Express", icon: "💳" },
        { name: "ShopeePay", icon: "📱" },
        { name: "GCash", icon: "📱" }
    ],
    
    // Cột 4: Theo dõi ShopStore
    social: {
        title: "Theo Dõi ShopStore",
        platforms: [
            { name: "Facebook", icon: "f", link: "https://facebook.com/shopstore" },
            { name: "Instagram", icon: "📷", link: "https://instagram.com/shopstore" },
            { name: "LinkedIn", icon: "in", link: "https://linkedin.com/company/shopstore" }
        ]
    },
    
    // Cột 5: Tải ứng dụng ShopStore
    appDownload: {
        title: "Tải Ứng Dụng ShopStore",
        apps: [
            { name: "App Store", icon: "🍎", link: "#" },
            { name: "Google Play", icon: "🔵", link: "#" },
            { name: "AppGallery", icon: "🔴", link: "#" }
        ]
    },
    
    // Footer bottom
    footerBottom: {
        copyright: "© 2026 ShopStore. Tất cả các quyền được bảo lưu.",
        regions: ["Argentina", "Singapore", "Indonesia", "Thái Lan", "Malaysia", "Việt Nam", "Philippines", "Brazil", "Mexico", "Đài Loan"]
    }
};

// ===============================
// HÀM LẤY THÔNG TIN CỬA HÀNG
// ===============================

/**
 * Lấy thông tin cửa hàng
 */
function getShopInfo() {
    return shopInfo;
}

/**
 * Lấy thông tin liên lạc
 */
function getContactInfo() {
    return shopInfo.contact;
}

/**
 * Lấy danh sách sản phẩm
 */
function getProducts() {
    return shopInfo.products;
}

/**
 * Lấy sản phẩm theo ID
 */
function getProductById(id) {
    return shopInfo.products.find(product => product.id === id);
}

/**
 * Lấy sản phẩm theo danh mục
 */
function getProductsByCategory(category) {
    return shopInfo.products.filter(product => product.category === category);
}

/**
 * Lấy dịch vụ khách hàng
 */
function getCustomerService() {
    return shopInfo.customerService;
}

/**
 * Lấy thông tin về shop
 */
function getAboutShop() {
    return shopInfo.aboutShop;
}

/**
 * Lấy phương thức thanh toán
 */
function getPaymentMethods() {
    return shopInfo.paymentMethods;
}

/**
 * Lấy thông tin mạng xã hội
 */
function getSocial() {
    return shopInfo.social;
}

/**
 * Lấy thông tin download app
 */
function getAppDownload() {
    return shopInfo.appDownload;
}

/**
 * Lấy thông tin footer bottom
 */
function getFooterBottom() {
    return shopInfo.footerBottom;
}

/**
 * Hiển thị thông tin footer (để debug)
 */
function displayFooterInfo() {
    console.log("Footer Info:", {
        customerService: shopInfo.customerService,
        aboutShop: shopInfo.aboutShop,
        paymentMethods: shopInfo.paymentMethods,
        social: shopInfo.social,
        appDownload: shopInfo.appDownload,
        footerBottom: shopInfo.footerBottom
    });
}

// Gọi hàm khi trang load
document.addEventListener("DOMContentLoaded", function () {
    displayFooterInfo();
});
