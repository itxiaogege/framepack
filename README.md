# FramePack.work - 视频作品案例展示

这是一个现代化的视频案例展示网站，用于展示AI生成的各类视频作品。项目包含响应式布局设计、动态交互效果和现代UI风格。

## 项目结构

```
project/
│
├── css/
│   ├── main.css         # 主要样式文件
│   └── examples.css     # 案例页面特定样式
│
├── js/
│   ├── main.js          # 主要JavaScript功能
│   └── examples.js      # 案例页面特定功能
│
├── images/              # 项目图片资源
│
└── index.html           # 主页面
```

## 功能特点

### 视频案例展示
- 分类筛选功能，可按不同类型查看视频
- 响应式视频卡片布局
- 视频预览缩略图和播放功能

### 视频模态框
- 点击视频卡片打开详细视图
- 视频播放器集成
- 视频详情显示
- 分享功能（微博、微信、QQ）

### 用户体验
- 自适应布局，支持各种设备
- 平滑滚动和动画效果
- 延迟加载和分页功能
- 移动设备友好的导航

### 视频类别
- 文本生成视频
- AI场景生成
- 音频视觉化
- 高级视频定制
- 商业应用案例

## 技术栈

- HTML5
- CSS3 (Flexbox, Grid, 动画)
- JavaScript (ES6+)
- Bootstrap 5
- Lucide 图标库

## 使用方法

1. 克隆或下载本项目
2. 在浏览器中打开 `index.html` 
3. 浏览并与网站互动

## 自定义

### 添加新视频

要添加新的视频案例，按照以下格式向HTML中添加新的视频项：

```html
<div class="video-item col-lg-4 col-md-6 animate" data-category="你的类别">
    <div class="video-card" data-video="视频URL">
        <div class="thumbnail">
            <div class="play-icon">
                <i data-lucide="play"></i>
            </div>
            <img src="图片URL" alt="视频标题">
        </div>
        <div class="video-info">
            <h3>视频标题</h3>
            <p>视频描述</p>
            <div class="tags">
                <span>标签1</span>
                <span>标签2</span>
            </div>
        </div>
    </div>
</div>
```

### 添加新类别

要添加新的筛选类别，需要：

1. 在筛选按钮区域添加新按钮
```html
<button class="filter-btn" data-filter="新类别">新类别名称</button>
```

2. 确保对应的视频项添加了匹配的 `data-category` 属性

## 注意事项

- 页面使用了外部CDN资源，需要联网使用
- 视频播放功能依赖于浏览器对HTML5视频的支持
- 分享功能可能受到浏览器安全策略限制

## 许可

本项目仅供学习和演示使用。 