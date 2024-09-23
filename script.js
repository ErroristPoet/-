document.addEventListener('DOMContentLoaded', function () {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
  
    // Animate the first button (roll in from right)
    button1.style.animation = 'rollInFromRight 3.14s ease-in-out forwards';
  
    // Animate the second button (roll in from left)
    button2.style.animation = 'rollInFromLeft 3.14s ease-in-out forwards';
  });