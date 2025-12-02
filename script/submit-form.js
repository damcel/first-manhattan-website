document.querySelector('.hidden-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting normally
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    // You can handle form data here (e.g., send it to a server)
    console.log(`Name: ${name}, Email: ${email}`);
  
    // Optionally, hide the form again after submission
    this.style.display = 'none';
  });