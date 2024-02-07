// Khai báo thư viện Axios
const axios = require('axios');

// URL của JSON Server
const jsonServerUrl = 'http://localhost:3000';

// Hàm lấy dữ liệu từ JSON Server
async function getData(endpoint) {
  try {
    const response = await axios.get(`${jsonServerUrl}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi lấy dữ liệu từ ${endpoint}:`, error.message);
    return null;
  }
}

// Hàm thống kê đơn hàng
async function thongKeDonHang() {
  // Lấy dữ liệu từ JSON Server
  const orders = await getData('orders');
  const orderDetails = await getData('order_details');
  const products = await getData('products');

  if (!orders || !orderDetails || !products) {
    console.error('Không thể lấy dữ liệu. Dừng lại.');
    return;
  }

  // Hàm tính tổng số lượng sản phẩm và tổng doanh thu từ một đơn hàng
  function tinhToanThongKe(orderId, orderDetails, products) {
    let tongSoLuong = 0;
    let tongDoanhThu = 0;

    orderDetails.forEach(detail => {
      if (detail.order_id === orderId) {
        const product = products.find(product => product.id === detail.product_id);
        if (product) {
          tongSoLuong += detail.quantity;
          tongDoanhThu += detail.quantity * product.price;
        }
      }
    });

    return {
      tongSoLuong,
      tongDoanhThu
    };
  }

  // Thống kê tổng số lượng sản phẩm và tổng doanh thu
  let tongSoLuongSanPham = 0;
  let tongDoanhThu = 0;

  orders.forEach(order => {
    const { tongSoLuong: soLuong, tongDoanhThu: doanhThu } = tinhToanThongKe(order.id, orderDetails, products);
    tongSoLuongSanPham += soLuong;
    tongDoanhThu += doanhThu;
  });

  // In kết quả thống kê
  console.log(`Tổng số lượng sản phẩm đã bán: ${tongSoLuongSanPham}`);
  console.log(`Tổng doanh thu: ${tongDoanhThu} VND`);
}

// Gọi hàm thống kê đơn hàng
thongKeDonHang();
