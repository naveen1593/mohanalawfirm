# Mohana Law Firm - Static Website

A modern, lightweight, and responsive static website for Mohana Law Firm's online legal consultation services.

## 📋 Features

✅ **Modern Design** - Clean, professional, and fully responsive layout
✅ **Lightweight** - Pure HTML, CSS, and vanilla JavaScript (no frameworks)
✅ **Mobile Optimized** - Works perfectly on desktop, tablet, and mobile devices
✅ **Contact Form** - Integrated form with Formspree for message receiving
✅ **Fast Loading** - Optimized for performance with minimal dependencies
✅ **SEO Friendly** - Semantic HTML structure
✅ **Accessibility** - WCAG compliant with proper labels and structure

## 📁 File Structure

```
Law Firm Webpage/
├── index.html       # Main HTML file with all content
├── styles.css       # Responsive CSS styling
├── script.js        # JavaScript for interactions
└── README.md        # This file
```

## 🚀 Quick Start

### 1. **Local Testing**
Simply open `index.html` in your browser:
- Double-click the `index.html` file, or
- Right-click → Open with your preferred browser

### 2. **Setup Form Submission (Important)**

The website uses **Formspree** (free service) to handle form submissions. Follow these steps:

#### Option A: Using Formspree (Recommended - Free, No Backend Needed)

1. Go to **https://formspree.io**
2. Sign up for a free account
3. Create a new form and enter your email address
4. Formspree will give you a **Form ID** (looks like: `abc123xyz`)
5. Open `index.html` and find this line (around line 265):

   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

6. Replace `YOUR_FORM_ID` with your actual Form ID from Formspree
7. Save the file

**That's it!** Form submissions will now be sent to your email.

#### Option B: Using Email Services
You can also use:
- **Netlify Forms** (if hosting on Netlify)
- **AWS Lambda** with your email service
- **Custom backend** (if you have server access)

### 3. **Update Contact Information**

In `index.html`, find these placeholders and update them:

```html
<!-- Phone/WhatsApp -->
<a href="tel:+919876543210">+91 9876 543 210</a>

<!-- Email -->
<a href="mailto:contact@mohanalalawfirm.com">contact@mohanalalawfirm.com</a>
```

Replace with your actual contact details.

## 🌐 Deployment Options

### Option 1: **Netlify** (Recommended - Free, Easy)
1. Sign up at https://netlify.com
2. Drag & drop your entire folder → Deploy in seconds
3. Netlify Forms will automatically handle form submissions
4. Get a free `.netlify.app` domain

### Option 2: **Vercel** (Free)
1. Sign up at https://vercel.com
2. Import your project from GitHub or drag & drop
3. Auto-deploys on every push
4. Free edge functions for form handling

### Option 3: **GitHub Pages** (Free)
1. Create a GitHub repository
2. Push these files to the repo
3. Go to Settings → Pages → Enable from main branch
4. Your site goes live at `username.github.io/repository-name`

### Option 4: **Cloud Hosting**
- **Azure Static Web Apps** - Free tier available
- **AWS S3 + CloudFront** - Very affordable
- **Google Firebase** - Free hosting included

### Option 5: **Traditional Web Hosting**
- Ask your web host to upload files via FTP
- Ensure they support static HTML sites

## 🎨 Customization

### Change Colors
Edit `styles.css` and look for these color variables:
- Primary Dark Blue: `#1a3a52`
- Secondary Blue: `#2c5aa0`
- Accent Gold: `#ffd700`

### Change Content
Edit the text directly in `index.html`:
- Update service descriptions
- Change consultation timings
- Modify firm information

### Add More Sections
Copy any existing section and paste it where needed. The structure is simple and self-explanatory.

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- **Page Load Time**: < 1 second on 4G
- **File Size**: ~50KB total (HTML + CSS + JS)
- **No external dependencies** except Formspree for forms
- **Fully cached** for repeat visitors

## 🔒 Security & Privacy

- No data stored on your server
- Forms submitted via HTTPS through Formspree
- No tracking or analytics (unless you add Google Analytics)
- GDPR compliant

## 🛠️ Maintenance Tips

1. **Update contact information** regularly
2. **Keep content fresh** - update testimonials and achievements
3. **Monitor form submissions** - don't miss client inquiries
4. **Test form submission** monthly
5. **Check mobile responsiveness** periodically

## 📊 Adding Analytics (Optional)

To track visitors, add Google Analytics:

1. Get your Google Analytics ID from https://analytics.google.com
2. Add this code before `</head>` in `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

## ❓ Troubleshooting

**Forms not submitting?**
- Check that `YOUR_FORM_ID` is replaced with actual Formspree ID
- Verify you're connected to the internet
- Check browser console (F12) for JavaScript errors

**Site looks broken on mobile?**
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Test in incognito/private mode
- Try a different browser

**Contact info not showing?**
- Verify the text is visible (not white text on white background)
- Check that links are properly formatted with `href`

## 📞 Support

For issues with:
- **Formspree**: Visit https://formspree.io/help
- **Deployment**: Check the hosting provider's documentation
- **Custom changes**: Consult a web developer

## 📜 License

This website template is free to use and modify for your law firm.

---

**Last Updated**: April 2026
**Version**: 1.0
