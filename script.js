document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Form submitted successfully!');
        // Submit form via AJAX if needed
    } else {
        alert('Please fill in all fields!');
    }
});
