document.addEventListener('DOMContentLoaded', function() {
    function showSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('.content-section').forEach(function(section) {
            section.style.display = 'none';
        });

        // Show the selected section
        var selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.style.display = 'block';
        } else {
            console.error('No section found with ID:', sectionId);
        }
    }

    // Event listeners for navigation links
    // document.querySelectorAll('nav ul li a').forEach(function(link) {
    //     link.addEventListener('click', function(event) {
    //         event.preventDefault();
    //         var sectionName = this.textContent.trim().toLowerCase();
    //         var sectionId = sectionName === 'home' ? 'home-section' : sectionName + '-section'; // Special case for 'Home'
    //         showSection(sectionId);
    //     });
    // });
    document.querySelectorAll('nav ul li a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var sectionName = this.textContent.trim().toLowerCase();
            var sectionId = sectionName.replace(/\s/g, '') + '-section'; // Remove spaces and append '-section'
            showSection(sectionId);
        });
    });

    // Show the home section by default if you wish to
    showSection('home-section');
});