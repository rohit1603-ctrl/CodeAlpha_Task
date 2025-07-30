const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const galleryItems = document.querySelectorAll('.gallery-item');
const filterButtons = document.querySelectorAll('.filters button');

let currentIndex = 0;
let images = Array.from(galleryItems);

// Open Lightbox
galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentIndex = index;
    showImage();
    lightbox.style.display = 'block';
  });
});

function showImage() {
  const img = images[currentIndex].querySelector('img');
  lightboxImg.src = img.src;
}

// Close Lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Next/Prev Navigation
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
});

// Filter by Category
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    images = [];

    galleryItems.forEach(item => {
      const category = item.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        item.style.display = 'block';
        images.push(item);
      } else {
        item.style.display = 'none';
      }
    });
  });
});
