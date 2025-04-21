/**
 * examples.js - FramePack.work Examples Page Interaction Script
 * Contains video filtering, video modal and animation effects
 */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animation effects
    initAnimations();
    
    // Initialize filtering functionality
    initFilters();
    
    // Initialize video modal
    initVideoModal();
    
    // Initialize load more functionality
    initLoadMore();
});

// Initialize animation effects
function initAnimations() {
    const animatedElements = document.querySelectorAll('.animate');
    
    // Function to check if element is in viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    };
    
    // Function to show element
    const showElement = (element) => {
        element.classList.add('show');
    };
    
    // Initial check for all elements
    const checkAnimations = () => {
        animatedElements.forEach(element => {
            if (isInViewport(element)) {
                showElement(element);
            }
        });
    };
    
    // Check elements on page scroll
    window.addEventListener('scroll', checkAnimations);
    
    // Initial check
    checkAnimations();
}

// Initialize filtering functionality
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const videoItems = document.querySelectorAll('.video-item');
    
    // Category filtering functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to current button
            this.classList.add('active');
            
            // Get filter category
            const filterValue = this.getAttribute('data-filter');
            
            // Filter videos
            videoItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                } else {
                    if (item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
}

// Initialize video modal
function initVideoModal() {
    const videoCards = document.querySelectorAll('.video-card');
    const modal = document.querySelector('.video-modal');
    const closeBtn = document.querySelector('.close-modal');
    const videoPlayer = document.querySelector('.video-player-container video');
    const modalTitle = document.querySelector('.modal-info h2');
    const modalDescription = document.querySelector('.modal-info p');
    
    // Open modal
    // videoCards.forEach(card => {
    //     card.addEventListener('click', function() {
    //         const videoSrc = this.getAttribute('data-video');
    //         const videoTitle = this.querySelector('.video-info h3').textContent;
    //         const videoDesc = this.querySelector('.video-info p').textContent;
            
    //         // Set video source
    //         if (videoPlayer) {
    //             videoPlayer.src = videoSrc;
    //         }
            
    //         // Set title and description
    //         if (modalTitle) modalTitle.textContent = videoTitle;
    //         if (modalDescription) modalDescription.textContent = videoDesc;
            
    //         // Show modal
    //         modal.classList.add('show');
    //         document.body.style.overflow = 'hidden'; // Prevent background scrolling
    //     });
    // });
    
    // Close modal
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Close by clicking modal background
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal function
    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
        
        // If video exists, stop playback
        if (videoPlayer) {
            videoPlayer.pause();
            videoPlayer.currentTime = 0;
        }
    }
    
    // ESC key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
}

// Initialize load more functionality
function initLoadMore() {
    const loadMoreBtn = document.querySelector('.load-more-btn');
    const videoGallery = document.querySelector('.video-gallery .row');
    let currentPage = 1;
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // This should be AJAX logic to load more videos
            // For demonstration, we simulate loading more videos
            
            // Show loading state
            loadMoreBtn.textContent = 'Loading...';
            loadMoreBtn.disabled = true;
            
            // Simulate network request delay
            setTimeout(function() {
                // Clone existing video items as examples
                const existingItems = document.querySelectorAll('.video-item');
                
                if (existingItems.length > 0) {
                    // Simulate loading more videos (max 2 pages)
                    if (currentPage < 2) {
                        for (let i = 0; i < Math.min(existingItems.length, 3); i++) {
                            const clone = existingItems[i].cloneNode(true);
                            
                            // Change some data to show difference
                            const title = clone.querySelector('h3');
                            if (title) {
                                title.textContent = title.textContent + ' ' + (currentPage + 1);
                            }
                            
                            // Add to gallery
                            videoGallery.appendChild(clone);
                        }
                        
                        // Reinitialize video cards click events
                        initVideoModal();
                        
                        // Update page counter
                        currentPage++;
                        
                        // Restore button state
                        loadMoreBtn.textContent = 'Load More Videos';
                        loadMoreBtn.disabled = false;
                    } else {
                        // Already loaded enough pages, hide button
                        loadMoreBtn.textContent = 'No More Videos';
                        loadMoreBtn.disabled = true;
                    }
                }
            }, 1000);
        });
    }
}

// Social sharing functionality
function shareVideo(platform, videoUrl, title) {
    let shareUrl;
    
    switch(platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(videoUrl)}&text=${encodeURIComponent(title)}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(videoUrl)}&t=${encodeURIComponent(title)}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(videoUrl)}`;
            break;
        default:
            shareUrl = videoUrl;
    }
    
    // Open share window
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=500');
    }
} 
