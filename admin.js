/**
 * FAHAD BIN HUSNE ALI — DEDICATED ADMIN MANAGEMENT CONSOLE
 * Comprehensive Cross-Tab Live Sync, Instant Image Upload, and Full CMS Control
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'fahad_portfolio_data_v2';
  const GUESTBOOK_KEY = 'fahad_portfolio_guestbook';
  const AUTH_KEY = 'fahad_admin_authenticated';
  const SYNC_CHANNEL_NAME = 'fahad_portfolio_sync';

  // Broadcast channel for instantaneous cross-tab live synchronization
  const syncChannel = typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel(SYNC_CHANNEL_NAME) : null;

  function broadcastChange(entityType) {
    if (syncChannel) {
      try {
        syncChannel.postMessage({
          type: 'PORTFOLIO_UPDATE',
          entity: entityType,
          timestamp: Date.now()
        });
      } catch (e) {
        console.warn('Sync broadcast error:', e);
      }
    }
  }

  // ==========================================
  // DEFAULT SEED DATA
  // ==========================================
  const DEFAULT_TRAVEL_GALLERY = [
    { id: 1, img: './Asist/Travel Gallery/1.jpeg', title: 'হিমালয়ের চূড়ায় মেঘের আনাগোনা', desc: 'কাঠমান্ডুর সর্বোচ্চ প্রান্তে গভীর প্রশান্তি আর সাদা শুভ্র কুয়াশার চাদর।' },
    { id: 2, img: './Asist/Travel Gallery/2.jpg', title: 'কালয়ান মিনারের ছায়ায় পথচলা', desc: 'দ্বাদশ শতাব্দীর ইতিহাসের সাক্ষী প্রাচীন বোখারার ঐতিহ্যবাহী অলিগলি।' },
    { id: 3, img: './Asist/Travel Gallery/3.jpg', title: 'কাঠমান্ডুর প্রাচীন দরবার স্কয়ার', desc: 'ঐতিহাসিক মন্দির ও কারুকার্যখচিত কাষ্ঠ শিল্পের অনন্য সংমিশ্রণ।' },
    { id: 4, img: './Asist/Travel Gallery/4.jpg', title: 'আন্দামান সাগরের নীল নির্জন সৈকত', desc: 'ল্যাংকাউইয়ের শান্ত সুনীল জল আর দিগন্তজোড়া সবুজ পাহাড়ের মিতালী।' },
    { id: 5, img: './Asist/Travel Gallery/5.jpg', title: 'আকাশছোঁয়া বরফাবৃত চূড়া', desc: 'হিমালয়ের কোল ঘেঁষে দাঁড়িয়ে থাকা এক নিঃশব্দ রাজকীয় মহিমা।' },
    { id: 6, img: './Asist/Travel Gallery/6.jpg', title: 'পাহাড়ি আঁকাবাঁকা অচিন পথ', desc: 'সবুজে ঘেরা উপত্যকার ভেতর দিয়ে বয়ে চলা অনন্ত অভিযাত্রার গল্প।' },
    { id: 7, img: './Asist/Travel Gallery/7.jpg', title: 'শান্ত পাহাড়ি নদীর কলতান', desc: 'পাথুরে নদীর বুকে স্বচ্ছ পানির অবিরত ছন্দ ও বিশুদ্ধ প্রকৃতি।' },
    { id: 8, img: './Asist/Travel Gallery/8.jpg', title: 'মেঘের ভেলায় ভেসে চলা', desc: 'পাহাড়ের চুড়ায় দাঁড়িয়ে আকাশকে স্পর্শ করার এক রোমাঞ্চকর অনুভূতি।' },
    { id: 9, img: './Asist/Travel Gallery/9.jpg', title: 'মায়াবী রৌদ্রছায়ার খেলা', desc: 'সূর্যাস্তের রক্তিম আলোয় আলোকিত প্রকৃতির এক অপার্থিব রূপ।' },
    { id: 10, img: './Asist/Travel Gallery/10.jpg', title: 'সবুজ বনের শান্ত নীরবতা', desc: 'ঘন অরণ্যের মাঝে হারিয়ে গিয়ে জীবনের নতুন অর্থ খুঁজে পাওয়ার গল্প।' },
    { id: 11, img: './Asist/Travel Gallery/11.jpg', title: 'ঐতিহাসিক স্থাপত্যের রাজকীয় রূপ', desc: 'প্রস্তরখচিত প্রাচীন স্তম্ভ আর শতাব্দী প্রাচীন কারুকাজের নিদর্শন।' },
    { id: 12, img: './Asist/Travel Gallery/12.jpg', title: 'নীল সমুদ্রের উত্তাল ঢেউ', desc: 'বিশাল সাগরের গর্জন আর বালুকাবেলায় জীবনের ছন্দময় পদচিহ্ন।' },
    { id: 13, img: './Asist/Travel Gallery/13.jpg', title: 'পাহাড়ের কোলে সূর্যাস্ত', desc: 'দিনশেষে পাহাড়ের আড়ালে হারিয়ে যাওয়া সূর্যের সোনালী আভা।' },
    { id: 14, img: './Asist/Travel Gallery/14.jpg', title: 'কুয়াশাচ্ছন্ন মায়াবী উপত্যকা', desc: 'ভোরের প্রথম আলোয় শিশিরভেজা প্রকৃতির এক স্নিগ্ধ চিত্রনাট্য।' },
    { id: 15, img: './Asist/Travel Gallery/15.jpg', title: 'পাথুরে পথের দুর্গম যাত্রা', desc: 'কঠিন পথ পেরিয়ে নতুন দিগন্ত আবিষ্কারের এক অদম্য আনন্দ।' },
    { id: 16, img: './Asist/Travel Gallery/16.jpg', title: 'নিঝুম অরণ্যের রহস্য', desc: 'সবুজ পাতার ফাঁক গলে আসা সোনালী রোদ আর বন্য ফুলের ঘ্রাণ।' },
    { id: 17, img: './Asist/Travel Gallery/17.jpg', title: 'ঝরনার শীতল জলের ধারা', desc: 'পাহাড় থেকে নেমে আসা মুক্তোদানার মতো স্ফটিক স্বচ্ছ জলরাশি।' },
    { id: 18, img: './Asist/Travel Gallery/18.jpg', title: 'সুউচ্চ শৃঙ্গের অহংকার', desc: 'আকাশকে ছুঁয়ে থাকা হিমালয়ের চিরসবুজ ও তুষারাবৃত শিখর।' },
    { id: 19, img: './Asist/Travel Gallery/19.jpg', title: 'দূর দিগন্তের হাতছানি', desc: 'যাত্রার শেষে নতুন আরেক যাত্রার শুরু— যা মনকে মুক্ত বিহঙ্গ করে তোলে।' },
    { id: 20, img: './Asist/Travel Gallery/20.jpg', title: 'অভিযাত্রীর শেষ বিকেল', desc: 'অনন্ত অভিজ্ঞতার ডায়েরি নিয়ে ঘরে ফেরার এক প্রশান্তির মুহূর্ত।' }
  ];

  const DEFAULT_LOVE_CARDS = [
    { id: 'love_1', img: './Asist/card/1.jpeg', tag: 'Vintage 90s Romance', title: '৯০-এর নস্টালজিক রূপকথা', desc: 'পুরোনো দিনের রঙিন ফ্যাশন আর সারল্যে ভরা চিরন্তন ভালোবাসার মিষ্টি অনুভূতি।' },
    { id: 'love_2', img: './Asist/card/2.jpg', tag: 'Beachside Breeze', title: 'সাগরের কোলে একমুঠো প্রেম', desc: 'নীল জলরাশির মৃদু হাওয়ায় হাত ধরে হারিয়ে যাওয়া, ঢেউয়ের তালে হৃদয়ের কথকতা।' },
    { id: 'love_3', img: './Asist/card/3.jpg', tag: 'Playful Opposites', title: 'সিরিয়াস মুখ, মায়াবী হাসি', desc: 'একজন যখন গম্ভীর ভাবুক, অন্যজনের তখন চঞ্চল হাসি— এই অমিল বৈপরীত্যেই আমাদের পূর্ণতা।' },
    { id: 'love_4', img: './Asist/card/4.jpg', tag: 'Midnight City Lights', title: 'শহুরে আলো আর রাতের গল্প', desc: 'রাতের নিস্তব্ধ শহরে নিয়ন আলোর নিচে দু\'জনে হেঁটে চলা, কোনো নির্দিষ্ট গন্তব্য ছাড়াই।' },
    { id: 'love_5', img: './Asist/card/5.jpg', tag: 'Cozy Cab Ride', title: 'চলন্ত ক্যাবের খুনসুটি', desc: 'ব্যস্ত রাজপথে ট্যাক্সির পেছনের সিটে কাঁধে মাথা রেখে একান্ত কিছু অন্তরঙ্গ মুহূর্ত কাটানো।' },
    { id: 'love_6', img: './Asist/card/6.jpg', tag: 'Eternal Travel Partners', title: 'এয়ারপোর্টের আজন্ম সহযাত্রী', desc: 'টার্মিনাল থেকে রানওয়ে— পৃথিবীর যেখানেই যাই, জীবনের শ্রেষ্ঠ সহযাত্রী চিরকাল তুমিই।' },
    { id: 'love_7', img: './Asist/card/7.jpg', tag: 'Mountain Ride & Rain', title: 'পাহাড়ের রাজা-রানী', desc: 'পাহাড়ের সর্পিল খাড়া রাস্তায় এক ছাতার নিচে মেঘের দেশে রোমাঞ্চ আর জীবনের জয়গান।' },
    { id: 'love_8', img: './Asist/card/8.jpg', tag: 'Warm Ramen Date', title: 'গরম নুডলস ও মিষ্টি খুনসুটি', desc: 'ধোঁয়া ওঠা এক বাটি গরম খাবারে ভালোবাসা ভাগ করে নেওয়ার অপূর্ব সহজ আনন্দ।' },
    { id: 'love_9', img: './Asist/card/9.jpg', tag: 'Safe In My Arms', title: 'কাঁধে শান্তির নিরাপদ ঘুম', desc: 'পৃথিবীর সব ক্লান্তি দূর হয়ে যায় যখন পরম ভরসার কাঁধে মাথা রেখে নিশ্চিন্ত ঘুম আসে।' },
    { id: 'love_10', img: './Asist/card/10.jpg', tag: 'Silk Road Fairytale', title: 'সমারখন্দের সুলতান ও রানী', desc: 'ঐতিহাসিক সিল্ক রোডের স্থাপত্যে যুগল রূপকথা— রাজকীয় ঐতিহ্যে এক অবিস্মরণীয় ভালোবাসার স্মারক।' }
  ];

  // ==========================================
  // ADMIN DATA STORE
  // ==========================================
  const AdminStore = {
    data: null,

    init() {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          this.data = JSON.parse(stored);
          let modified = false;
          if (!this.data.travelGallery || !this.data.travelGallery.length) {
            this.data.travelGallery = DEFAULT_TRAVEL_GALLERY;
            modified = true;
          }
          if (!this.data.loveCards || !this.data.loveCards.length) {
            this.data.loveCards = DEFAULT_LOVE_CARDS;
            modified = true;
          }
          if (!this.data.settings) {
            this.data.settings = { passcode: '2026' };
            modified = true;
          }
          if (!this.data.settings.passcode) {
            this.data.settings.passcode = '2026';
            modified = true;
          }
          if (modified) this.save();
        } else {
          this.resetToDefaults();
        }
      } catch (e) {
        console.error('AdminStore Init Error:', e);
        this.resetToDefaults();
      }
    },

    save(entityType = 'general') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
        broadcastChange(entityType);
        return true;
      } catch (e) {
        console.error('Failed to save to localStorage:', e);
        showToast('ডাটা সেভ করতে সমস্যা হয়েছে! ব্রাউজার স্টোরেজ চেক করুন। ⚠️');
        return false;
      }
    },

    resetToDefaults() {
      this.data = {
        travelGallery: [...DEFAULT_TRAVEL_GALLERY],
        loveCards: [...DEFAULT_LOVE_CARDS],
        articles: [],
        ventures: [],
        travels: [],
        genz: [],
        settings: { passcode: '2026' }
      };
      this.save('reset');
    },

    getPasscode() {
      return (this.data && this.data.settings && this.data.settings.passcode) ? this.data.settings.passcode : '2026';
    },

    setPasscode(newPass) {
      if (!this.data.settings) this.data.settings = {};
      this.data.settings.passcode = newPass;
      this.save('settings');
    }
  };

  // ==========================================
  // AUTHENTICATION CONTROLLER
  // ==========================================
  function checkAuth() {
    const authScreen = document.getElementById('authScreen');
    const appScreen = document.getElementById('appScreen');
    const isAuthed = sessionStorage.getItem(AUTH_KEY) === 'true';

    if (isAuthed) {
      if (authScreen) authScreen.style.display = 'none';
      if (appScreen) appScreen.style.display = 'flex';
      renderDashboard();
    } else {
      if (authScreen) authScreen.style.display = 'flex';
      if (appScreen) appScreen.style.display = 'none';
      const passInput = document.getElementById('adminPasswordInput');
      if (passInput) {
        passInput.value = '';
        passInput.focus();
      }
    }
  }

  window.handleAdminLogin = function (e) {
    if (e) e.preventDefault();
    const passInput = document.getElementById('adminPasswordInput');
    const entered = passInput ? passInput.value.trim() : '';
    const actualPass = AdminStore.getPasscode();

    if (entered === actualPass) {
      sessionStorage.setItem(AUTH_KEY, 'true');
      showToast('স্বাগতম ফাহাদ ভাই! এডমিন প্যানেলে সফলভাবে লগ ইন হয়েছে। 👑');
      checkAuth();
    } else {
      showToast('ভুল পাসওয়ার্ড! অনুগ্রহ করে সঠিক পাসওয়ার্ড দিন। ⚠️');
      if (passInput) {
        passInput.value = '';
        passInput.focus();
        passInput.classList.add('shake');
        setTimeout(() => passInput.classList.remove('shake'), 500);
      }
    }
  };

  window.handleAdminLogout = function () {
    if (confirm('আপনি কি নিশ্চিত যে এডমিন প্যানেল থেকে লগআউট করতে চান?')) {
      sessionStorage.removeItem(AUTH_KEY);
      showToast('সফলভাবে লগআউট করা হয়েছে।');
      checkAuth();
    }
  };

  // ==========================================
  // TAB NAVIGATION
  // ==========================================
  window.switchTab = function (tabId) {
    // Buttons
    document.querySelectorAll('.sidebar-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });

    // Content
    document.querySelectorAll('.admin-tab-content').forEach(content => {
      content.classList.toggle('active', content.id === `tab-${tabId}`);
    });

    // Top title
    const titleEl = document.getElementById('topbarPageTitle');
    const titles = {
      'overview': 'ড্যাশবোর্ড ও সার্বিক পরিসংখ্যান',
      'travel-gallery': 'প্যারালাক্স ট্রাভেল গ্যালারি (Carousel)',
      'love-cards': 'লাভ ও ফ্যামিলি মেমোরিজ (3D Cards)',
      'articles': 'লেখালেখি ও ব্লগ (Articles)',
      'ventures': 'দ্য ল্যাব ও ভেঞ্চারস (The Lab)',
      'guestbook': 'গেস্টবুক মেসেজ মডারেশন',
      'settings': 'সিস্টেম সেটিংস ও ডাটা ব্যাকআপ'
    };
    if (titleEl) titleEl.textContent = titles[tabId] || 'এডমিন প্যানেল';

    // Render tab specifics
    if (tabId === 'overview') renderDashboard();
    else if (tabId === 'travel-gallery') renderTravelGallery();
    else if (tabId === 'love-cards') renderLoveCards();
    else if (tabId === 'articles') renderArticles();
    else if (tabId === 'ventures') renderVentures();
    else if (tabId === 'guestbook') renderGuestbook();
    else if (tabId === 'settings') renderSettings();
  };

  // ==========================================
  // TOAST NOTIFICATION
  // ==========================================
  window.showToast = function (msg) {
    let toast = document.getElementById('adminToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'adminToast';
      toast.className = 'admin-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${msg}</span>`;
    toast.classList.add('show');
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  };

  // ==========================================
  // DASHBOARD TAB
  // ==========================================
  function renderDashboard() {
    const photos = AdminStore.data.travelGallery || [];
    const loveCards = AdminStore.data.loveCards || [];
    const articles = AdminStore.data.articles || [];
    const ventures = AdminStore.data.ventures || [];

    const pCountEl = document.getElementById('statCountPhotos');
    if (pCountEl) pCountEl.textContent = photos.length;

    const lCountEl = document.getElementById('statCountLove');
    if (lCountEl) lCountEl.textContent = loveCards.length;

    const aCountEl = document.getElementById('statCountArticles');
    if (aCountEl) aCountEl.textContent = articles.length;

    const vCountEl = document.getElementById('statCountVentures');
    if (vCountEl) vCountEl.textContent = ventures.length;

    // Badges in sidebar
    const bPhotos = document.getElementById('badgePhotos');
    if (bPhotos) bPhotos.textContent = photos.length;
    const bLove = document.getElementById('badgeLove');
    if (bLove) bLove.textContent = loveCards.length;
    const bArticles = document.getElementById('badgeArticles');
    if (bArticles) bArticles.textContent = articles.length;
  }

  // ==========================================
  // TRAVEL GALLERY (PARALLAX CAROUSEL)
  // ==========================================
  function renderTravelGallery() {
    const grid = document.getElementById('travelGalleryGrid');
    if (!grid) return;

    const photos = AdminStore.data.travelGallery || [];
    if (photos.length === 0) {
      grid.innerHTML = `<div class="empty-state">কোনো ছবি পাওয়া যায়নি। "নতুন ছবি যোগ করুন" বাটনে ক্লিক করুন।</div>`;
      return;
    }

    grid.innerHTML = photos.map((item, index) => {
      const rowNum = index < 10 ? 'Row 1 (Left ➔ Right)' : 'Row 2 (Right ➔ Left)';
      return `
        <div class="admin-item-card">
          <div class="card-thumb-wrap">
            <span class="card-row-tag">#${index + 1} &bull; ${rowNum}</span>
            <img src="${item.img}" alt="${escapeHtml(item.title)}" loading="lazy" onerror="this.src='./Asist/Travel/t.1.jpg'">
          </div>
          <div class="card-body-wrap">
            <h4 class="card-item-title bengali-font">${escapeHtml(item.title)}</h4>
            <p class="card-item-desc bengali-font">${escapeHtml(item.desc || '')}</p>
            <div class="card-actions-bar">
              <button class="btn-secondary" onclick="openEditPhotoModal(${item.id})">
                <i class="fa-solid fa-pen-to-square"></i> <span>এডিট</span>
              </button>
              <button class="btn-danger" onclick="deleteTravelPhoto(${item.id})">
                <i class="fa-solid fa-trash-can"></i> <span>ডিলিট</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  window.openAddPhotoModal = function () {
    const modal = document.getElementById('photoEditModal');
    const titleEl = document.getElementById('photoModalTitle');
    const form = document.getElementById('photoEditForm');
    if (!modal || !form) return;

    if (titleEl) titleEl.textContent = 'প্যারালাক্স গ্যালারিতে নতুন ছবি যোগ করুন';
    form.reset();
    document.getElementById('photoEditId').value = '';
    document.getElementById('photoPreviewImg').src = '';
    document.getElementById('photoPreviewPlaceholder').style.display = 'flex';
    document.getElementById('photoPreviewImg').style.display = 'none';

    modal.classList.add('active');
  };

  window.openEditPhotoModal = function (id) {
    const photo = (AdminStore.data.travelGallery || []).find(p => p.id == id);
    if (!photo) return;

    const modal = document.getElementById('photoEditModal');
    const titleEl = document.getElementById('photoModalTitle');
    if (!modal) return;

    if (titleEl) titleEl.textContent = 'ছবি ও বিবরণ এডিট করুন';
    document.getElementById('photoEditId').value = photo.id;
    document.getElementById('photoTitleInput').value = photo.title || '';
    document.getElementById('photoDescInput').value = photo.desc || '';
    document.getElementById('photoUrlInput').value = photo.img || '';

    const previewImg = document.getElementById('photoPreviewImg');
    const placeholder = document.getElementById('photoPreviewPlaceholder');
    if (previewImg && placeholder) {
      previewImg.src = photo.img || '';
      previewImg.style.display = 'block';
      placeholder.style.display = 'none';
    }

    modal.classList.add('active');
  };

  window.closePhotoModal = function () {
    const modal = document.getElementById('photoEditModal');
    if (modal) modal.classList.remove('active');
  };

  window.handlePhotoFormSubmit = function (e) {
    if (e) e.preventDefault();
    const id = document.getElementById('photoEditId').value;
    const title = document.getElementById('photoTitleInput').value.trim();
    const desc = document.getElementById('photoDescInput').value.trim();
    const imgUrl = document.getElementById('photoUrlInput').value.trim();

    if (!title) {
      alert('অনুগ্রহ করে ছবির শিরোনাম লিখুন!');
      return;
    }
    if (!imgUrl) {
      alert('অনুগ্রহ করে ছবি নির্বাচন করুন বা URL দিন!');
      return;
    }

    if (!AdminStore.data.travelGallery) AdminStore.data.travelGallery = [];

    if (id) {
      // Edit existing
      const idx = AdminStore.data.travelGallery.findIndex(p => p.id == id);
      if (idx >= 0) {
        AdminStore.data.travelGallery[idx].title = title;
        AdminStore.data.travelGallery[idx].desc = desc;
        AdminStore.data.travelGallery[idx].img = imgUrl;
      }
    } else {
      // Add new
      const newId = Date.now();
      AdminStore.data.travelGallery.push({
        id: newId,
        img: imgUrl,
        title: title,
        desc: desc
      });
    }

    AdminStore.save('travel-gallery');
    closePhotoModal();
    renderTravelGallery();
    renderDashboard();
    showToast('ছবি সফলভাবে সেভ হয়েছে! মেইন সাইট তাৎক্ষণিক আপডেট হয়েছে। ✨');
  };

  window.deleteTravelPhoto = function (id) {
    if (confirm('আপনি কি নিশ্চিত যে এই ছবিটি গ্যালারি থেকে মুছে ফেলতে চান?')) {
      AdminStore.data.travelGallery = (AdminStore.data.travelGallery || []).filter(p => p.id != id);
      AdminStore.save('travel-gallery');
      renderTravelGallery();
      renderDashboard();
      showToast('ছবিটি সফলভাবে ডিলিট করা হয়েছে! 🗑️');
    }
  };

  // Image file picker helper (Converts local file to data URL)
  window.handleImageUpload = function (fileInputId, textInputId, previewImgId, placeholderId) {
    const fileInput = document.getElementById(fileInputId);
    if (!fileInput || !fileInput.files || !fileInput.files[0]) return;

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const dataUrl = e.target.result;
      const textInput = document.getElementById(textInputId);
      if (textInput) textInput.value = dataUrl;

      const previewImg = document.getElementById(previewImgId);
      const placeholder = document.getElementById(placeholderId);
      if (previewImg && placeholder) {
        previewImg.src = dataUrl;
        previewImg.style.display = 'block';
        placeholder.style.display = 'none';
      }
      showToast('ছবি ব্রাউজারে সফলভাবে আপলোড হয়েছে! 📷');
    };

    reader.readAsDataURL(file);
  };

  window.onPhotoUrlInput = function (val) {
    val = (val || '').trim();
    const pImg = document.getElementById('photoPreviewImg');
    const pPh = document.getElementById('photoPreviewPlaceholder');
    if (pImg && pPh) {
      if (val) {
        pImg.src = val;
        pImg.style.display = 'block';
        pPh.style.display = 'none';
      } else {
        pImg.style.display = 'none';
        pPh.style.display = 'flex';
      }
    }
  };

  window.onLoveUrlInput = function (val) {
    val = (val || '').trim();
    const pImg = document.getElementById('lovePreviewImg');
    const pPh = document.getElementById('lovePreviewPlaceholder');
    if (pImg && pPh) {
      if (val) {
        pImg.src = val;
        pImg.style.display = 'block';
        pPh.style.display = 'none';
      } else {
        pImg.style.display = 'none';
        pPh.style.display = 'flex';
      }
    }
  };

  // ==========================================
  // LOVE SECTION (ROTATING 3D CARDS)
  // ==========================================
  function renderLoveCards() {
    const grid = document.getElementById('loveCardsGrid');
    if (!grid) return;

    const cards = AdminStore.data.loveCards || [];
    if (cards.length === 0) {
      grid.innerHTML = `<div class="empty-state">কোনো কার্ড পাওয়া যায়নি। "নতুন লাভ কার্ড যোগ করুন" বাটনে ক্লিক করুন।</div>`;
      return;
    }

    grid.innerHTML = cards.map((item, index) => {
      return `
        <div class="admin-item-card">
          <div class="card-thumb-wrap">
            <span class="card-row-tag">Memory #${index + 1}</span>
            <img src="${item.img}" alt="${escapeHtml(item.title)}" loading="lazy" onerror="this.src='./Asist/Personal/profile1.jpg'">
          </div>
          <div class="card-body-wrap">
            <span class="card-item-subtitle">${escapeHtml(item.tag || 'Couple Moment')}</span>
            <h4 class="card-item-title bengali-font">${escapeHtml(item.title)}</h4>
            <p class="card-item-desc bengali-font">"${escapeHtml(item.desc || '')}"</p>
            <div class="card-actions-bar">
              <button class="btn-secondary" onclick="openEditLoveModal('${item.id}')">
                <i class="fa-solid fa-pen-to-square"></i> <span>এডিট</span>
              </button>
              <button class="btn-danger" onclick="deleteLoveCard('${item.id}')">
                <i class="fa-solid fa-trash-can"></i> <span>ডিলিট</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  window.openAddLoveModal = function () {
    const modal = document.getElementById('loveEditModal');
    const titleEl = document.getElementById('loveModalTitle');
    const form = document.getElementById('loveEditForm');
    if (!modal || !form) return;

    if (titleEl) titleEl.textContent = 'নতুন লাভ মেমোরি কার্ড যোগ করুন';
    form.reset();
    document.getElementById('loveEditId').value = '';
    document.getElementById('lovePreviewImg').src = '';
    document.getElementById('lovePreviewPlaceholder').style.display = 'flex';
    document.getElementById('lovePreviewImg').style.display = 'none';

    modal.classList.add('active');
  };

  window.openEditLoveModal = function (id) {
    const card = (AdminStore.data.loveCards || []).find(c => c.id == id);
    if (!card) return;

    const modal = document.getElementById('loveEditModal');
    const titleEl = document.getElementById('loveModalTitle');
    if (!modal) return;

    if (titleEl) titleEl.textContent = 'লাভ কার্ড এডিট করুন';
    document.getElementById('loveEditId').value = card.id;
    document.getElementById('loveTitleInput').value = card.title || '';
    document.getElementById('loveTagInput').value = card.tag || '';
    document.getElementById('loveDescInput').value = card.desc || '';
    document.getElementById('loveUrlInput').value = card.img || '';

    const previewImg = document.getElementById('lovePreviewImg');
    const placeholder = document.getElementById('lovePreviewPlaceholder');
    if (previewImg && placeholder) {
      previewImg.src = card.img || '';
      previewImg.style.display = 'block';
      placeholder.style.display = 'none';
    }

    modal.classList.add('active');
  };

  window.closeLoveModal = function () {
    const modal = document.getElementById('loveEditModal');
    if (modal) modal.classList.remove('active');
  };

  window.handleLoveFormSubmit = function (e) {
    if (e) e.preventDefault();
    const id = document.getElementById('loveEditId').value;
    const title = document.getElementById('loveTitleInput').value.trim();
    const tag = document.getElementById('loveTagInput').value.trim();
    const desc = document.getElementById('loveDescInput').value.trim();
    const imgUrl = document.getElementById('loveUrlInput').value.trim();

    if (!title) {
      alert('অনুগ্রহ করে রোমান্টিক শিরোনামটি লিখুন!');
      return;
    }
    if (!imgUrl) {
      alert('অনুগ্রহ করে ছবি নির্বাচন করুন বা URL দিন!');
      return;
    }

    if (!AdminStore.data.loveCards) AdminStore.data.loveCards = [];

    if (id) {
      // Edit existing
      const idx = AdminStore.data.loveCards.findIndex(c => c.id == id);
      if (idx >= 0) {
        AdminStore.data.loveCards[idx].title = title;
        AdminStore.data.loveCards[idx].tag = tag;
        AdminStore.data.loveCards[idx].desc = desc;
        AdminStore.data.loveCards[idx].img = imgUrl;
      }
    } else {
      // Add new
      const newId = 'love_' + Date.now();
      AdminStore.data.loveCards.push({
        id: newId,
        img: imgUrl,
        title: title,
        tag: tag || 'Romantic Memory',
        desc: desc
      });
    }

    AdminStore.save('love-cards');
    closeLoveModal();
    renderLoveCards();
    renderDashboard();
    showToast('লাভ কার্ড সফলভাবে সেভ হয়েছে! ৩ডি ক্যারাউসেল আপডেট হয়েছে। 💖');
  };

  window.deleteLoveCard = function (id) {
    if (confirm('আপনি কি নিশ্চিত যে এই মেমোরি কার্ডটি মুছে ফেলতে চান?')) {
      AdminStore.data.loveCards = (AdminStore.data.loveCards || []).filter(c => c.id != id);
      AdminStore.save('love-cards');
      renderLoveCards();
      renderDashboard();
      showToast('কার্ডটি সফলভাবে ডিলিট করা হয়েছে! 🗑️');
    }
  };

  // ==========================================
  // ARTICLES & WRITINGS
  // ==========================================
  function renderArticles() {
    const list = document.getElementById('articlesList');
    if (!list) return;

    const articles = AdminStore.data.articles || [];
    if (articles.length === 0) {
      list.innerHTML = `<div class="empty-state">কোনো আর্টিকেল পাওয়া যায়নি। "নতুন আর্টিকেল লিখুন" বাটনে ক্লিক করুন।</div>`;
      return;
    }

    list.innerHTML = articles.map(art => {
      return `
        <div class="admin-item-card" style="margin-bottom: 1rem;">
          <div class="card-body-wrap">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; margin-bottom: 0.5rem;">
              <span class="card-row-tag">${escapeHtml(art.category || 'Article')} &bull; ${escapeHtml(art.readTime || '5 min')}</span>
              <span style="font-size: 0.8rem; color: var(--text-dim);">${escapeHtml(art.date || '')}</span>
            </div>
            <h3 class="card-item-title bengali-font">${escapeHtml(art.title)}</h3>
            <p class="card-item-desc bengali-font">${escapeHtml(art.excerpt || '')}</p>
            <div class="card-actions-bar">
              <button class="btn-secondary" onclick="openEditArticleModal('${art.id}')">
                <i class="fa-solid fa-pen-to-square"></i> <span>এডিট করুন</span>
              </button>
              <button class="btn-danger" onclick="deleteArticle('${art.id}')">
                <i class="fa-solid fa-trash-can"></i> <span>ডিলিট</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  window.openAddArticleModal = function () {
    const modal = document.getElementById('articleEditModal');
    const form = document.getElementById('articleEditForm');
    if (!modal || !form) return;

    form.reset();
    document.getElementById('articleEditId').value = '';
    document.getElementById('articleModalTitle').textContent = 'নতুন আর্টিকেল লিখুন ও প্রকাশ করুন';
    modal.classList.add('active');
  };

  window.openEditArticleModal = function (id) {
    const art = (AdminStore.data.articles || []).find(a => a.id == id);
    if (!art) return;

    const modal = document.getElementById('articleEditModal');
    if (!modal) return;

    document.getElementById('articleModalTitle').textContent = 'আর্টিকেল এডিট করুন';
    document.getElementById('articleEditId').value = art.id;
    document.getElementById('articleTitleInput').value = art.title || '';
    document.getElementById('articleCategoryInput').value = art.category || '';
    document.getElementById('articleReadTimeInput').value = art.readTime || '';
    document.getElementById('articleDateInput').value = art.date || '';
    document.getElementById('articleExcerptInput').value = art.excerpt || '';
    document.getElementById('articleContentInput').value = art.content || '';

    modal.classList.add('active');
  };

  window.closeArticleModal = function () {
    const modal = document.getElementById('articleEditModal');
    if (modal) modal.classList.remove('active');
  };

  window.handleArticleFormSubmit = function (e) {
    if (e) e.preventDefault();
    const id = document.getElementById('articleEditId').value;
    const title = document.getElementById('articleTitleInput').value.trim();
    const category = document.getElementById('articleCategoryInput').value.trim() || 'জীবনবোধ';
    const readTime = document.getElementById('articleReadTimeInput').value.trim() || '৫ মিনিট পাঠ';
    const date = document.getElementById('articleDateInput').value.trim() || '২০২৬';
    const excerpt = document.getElementById('articleExcerptInput').value.trim();
    const content = document.getElementById('articleContentInput').value.trim();

    if (!title || !content) {
      alert('অনুগ্রহ করে আর্টিকেলের শিরোনাম এবং সম্পূর্ণ লেখা লিখুন!');
      return;
    }

    if (!AdminStore.data.articles) AdminStore.data.articles = [];

    if (id) {
      const idx = AdminStore.data.articles.findIndex(a => a.id == id);
      if (idx >= 0) {
        AdminStore.data.articles[idx] = {
          ...AdminStore.data.articles[idx],
          title, category, readTime, date, excerpt, content
        };
      }
    } else {
      const newId = 'art_' + Date.now();
      AdminStore.data.articles.unshift({
        id: newId,
        title, category, readTime, date, excerpt, content
      });
    }

    AdminStore.save('articles');
    closeArticleModal();
    renderArticles();
    renderDashboard();
    showToast('আর্টিকেলটি সফলভাবে সেভ ও পাবলিশ হয়েছে! ✍️');
  };

  window.deleteArticle = function (id) {
    if (confirm('আপনি কি নিশ্চিত যে এই আর্টিকেলটি মুছে ফেলতে চান?')) {
      AdminStore.data.articles = (AdminStore.data.articles || []).filter(a => a.id != id);
      AdminStore.save('articles');
      renderArticles();
      renderDashboard();
      showToast('আর্টিকেলটি ডিলিট করা হয়েছে! 🗑️');
    }
  };

  // ==========================================
  // VENTURES TAB
  // ==========================================
  function renderVentures() {
    const list = document.getElementById('venturesList');
    if (!list) return;

    const ventures = AdminStore.data.ventures || [];
    if (ventures.length === 0) {
      list.innerHTML = `<div class="empty-state">কোনো ভেঞ্চার পাওয়া যায়নি।</div>`;
      return;
    }

    list.innerHTML = ventures.map(v => `
      <div class="admin-item-card" style="margin-bottom: 1rem;">
        <div class="card-body-wrap">
          <span class="card-row-tag">${escapeHtml(v.role || 'Initiative')}</span>
          <h3 class="card-item-title" style="margin-top: 0.5rem;">${escapeHtml(v.title)}</h3>
          <p class="card-item-desc">${escapeHtml(v.description || '')}</p>
        </div>
      </div>
    `).join('');
  }

  // ==========================================
  // GUESTBOOK MODERATION
  // ==========================================
  function renderGuestbook() {
    const container = document.getElementById('guestbookList');
    if (!container) return;

    let entries = [];
    try {
      const stored = localStorage.getItem(GUESTBOOK_KEY);
      if (stored) entries = JSON.parse(stored);
    } catch (e) {
      console.warn('Guestbook parse error:', e);
    }

    if (entries.length === 0) {
      container.innerHTML = `<div class="empty-state">কোনো গেস্টবুক মেসেজ জমা পড়েনি।</div>`;
      return;
    }

    container.innerHTML = entries.map((item, idx) => `
      <div class="admin-item-card" style="margin-bottom: 1rem;">
        <div class="card-body-wrap">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <strong>${escapeHtml(item.name || 'Anonymous')}</strong>
            <span style="font-size: 0.75rem; color: var(--text-dim);">${escapeHtml(item.date || '')}</span>
          </div>
          <p class="card-item-desc" style="font-style: italic;">"${escapeHtml(item.message || '')}"</p>
          <div class="card-actions-bar">
            <button class="btn-danger" onclick="deleteGuestbookMessage(${idx})">
              <i class="fa-solid fa-trash-can"></i> <span>মুছে ফেলুন</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  window.deleteGuestbookMessage = function (index) {
    if (confirm('এই মেসেজটি ডিলিট করতে চান?')) {
      try {
        let entries = JSON.parse(localStorage.getItem(GUESTBOOK_KEY) || '[]');
        entries.splice(index, 1);
        localStorage.setItem(GUESTBOOK_KEY, JSON.stringify(entries));
        broadcastChange('guestbook');
        renderGuestbook();
        showToast('মেসেজটি মুছে ফেলা হয়েছে।');
      } catch (e) {
        console.error(e);
      }
    }
  };

  // ==========================================
  // SETTINGS & BACKUP
  // ==========================================
  function renderSettings() {
    const passInput = document.getElementById('settingsNewPassInput');
    if (passInput) passInput.value = AdminStore.getPasscode();
  }

  window.handleSavePassword = function (e) {
    if (e) e.preventDefault();
    const newPass = document.getElementById('settingsNewPassInput').value.trim();
    if (!newPass) {
      alert('পাসওয়ার্ড ফাঁকা রাখা যাবে না!');
      return;
    }
    AdminStore.setPasscode(newPass);
    showToast('এডমিন পাসওয়ার্ড সফলভাবে পরিবর্তন করা হয়েছে! 🔐');
  };

  window.exportDataBackup = function () {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(AdminStore.data, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `fahad_portfolio_backup_${new Date().toISOString().slice(0, 10)}.json`);
    dlAnchorElem.click();
    showToast('সম্পূর্ণ ডাটা ব্যাকআপ সফলভাবে ডাউনলোড হয়েছে! 💾');
  };

  window.importDataBackup = function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const imported = JSON.parse(e.target.result);
        if (imported && (imported.travelGallery || imported.articles || imported.loveCards)) {
          if (confirm('ব্যাকআপ ইমপোর্ট করলে বর্তমান ডাটা প্রতিস্থাপিত হবে। আপনি কি এগিয়ে যেতে চান?')) {
            AdminStore.data = imported;
            AdminStore.save('all');
            renderDashboard();
            showToast('ডাটা ব্যাকআপ সফলভাবে রিস্টোর হয়েছে! ✨');
          }
        } else {
          alert('অবৈধ ব্যাকআপ ফাইল!');
        }
      } catch (err) {
        alert('ফাইল পড়তে ত্রুটি হয়েছে!');
      }
    };
    reader.readAsText(file);
  };

  window.resetToFactoryDefaults = function () {
    if (confirm('সতর্কতা: এটি সম্পূর্ণ ওয়েবসাইটকে প্রাথমিক ডিফল্ট অবস্থায় ফিরিয়ে নেবে! আপনি কি নিশ্চিত?')) {
      AdminStore.resetToDefaults();
      renderDashboard();
      showToast('সব কনটেন্ট ফ্যাক্টরি ডিফল্টে রিসেট করা হয়েছে। 🔄');
    }
  };

  // Utility HTML Escape
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ==========================================
  // INITIALIZE
  // ==========================================
  document.addEventListener('DOMContentLoaded', () => {
    AdminStore.init();
    checkAuth();
  });

})();
