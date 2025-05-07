# https://www.framepack.work - Video Showcase

This is a modern video showcase website for displaying various AI-generated video works. The project features a responsive layout, dynamic interactive effects, and a modern UI style.

## Project Structure

```
project/
│
├── css/
│   ├── main.css         # Main stylesheet
│   └── examples.css     # Styles specific to the examples page
│
├── js/
│   ├── main.js          # Main JavaScript functionality
│   └── examples.js      # JavaScript for the examples page
│
├── images/              # Image assets
│
└── index.html           # Main page
```

## Features

### Video Showcase
- Category filtering to view videos by type
- Responsive video card layout
- Video preview thumbnails and playback

### Video Modal
- Click video cards to open detailed view
- Integrated video player
- Display of video details
- Sharing features (Weibo, WeChat, QQ)

### User Experience
- Adaptive layout for all devices
- Smooth scrolling and animation effects
- Lazy loading and pagination
- Mobile-friendly navigation

### Video Categories
- Text-to-Video Generation
- AI Scene Generation
- Audio Visualization
- Advanced Video Customization
- Commercial Application Cases

## Tech Stack

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (ES6+)
- Bootstrap 5
- Lucide Icon Library

## Usage

1. Clone or download this project
2. Open `index.html` in your browser
3. Browse and interact with the website

## Customization

### Adding a New Video

To add a new video case, insert a new video item into the HTML using the following format:

```html
<div class="video-item col-lg-4 col-md-6 animate" data-category="Your Category">
    <div class="video-card" data-video="Video URL">
        <div class="thumbnail">
            <div class="play-icon">
                <i data-lucide="play"></i>
            </div>
            <img src="Image URL" alt="Video Title">
        </div>
        <div class="video-info">
            <h3>Video Title</h3>
            <p>Video Description</p>
            <div class="tags">
                <span>Tag 1</span>
                <span>Tag 2</span>
            </div>
        </div>
    </div>
</div>
```

### Adding a New Category

To add a new filter category:

1. Add a new button in the filter button area:
```html
<button class="filter-btn" data-filter="New Category">New Category Name</button>
```

2. Make sure the corresponding video items have the matching `data-category` attribute.

## Notes

- The page uses external CDN resources and requires an internet connection
- Video playback depends on browser support for HTML5 video
- Sharing features may be limited by browser security policies
- Learning address <a href="https://www.framepack.work">FramePack: Revolutionary AI Video Generation</a>

## License

This project is for learning and demonstration purposes only. 
