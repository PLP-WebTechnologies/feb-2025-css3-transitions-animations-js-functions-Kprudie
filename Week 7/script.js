function triggerAnimation() {
  const box = document.getElementById('box');

  // Toggle animation
  box.classList.toggle('animate');

  // Save the animation state in localStorage
  const isAnimated = box.classList.contains('animate');
  localStorage.setItem('animationActive', isAnimated);
}

// When the page loads, check if animation was active
window.onload = () => {
  const savedState = localStorage.getItem('animationActive');
  if (savedState === 'true') {
    document.getElementById('box').classList.add('animate');
  }
};