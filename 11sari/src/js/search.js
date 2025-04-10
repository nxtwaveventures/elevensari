// Search functionality for 11Sari website

// Site content for searching - this would ideally be generated from a backend
const siteContent = [
    {
        title: "Home",
        path: "index.html",
        content: "Welcome to 11Sari, where we celebrate the rich heritage of Indian sarees through exquisite craftsmanship and timeless designs. Discover our premium collection of handcrafted sarees."
    },
    {
        title: "About Us",
        path: "about-us.html",
        content: "11Sari is dedicated to preserving the art of traditional saree making while bringing contemporary elegance to modern fashion. Learn about our journey, mission, and commitment to quality craftsmanship."
    },
    {
        title: "Saree Collection",
        path: "saree-collection.html",
        content: "Explore our diverse collection of handcrafted sarees including Banarasi, Kanchipuram, Patola, and designer pieces. Each saree tells a story of heritage and craftsmanship."
    },
    {
        title: "Bridal Gift Box",
        path: "bridal-gift-box.html",
        content: "Make your special day more memorable with our curated bridal gift boxes featuring luxury sarees and accessories. Perfect for weddings and celebrations."
    },
    {
        title: "11Suit Collection",
        path: "suit-collection.html",
        content: "Discover our premium collection of elegant suits designed with traditional craftsmanship and contemporary styles. Perfect for all occasions."
    },
    {
        title: "Blogs",
        path: "blogs.html",
        content: "Stay updated with the latest trends, styling tips, and stories from the world of traditional Indian textiles and fashion."
    },
    {
        title: "Know More",
        path: "know-more.html",
        content: "Dive deeper into the art of saree weaving, cultural significance, care instructions, and the stories behind our collections."
    },
    {
        title: "Contact Us",
        path: "contact-us.html",
        content: "Get in touch with our team for inquiries, orders, and customer support. We're here to assist you with your shopping experience."
    },
    {
        title: "Privacy Policy",
        path: "privacy-policy.html",
        content: "Learn about how we collect, use, and protect your personal information when you visit our website or make a purchase."
    },
    {
        title: "Terms of Service",
        path: "terms-of-service.html",
        content: "Understand the terms and conditions that govern your use of our website and services, including purchases, returns, and more."
    },
    {
        title: "Shipping Policy",
        path: "shipping-policy.html",
        content: "Information about our shipping methods, delivery times, costs, tracking, customs, returns, and exchanges for domestic and international orders."
    }
];

// Initialize search functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    const searchToggle = document.querySelector('.search-toggle');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchClose = document.querySelector('.search-close');
    const searchInput = document.querySelector('.search-modal-input');
    const searchResults = document.querySelector('.search-results');

    // Toggle search overlay
    searchToggle.addEventListener('click', function (e) {
        e.preventDefault();
        searchOverlay.classList.add('active');
        setTimeout(() => {
            searchInput.focus();
        }, 300);
    });

    // Close search overlay
    searchClose.addEventListener('click', function () {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
    });

    // Close on escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            searchOverlay.classList.remove('active');
            searchInput.value = '';
            searchResults.innerHTML = '';
        }
    });

    // Handle search input
    searchInput.addEventListener('input', function () {
        const query = this.value.trim().toLowerCase();

        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }

        const results = searchSite(query);
        displayResults(results, query);
    });

    // Search function
    function searchSite(query) {
        return siteContent.filter(item => {
            return item.title.toLowerCase().includes(query) ||
                item.content.toLowerCase().includes(query);
        });
    }

    // Display search results
    function displayResults(results, query) {
        searchResults.innerHTML = '';

        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="no-results">
                    <p>No results found for "${query}"</p>
                    <p>Try a different search term or check your spelling.</p>
                </div>
            `;
            return;
        }

        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.className = 'search-result-item';

            // Highlight the matching text in title
            let highlightedTitle = result.title;
            if (result.title.toLowerCase().includes(query)) {
                const regex = new RegExp(`(${query})`, 'gi');
                highlightedTitle = result.title.replace(regex, '<span class="search-highlight">$1</span>');
            }

            // Get a snippet of content around the query match
            let contentSnippet = result.content;
            if (result.content.toLowerCase().includes(query)) {
                const index = result.content.toLowerCase().indexOf(query);
                const start = Math.max(0, index - 40);
                const end = Math.min(result.content.length, index + query.length + 40);
                contentSnippet = '...' + result.content.substring(start, end) + '...';

                // Highlight the matching text in content
                const regex = new RegExp(`(${query})`, 'gi');
                contentSnippet = contentSnippet.replace(regex, '<span class="search-highlight">$1</span>');
            }

            resultElement.innerHTML = `
                <a href="${result.path}" class="search-result-title">${highlightedTitle}</a>
                <div class="search-result-path">${result.path}</div>
                <p class="search-result-content">${contentSnippet}</p>
            `;

            searchResults.appendChild(resultElement);
        });
    }

    // Handle click on search results
    searchResults.addEventListener('click', function (e) {
        if (e.target.closest('.search-result-title')) {
            searchOverlay.classList.remove('active');
        }
    });
}); 