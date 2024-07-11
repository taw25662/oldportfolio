const toPtgsButton = document.getElementById('translate-ptgs');
const toEnButton = document.getElementById('translate-en');
const bioEn = document.getElementById('bio-en');
const bioPtgs = document.getElementById('bio-ptgs');

document.addEventListener('DOMContentLoaded', function() {
  bioEn.classList.add('fade-in');
  toEnButton.classList.add('active');

  // Function to handle transition in
  function transitionIn(element) {
    element.classList.remove('fade-out');
    setTimeout(() => {
      element.classList.add('fade-in');
    }, 50); // Slight delay to ensure smooth transition
  }
  
  function transitionOut(element) {
    element.classList.remove('fade-in');
    setTimeout(() => {
      element.classList.add('fade-out');
    }, 50); // Slight delay to ensure smooth transition
  }
    
    // Trigger cleanup after animation ends
    setTimeout(() => {
      element.classList.remove('slide-out');
    }, 500); // Adjust timing to match CSS animation duration
  

  toPtgsButton.addEventListener('click', function() {
    if (bioEn.classList.contains('fade-in')) {
      transitionOut(bioEn);
      bioEn.classList.add('hidden');
      transitionIn(bioPtgs);
      bioPtgs.classList.remove('hidden');
      
      // Update button styles
      toEnButton.classList.remove('active');
      toPtgsButton.classList.add('active');
    }
  });

  toEnButton.addEventListener('click', function() {
    if (bioPtgs.classList.contains('fade-in')) {
      transitionOut(bioPtgs);
      bioPtgs.classList.add('hidden');
      transitionIn(bioEn);
      bioEn.classList.remove('hidden');
      
      // Update button styles
      toPtgsButton.classList.remove('active');
      toEnButton.classList.add('active');
    }
  });

});


