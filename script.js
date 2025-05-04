const modal = document.querySelector('.img-modal');
const modalImg = document.querySelector('.img-modal img');
const closeBtn = document.querySelector('.img-modal .close');

document.querySelectorAll('.profile-img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  modalImg.src = '';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    modalImg.src = '';
  }
});
