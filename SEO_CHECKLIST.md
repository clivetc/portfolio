# ✅ SEO Setup Checklist

## 🎯 Immediate Actions (Do Now)

### 1. Update Domain URLs

- [ ] Open `pages/index.tsx`
- [ ] Find all instances of `https://your-domain.com`
- [ ] Replace with your actual domain (e.g., `https://tendaichikwape.com`)
- [ ] Update in:
  - [ ] Canonical URL
  - [ ] Open Graph URL
  - [ ] Twitter URL
  - [ ] JSON-LD URL
  - [ ] Image URLs

### 2. Update Sitemap

- [ ] Open `public/sitemap.xml`
- [ ] Replace `https://your-domain.com` with your domain
- [ ] Update `<lastmod>` dates to today's date

### 3. Update Robots.txt

- [ ] Open `public/robots.txt`
- [ ] Replace `https://your-domain.com` with your domain

## 🎨 Create Images (High Priority)

### Open Graph Image

- [ ] Create image: 1200 x 630 pixels
- [ ] Include: Your name, title, key technologies
- [ ] Use brand colors (purple/blue gradient)
- [ ] Save as `/public/og-image.png`
- [ ] Update path in `pages/index.tsx`

### Twitter Card Image

- [ ] Create image: 1200 x 675 pixels
- [ ] Similar design to OG image
- [ ] Save as `/public/twitter-image.png`
- [ ] Update path in `pages/index.tsx`

### Favicon Set

- [ ] Go to [Favicon Generator](https://realfavicongenerator.net/)
- [ ] Upload your logo/photo
- [ ] Download generated files
- [ ] Place in `/public/` folder:
  - [ ] `favicon.ico`
  - [ ] `apple-touch-icon.png`
  - [ ] `favicon-32x32.png`
  - [ ] `favicon-16x16.png`

## 🔍 Submit to Search Engines

### Google

- [ ] Go to [Google Search Console](https://search.google.com/search-console)
- [ ] Add your property
- [ ] Verify ownership
- [ ] Submit sitemap: `hhttps://www.tendaiclivechikwape.co.uk/sitemap.xml`
- [ ] Request indexing for home page

### Bing

- [ ] Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Add your site
- [ ] Verify ownership
- [ ] Submit sitemap

## 📊 Setup Analytics (Optional but Recommended)

### Google Analytics

- [ ] Create Google Analytics account
- [ ] Get tracking ID
- [ ] Add to `pages/_app.tsx` (see SEO_OPTIMIZATION_GUIDE.md)

### Vercel Analytics

- [ ] Already integrated! ✅
- [ ] Check dashboard after deployment

## 🔗 Update Social Profiles

### LinkedIn

- [ ] Add portfolio URL to profile
- [ ] Update headline with keywords
- [ ] Add skills: React, TypeScript, Node.js, etc.
- [ ] Share your portfolio post

### GitHub

- [ ] Add portfolio URL to profile
- [ ] Update bio with keywords
- [ ] Pin important repositories
- [ ] Add README to profile

### Twitter (Optional)

- [ ] Add portfolio URL to bio
- [ ] Tweet about your portfolio
- [ ] Use hashtags: #webdev #react #typescript

## 🧪 Test Everything

### SEO Tests

- [ ] [Google Rich Results Test](https://search.google.com/test/rich-results)
  - Paste your URL
  - Check for structured data errors
- [ ] [SEO Site Checkup](https://seositecheckup.com/)
  - Enter your domain
  - Review recommendations

### Social Media Preview

- [ ] [Facebook Debugger](https://developers.facebook.com/tools/debug/)
  - Enter your URL
  - Check preview
  - Click "Scrape Again" if needed
- [ ] [Twitter Card Validator](https://cards-dev.twitter.com/validator)
  - Enter your URL
  - Check preview
- [ ] [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
  - Enter your URL
  - Check preview

### Performance

- [ ] [PageSpeed Insights](https://pagespeed.web.dev/)
  - Enter your URL
  - Aim for 90+ score
- [ ] [GTmetrix](https://gtmetrix.com/)
  - Enter your URL
  - Check performance metrics

## 📱 Mobile Optimization

- [ ] Test on actual mobile device
- [ ] Check responsive design
- [ ] Test touch interactions
- [ ] Verify images load properly
- [ ] Check form usability

## 🎯 Content Optimization

### Images

- [ ] Add alt text to all images
- [ ] Use descriptive filenames
- [ ] Optimize image sizes
- [ ] Use Next.js Image component

### Links

- [ ] Check all internal links work
- [ ] Check all external links work
- [ ] Add `rel="noopener"` to external links ✅
- [ ] Ensure social links are correct ✅

## 📈 Monitor Results

### Week 1

- [ ] Check if site is indexed (Google: `site:your-domain.com`)
- [ ] Monitor Search Console for errors
- [ ] Check analytics for traffic

### Week 2-4

- [ ] Check ranking for your name
- [ ] Monitor click-through rates
- [ ] Review popular pages

### Monthly

- [ ] Update content
- [ ] Check search rankings
- [ ] Review analytics
- [ ] Update projects

## 🚀 Quick Wins

### Easy Improvements

- [x] Optimized title tag ✅
- [x] Meta description ✅
- [x] Keywords meta tag ✅
- [x] Open Graph tags ✅
- [x] Twitter Card tags ✅
- [x] Structured data ✅
- [x] Robots.txt ✅
- [x] Sitemap.xml ✅
- [ ] Social media images
- [ ] Submit to search engines

### Medium Effort

- [ ] Create blog (optional)
- [ ] Write case studies
- [ ] Add testimonials
- [ ] Create video intro

### Long Term

- [ ] Build backlinks
- [ ] Guest posting
- [ ] Speaking engagements
- [ ] Open source contributions

## 📝 Notes

### Current Status

- ✅ SEO meta tags added
- ✅ Structured data added
- ✅ Robots.txt created
- ✅ Sitemap.xml created
- ⏳ Domain URLs need updating
- ⏳ Social images need creating
- ⏳ Submit to search engines

### Priority Order

1. **High**: Update domain URLs
2. **High**: Create social media images
3. **High**: Submit to Google Search Console
4. **Medium**: Setup analytics
5. **Medium**: Update social profiles
6. **Low**: Advanced optimizations

---

**Start with the "Immediate Actions" section and work your way down! 🚀**

**Estimated Time:**

- Immediate Actions: 15 minutes
- Create Images: 30-60 minutes
- Submit to Search Engines: 30 minutes
- Total: ~2 hours for complete setup
