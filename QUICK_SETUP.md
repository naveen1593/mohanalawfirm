# Quick Setup Guide

## ⚡ 5-Minute Setup

Follow these steps to get your website live:

### Step 1: Update Contact Information (2 minutes)

Open `index.html` in a text editor and find:

**Line ~290 - Phone/WhatsApp:**
```html
<a href="tel:+919876543210">+91 9876 543 210</a>
<p class="note">(Update with your actual number)</p>
```
Replace `+919876543210` with your actual phone number.

**Line ~296 - Email:**
```html
<a href="mailto:contact@mohanalalawfirm.com">contact@mohanalalawfirm.com</a>
<p class="note">(Update with your actual email)</p>
```
Replace `contact@mohanalalawfirm.com` with your actual email.

### Step 2: Setup Form Submission (2 minutes)

1. Go to **https://formspree.io**
2. Click "Sign Up" → Create free account
3. Click "Create a new form"
4. Enter your email address where you want to receive messages
5. Click "Create Form"
6. Copy the **Form ID** (looks like: `abc123xyz`)
7. Open `index.html` and find line ~265:
   ```html
   <action="https://formspree.io/f/YOUR_FORM_ID"
   ```
8. Replace `YOUR_FORM_ID` with your actual ID

### Step 3: Test Locally (1 minute)

1. Open `index.html` with your browser
2. Scroll down to "Contact Us" section
3. Fill the form and click "Submit Your Query"
4. Check your email - you should receive the submission

### Step 4: Deploy (Choose One)

#### **Easiest: Netlify**
1. Go to https://netlify.com
2. Sign up with GitHub/Email
3. Drag your entire folder → Drop on Netlify
4. Wait 30 seconds → Your site is LIVE!
5. Custom domain costs $12/year (optional)

#### **Alternative: Vercel**
1. Go to https://vercel.com
2. Click "New Project"
3. Upload your folder
4. Deploy instantly

#### **Free: GitHub Pages**
1. Create GitHub account
2. Create new repo: `username.github.io`
3. Upload files
4. Enable Pages in Settings
5. Live at `https://username.github.io`

---

## 📝 Content Customization

### Change Service Descriptions

Find the Services section (~line 200) and edit:
```html
<h3>Family Law Services</h3>
<ul>
    <li>Divorce consultation</li>
    <li>Maintenance and child custody guidance</li>
    <!-- Edit these bullets -->
</ul>
```

### Update Consultation Hours

Find "Consultation Timing:" (~line 301) and modify:
```html
<strong>Consultation Timing:</strong>
<p>Monday – Saturday: 6:00 PM to 9:00 PM</p>
<p>Sunday: Online consultation available on request</p>
```

### Change Hero Title & Description

Find section ~line 39 and edit:
```html
<h1>Mohana Law Firm</h1>
<p class="subtitle">Your custom subtitle here</p>
<p class="lead">Your description here...</p>
```

---

## 🎨 Design Customization

### Change Primary Color (Blue to Another)

In `styles.css`, find and replace:
- `#1a3a52` → Your color
- `#2c5aa0` → Your darker shade
- Keep `#ffd700` for accent (gold)

Example: Change to green
1. Find all `#1a3a52` → Replace with `#1b5e20`
2. Find all `#2c5aa0` → Replace with `#388e3c`

### Change Font

In `styles.css`, line 7:
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, ...
```

Replace with any of these:
- `'Georgia', serif` - Classic
- `'Trebuchet MS', sans-serif` - Modern
- `'Courier New', monospace` - Technical

---

## ✅ Quality Checklist

Before going live, verify:

- [ ] Contact number is correct
- [ ] Email address is correct
- [ ] Formspree form ID is set
- [ ] Test form submission works
- [ ] All service descriptions are accurate
- [ ] Consultation hours are correct
- [ ] Website looks good on mobile (resize browser)
- [ ] All links work (click nav bar links)
- [ ] No broken images

---

## 📱 Mobile Responsive Check

The website is fully responsive. To test:

1. **Desktop**: Check in browser at full width
2. **Tablet**: Resize browser to ~768px width
3. **Mobile**: Resize to ~375px width

Everything should look good!

---

## 🚀 Advanced: Custom Domain

After deploying to Netlify/Vercel:

1. Buy domain from: GoDaddy, Namecheap, etc.
2. Update domain DNS to point to your host
3. In Netlify: Domain Settings → Add custom domain
4. Wait 24 hours for DNS to propagate

Recommended: `mohanalalawfirm.com` or `mohanalalegalconsult.in`

---

## 📧 Important: Email Verification

After setting up Formspree:

1. Formspree will send you a verification email
2. **MUST click the verification link** in that email
3. Without verification, form won't work
4. Check spam folder if email is missing

---

## ❓ Common Issues

**Issue**: Form not sending
- **Fix**: Verify you clicked the verification email link in Formspree

**Issue**: Website shows old cached version
- **Fix**: Press Ctrl+Shift+R (or Cmd+Shift+R on Mac) to hard refresh

**Issue**: Contact info not showing up
- **Fix**: Check the text isn't white (invisible on white background)

**Issue**: Mobile looks weird
- **Fix**: Check viewport meta tag is in `<head>` tag

---

## 📞 Next Steps

1. ✅ Update contact info
2. ✅ Setup Formspree form
3. ✅ Test locally
4. ✅ Deploy to Netlify
5. ✅ Get custom domain (optional)
6. ✅ Share with clients!

**Questions?** Check README.md for detailed information.
