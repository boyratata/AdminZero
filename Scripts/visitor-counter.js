(function() {
    // Function to get cookie value by name
    function getCookie(name) {
        let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) return decodeURIComponent(match[2]);
        return null;
    }

    // Function to set a cookie
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // Function to increment visitor count
    function updateVisitorCount() {
        let visitorCount = parseInt(document.getElementById('visitor-count').textContent) || 0;
        let hasVisited = getCookie('visited');

        if (!hasVisited) {
            // Increment visitor count if not already counted
            visitorCount += 1;
            setCookie('visited', 'true', 1); // Set cookie for 1 day
        }

        document.getElementById('visitor-count').textContent = visitorCount;
    }

    // Initialize visitor count on page load
    updateVisitorCount();
})();