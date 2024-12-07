const gallery = document.querySelector('.gallery');
const images = [
  'ref1.jpg', 'ref2.jpg', 'ref3.jpg', 'ref4.jpg', 'ref5.jpg', 'ref6.jpg'
]; // รายการไฟล์รูปที่มีในโฟลเดอร์ images
const maxImagesToShow = 5; // จำนวนรูปที่แสดง
let index = 0;

// ฟังก์ชันสำหรับอัพเดตแถบรูป
function updateGallery() {
  const currentImages = [];

  // แสดงรูปที่ 1-5
  for (let i = 0; i < maxImagesToShow; i++) {
    const imgIndex = (index + i) % images.length;
    const imgElement = document.createElement('img');
    imgElement.src = `images/${images[imgIndex]}`; // ดึงรูปจากโฟลเดอร์ images/

    // เพิ่มเหตุการณ์การคลิกที่รูปในแถบ
    imgElement.addEventListener('click', () => {
      const mainImage = document.getElementById('main-image');
      mainImage.src = `images/${images[imgIndex]}`; // เปลี่ยนรูปหลัก
    });

    currentImages.push(imgElement);
  }

  // เคลียร์ gallery เดิม
  gallery.innerHTML = '';

  // แทรกรูปใหม่เข้าไปใน gallery
  currentImages.forEach(imgElement => {
    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('gallery-image');
    imgWrapper.appendChild(imgElement);
    gallery.appendChild(imgWrapper);
  });

  // อัพเดต index สำหรับแสดงรูปในแถบ
  index = (index + 1) % images.length;
}

// เริ่มแสดงรูปเมื่อเปิดเว็บ
document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.getElementById('main-image');
  mainImage.src = `images/ref0.jpg`;  // เปลี่ยนรูปหลักให้แสดงเป็น ref0.jpg
  updateGallery();  // อัพเดตแถบรูป

  // เปลี่ยนรูปทุกๆ 3 วินาที
  setInterval(updateGallery, 3000);
});
