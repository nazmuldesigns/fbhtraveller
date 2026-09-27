/**
 * FAHAD BIN HUSNE ALI — FACEBOOK POST AUTO-SYNC SCRAPER
 * Automatically extracts the latest public Facebook post & image
 * Runs on GitHub Actions cron / locally
 */

const fs = require('fs');
const path = require('path');

const FB_SHARE_URL = 'https://www.facebook.com/fahadbinhusneali1';
const OUTPUT_FILE = path.join(__dirname, '..', 'latest-fb-post.json');

function decodeHtmlEntities(str) {
  if (!str) return '';
  return str
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/&#([0-9]+);/g, (_, d) => String.fromCharCode(parseInt(d, 10)))
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();
}

async function scrapeLatestFacebookPost() {
  console.log(`🔍 Checking latest Facebook post from: ${FB_SHARE_URL}...`);

  try {
    const response = await fetch(FB_SHARE_URL, {
      headers: {
        'User-Agent': 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
        'Accept-Language': 'bn-BD,bn;q=0.9,en-US;q=0.8,en;q=0.7',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      },
      redirect: 'follow'
    });

    const html = await response.text();

    const descMatch = html.match(/<meta\s+property="og:description"\s+content="([^"]+)"/i) ||
                      html.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
    const imgMatch = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);
    const titleMatch = html.match(/<meta\s+property="og:title"\s+content="([^"]+)"/i);

    let rawDesc = descMatch ? descMatch[1] : '';
    let rawImg = imgMatch ? imgMatch[1] : '';
    let rawTitle = titleMatch ? titleMatch[1] : '';

    let decodedDesc = decodeHtmlEntities(rawDesc);
    let decodedTitle = decodeHtmlEntities(rawTitle);

    // Read current data
    let currentData = {};
    if (fs.existsSync(OUTPUT_FILE)) {
      try {
        currentData = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf8'));
      } catch (e) {}
    }

    const updatedData = {
      author: decodedTitle || currentData.author || "Fahad Bin Husne Ali",
      authorAvatar: currentData.authorAvatar || "./Asist/Personal/profile1.jpg",
      caption: (decodedDesc && decodedDesc.length > 15) ? decodedDesc : currentData.caption || "ভ্রমণের ক্ষেত্রে আমার এক মাত্র টার্গেট থাকে ইতিহাস।",
      image: (rawImg && !rawImg.includes('static.xx.fbcdn.net')) ? rawImg : currentData.image || "./Asist/Travel Gallery/2.jpg",
      postUrl: FB_SHARE_URL,
      timeAgo: "Recent Facebook Post",
      likesCount: "12K+ Community",
      lastSynced: new Date().toISOString()
    };

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(updatedData, null, 2), 'utf8');
    console.log('✅ Successfully updated latest-fb-post.json:', updatedData);

  } catch (error) {
    console.warn('⚠️ Notice during Facebook scrape:', error.message);
  }
}

scrapeLatestFacebookPost();
