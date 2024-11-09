document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        
        // Remove 'active' class from all content sections
        document.querySelectorAll('.content').forEach(section => {
            section.classList.remove('active');
        });
        
        // Add 'active' class to the target content section
        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

// Initialize the default active section
document.getElementById('home').classList.add('active');