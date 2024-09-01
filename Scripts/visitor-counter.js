(() => {
    const apiUrl = 'data/visitor-count.json';

    const updateVisitorCount = async () => {
        try {
            // Get the current visitor count from the JSON file
            const response = await fetch(apiUrl);
            const data = await response.json();
            const countElem = document.getElementById('visitor-count');
            let count = data.count;

            // Update the count on the server if not already visited
            if (!getCookie('visited')) {
                // Simulate increment and update (not directly reflected in GitHub)
                count++;
                // Update the local count display
                countElem.textContent = count;
                setCookie('visited', 'true', 1); // Set cookie for 1 day
            } else {
                countElem.textContent = count;
            }
        } catch (error) {
            console.error('Error fetching visitor count:', error);
        }
    };

    // Function to get cookie value
    const getCookie = (name) => {
        const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
        return match ? decodeURIComponent(match[2]) : null;
    };

    // Function to set a cookie
    const setCookie = (name, value, days) => {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = `; expires=${date.toUTCString()}`;
        }
        document.cookie = `${name}=${encodeURIComponent(value || "")}${expires}; path=/`;
    };

    // Initialize visitor count on page load
    document.addEventListener('DOMContentLoaded', updateVisitorCount);
})();
