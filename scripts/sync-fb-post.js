/**
 * FAHAD BIN HUSNE ALI — FACEBOOK POST AUTO-SYNC SCRAPER
 * Automatically extracts the latest public Facebook post & image
 * Runs on GitHub Actions cron / locally
 */

const fs = require('fs');
const path = require('path');

const FB_PROFILE_URL = 'https://www.facebook.com/fahadbinhusneali1';
const OUTPUT_FILE = path.join(__dirname, '..', 'latest-fb-post.json');

async function scrapeLatestFacebookPost() {
  console.log(`🔍 Checking latest Facebook post from: ${FB_PROFILE_URL}...`);

  try {
    const response = await fetch(FB_PROFILE_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9,bn;q=0.8',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const html = await response.text();

    // Extract OpenGraph meta tags if available
    let ogDescription = '';
    let ogImage = '';
    let ogTitle = '';

    const descMatch = html.match(/<meta\s+property="og:description"\s+content="([^"]+)"/i) ||
                      html.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
    if (descMatch && descMatch[1]) {
      ogDescription = descMatch[1].replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&amp;/g, '&');
    }

    const imgMatch = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);
    if (imgMatch && imgMatch[1]) {
      ogImage = imgMatch[1].replace(/&amp;/g, '&');
    }

    const titleMatch = html.match(/<meta\s+property="og:title"\s+content="([^"]+)"/i);
    if (titleMatch && titleMatch[1]) {
      ogTitle = titleMatch[1];
    }

    // Read current data to preserve or update
    let currentData = {};
    if (fs.existsSync(OUTPUT_FILE)) {
      try {
        currentData = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf8'));
      } catch (e) {}
    }

    const updatedData = {
      author: ogTitle || currentData.author || "Fahad Bin Husne Ali",
      authorAvatar: currentData.authorAvatar || "./Asist/Personal/profile1.jpg",
      caption: (ogDescription && ogDescription.length > 10) ? ogDescription : currentData.caption || "Exploring horizons & turning raw human stories into inspiration.",
      image: ogImage || currentData.image || "./Asist/Travel Gallery/1.jpeg",
      postUrl: FB_PROFILE_URL,
      timeAgo: "Recently on Facebook",
      likesCount: "12K+ Community",
      lastSynced: new Date().toISOString()
    };

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(updatedData, null, 2), 'utf8');
    console.log('✅ Successfully updated latest-fb-post.json:', updatedData);

  } catch (error) {
    console.warn('⚠️ Notice during Facebook scrape:', error.message);
    console.log('ℹ️ Keeping existing latest-fb-post.json data.');
  }
}

scrapeLatestFacebookPost();
