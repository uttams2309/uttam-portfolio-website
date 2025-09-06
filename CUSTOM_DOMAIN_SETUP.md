# Custom Domain Setup Guide for uttamsingh.social

## Overview
This guide will help you configure the custom domain `uttamsingh.social` for your portfolio website hosted on Netlify.

## Prerequisites
- Your portfolio website is already deployed on Netlify
- You own the domain `uttamsingh.social`
- You have access to your domain registrar's DNS settings

## Step 1: Configure Custom Domain on Netlify

1. **Log in to Netlify Dashboard**
   - Go to https://app.netlify.com/
   - Navigate to your portfolio site

2. **Add Custom Domain**
   - Go to Site Settings → Domain Management
   - Click "Add custom domain"
   - Enter: `uttamsingh.social`
   - Click "Verify"
   - Also add: `www.uttamsingh.social` (recommended)

3. **Get DNS Configuration Details**
   - Netlify will provide you with DNS records to configure
   - Note down the IP addresses or CNAME records provided

## Step 2: Configure DNS Records

### Option A: Using A Records (Recommended)
Add these A records to your domain's DNS settings:

```
Type: A
Name: @ (or root/apex)
Value: 75.2.60.5

Type: A  
Name: @ (or root/apex)
Value: 99.83.190.102

Type: A
Name: @ (or root/apex) 
Value: 198.61.251.14

Type: A
Name: @ (or root/apex)
Value: 198.61.251.15
```

### For www subdomain:
```
Type: CNAME
Name: www
Value: uttamsingh.social
```

### Option B: Using CNAME (Alternative)
If your DNS provider supports CNAME for apex domains:

```
Type: CNAME
Name: @ (or root)
Value: [your-netlify-subdomain].netlify.app

Type: CNAME
Name: www
Value: [your-netlify-subdomain].netlify.app
```

## Step 3: Enable HTTPS

1. **Wait for DNS Propagation**
   - DNS changes can take up to 48 hours to propagate
   - Use tools like https://dnschecker.org/ to verify

2. **Enable SSL Certificate**
   - In Netlify Dashboard → Site Settings → Domain Management
   - Under "HTTPS", click "Verify DNS configuration"
   - Once verified, click "Provision certificate"
   - Enable "Force HTTPS redirect"

## Step 4: Update Backend CORS (Already Done)

✅ **Already Completed**: The backend CORS configuration has been updated to allow requests from:
- `https://uttamsingh.social`
- `https://www.uttamsingh.social`

## Step 5: Test the Setup

1. **Check Domain Resolution**
   ```bash
   nslookup uttamsingh.social
   nslookup www.uttamsingh.social
   ```

2. **Test Website Access**
   - Visit: https://uttamsingh.social
   - Visit: https://www.uttamsingh.social
   - Verify both redirect to HTTPS
   - Check that API calls work properly

3. **Verify API Connectivity**
   - Open browser developer tools
   - Check Network tab for successful API calls to your Heroku backend
   - Ensure no CORS errors in console

## Common DNS Providers Configuration

### Cloudflare
1. Go to DNS tab in Cloudflare dashboard
2. Add A records as specified above
3. Ensure proxy status is "Proxied" (orange cloud)

### GoDaddy
1. Go to DNS Management
2. Add A records in the "Records" section
3. Use "@" for the host name (apex domain)

### Namecheap
1. Go to Advanced DNS tab
2. Add A records with Host "@"
3. Add CNAME record with Host "www"

## Troubleshooting

### DNS Not Propagating
- Wait up to 48 hours for full propagation
- Clear your browser cache and DNS cache
- Try accessing from different networks/devices

### SSL Certificate Issues
- Ensure DNS is properly configured first
- Wait for DNS propagation before provisioning SSL
- Contact Netlify support if certificate provisioning fails

### CORS Errors
- Verify the domain is correctly added to backend CORS configuration
- Check browser developer tools for specific error messages
- Ensure you're using HTTPS (not HTTP)

## Verification Checklist

- [ ] Custom domain added to Netlify
- [ ] DNS A records configured
- [ ] DNS propagation complete
- [ ] SSL certificate provisioned
- [ ] HTTPS redirect enabled
- [ ] Website accessible via custom domain
- [ ] API calls working without CORS errors
- [ ] Both apex and www domains working

## Support

If you encounter issues:
1. Check Netlify's domain configuration documentation
2. Verify DNS settings with your domain registrar
3. Use online DNS checking tools
4. Contact Netlify support for SSL/domain issues

---

**Note**: The backend is already configured to accept requests from your custom domain. Once DNS is configured, your portfolio will be fully accessible at https://uttamsingh.social
