export default function smoothScroll(id) {
  const scrollPosition = document.getElementById('work').offsetTop;
  window.scroll({
    top: scrollPosition,
    behavior: 'smooth',
  })
}