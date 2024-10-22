document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the current review count from localStorage
    let reviewCount = localStorage.getItem('reviewCount');

    // If there is no reviewCount in localStorage, initialize it to 0
    if (!reviewCount) {
        reviewCount = 0;
    }

    // Increment the review count
    reviewCount++;

    // Update the review count in localStorage
    localStorage.setItem('reviewCount', reviewCount);

    // Display the updated review count on the page
    document.getElementById('reviewCount').textContent = reviewCount;
});