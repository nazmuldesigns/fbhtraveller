/**
 * FAHAD BIN HUSNE ALI — LUXURY PORTFOLIO
 * Complete Internationalization (Bengali default & English) + Light/Dark Theme Engine
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. THEME ENGINE (DARK DEFAULT <-> EYE-FRIENDLY LIGHT)
  // ==========================================================================
  const THEME_STORAGE_KEY = 'fahad_portfolio_theme';

  function getSavedTheme() {
    return localStorage.getItem(THEME_STORAGE_KEY) || 'dark';
  }

  function applyTheme(theme) {
    const active = theme === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', active);
    localStorage.setItem(THEME_STORAGE_KEY, active);

    // Update buttons & tooltips
    const themeBtn = document.getElementById('themeToggleBtn');
    const isBn = (localStorage.getItem('fahad_portfolio_lang') || 'en') === 'bn';
    if (themeBtn) {
      themeBtn.title = active === 'light'
        ? (isBn ? 'ডার্ক মোড চালু করুন (Switch to Dark)' : 'Switch to Dark Mode')
        : (isBn ? 'লাইট মোড চালু করুন (Switch to Light)' : 'Switch to Light Mode');
    }

    const dockTooltip = document.getElementById('dockThemeTooltip');
    if (dockTooltip) {
      dockTooltip.textContent = active === 'light' ? 'Dark' : 'Light';
    }
  }

  // Pre-apply theme immediately on parse to prevent flash
  applyTheme(getSavedTheme());

  window.toggleTheme = function () {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    applyTheme(next);

    const isBn = (localStorage.getItem('fahad_portfolio_lang') || 'en') === 'bn';
    if (typeof showToast === 'function') {
      const msg = next === 'light'
        ? (isBn ? 'লাইট মোড সক্রিয় হয়েছে ☀️' : 'Light Mode activated ☀️')
        : (isBn ? 'ডার্ক মোড সক্রিয় হয়েছে 🌙' : 'Dark Mode activated 🌙');
      showToast(msg);
    }
  };

  window.initTheme = function () {
    applyTheme(getSavedTheme());
  };

  // ==========================================================================
  // 2. BILINGUAL DICTIONARY (BENGALI DEFAULT <-> ELEGANT ENGLISH)
  // ==========================================================================
  const LANG_STORAGE_KEY = 'fahad_portfolio_lang';

  window.I18N_DICT = {
    bn: {
      // Navbar
      navTagline: "God First • নোম্যাড • বিল্ডার",
      navIdentity: "পরিচিতি",
      navWritings: "লেখা ও ভাবনা",
      navTheLab: "দ্য ল্যাব ও উদ্যোগ",
      navGenz: "জেন-জি টেক হাব",
      navCreed: "৫টি মূল স্তম্ভ",
      navTimeline: "জীবন পরিক্রমা",
      navTravels: "ভ্রমণ ডায়েরি",
      navRoots: "শিকড় ও ভালোবাসা",
      navGuestbook: "মন্তব্য খাতা",
      navConnect: "পিআর ও যোগাযোগ",

      // Hero
      heroBadgeSub: "ঈমান • লক্ষ্য • আত্মমর্যাদা",
      heroStatus: "বৈশ্বিক পিআর ও অ্যাডভাইজরির জন্য উন্মুক্ত",
      heroIm: "আমি",
      heroName: "ফাহাদ বিন হুসনে আলী",
      typewriterPrefix: "আমি একজন",
      heroBio: "সংস্কৃতির মেলবন্ধন তৈরি করা, অদেখা দিগন্তের সন্ধান করা এবং জীবনের বাস্তব গল্পগুলোকে অনুপ্রেরণায় রূপ দেওয়া। বরগুনার নদীমাতৃক <strong>বামনা ও বরিশাল</strong> থেকে উজবেকিস্তানের প্রাচীন <strong>সমরখন্দ</strong> এবং মালয়েশিয়ার আধুনিক <strong>কুয়ালালামপুর</strong> — জীবন চলার প্রতিটি ধাপে সততা, পরিবার ও সবার উপরে আল্লাহর সন্তুষ্টি।",
      chipNomad: "অনলাইন প্রফেশনাল",
      chipExplorer: "বৈশ্বিক অভিযাত্রী",
      chipWriter: "অকপট গল্পকার",
      chipCommunity: "কমিউনিটি সংগঠক",
      chipFamily: "নিবেদিত পরিবারকেন্দ্রিক মানুষ",
      btnTheLab: "দ্য ল্যাব ও উদ্যোগ দেখুন",
      btnReadStories: "গল্প ও লেখা পড়ুন",
      btnCreed: "জীবনের দর্শন",
      statFb: "ফেসবুক কমিউনিটি",
      statVentures: "সক্রিয় উদ্যোগ ও নেতৃত্ব",
      statYouth: "শিক্ষার্থী ও যুবকের সম্পৃক্ততা",
      statCountries: "দেশ ভ্রমণ",
      pillGodFirst: "God First",
      pillNomadTitle: "রিমোট নোম্যাড",
      pillNomadDesc: "SSP LLC ও PFLab",
      tabThinker: "চিন্তাশীল",
      tabTraveler: "পরিব্রাজক",
      tabNomad: "প্রফেশনাল",
      tabSmile: "অমলিন হাসি",
      captionText: "চিন্তাশীল ও লেখক • আত্মমগ্ন অনুভূতির মুহূর্ত",

      heroRoles: [
        "অনলাইন প্রফেশনাল ও ডিজিটাল নোম্যাড",
        "ইনিশিয়েটর @ পার্মানেন্ট ফিউচার ল্যাব",
        "অকপট গল্পকার ও সমাজ পর্যবেক্ষক",
        "বামনা থেকে সিল্ক রোডের অভিযাত্রী",
        "Seats2meet সোশ্যাল এন্টারপ্রেনার",
        "God First • নিবেদিত পারিবারিক মানুষ"
      ],

      // Writings
      writingsBadge: "অকপট গল্পকার",
      writingsTitle: 'লেখালেখি ও <span class="gradient-text">আত্মোপলব্ধি</span>',
      writingsSubtitle: "সমাজ, মানবজীবনের টানাপোড়েন, বিশ্বাস আর দৈনন্দিন জীবনের গভীর অনুভূতি নিয়ে অকপট, প্রাণবন্ত ও মননশীল সাহিত্যকর্ম।",
      articlesCountPrefix: "",
      articlesCountSuffix: "টি নির্বাচিত লেখা",
      quoteText: '"বিপদ কেটে গেলে মানুষ আর আল্লাহরেই মনে রাখে না..."',
      quoteAuthor: "— ফাহাদ বিন হুসনে আলী (বাবার সাথে জীবনের গভীর উপলব্ধির স্মৃতি)",
      quoteTag: "মূল জীবনদর্শন • God First",
      btnSeeMore: "সি অল আর্টিকেল (See All Articles)",
      btnShowLess: "সংক্ষেপ করুন (Show Less)",
      readMoreLink: "সম্পূর্ণ পড়ুন",

      // The Lab
      theLabBadge: "উদ্যোগ ও প্রভাব",
      theLabTitle: 'দ্য ল্যাব — <span class="gradient-text">যা আমি গড়ে তুলি</span>',
      theLabSubtitle: "ভবিষ্যতমুখী প্রযুক্তিগত উদ্যোগ, আন্তর্জাতিক পর্যায়ের বিশ্বস্ত রিমোট অপারেশন এবং উন্মুক্ত সামাজিক নেটওয়ার্কিংয়ের মেলবন্ধন।",
      viewVentureBtn: "সম্পূর্ণ বিস্তারিত ও কভার পড়ুন",

      // Gen-Z Tech Hub
      genzBadge: "আগামীর প্রজন্ম",
      genzTitle: 'জেন-জি টেক হাব — <span class="gradient-text">আগামীর দিগন্ত</span>',
      genzSubtitle: "প্রযুক্তির সুফল সবার জন্য উন্মুক্ত করা। ভার্চুয়াল রিয়ালিটি (VR), আধুনিক কম্পিউটিং ও সততার সাথে ডিজিটাল স্বাবলম্বী হওয়ার সুযোগ পৌঁছে দেওয়া প্রত্যন্ত গ্রামের স্কুলে ও তরুণদের মাঝে।",
      card1GenzBadge: "তৃণমূল ভিআর অভিজ্ঞতা",
      card1GenzMeta: "পার্মানেন্ট ফিউচার ল্যাব ইনিশিয়েটিভ",
      card1GenzTitle: "গ্রামের শিশুদের চোখে ভার্চুয়াল রিয়েলিটির বিস্ময়",
      card1GenzText: "প্রযুক্তি কেবল শহরের বিত্তবানদের জন্য নয়। যখন মফস্বলের একটি স্কুলপড়ুয়া বাচ্চা প্রথমবার ভিআর হেডসেট চোখে দিয়ে বলে— 'ভাইয়া, আমি তো পুরো অন্য এক জগতে চলে গিয়েছি!'— সেই ক্ষণিকের চমক আর আত্মবিশ্বাসই আগামীর বৈপ্লবিক বাংলাদেশের বীজ।",
      card1GenzBtn: "ভিআর ক্লাসরুমের সম্পূর্ণ অভিজ্ঞতা ও ছবি পড়ুন",
      card2GenzBadge: "জাতীয় বিজ্ঞান সপ্তাহ",
      card2GenzMeta: "৪৪তম জাতীয় বিজ্ঞান ও প্রযুক্তি সপ্তাহ",
      card2GenzTitle: "উদ্ভাবন ও প্রযুক্তির জাতীয় মঞ্চে",
      card2GenzText: "সরকারি ও জাতীয় পর্যায়ে তরুণদের ভবিষ্যৎমুখী প্রযুক্তির সাথে পরিচয় করিয়ে দেওয়া। রোবোটিক্স, এআই এবং উদীয়মান প্রযুক্তির গুরুত্ব তুলে ধরার বাস্তব কর্মযজ্ঞ।",
      card2GenzBtn: "বিস্তারিত পড়ুন",
      card3GenzBadge: "ব্যক্তিগত মেন্টরশিপ",
      card3GenzMeta: "ব্যক্তিগত মেন্টরশিপ ও দক্ষতা বৃদ্ধি",
      card3GenzTitle: "তরুণদের স্বাবলম্বী করার অঙ্গীকার",
      card3GenzText: "নাজমুলের মতো পরিশ্রমী তরুণদের পাশে বসে ল্যাপটপের ব্যবহার, আন্তর্জাতিক ক্লায়েন্টের সাথে যোগাযোগ এবং আত্মসম্মানের সাথে উপার্জনের পথ তৈরি করে দেওয়া।",
      card3GenzBtn: "বিস্তারিত পড়ুন",
      card4GenzBadge: "#PFLab দর্শন",
      card4GenzMeta: "ওপেন সোর্স দর্শন ও যৌথ ভবিষ্যৎ",
      card4GenzTitle: "জ্ঞান ভাগ করে নিলে তা বহুগুণ বেড়ে যায়",
      card4GenzText: '"Sharing without ownership, innovating without boundaries." প্রতিটি যুবকের ভেতর লুকিয়ে থাকা সুপ্ত প্রতিভাকে জাগ্রত করার অনুপ্রেরণাদায়ী মুহূর্ত।',
      card4GenzBtn: "বিস্তারিত পড়ুন",

      // 5 Pillars of Creed
      creedBadge: "নৈতিক ভিত্তি",
      creedTitle: 'জীবনের ৫ স্তম্ভ — <span class="gradient-text">আদর্শ ও পথনির্দেশক</span>',
      creedSubtitle: "যে অবিচল নীতিমালার ওপর ভিত্তি করে গড়ে উঠেছে আমার জীবনের প্রতিটি সিদ্ধান্ত, সফর, সাহিত্যকর্ম ও মানুষের সাথে আচরণ।",
      p1Title: "God First",
      p1Sub: "তাওয়াক্কুল ও শোকরগোযারি",
      p1Desc: '"সব পদচিহ্নের শুরুতে এবং শেষে আল্লাহ। সুখের দিনে কৃতজ্ঞতা আর বিপদের দিনে ধৈর্য— এই বিশ্বাসই আমার জীবনের সকল অর্জন আর মানসিক শান্তির মূল উৎস।"',
      p1Tag: "ঈমান ও আত্মিক দিশা",
      p2Title: "Baba & Family",
      p2Sub: "বাবার ছায়া ও মাটির শিকড়",
      p2Desc: '"বাবার কাঁধে হাত রেখে দাঁড়ানোর চেয়ে বড় রাজকীয় সম্মান দুনিয়ায় আর কিছু নেই। যে সন্তান মা-বাবাকে সন্তুষ্ট রেখে জীবন পরিচালনা করে, দুনিয়ার কোনো ঝড় তাকে টলাতে পারে না।"',
      p2Tag: "নিবেদিত পারিবারিক মানুষ",
      p3Title: "Raw Truth",
      p3Sub: "অকপট কলম ও মানবিক অনুভব",
      p3Desc: '"শব্দ দিয়ে কাউকে চমকে দেওয়ার চেয়ে সাধারণ মানুষের নিঃশব্দ কান্না আর সমাজের মেকি ভণ্ডামিকে নির্ভীকভাবে প্রকাশ করাই কলমের আসল সার্থকতা।"',
      p3Tag: "নির্ভীক গল্পকার",
      p4Title: "Open Bridges",
      p4Sub: "কমিউনিটি ও নিঃস্বার্থ মেলবন্ধন",
      p4Desc: '"Seats2meet আর PFLab আমাকে শিখিয়েছে— মানুষ যখন বাণিজ্যিক স্বার্থ ভুলে একে অপরের পাশে দাঁড়ায়, তখন অচেনা মানুষের মাঝেও পরম আত্মীয়তার জন্ম হয়।"',
      p4Tag: "কমিউনিটি স্থপতি",
      p5Title: "Humility",
      p5Sub: "ভ্রমণে অহংকার বিসর্জন",
      p5Desc: '"বামনার নদী থেকে সমরখন্দের নীল মিনার কিংবা হিমালয়ের কোল— ভ্রমণ মনে করিয়ে দেয় স্রষ্টার এই অসীম সৃষ্টিতে আমি কতটা নগণ্য। জীবন তো কেবলি এক সফর।"',
      p5Tag: "আজীবন অভিযাত্রী",

      // Timeline
      timelineBadge: "জীবন পরিক্রমা",
      timelineTitle: 'জীবন পরিক্রমা — <span class="gradient-text">মাইলফলক ও পদচিহ্ন</span>',
      timelineSubtitle: "দক্ষিণ বাংলার শান্ত নদীবিধৌত জনপদ থেকে যুক্তরাষ্ট্রের আন্তর্জাতিক এন্টারপ্রাইজ এবং মধ্য এশিয়ার প্রাচীন সিল্ক রোডের হাতছানি।",
      t1Year: "২০১৮ – ২০২০",
      t1Badge: "বামনা ও বরিশাল",
      t1Title: "শিকড় ও দূর দিগন্তের হাতছানি",
      t1Body: "দক্ষিণের নদীবিধৌত বামনার শান্ত পরিবেশে বেড়ে ওঠা। বাবার নৈতিক শিক্ষা আর ধর্মীয় অনুশাসনে জীবনের ভিত্তিপ্রস্তর স্থাপন। ইন্টারনেটের অসীম সম্ভাবনার সাথে প্রথম পরিচয় এবং দূরবর্তী কাজের স্বপ্ন বুনন।",
      t1Tag: "শুরুর শিকড় • নৈতিক বাতিঘর",
      t2Year: "২০২১",
      t2Badge: "Seats2meet.com",
      t2Title: "কো-ওয়ার্কিং ও যৌথ সম্ভাবনার বিপ্লব",
      t2Body: "গ্লোবাল 'Seats2meet' মুভমেন্টে সোশ্যাল এন্টারপ্রেনার হিসেবে পদার্পণ। জ্ঞান বিনিময়ের মাধ্যমে কীভাবে অপরিচিত মানুষ একে অপরের সহযাত্রী হতে পারে— সেই আধুনিক সোশ্যাল ক্যাপিটালের বিস্তারে সক্রিয় ভূমিকা।",
      t2Tag: "সোশ্যাল এন্টারপ্রেনারশিপ",
      t3Year: "২০২২",
      t3Badge: "SSP Organization LLC",
      t3Title: "আন্তর্জাতিক ভার্চুয়াল নেতৃত্ব ও আস্থা",
      t3Body: "মার্কিন যুক্তরাষ্ট্রের শীর্ষ এন্টারপ্রাইজের ভার্চুয়াল অ্যাসিস্ট্যান্ট হিসেবে গুরুত্বপূর্ণ এক্সিকিউটিভ কার্যক্রম পরিচালনা। দূরবর্তী কাজের দক্ষতা, সময়নিষ্ঠতা এবং গভীর পেশাদারিত্বের প্রমাণ।",
      t3Tag: "এক্সিকিউটিভ ভিএ দক্ষতা",
      t4Year: "২০২৩",
      t4Badge: "Permanent Future Lab",
      t4Title: "মফস্বলে ভবিষ্যৎ প্রযুক্তির আলো",
      t4Body: "#PFLab ইনিশিয়েটর হিসেবে দেশের প্রত্যন্ত অঞ্চলের শিক্ষার্থীদের হাতে তুলে দেওয়া ভার্চুয়াল রিয়েলিটি (VR) হেডসেট। জাতীয় বিজ্ঞান ও প্রযুক্তি সপ্তাহে অংশগ্রহণ এবং নাজমুলের মতো তরুণদের ব্যক্তিগত মেন্টরশিপ।",
      t4Tag: "প্রযুক্তির সমবণ্টন",
      t5Year: "২০২৪",
      t5Badge: "সিল্ক রোড ও হিমালয়",
      t5Title: "সিল্ক রোডের নীল মিনার ও জীবনবোধ",
      t5Body: "স্ত্রী ও পরিবারকে নিয়ে প্রাচীন সমরখন্দ, বোখারা ও পোখরার হ্রদে অবিস্মরণীয় সফর। ইতিহাসের ধ্বংসাবশেষ আর স্রষ্টার বিশাল সৃষ্টির সামনে দাঁড়িয়ে নিজের অহংকার বিসর্জন ও আত্মোপলব্ধি।",
      t5Tag: "সিল্ক রোড পর্যটক",
      t6Year: "বর্তমান ও ভবিষ্যৎ",
      t6Badge: "১২,০০০+ কমিউনিটি ও পরিবার",
      t6Title: "God First, কলমের সাহস ও বাবার ছায়া",
      t6Body: "সামাজিক মাধ্যমে অগণিত মানুষের ভালোবাসা, নির্ভীক ও সংবেদনশীল সাহিত্যকর্ম, বাবার প্রতি অবিচল ভক্তি আর আল্লাহর ওপর তাওয়াক্কুল নিয়ে এক মুক্ত ও মার্জিত জীবনের জয়গান।",
      t6Tag: "বিশ্বাস ও কলমের সাধনা",

      // Travel Log
      travelBadge: "অভিযাত্রী",
      travelTitle: 'ভ্রমণ ডায়েরি — <span class="gradient-text">বামনা থেকে বিশ্বমঞ্চে</span>',
      travelSubtitle: '"ভ্রমণ মানুষকে বিনম্র হতে শেখায়। এটি আপনাকে উপলব্ধি করায় এই সুবিশাল পৃথিবীতে আপনার অবস্থান কতটুকু ক্ষুদ্র।"',
      routeBamna: "বরগুনা, বাংলাদেশ",
      routeBarisal: "দক্ষিণের নদীসমূহ",
      routePokhara: "নেপাল • হিমালয়",
      routeSamarkand: "সিল্ক রোড, উজবেকিস্তান",
      routeKL: "টুইন টাওয়ার, মালয়েশিয়া",
      filterAll: "সকল সফর",
      filterSilkRoad: "সিল্ক রোড ও উজবেকিস্তান",
      filterHimalaya: "হিমালয় ও নেপাল",
      filterMetropolis: "মেট্রোপলিস ও মালয়েশিয়া",
      carouselTitle: 'পথের বাঁকে বন্দি মুহূর্ত — <span class="gradient-gold-text">২০টি নান্দনিক গল্প</span>',
      carouselSubtitle: "ইন্টারেক্টিভ ডুয়াল-ফ্লো প্যারাল্যাক্স ক্যারোসেল। প্রথম সারি মসৃণভাবে বাম থেকে ডানে প্রবাহিত হয়, আর দ্বিতীয় সারি ডান থেকে বামে। ড্র্যাগ করুন, ক্লিক করে বড় ছবিতে দেখুন।",
      carouselHint: "মাউস বা আঙুল দিয়ে ড্র্যাগ করুন • হোভার করলে গতি থামবে • ক্লিক করে বড় ছবিতে দেখুন",
      btnPause: "গতি থামান",
      btnPlay: "চালু করুন",

      // Roots, Family & Love
      rootsBadge: "হৃদয় ও বাতিঘর",
      rootsTitle: 'শিকড়, পরিবার ও <span class="gradient-text">চিরন্তন ভালোবাসা</span>',
      rootsSubtitle: "কর্মব্যস্ততা আর পদবীর ঊর্ধ্বে— জীবনের আসল ভিত্তি: পরম শ্রদ্ধেয় বাবার প্রতি অবিচল ভক্তি, সহধর্মিণীর চিরন্তন সঙ্গ এবং মাটির গৃহকোণের মায়া।",
      babaBadge: "আমার বাবা, আমার বাতিঘর",
      babaImgTag: "বাবা ও আমি",
      babaThumb1: "মর্যাদাবান বাবা",
      babaThumb2: "আকাশপথে সফর",
      babaThumb3: "গ্রামের ভিটেমাটি",
      babaThumb4: "স্মৃতির পাতা",
      babaTitle: "বাবার ছায়া: যেখানে সব ঝড় শান্ত হয়ে যায়",
      babaBody1: "পৃথিবীর বহু দেশ ঘুরলাম, কত রথী-মহারথীর সান্নিধ্য দেখলাম— কিন্তু বাবার কাঁধে হাত রেখে দাঁড়ানোর যে তৃপ্তি ও শক্তি, তা আর কোথাও নেই।",
      babaQuote: '"বিপদ যখন মাথার ওপর আসে, তখন মানুষ হাত তুলে প্রভুর কাছে কাঁদে। কিন্তু বিপদ কেটে গেলে মানুষ আবার সব ভুলে যায়... বাবা আমাকে শিখিয়েছেন সব অবস্থায় কৃতজ্ঞ থাকতে, মাটিকে ভালোবাসতে, আর আল্লাহকে জীবনে সবার প্রথমে রাখতে।"',
      babaBody2: 'প্লেনের সিটে পাশে বসা বাবার মুখে যখন শান্তির হাসি দেখি, কিংবা সমুদ্রের তীরে বাবার পাশে দাঁড়িয়ে বলি— "বাবা, আমি আছি তো"— সেটাই আমার জীবনের সেরা অর্জন।',
      trait1: "দোয়ার স্তম্ভ",
      trait2: "নৈতিক দিশা",
      trait3: "বটবৃক্ষের ছায়া",
      loveBadge: "চিরন্তন সহযাত্রী",
      loveTitle: "দুটি প্রাণ, এক অনন্ত দিগন্ত",
      loveSubtitle: "সিল্ক রোডের রাজকীয় স্থাপত্য থেকে পাহাড়ি হ্রদ আর গ্রামের সবুজ আঙিনা।",
      rotatingTitle: 'ভালোবাসার মিষ্টি অধ্যায় — <span class="gradient-love-text">১০টি স্মৃতির সফর</span>',
      rotatingSubtitle: "থ্রি-ডি সার্কুলার ক্যারোসেল। ড্র্যাগ করে ঘোরান, প্রতিটি কার্ডে ক্লিক করে ভালোবাসার স্মৃতি আবিষ্কার করুন।",

      // Guestbook
      guestBadge: "কমিউনিটি মেমোরি ওয়াল",
      guestTitle: 'কমিউনিটির সুর — <span class="gradient-text">ভালোবাসা ও শুভকামনা</span>',
      guestSubtitle: "বন্ধু, সহযাত্রী ডিজিটাল নোম্যাড, শিক্ষার্থী এবং ১২,০০০+ শুভানুধ্যায়ীদের আন্তরিক ভালোবাসা, দোয়া ও মূল্যবান স্মৃতির উন্মুক্ত প্রাঙ্গণ।",
      formTitle: "মন্তব্য খাতায় একটি বার্তা লিখুন",
      formSubtitle: "আপনার আন্তরিক অনুভূতি, স্মৃতি বা দোয়া শেয়ার করুন। সাথে সাথে তা এই দেওয়ালে যুক্ত হয়ে যাবে।",
      labelName: "আপনার পুরো নাম *",
      placeholderName: "যেমন: তানভীর আহমেদ / আলেকজান্ডার",
      labelRole: "পেশা, শহর বা দেশ",
      placeholderRole: "যেমন: সফটওয়্যার ইঞ্জিনিয়ার, ঢাকা / ১২কে কমিউনিটি",
      labelCategory: "বার্তার ধরন",
      tagPrayers: "🤲 দোয়া ও শুভকামনা",
      tagInspiration: "💡 অনুপ্রেরণা",
      tagLove: "❤️ ভালোবাসা ও শ্রদ্ধা",
      labelMsg: "আপনার বার্তা *",
      placeholderMsg: "ফাহাদের উদ্দেশ্যে আপনার মূল্যবান স্মৃতি, চিন্তা বা দোয়া লিখুন...",
      btnPost: "বার্তা প্রকাশ করুন",
      wallTitle: "লাইভ শুভকামনা ও স্মৃতি",

      // Connect & PR
      connectBadge: "পিআর ও নেটওয়ার্কার",
      connectTitle: 'আসুন তৈরি করি <span class="gradient-text">অর্থপূর্ণ মেলবন্ধন</span>',
      connectSubtitle: "কমিউনিকেশন ও পিআর পরামর্শ, আন্তর্জাতিক ভার্চুয়াল এক্সিকিউটিভ নেতৃত্ব, ডিজিটাল ইকোসিস্টেম কোলাবোরেশন বা কেবল আন্তরিক কুশল বিনিময়— আমার দরজা সবসময় উন্মুক্ত।",
      fbBoxTitle: "১২,০০০+ কমিউনিটির সাথে যুক্ত হন",
      fbBoxDesc: "ফেসবুকে ফাহাদের সাথে সরাসরি যুক্ত থাকুন। দৈনন্দিন চিন্তাভাবনা, বাস্তবমুখী সাহিত্যকর্ম, প্রযুক্তি ভাবনা আর ভ্রমণের স্মৃতির নিয়মিত আপডেট পান।",
      fbFollowers: "১২,০০০+ সক্রিয় ফলোয়ার",
      fbBtn: "ফেসবুক প্রোফাইল দেখুন",
      prBoxTitle: "সরাসরি পিআর ও যোগাযোগ",
      prBoxDesc: "যেকোনো পিআর কোলাবোরেশন, মিডিয়া এনগেজমেন্ট, প্রফেশনাল ভার্চুয়াল অ্যাসিস্ট্যান্স বা পার্টনারশিপের জন্য সরাসরি জিমেইলে যোগাযোগ করুন।",
      prBadge: "অ্যাসিঙ্ক্রোনাস • শতভাগ বিশ্বস্ত • দ্রুত উত্তর",
      prBtn: "সরাসরি ইমেইল পাঠান",
      shareBtn: "শেয়ার করুন",

      // Footer & Overlays
      footerCreed: "God First | অনলাইন প্রফেশনাল | পরিব্রাজক | লেখক | পিআর | পারিবারিক মানুষ",
      footerCopyright: "© ২০২৬ ফাহাদ বিন হুসনে আলী। অফিশিয়াল পোর্টফোলিও।",
      backBtn: "পোর্টফোলিওতে ফিরে যান (Back to Portfolio)"
    },

    en: {
      // Navbar
      navTagline: "God First • Nomad • Builder",
      navIdentity: "Identity",
      navWritings: "Writings & Articles",
      navTheLab: "The Lab & Ventures",
      navGenz: "Gen-Z Tech",
      navCreed: "5 Pillars of Creed",
      navTimeline: "Life Odyssey",
      navTravels: "Travels",
      navRoots: "Roots & Love",
      navGuestbook: "Guestbook",
      navConnect: "PR & Connect",

      // Hero
      heroBadgeSub: "Faith • Purpose • Freedom",
      heroStatus: "Available for Global PR & Advisory",
      heroIm: "I'm",
      heroName: "Fahad Bin Husne Ali",
      typewriterPrefix: "A passionate",
      heroBio: "Connecting humans across cultures, exploring uncharted horizons, and turning raw human stories into inspiration. From the riverbanks of <strong>Bamna & Barisal</strong> to the ancient Silk Road of <strong>Samarkand</strong> and the skyscrapers of <strong>Kuala Lumpur</strong> — living with purpose, family at heart, and God above all.",
      chipNomad: "Online Professional",
      chipExplorer: "Global Explorer",
      chipWriter: "Raw Storyteller",
      chipCommunity: "Community Architect",
      chipFamily: "Proud Family Man",
      btnTheLab: "Explore The Lab & Ventures",
      btnReadStories: "Read Stories",
      btnCreed: "Life Creed",
      statFb: "Facebook Community",
      statVentures: "Active Ventures & Roles",
      statYouth: "Students & Youths Reached",
      statCountries: "Countries Explored",
      pillGodFirst: "God First",
      pillNomadTitle: "Remote Nomad",
      pillNomadDesc: "SSP LLC & PFLab",
      tabThinker: "Thinker",
      tabTraveler: "Traveler",
      tabNomad: "Professional",
      tabSmile: "Smile",
      captionText: "The Thinker & Writer • Contemplative Spirit",

      heroRoles: [
        "Online Professional & Digital Nomad",
        "Initiator @ Permanent Future Lab",
        "Raw Storyteller & Social Observer",
        "Traveler from Bamna to the Silk Road",
        "Seats2meet Social Entrepreneur",
        "God First • Devoted Family Man"
      ],

      // Writings
      writingsBadge: "The Raw Storyteller",
      writingsTitle: 'Writings & <span class="gradient-text">Human Thoughts</span>',
      writingsSubtitle: "Unfiltered, soulful, witty, and profoundly empathetic reflections on society, human struggles, faith, and everyday wonders.",
      articlesCountPrefix: "",
      articlesCountSuffix: " Curated Essays",
      quoteText: '"When the storm passes, people often forget God..."',
      quoteAuthor: "— Fahad Bin Husne Ali (Memories of deep life wisdom shared with Baba)",
      quoteTag: "Core Philosophy • God First",
      btnSeeMore: "See All Articles",
      btnShowLess: "Show Less",
      readMoreLink: "Read Full Story",

      // The Lab
      theLabBadge: "Ventures & Impact",
      theLabTitle: 'The Lab — <span class="gradient-text">What I Build</span>',
      theLabSubtitle: "A fusion of forward-thinking technology initiatives, high-trust virtual operations, and global community networking.",
      viewVentureBtn: "Read Full Details & Cover",

      // Gen-Z Tech Hub
      genzBadge: "Future Generations",
      genzTitle: 'Gen-Z Tech Hub — <span class="gradient-text">Igniting Tomorrow</span>',
      genzSubtitle: "Democratizing deep tech. Bringing Virtual Reality headsets, modern computing, and ethical digital independence to village classrooms and ambitious youth across Bangladesh.",
      card1GenzBadge: "Grassroots VR Experience",
      card1GenzMeta: "Permanent Future Lab Initiative",
      card1GenzTitle: "Wonder of Virtual Reality in Rural Classrooms",
      card1GenzText: "Technology belongs not merely to the wealthy in big cities. When a village student wears a VR headset for the first time and gasps, 'Brother, I stepped into another world!'— that spark of wonder is the seed of tomorrow's revolutionary Bangladesh.",
      card1GenzBtn: "Read VR Classroom Story & Photos",
      card2GenzBadge: "National Science Week",
      card2GenzMeta: "44th National Science & Tech Week",
      card2GenzTitle: "On the National Stage of Innovation & Tech",
      card2GenzText: "Introducing future-focused technologies to youth at the national level. Demonstrating robotics, AI, and emerging tech in hands-on interactive sessions.",
      card2GenzBtn: "Read Details",
      card3GenzBadge: "One-on-One Mentorship",
      card3GenzMeta: "Personal Mentorship & Growth",
      card3GenzTitle: "Commitment to Youth Independence",
      card3GenzText: "Sitting beside hardworking youths like Nazmul to teach laptop operations, international client communication, and dignified livelihoods.",
      card3GenzBtn: "Read Details",
      card4GenzBadge: "#PFLab Philosophy",
      card4GenzMeta: "Open Source Vision & Shared Future",
      card4GenzTitle: "Knowledge Multiplies When Shared Openly",
      card4GenzText: '"Sharing without ownership, innovating without boundaries." Awakening the latent spark inside every young creator.',
      card4GenzBtn: "Read Details",

      // 5 Pillars of Creed
      creedBadge: "Moral Architecture",
      creedTitle: 'The 5 Pillars — <span class="gradient-text">Life Creed & Compass</span>',
      creedSubtitle: "The foundational convictions that anchor every business decision, journey, social reflection, and interaction.",
      p1Title: "God First",
      p1Sub: "Divine Faith & Gratitude",
      p1Desc: '"At the beginning and end of every footprint lies Allah. Gratitude in prosperity and steadfast patience in trials — this conviction is the bedrock of all my inner peace."',
      p1Tag: "Divine Faith & Alignment",
      p2Title: "Baba & Family",
      p2Sub: "Father's Shade & Roots",
      p2Desc: '"Standing with a hand on my father\'s shoulder is an honor greater than any worldly royalty. A child who honors their parents will never be shaken by life\'s fiercest storms."',
      p2Tag: "Devoted Family Man",
      p3Title: "Raw Truth",
      p3Sub: "Honest Words & Empathy",
      p3Desc: '"True writing does not seek to dazzle, but rather to voice the silent tears of everyday people and fearlessly unmask the pretensions of society."',
      p3Tag: "Radical Storyteller",
      p4Title: "Open Bridges",
      p4Sub: "Community & Bridges",
      p4Desc: '"Seats2meet and PFLab taught me that when people set aside commercial interests to support one another, the deepest bonds of kinship form even among strangers."',
      p4Tag: "Community Architect",
      p5Title: "Humility",
      p5Sub: "Ego Shed Through Travel",
      p5Desc: '"From the rivers of Bamna to the turquoise domes of Samarkand and the Himalayas — travel reminds me of how small I am in this vast creation. Life is merely a brief journey."',
      p5Tag: "Lifelong Explorer",

      // Timeline
      timelineBadge: "The Odyssey",
      timelineTitle: 'The Odyssey — <span class="gradient-text">Milestones & Footprints</span>',
      timelineSubtitle: "From the serene riverbanks of Southern Bangladesh to the high-trust virtual operations of the US and the ancient Silk Road of Central Asia.",
      t1Year: "2018 – 2020",
      t1Badge: "Bamna & Barisal",
      t1Title: "Roots & Distant Horizons",
      t1Body: "Growing up along the peaceful rivers of Southern Bamna. Rooted in father's moral teachings and spiritual values. First encounter with the boundless possibilities of the internet.",
      t1Tag: "Early Roots • Moral Anchor",
      t2Year: "2021",
      t2Badge: "Seats2meet.com",
      t2Title: "Coworking & Shared Potential",
      t2Body: "Stepping into the global Seats2meet movement as a social entrepreneur. Championing how strangers become companions through knowledge exchange and pioneering modern social capital.",
      t2Tag: "Social Entrepreneurship",
      t3Year: "2022",
      t3Badge: "SSP Organization LLC",
      t3Title: "Global Virtual Leadership & Trust",
      t3Body: "Managing critical executive operations as Virtual Assistant for a high-velocity US enterprise. Proving remote mastery, punctuality, and unwavering dedication.",
      t3Tag: "Executive VA Mastery",
      t4Year: "2023",
      t4Badge: "Permanent Future Lab",
      t4Title: "Future Tech in Grassroots Towns",
      t4Body: "Handing Virtual Reality headsets to village school students as #PFLab Initiator. Participating in National Science Week and one-on-one mentorship for youth like Nazmul.",
      t4Tag: "Youth & Tech Democratization",
      t5Year: "2024",
      t5Badge: "Silk Road & Himalayas",
      t5Title: "Turquoise Minarets & Introspection",
      t5Body: "Unforgettable journey with beloved wife and family across ancient Samarkand, Bukhara, and the tranquil lakes of Pokhara. Shedding ego before historic ruins and the majesty of creation.",
      t5Tag: "The Silk Road Explorer",
      t6Year: "Present & Future",
      t6Badge: "12,000+ Community & Family",
      t6Title: "God First, Words of Truth & Baba's Shade",
      t6Body: "Embracing the warmth of thousands on social media, writing soulful literary pieces, honoring Baba with steadfast devotion, and living a dignified life anchored in faith.",
      t6Tag: "Legacy of Faith & Words",

      // Travel Log
      travelBadge: "The Explorer",
      travelTitle: 'Travel Log — <span class="gradient-text">Bamna to the World</span>',
      travelSubtitle: '"Traveling teaches you humility. It shows you what a tiny place you occupy in this vast, wonderful world."',
      routeBamna: "Barguna, BD",
      routeBarisal: "Rivers of South",
      routePokhara: "Nepal • Himalayas",
      routeSamarkand: "Silk Road, Uzbekistan",
      routeKL: "Twin Towers, Malaysia",
      filterAll: "All Journeys",
      filterSilkRoad: "Silk Road & Uzbekistan",
      filterHimalaya: "Himalayas & Nepal",
      filterMetropolis: "Metropolis & Malaysia",
      carouselTitle: 'Moments Captured on the Road — <span class="gradient-gold-text">20 Visual Stories</span>',
      carouselSubtitle: "Interactive dual-flow Parallax Carousel. Row 1 drifts smoothly left-to-right, while Row 2 moves counter-current right-to-left. Drag freely, enjoy parallax depth, or click any frame to expand.",
      carouselHint: "Drag horizontally with mouse or touch • Hover to pause auto-play • Click to open high-res lightbox",
      btnPause: "Pause Flow",
      btnPlay: "Resume Flow",

      // Roots, Family & Love
      rootsBadge: "The Heart & Anchor",
      rootsTitle: 'Roots, Family & <span class="gradient-text">Eternal Love</span>',
      rootsSubtitle: "Beyond the work, beyond the titles — the foundation of everything: devotion to his beloved Baba, the companionship of his wife, and the warmth of his home roots.",
      babaBadge: "My Father, My Anchor",
      babaImgTag: "Baba & I",
      babaThumb1: "Dignified Father",
      babaThumb2: "Flight with Baba",
      babaThumb3: "Village Homestead",
      babaThumb4: "Memories Page",
      babaTitle: "In Father's Shade: Where Every Storm Turns to Peace",
      babaBody1: "I have traveled across countries, met eminent leaders and scholars — yet nothing compares to the quiet strength and supreme peace of standing with my hand on my father's shoulder.",
      babaQuote: '"When adversity strikes, people raise their hands in desperate prayer. But once the storm clears, they often forget... My father taught me to remain grateful in every circumstance, to stay deeply rooted, and to put God first in everything."',
      babaBody2: 'When I see the serene smile on my father\'s face in the airplane seat, or stand beside him on the seashore and say, "Baba, I am here for you" — that is the single greatest achievement of my life.',
      trait1: "Pillar of Prayers",
      trait2: "Moral Compass",
      trait3: "Banyan Tree Shade",
      loveBadge: "Life Partner",
      loveTitle: "Two Souls, One Endless Horizon",
      loveSubtitle: "From the historic palaces of the Silk Road to mountain lakes and the green courtyard of home.",
      rotatingTitle: 'Sweet Chapters of Love — <span class="gradient-love-text">10 Precious Memories</span>',
      rotatingSubtitle: "A 3D circular carousel with draggable rotating cards. Drag smoothly in 3D space, pause on hover, or click any card to explore the memory.",

      // Guestbook
      guestBadge: "Global Community Wall",
      guestTitle: 'Community Voices — <span class="gradient-text">Words & Prayers</span>',
      guestSubtitle: "A digital sanctuary where friends, fellow digital nomads, students, and 12,000+ followers share their warm prayers, reflections, and genuine thoughts for Fahad Bin Husne Ali.",
      formTitle: "Leave a Note in the Guestbook",
      formSubtitle: "Share your words, memories, or prayers. Your note will be immediately pinned to this community wall.",
      labelName: "Your Full Name *",
      placeholderName: "e.g. Alex van den Berg / Tanvir Ahmed",
      labelRole: "Affiliation, City, or Country",
      placeholderRole: "e.g. Tech Lead, Amsterdam / 12K Community",
      labelCategory: "Category / Note Type",
      tagPrayers: "🤲 Prayers & Blessings",
      tagInspiration: "💡 Inspiration",
      tagLove: "❤️ Love & Respect",
      labelMsg: "Your Message *",
      placeholderMsg: "Write your heartfelt message, reflections, or prayers for Fahad...",
      btnPost: "Post Note to Guestbook",
      wallTitle: "Live Community Notes",

      // Connect & PR
      connectBadge: "PR Guy & Networker",
      connectTitle: 'Let’s Create <span class="gradient-text">Meaningful Synergy</span>',
      connectSubtitle: "Whether you need strategic PR advice, virtual executive leadership, digital ecosystem collaboration, or simply want to say Assalamu Alaikum — my door is always open.",
      fbBoxTitle: "Join the 12,000+ Community",
      fbBoxDesc: "Connect directly with Fahad on Facebook. Follow along for daily thoughts, real-life stories, tech experiments, and travel memories.",
      fbFollowers: "12,000+ Active Followers & Growing",
      fbBtn: "Visit Facebook Profile",
      prBoxTitle: "Direct PR & Inquiries",
      prBoxDesc: "For high-level PR collaborations, media engagements, executive virtual assistance, or strategic partnerships, reach out directly via official Gmail.",
      prBadge: "Asynchronous • High Integrity • Fast Response",
      prBtn: "Send Direct Email",
      shareBtn: "Share",

      // Footer & Overlays
      footerCreed: "God First | Online Professional | Traveler | Writer | PR Guy | Family Man",
      footerCopyright: "© 2026 Fahad Bin Husne Ali. Official Portfolio.",
      backBtn: "Back to Portfolio"
    }
  };

  // English translations for default articles
  window.ARTICLES_I18N = {
    'kidney': {
      title: "The Kidney Patient & The iPhone Joke: The True Price of Health",
      category: "Social Observation",
      readTime: "3 min read",
      date: "2024",
      snippet: "A joke has circulated on social media for years: 'A new iPhone is out, time to sell a kidney!' But standing in a hospital dialysis ward reveals the true, priceless value of health..."
    },
    'worker': {
      title: "The Nilphamari Laborer: Silent Heroes in the Shadow of Civilization",
      category: "Human Reality",
      readTime: "4 min read",
      date: "2024",
      snippet: "Before the sun rises, the quiet morning air is broken by the gentle chime of hundreds of bicycles. These hardworking garment workers are the true backbone of our economy..."
    },
    'labor-day': {
      title: "The Untold Tears of the Street: Sweat, Dignity, and Our Collective Debt",
      category: "Human Reality • Society",
      readTime: "4 min read",
      date: "May Day",
      snippet: "Behind the tall walls of modern cities, when laborers wipe the beads of sweat from their foreheads, we barely notice the silent sacrifice holding this civilization upright..."
    },
    'bank': {
      title: "The Long Bank Queue: Humans Lost in Bureaucratic Papers",
      category: "Civic Observation",
      readTime: "3 min read",
      date: "2023",
      snippet: "Walking into bank branches at 11 AM feels like entering another dimension. Suit-clad executives behind glass, and elderly citizens waiting hours with paper tokens..."
    },
    'silence': {
      title: "The Tale of the Mute: The Wordless Language That Stirs the Soul",
      category: "Spiritual Reflection",
      readTime: "4 min read",
      date: "2024",
      snippet: "In a world drowning in noise, where everyone clamors to speak and none care to listen, meeting a speech-impaired youth revealed a truth stronger than thousands of speeches..."
    },
    'samarkand': {
      title: "Samarkand & Tashkent, Uzbekistan: The Timeless Call of the Silk Road",
      category: "Heritage Expedition",
      readTime: "5 min read",
      date: "International Expedition",
      snippet: "Standing in awe before turquoise domes, ancient madrasahs, and centuries of Silk Road memory across Central Asia..."
    },
    'vr-rural': {
      title: "Virtual Reality in Rural Classrooms: Deep Tech for Grassroots Children",
      category: "Permanent Future Lab Initiative • Future Tech",
      readTime: "4 min read",
      date: "2024",
      snippet: "Technology belongs not merely to the wealthy in big cities. When a village student wears a VR headset for the first time and gasps, 'Brother, I stepped into another world!'— that spark of wonder is the seed of tomorrow's revolutionary Bangladesh."
    },
    'science-week': {
      title: "44th National Science & Tech Week: On the National Stage of Innovation",
      category: "National Science Week • STEM",
      readTime: "4 min read",
      date: "National Tech Week",
      snippet: "Democratizing future tech at the national level. Demonstrating robotics, AI, and immersive learning to thousands of enthusiastic students."
    },
    'pflab-philosophy': {
      title: "Knowledge Multiplies When Shared Openly",
      category: "PFLab Philosophy • Community Innovation",
      readTime: "5 min read",
      date: "Open Source Movement",
      snippet: "'Sharing without ownership, innovating without boundaries.' Awakening the latent spark inside every young creator."
    },
    'nazmul-mentorship': {
      title: "Commitment to Youth Independence",
      category: "Personal Mentorship & Growth",
      readTime: "4 min read",
      date: "Mentorship",
      snippet: "Sitting beside hardworking youths like Nazmul to teach laptop operations, international client communication, and dignified livelihoods."
    }
  };

  // English translations for default ventures
  window.VENTURES_I18N = {
    'pflab': {
      title: "Permanent Future Lab (PFLab)",
      category: "Open Innovation & Shared Tech",
      role: "Initiator & Grassroots Pioneer",
      snippet: "The first permanent open technology lab in Bangladesh, inspired by Dutch open-hardware concepts. Bringing VR, robotics, and future tech directly to village classrooms."
    },
    'seats2meet': {
      title: "Seats2meet.com",
      category: "Social Capital & Coworking",
      role: "Social Entrepreneur & Community Architect",
      snippet: "A meeting place for society and intellect. More than desks and chairs—an international platform where knowledge exchange creates real social capital."
    },
    'ssp': {
      title: "SSP Organization LLC",
      category: "Global Operations & Remote Advisory",
      role: "Virtual Assistant & High-Level Operations",
      snippet: "Executing complex remote operations with international precision. A real-world blueprint for the global digital nomad lifestyle."
    },
    'dujm': {
      title: "Dujm",
      category: "Web Strategy & Editorial Infrastructure",
      role: "Website Manager & Digital Strategist",
      snippet: "Orchestrating modern digital footprints, CMS management, content performance, SEO hygiene, and uninterrupted online presence."
    },
    'mentorship': {
      title: "Empowering Young Minds into Digital Freedom",
      category: "Next-Gen Mentorship & Growth",
      role: "Youth Mentor & Tech Enabler",
      snippet: "Working one-on-one with young aspiring builders to help them master digital tools, international markets, and ethical entrepreneurship."
    }
  };

  // English translations for Love Cards
  window.LOVE_CARDS_I18N = {
    'love_1': { tag: 'Vintage 90s Romance', title: '90s Nostalgic Fairytale', desc: 'The sweet timeless feeling of colorful vintage fashion and pure simplicity.' },
    'love_2': { tag: 'Beachside Breeze', title: 'A Handful of Love by the Sea', desc: 'Holding hands in the gentle sea breeze, hearts talking in rhythm with the waves.' },
    'love_3': { tag: 'Playful Opposites', title: 'Serious Face, Radiant Smile', desc: 'One thoughtful and solemn, the other lively and smiling—our harmony in contrast.' },
    'love_4': { tag: 'Midnight City Lights', title: 'City Lights & Midnight Stories', desc: 'Walking side by side under neon nightlights with no destination needed.' },
    'love_5': { tag: 'Cozy Cab Ride', title: 'Moments in a Moving Cab', desc: 'Resting on your shoulder in the backseat through the rush of the city.' },
    'love_6': { tag: 'Eternal Travel Partners', title: 'Lifelong Co-Travelers', desc: 'From terminal to runway—wherever in the world we go, you are my forever companion.' },
    'love_7': { tag: 'Mountain Ride & Rain', title: 'King & Queen of the Mountains', desc: 'Under one umbrella along winding mountain paths through the misty clouds.' },
    'love_8': { tag: 'Warm Ramen Date', title: 'Steaming Noodles & Laughter', desc: 'The simple pure joy of sharing a warm bowl of comfort on a chilly day.' },
    'love_9': { tag: 'Safe In My Arms', title: 'Peaceful Sleep on My Shoulder', desc: 'All the fatigue of the world melts away in the safest comfort of trust.' },
    'love_10': { tag: 'Silk Road Fairytale', title: 'Sultan & Queen of Samarkand', desc: 'A royal fairytale in historic Silk Road architecture—a monument of eternal love.' }
  };

  // English translations for Travel Gallery
  window.TRAVEL_GALLERY_I18N = {
    'tg_1': { title: 'Golden Dawn at Registan Square', desc: 'Golden morning sunlight touching the timeless architecture of the ancient Silk Road.' },
    'tg_2': { title: 'Twin Towers in Magical Night Lights', desc: 'A modern marvel illuminated against the velvet night sky in Kuala Lumpur.' },
    'tg_3': { title: 'Tranquil Himalayan Reflections on Phewa Lake', desc: 'The snow-kissed Annapurna range mirrored in peaceful alpine blue waters.' },
    'tg_4': { title: 'Clouds Drifting Past the World Peace Pagoda', desc: 'Deep serenity and mountain silence above the valleys of Pokhara.' },
    'tg_5': { title: 'In the Shadow of the Kalyan Minaret', desc: 'Walking the 12th-century stone pathways of historic Bukhara.' },
    'tg_6': { title: 'Ancient Durbar Square of Kathmandu', desc: 'Historic wooden craftsmanship and timeless temple courtyards.' },
    'tg_7': { title: 'Pristine Blue Shores of the Andaman Sea', desc: 'Where emerald forested peaks embrace the azure ocean waves.' },
    'tg_8': { title: 'Underground Palace Carved in Marble', desc: 'The art, chandeliers, and Soviet-Oriental architecture of Tashkent Metro.' },
    'tg_9': { title: 'Himalayan Sunrise at Sarangkot Peak', desc: 'First golden rays illuminating mist-covered alpine ridges.' },
    'tg_10': { title: 'Aromatic Spice Bazaars of the Silk Road', desc: 'Vibrant trade, colorful carpets, and centuries of merchants.' },
    'tg_11': { title: 'Himalayas Across the Horizon from Nagarkot', desc: 'Watching clouds play hide-and-seek across snow-capped peaks.' },
    'tg_12': { title: 'Architecture of the Pink Mosque in Putrajaya', desc: 'A harmonious blend of Islamic tradition and modern engineering.' },
    'tg_13': { title: 'Itchan Kala: An Open-Air Living Museum', desc: 'Sun-baked clay fortresses and the ancient mystery of Khiva.' },
    'tg_14': { title: 'Rainbow Steps & Murugan at Batu Caves', desc: 'Climbing the 272 vibrant steps into the limestone caverns.' },
    'tg_15': { title: 'Whispering Waterfalls of Pokhara Valley', desc: 'The roar of Davis Falls surrounded by verdant green gorges.' },
    'tg_16': { title: 'Shah-i-Zinda: The Turquoise Tile Empire', desc: 'Heavenly blue mosaic tiles gleaming under the Samarkand sun.' },
    'tg_17': { title: 'Melaka River & Colonial Footprints', desc: 'Serene twilight along Portuguese and Dutch historic waterways.' },
    'tg_18': { title: 'Journey Towards Annapurna Base Camp', desc: 'Trekking through rocky mountain trails and bracing alpine winds.' },
    'tg_19': { title: 'Chorsu Bazaar: Bread, Domes & Warm Faces', desc: 'Fresh naan bread, fragrant nuts, and genuine local smiles.' },
    'tg_20': { title: 'Emerald Tea Gardens of Cameron Highlands', desc: 'Rolling misty green hills in the cool mountain climate.' }
  };

  // ==========================================================================
  // 3. LANGUAGE APPLICATION ENGINE
  // ==========================================================================
  function applyLanguage(lang) {
    const active = lang === 'en' ? 'en' : 'bn';
    document.documentElement.lang = active;
    localStorage.setItem(LANG_STORAGE_KEY, active);

    const dict = window.I18N_DICT[active] || window.I18N_DICT.bn;

    // 1. Text elements tagged with [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // 2. Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.placeholder = dict[key];
      }
    });

    // 3. Titles / tooltips
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key] !== undefined) {
        el.title = dict[key];
      }
    });

    // 4. Nav tooltips
    document.querySelectorAll('[data-i18n-tooltip]').forEach(el => {
      const key = el.getAttribute('data-i18n-tooltip');
      if (dict[key] !== undefined) {
        el.setAttribute('data-nav-tooltip', dict[key]);
      }
    });

    // 5. Update Lang Buttons
    const langBtnText = document.getElementById('langBtnText');
    if (langBtnText) {
      langBtnText.textContent = active === 'bn' ? 'বাং' : 'EN';
    }
    const dockLangCode = document.getElementById('dockLangCode');
    if (dockLangCode) {
      dockLangCode.textContent = active === 'bn' ? 'বাং' : 'EN';
    }
    const langToggleBtn = document.getElementById('langToggleBtn');
    if (langToggleBtn) {
      langToggleBtn.title = active === 'bn'
        ? 'Switch to English (ইংরেজি করুন)'
        : 'বাংলায় পরিবর্তন করুন (Switch to Bengali)';
    }

    // 6. Update Typewriter Roles
    if (dict.heroRoles && typeof window.updateHeroRoles === 'function') {
      window.updateHeroRoles(dict.heroRoles);
    }

    // 7. Update dynamic modules
    if (typeof window.renderArticles === 'function') window.renderArticles();
    if (typeof window.renderVentures === 'function') window.renderVentures();
    if (typeof window.renderParallaxCarouselTracks === 'function') window.renderParallaxCarouselTracks();
    if (typeof window.renderRotatingCards === 'function') window.renderRotatingCards();
  }

  window.toggleLanguage = function () {
    const current = localStorage.getItem(LANG_STORAGE_KEY) || 'en';
    const next = current === 'bn' ? 'en' : 'bn';
    applyLanguage(next);

    if (typeof showToast === 'function') {
      const msg = next === 'en' ? 'English language enabled 🌐' : 'বাংলা ভাষা সক্রিয় হয়েছে 🌐';
      showToast(msg);
    }
  };

  window.initLanguage = function () {
    const saved = localStorage.getItem(LANG_STORAGE_KEY) || 'en';
    applyLanguage(saved);
  };

  // Cross-tab synchronization for theme and language
  window.addEventListener('storage', function (e) {
    if (e.key === THEME_STORAGE_KEY) {
      applyTheme(e.newValue || 'dark');
    } else if (e.key === LANG_STORAGE_KEY) {
      applyLanguage(e.newValue || 'en');
    }
  });

  // Attach to DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.initTheme();
      window.initLanguage();
    });
  } else {
    window.initTheme();
    window.initLanguage();
  }

})();
