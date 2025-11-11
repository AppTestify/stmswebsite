# Hostinger Deployment Guide

## Build Complete! ✅

Your production build has been created in the `dist` folder.

## Upload Instructions for Hostinger

### Step 1: Access Hostinger File Manager
1. Log in to your Hostinger hPanel
2. Navigate to **File Manager**
3. Go to the `public_html` directory (or your domain's root directory)

### Step 2: Upload Files
1. **Select ALL contents** from the `dist` folder on your local computer
2. Upload them to the `public_html` directory in Hostinger
3. Make sure to maintain the folder structure:
   - `index.html` (root)
   - `assets/` folder
   - `images/` folder
   - `.htaccess` file

### Step 3: Verify Upload
After uploading, your `public_html` directory should contain:
```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── index-*.js
│   ├── index-*.css
│   ├── react-vendor-*.js
│   └── schoolLogo-*.webp
└── images/
    ├── activities/
    ├── administrative/
    ├── artAndCraft/
    ├── audotoriam/
    ├── awards/
    ├── clasroom/
    ├── college-view/
    ├── computerLab/
    ├── cycle stand/
    ├── entryGate/
    ├── gallaryRoom/
    ├── gardening/
    ├── library/
    ├── musicRoom/
    ├── notices/
    ├── otherFacilities/
    ├── PCBLab/
    ├── picnic/
    ├── playground/
    ├── principal office/
    ├── rangoli/
    ├── sickRoom/
    ├── slider/
    ├── solodance/
    ├── testimonials/
    └── ... (all other image folders)
```

### Step 4: Set File Permissions
- Ensure `index.html` has read permissions (644)
- Ensure `.htaccess` has read permissions (644)
- Ensure folders have execute permissions (755)

### Step 5: Test Your Website
1. Visit your domain (e.g., `https://yourdomain.com`)
2. Test all pages and routes
3. Verify images and PDFs are loading correctly

## Important Notes

- **React Router**: The `.htaccess` file is included to handle client-side routing
- **Base Path**: The build is configured for root domain (`/`)
- **All Assets**: All images and PDFs are included in the build
- **Production Ready**: The build is optimized and minified

## Troubleshooting

### If pages show 404 errors:
- Verify `.htaccess` file is uploaded
- Check that mod_rewrite is enabled on your server
- Contact Hostinger support if needed

### If images don't load:
- Verify all image folders are uploaded
- Check file paths are correct
- Clear browser cache

### If PDFs don't open:
- Verify PDF files are in the correct folders
- Check file permissions
- Test PDF links directly

## Build Information

- **Build Date**: Generated on build
- **Build Tool**: Vite
- **Framework**: React 19.1.1
- **Router**: React Router DOM 7.9.3

## Need Help?

If you encounter any issues:
1. Check Hostinger documentation
2. Verify all files are uploaded correctly
3. Check server error logs in hPanel
4. Contact Hostinger support

---

**Ready to Deploy!** 🚀

