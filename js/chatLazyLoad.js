function lazyLoadIframe() {
    // Create an observer instance
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // If the iframe is intersecting with the viewport, load its content
            if (entry.isIntersecting) {
                loadIframeContent();
                // Stop observing once the iframe is loaded
                observer.disconnect();
            }
        });
    });

    // Target the iframe container
    const iframeContainer = document.getElementById('iframeContainer');
    // Start observing the iframe container
    observer.observe(iframeContainer);
}

function loadIframeContent() {
    // Create the iframe element
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www3.cbox.ws/box/?boxid=3520595&boxtag=KdKEOM';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.allowtransparency = 'yes';
    iframe.allow = 'autoplay';
    iframe.allow = 'credentials';
    iframe.sandbox = 'allow-same-origin allow-scripts';
    iframe.frameBorder = '0';
    iframe.marginHeight = '0';
    iframe.marginWidth = '0';
    iframe.scrolling = 'auto';
    iframe.loading = 'lazy';

    // Append the iframe to the container
    const iframeContainer = document.getElementById('iframeContainer');
    iframeContainer.appendChild(iframe);
}

// Call the lazyLoadIframe function when the page loads
window.addEventListener('load', lazyLoadIframe);