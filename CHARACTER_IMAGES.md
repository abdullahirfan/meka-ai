# Character Images for AI Agents

## Overview
Each AI agent should have a professional character image that represents their human-equivalent persona. These images should be placed in the project root directory.

## Character Personas

### Harper (harper-character.jpg)
**Persona**: Friendly, professional customer service representative
- **Description**: Female professional with headset, warm smile, business casual attire
- **Setting**: Modern office background
- **Vibe**: Approachable, helpful, always available
- **Keywords**: customer service, friendly, professional, headset, warm

### Lucy (lucy-character.jpg)
**Persona**: Efficient restaurant/hospitality professional
- **Description**: Professional server or restaurant manager, organized and detail-oriented
- **Setting**: Modern restaurant or hotel setting
- **Vibe**: Efficient, accurate, customer-focused
- **Keywords**: hospitality, organized, professional, restaurant, efficient

### Polly (polly-character.jpg)
**Persona**: Knowledgeable legal professional or librarian
- **Description**: Professional woman in business attire, glasses, surrounded by books/documents
- **Setting**: Law library or professional office
- **Vibe**: Intelligent, precise, trustworthy
- **Keywords**: legal, professional, intelligent, books, precise

### NL2SQL (nl2sql-character.jpg)
**Persona**: Tech-savvy data analyst
- **Description**: Professional data analyst with modern tech aesthetic
- **Setting**: Modern tech office with screens/data visualizations
- **Vibe**: Smart, analytical, efficient
- **Keywords**: data, analyst, tech, modern, analytical

## How to Create Images

### Option 1: Apple Image Playground
1. Open Image Playground on your Mac
2. Use the persona descriptions above
3. Generate in "Illustration" or "Sketch" style for consistency
4. Save as JPG with the specified filenames

### Option 2: AI Image Generation Tools
Use tools like:
- DALL-E 3
- Midjourney
- Stable Diffusion
- Adobe Firefly

### Option 3: Stock Photos
Find professional stock photos that match the personas from:
- Unsplash
- Pexels
- Adobe Stock

## Image Specifications
- **Format**: JPG or PNG
- **Size**: 800x800px (square) or 800x1000px (portrait)
- **Quality**: High resolution for web
- **Style**: Consistent across all four characters
- **Background**: Professional, not distracting

## Implementation

Once you have the images, place them in the project root:
```
/Users/abdullahirfan/Projects/meka-ai/
├── harper-character.jpg
├── lucy-character.jpg
├── polly-character.jpg
└── nl2sql-character.jpg
```

Then update each solution page to include the character image in the hero section.

## Example HTML Update

In each solution page (harper.html, lucy.html, etc.), replace the emoji in the hero section:

```html
<!-- Before -->
<div style="font-size: 4rem; margin-bottom: var(--spacing-md);">🎙️</div>

<!-- After -->
<div style="margin-bottom: var(--spacing-md);">
    <img src="harper-character.jpg" alt="Harper AI Agent" 
         style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover; box-shadow: 0 10px 40px rgba(0,119,255,0.3);">
</div>
```

## Commit and Deploy

After adding the images:
```bash
cd /Users/abdullahirfan/Projects/meka-ai
git add harper-character.jpg lucy-character.jpg polly-character.jpg nl2sql-character.jpg
git add harper.html lucy.html polly.html nl2sql.html
git commit -m "Add character images for AI agents"
git push
```

The changes will be live on https://abdullahirfan.github.io/meka-ai/ in 1-2 minutes.
