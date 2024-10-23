document.addEventListener('DOMContentLoaded', () => {
    let visitCount = localStorage.getItem('visitCount');
    
    if (visitCount) {
        visitCount = parseInt(visitCount) + 1;
    } else {
        visitCount = 1;
    }
    
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('visit-count').textContent = visitCount;
});

document.getElementById('contactForm').addEventListener('submit', function() {
    window.location.href = 'send.html';
});