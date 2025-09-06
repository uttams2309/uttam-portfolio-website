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

You need to add DNS records to your domain registrar (where you bought uttamsingh.social) to point your domain to Netlify's servers.

### Option A: Using A Records (Recommended)

**What are A Records?** A records point your domain directly to IP addresses where your website is hosted.

Add **FOUR separate A records** to your domain's DNS settings. Each record should have:

**Record 1:**
- Type: `A`
- Name: `@` (this represents your root domain uttamsingh.social)
- Value/Points to: `75.2.60.5`
- TTL: `3600` (or leave default)

**Record 2:**
- Type: `A`
- Name: `@` (same as above)
- Value/Points to: `99.83.190.102`
- TTL: `3600` (or leave default)

**Record 3:**
- Type: `A`
- Name: `@` (same as above)
- Value/Points to: `198.61.251.14`
- TTL: `3600` (or leave default)

**Record 4:**
- Type: `A`
- Name: `@` (same as above)
- Value/Points to: `198.61.251.15`
- TTL: `3600` (or leave default)

### For www subdomain (www.uttamsingh.social):

**What is a CNAME Record?** A CNAME record creates an alias that points one domain to another.

Add **ONE CNAME record**:
- Type: `CNAME`
- Name: `www` (this creates www.uttamsingh.social)
- Value/Points to: `uttamsingh.social` (points www to your main domain)
- TTL: `3600` (or leave default)

### Visual Example of What You're Adding:

```
DNS Records for uttamsingh.social:

A     @     75.2.60.5        (uttamsingh.social → Netlify Server 1)
A     @     99.83.190.102    (uttamsingh.social → Netlify Server 2)  
A     @     198.61.251.14    (uttamsingh.social → Netlify Server 3)
A     @     198.61.251.15    (uttamsingh.social → Netlify Server 4)
CNAME www   uttamsingh.social (www.uttamsingh.social → uttamsingh.social)
```

**Why 4 A records?** Netlify uses multiple IP addresses for redundancy and load balancing. If one server goes down, the others will still serve your website.

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
1. **Login to Cloudflare Dashboard**
2. **Select your domain** `uttamsingh.social`
3. **Go to DNS tab** (in the top menu)
4. **Add A Records** - Click "Add record" button 4 times:
   - Type: `A`, Name: `@`, IPv4 address: `75.2.60.5`, Proxy status: `Proxied` (orange cloud)
   - Type: `A`, Name: `@`, IPv4 address: `99.83.190.102`, Proxy status: `Proxied`
   - Type: `A`, Name: `@`, IPv4 address: `198.61.251.14`, Proxy status: `Proxied`
   - Type: `A`, Name: `@`, IPv4 address: `198.61.251.15`, Proxy status: `Proxied`
5. **Add CNAME Record** - Click "Add record":
   - Type: `CNAME`, Name: `www`, Target: `uttamsingh.social`, Proxy status: `Proxied`

### GoDaddy
1. **Login to GoDaddy Account**
2. **Go to My Products** → **Domains** → **Manage** (next to uttamsingh.social)
3. **Click "DNS" tab** or "Manage DNS"
4. **Add A Records** - Click "Add" button 4 times:
   - Type: `A`, Host: `@`, Points to: `75.2.60.5`, TTL: `1 Hour`
   - Type: `A`, Host: `@`, Points to: `99.83.190.102`, TTL: `1 Hour`
   - Type: `A`, Host: `@`, Points to: `198.61.251.14`, TTL: `1 Hour`
   - Type: `A`, Host: `@`, Points to: `198.61.251.15`, TTL: `1 Hour`
5. **Add CNAME Record** - Click "Add":
   - Type: `CNAME`, Host: `www`, Points to: `uttamsingh.social`, TTL: `1 Hour`

### Namecheap
1. **Login to Namecheap Account**
2. **Go to Domain List** → **Manage** (next to uttamsingh.social)
3. **Click "Advanced DNS" tab**
4. **Add A Records** - Click "Add New Record" 4 times:
   - Type: `A Record`, Host: `@`, Value: `75.2.60.5`, TTL: `Automatic`
   - Type: `A Record`, Host: `@`, Value: `99.83.190.102`, TTL: `Automatic`
   - Type: `A Record`, Host: `@`, Value: `198.61.251.14`, TTL: `Automatic`
   - Type: `A Record`, Host: `@`, Value: `198.61.251.15`, TTL: `Automatic`
5. **Add CNAME Record** - Click "Add New Record":
   - Type: `CNAME Record`, Host: `www`, Value: `uttamsingh.social`, TTL: `Automatic`

### Other DNS Providers (General Steps)
1. **Login to your domain registrar** (where you bought uttamsingh.social)
2. **Find DNS Management section** (might be called "DNS Settings", "Name Servers", "DNS Records")
3. **Look for existing records** - You might see some default A records or CNAME records
4. **Delete conflicting records** - Remove any existing A records for `@` or CNAME records for `www` that point elsewhere
5. **Add the 5 new records** as specified above (4 A records + 1 CNAME record)
6. **Save changes** - Look for "Save", "Apply", or "Update" button

### Important Notes:
- **Delete existing conflicting records** before adding new ones
- **Use `@` symbol** for the root domain (uttamsingh.social)
- **Use `www`** for the subdomain (www.uttamsingh.social)
- **TTL can be left as default** (usually 3600 seconds or 1 hour)
- **Changes take time** - DNS propagation can take 1-48 hours

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
