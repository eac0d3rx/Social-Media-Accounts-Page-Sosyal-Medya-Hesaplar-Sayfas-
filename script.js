function goBack() {
     window.history.back();
   }
   
   function goForward() {
     window.history.forward();
   }
   
   function goHome() {
     window.location.href = "/";
   }
   
   document.querySelectorAll('.middle li').forEach(item => {
     item.addEventListener('click', event => {
       showAlert(item.getAttribute('data-content'));
     });
   });
   
   function showAlert(content) {
     const alertBox = document.querySelector('.alert');
     alertBox.style.display = 'block';
     alertBox.querySelector('p').textContent = content;
   }
   
   function closeAlert() {
     const alert = document.querySelector('.alert');
     alert.style.display = 'none';
   }
   