// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('elysianFrame');
    
    // Set up load event listener
    iframe.addEventListener('load', hideLoading);
    
    // Handle iframe errors
    iframe.addEventListener('error', function() {
        const loading = document.getElementById('loading');
        loading.innerHTML = '<div style="color: #dc3545;">Failed to load ElysianAI. Please check your connection.</div>';
    });
});

function hideLoading() {
    const loading = document.getElementById('loading');
    const iframe = document.getElementById('elysianFrame');
    
    loading.style.display = 'none';
    iframe.style.display = 'block';
}
