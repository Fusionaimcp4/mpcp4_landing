# How to Add Blog Posts

This guide explains how to add new blog posts to the MCP4 website.

## Quick Start

1. Create a new markdown file in `content/blog/`
2. Add frontmatter metadata
3. Write your content
4. The blog will automatically appear on the site!

## File Structure

```
content/
  blog/
    your-blog-post.md
    another-post.md
```

## Blog Post Format

Every blog post must start with **frontmatter** (metadata) followed by the content:

```markdown
---
title: "Your Blog Post Title"
date: "2025-11-05"
author: "Author Name"
excerpt: "A brief summary of your post (1-2 sentences)"
image: "/path-to-image.png"
tags: ["tag1", "tag2", "tag3"]
---

# Your Blog Post Title

Your content goes here...

## Sections

Use markdown headings, lists, code blocks, etc.
```

## Frontmatter Fields

### Required Fields

- **title**: The title of your blog post (string)
- **date**: Publication date in YYYY-MM-DD format (string)
- **author**: Author name (string)
- **excerpt**: Brief summary for the blog listing page (string)

### Optional Fields

- **image**: Path to featured image (default: "/mcp4_logo.png")
- **tags**: Array of tags for categorization (array of strings)

## Markdown Syntax

You can use all standard markdown features:

### Headings
```markdown
# H1 Heading
## H2 Heading
### H3 Heading
```

### Text Formatting
```markdown
**bold text**
*italic text*
`code inline`
[link text](https://example.com)
```

### Lists
```markdown
- Item 1
- Item 2
  - Nested item

1. Numbered item
2. Another item
```

### Code Blocks
````markdown
```typescript
const example = "code block";
console.log(example);
```
````

### Quotes
```markdown
> This is a blockquote
```

### Images
```markdown
![Alt text](/path-to-image.png)
```

## File Naming

Use kebab-case for file names:
- ✅ `my-blog-post.md`
- ✅ `introducing-new-feature.md`
- ❌ `My Blog Post.md`
- ❌ `BlogPost.md`

## Example Blog Post

Create `content/blog/my-first-post.md`:

```markdown
---
title: "My First Blog Post"
date: "2025-11-05"
author: "John Doe"
excerpt: "This is my first blog post on the MCP4 blog. Learn about our latest features and updates."
image: "/mcp4_logo.png"
tags: ["announcement", "updates"]
---

# My First Blog Post

Welcome to my first post!

## What We Built

Here's what we've been working on:

- Feature 1
- Feature 2
- Feature 3

## Code Example

```typescript
const greeting = "Hello, MCP4!";
console.log(greeting);
```

## Conclusion

Thanks for reading!
```

## Images

### Add Images

1. Place images in the `public/` folder
2. Reference them in your markdown: `![Description](/image.png)`
3. Use in frontmatter: `image: "/image.png"`

### Image Best Practices

- Use descriptive file names
- Optimize images before uploading (compress, resize)
- Recommended sizes:
  - Featured images: 1200x630px
  - Inline images: Max 800px width

## Tags

Use consistent tags across posts:
- `announcement` - Company announcements
- `product` - Product updates
- `tutorial` - How-to guides
- `engineering` - Technical deep dives
- `ai` - AI-related content
- `fusion` - Fusion-specific content
- `voxe` - Voxe-specific content
- `neuroswitch` - NeuroSwitch-specific content

## Publishing Process

1. **Create**: Add your `.md` file to `content/blog/`
2. **Review**: Check your markdown renders correctly locally
3. **Commit**: Push to your repository
4. **Deploy**: The blog post appears automatically!

## Tips

### SEO-Friendly Posts

- Use descriptive titles (50-60 characters)
- Write compelling excerpts (150-160 characters)
- Include relevant keywords naturally
- Use proper heading hierarchy (H1 → H2 → H3)
- Add alt text to images

### Writing Best Practices

- Start with a strong hook
- Use short paragraphs (2-3 sentences)
- Include visuals and code examples
- End with a clear call-to-action
- Proofread before publishing

### Draft Posts

To save a draft without publishing, prefix the filename with `_`:
- `_draft-post.md` (will not appear on the blog)

Or set a future date in the frontmatter.

## Troubleshooting

### Post Not Appearing?

1. Check frontmatter is valid YAML
2. Verify date format (YYYY-MM-DD)
3. Ensure required fields are present
4. Check for markdown syntax errors

### Images Not Loading?

1. Verify image is in `public/` folder
2. Check path starts with `/`
3. Confirm image file exists
4. Try clearing browser cache

## Advanced: Custom Styling

Blog posts support all Tailwind CSS classes through markdown. For custom styling, you can use HTML in your markdown:

```html
<div class="bg-electric-blue/10 border border-electric-blue/20 rounded-lg p-6 my-4">
  <strong>Pro Tip:</strong> Custom styled content!
</div>
```

## Questions?

Need help adding blog posts? Contact the team or check the main README.md for more information.

Happy blogging! 🚀

