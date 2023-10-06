document.getElementById('closeModal').addEventListener('click', function () {
    var modal = document.getElementById('myModal');
    var overlay = document.getElementById('modalOverlay');
  
    modal.classList.remove('active');
    overlay.style.display = 'none';
  });
  
  document.querySelector('.button').addEventListener('click', function () {
    var modal = document.getElementById('myModal');
    var overlay = document.getElementById('modalOverlay');
  
    modal.classList.add('active');
    overlay.style.display = 'block';
  });
  