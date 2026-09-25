/**
 * FAHAD BIN HUSNE ALI — LUXURY PORTFOLIO SCRIPT
 * Interactive Systems: Typewriter, Web Audio Ambient Synthesizer,
 * 3D Tilt, Stories Drawer, Lightbox, Filterable Travel Grid, Copy System
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. TYPEWRITER EFFECT
  // ==========================================
  const typewriterElement = document.getElementById('typewriter');
  const roles = [
    "Online Professional & Digital Nomad",
    "Initiator @ Permanent Future Lab",
    "Raw Storyteller & Social Observer",
    "Traveler from Bamna to the Silk Road",
    "Seats2meet Social Entrepreneur",
    "God First • Devoted Family Man"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 90;
  const deletingSpeed = 45;
  const delayBetweenWords = 2200;

  function typeEffect() {
    if (!typewriterElement) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => { isDeleting = true; typeEffect(); }, delayBetweenWords);
      return;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeEffect, 400);
      return;
    }

    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
  }

  typeEffect();

  // ==========================================
  // 2. HERO PORTRAIT SELECTOR
  // ==========================================
  const selectorDots = document.querySelectorAll('.selector-dot');
  const mainHeroImg = document.getElementById('mainHeroImage');
  const captionText = document.getElementById('captionText');

  selectorDots.forEach(dot => {
    dot.addEventListener('click', () => {
      selectorDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');

      const newSrc = dot.getAttribute('data-img');
      const newCaption = dot.getAttribute('data-caption');

      if (mainHeroImg) {
        mainHeroImg.style.opacity = '0';
        mainHeroImg.style.transform = 'scale(0.96)';

        setTimeout(() => {
          mainHeroImg.src = newSrc;
          mainHeroImg.style.opacity = '1';
          mainHeroImg.style.transform = 'scale(1)';
        }, 250);
      }

      if (captionText) {
        captionText.textContent = newCaption;
      }
    });
  });

  // ==========================================
  // 3. 3D TACTILE TILT ON CARDS (UIVERSE FEEL)
  // ==========================================
  const tiltCards = document.querySelectorAll('.uiverse-tilt');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      const rotateX = -deltaY * 5;
      const rotateY = deltaX * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });

  // ==========================================
  // 4. PORTFOLIO DATA STORE & CMS CORE ENGINE
  // ==========================================
  const DEFAULT_PORTFOLIO_DATA = {
    articles: [
      {
        id: 'kidney',
        title: "কিডনি পেশেন্ট ও আইফোন জোক: হাসির আড়ালে সুস্থতার দাম",
        category: "সামাজিক পর্যবেক্ষণ",
        readTime: "৩ মিনিট পাঠ",
        date: "২০২৪",
        coverImg: "./Asist/GenZ/start.1.jpg",
        snippet: "সামাজিক মাধ্যমে একটা জোক বহু বছর ধরে ঘোরে— 'নতুন আইফোন এসেছে, একটা কিডনি বেচে দিলে তবেই কেনা সম্ভব!' কিন্তু হাসপাতালের ডায়ালাইসিস করিডোরে দাঁড়ালে বোঝা যায় সুস্থতার আসল মূল্য...",
        content: `
          <p>সামাজিক মাধ্যমে একটা জোক বহু বছর ধরে ঘোরে— <em>"নতুন আইফোন এসেছে, একটা কিডনি বেচে দিলে তবেই কেনা সম্ভব!"</em> আমরা সবাই হয়তো কোনো না কোনো সময় এই মিম দেখে হেসেছি, শেয়ার দিয়েছি। কিন্তু এই সস্তা হাসির পেছনে লুকিয়ে থাকা হাড়কাঁপানো সত্যটা আমরা কয়জন অনুভব করি?</p>
          
          <p>একদিন কোনো এক হাসপাতালের ডায়ালাইসিস ইউনিটের করিডোরে গিয়ে দাঁড়ালে বুঝতে পারবেন— সুস্থ একটি কিডনি থাকা মানুষের জীবনে কত বড় এক অলৌকিক রহমত। সেখানে মেশিনের ঘড়ঘড় শব্দে প্রতিটা মিনিট কাটে মৃত্যুর সাথে পাঞ্জা লড়ে। একজন মানুষ যখন সপ্তাহে তিন দিন চার ঘণ্টা করে নিজের শরীরের রক্ত কৃত্রিমভাবে পরিষ্কার করাতে বাধ্য হন, তার কাছে দুনিয়ার কোনো দামী গাড়ি, বাড়ি বা সর্বশেষ মডেলের আইফোনের এক পয়সা মূল্য থাকে না।</p>
          
          <blockquote>"আমরা যেসব অঙ্গের যত্ন নিই না, সৃষ্টিকর্তার যেসব নেয়ামত বিনামূল্যে পাচ্ছি বলে অবহেলা করি— সেগুলোর মূল্য শুধু তারাই বোঝে, যারা এক ফোঁটা স্বাভাবিক প্রস্রাব বা এক রাত ব্যথাহীন ঘুমের জন্য কোটি টাকা ঢালতে প্রস্তুত।"</blockquote>
          
          <div class="article-media-wrapper img-center">
            <img src="./Asist/Personal/profile1.jpg" alt="চিন্তাশীল ফাহাদ বিন হুসনে আলী">
            <span class="article-caption">উপলব্ধির মুহূর্ত — জীবন ও সুস্থতা স্রষ্টার শ্রেষ্ঠ উপহার</span>
          </div>

          <p>আমরা ভোগের পেছনে ছুটতে গিয়ে জীবনকে পণ বানিয়ে ফেলি। অথচ সুস্থ শরীর নিয়ে সকালে ঘুম থেকে উঠতে পারাটাই যে পৃথিবীর শ্রেষ্ঠ বিলাসিতা, সেই বোধটাই আমাদের মাঝে নেই। আইফোন প্রতি বছর আপডেট হয়, কিন্তু আপনার দেহটা কোনো দ্বিতীয় সংস্করণে আসে না। হাসুন, কিন্তু নেয়ামতের শুকরিয়া আদায় করতে ভুলবেন না।</p>
        `
      },
      {
        id: 'worker',
        title: "নীলফামারীর শ্রমিক: ঘামের গন্ধ আর মেকি সভ্যতার ভিড়ে নীরব নায়ক",
        category: "মানবিক গল্প",
        readTime: "৪ মিনিট পাঠ",
        date: "২০২৪",
        coverImg: "./Asist/Travel/t.1.jpg",
        snippet: "সূর্য ওঠার আগেই হালকা কুয়াশা ভেদ করে শত শত সাইকেলের টুংটাং শব্দে মুখরিত হয়ে ওঠে রাস্তা। নীলফামারীর ইপিজেডের এই মেহনতি মানুষেরাই দেশের অর্থনীতির আসল কারিগর...",
        content: `
          <p>নীলফামারীর উত্তরা ইপিজেডের সকালটা বড় অদ্ভুত। সূর্য ওঠার আগেই হালকা কুয়াশা ভেদ করে শত শত সাইকেলের টুংটাং শব্দে মুখরিত হয়ে ওঠে রাস্তা। নারী-পুরুষ শ্রমিকদের ব্যস্ত কদম। তাদের পরনে সাধারণ কাপড়, হাতে ছোট টিফিন ক্যারিয়ার, কিন্তু চোখে এক অজানা যুদ্ধের সংকল্প।</p>
          
          <p>এদের গল্প পত্রিকার পাতায় আসে না, এরা কোনো সোশ্যাল মিডিয়ার সেলিব্রিটি নয়। অথচ আমাদের দেশের অর্থনীতির যে গর্বিত চাকা ঘোরে, তার মূল জ্বালানি এই মানুষগুলোর নোনা ঘাম। দিনভর ঘণ্টার পর ঘণ্টা সেলাই মেশিনের সুইয়ের সামনে বসে তারা বিশ্বখ্যাত ব্র্যান্ডের পোশাক তৈরি করে। যে পোশাক ইউরোপ-আমেরিকার ঝাঁ-চকচকে শো-রুমে হাজার ডলারে বিক্রি হয়, সেই পোশাকের সুতো কাটতে গিয়ে হয়তো তাদের আঙুল ফেটে রক্ত বেরোয়।</p>
          
          <div class="article-media-wrapper img-float-left">
            <img src="./Asist/Travel/t.1.jpg" alt="উত্তরবঙ্গের মেঠোপথ">
            <span class="article-caption">শ্রম ও সততার নীরব পথচলা</span>
          </div>

          <blockquote>"আমরা যখন এসির নিচে বসে দেশের উন্নয়ন নিয়ে বড় বড় কথা বলি, তখন মাটির কাছাকাছি থাকা এই মানুষগুলো কোনো অভিযোগ ছাড়া নীরবে দেশের ভিত্তিপ্রস্তর বহন করে চলে।"</blockquote>
          
          <p>তাদের সাথে কথা বললে বোঝা যায়, তাদের চাওয়া কত সাধারণ— মাস শেষে একটু হাসিমুখে চাল-ডাল কেনা, বাচ্চার স্কুলের বেতন দেওয়া, আর বৃদ্ধ বাবা-মায়ের জন্য এক পাতার ওষুধ। মেকি সভ্যতার ভিড়ে এই মানুষগুলোর সততা আর সরলতাই এই দেশের আসল সৌন্দর্য। তাদের এই আত্মত্যাগের প্রতি শ্রদ্ধা জানানো আমাদের নাগরিক দায়িত্ব।</p>
        `
      },
      {
        id: 'bank',
        title: "ব্যাংকের লম্বা লাইন: কাগজের ভিড়ে হারিয়ে যাওয়া মানুষ",
        category: "নাগরিক অসঙ্গতি",
        readTime: "৩ মিনিট পাঠ",
        date: "২০২৩",
        coverImg: "./Asist/GenZ/nazmul.jpg",
        snippet: "সকাল এগারোটায় ব্যাংকের শাখাগুলোতে ঢুকলে মনে হয় এক ভিন্ন গ্রহের সমাবেশ। কাঁচের ওপারে টাই-স্যুট পরা অফিসার, আর কাঁচের এপারে টোকেন হাতে ঘণ্টার পর ঘণ্টা দাঁড়িয়ে থাকা সাধারণ আমজনতা...",
        content: `
          <p>সকাল এগারোটায় ব্যাংকের শাখাগুলোতে ঢুকলে মনে হয় এক ভিন্ন গ্রহের সমাবেশ। কাঁচের ওপারে টাই-স্যুট পরা অফিসার, আর কাঁচের এপারে টোকেন হাতে ঘণ্টার পর ঘণ্টা দাঁড়িয়ে থাকা সাধারণ আমজনতা।</p>
          
          <p>সেদিন দেখলাম এক অশীতিপর বৃদ্ধা এসেছেন তার পেনশনের যৎসামান্য টাকা তুলতে। ডিজিটাল ডিভাইসে তার হাতের আঙুলের ছাপ বারবার ফেইল করছে। বয়সের ভারে চামড়া কুঁচকে যাওয়া রেখাগুলো আধুনিক ফিঙ্গারপ্রিন্ট সেন্সরে মিলছে না। তরুণ ব্যাংকার বিরক্তি নিয়ে বলছেন— <em>"চাচী, আপনার ফিঙ্গারপ্রিন্ট তো ম্যাচ করে না, নির্বাচন অফিসে গিয়ে ঠিক করে আনেন।"</em></p>
          
          <blockquote>"টেকনোলজি আসার কথা ছিল মানুষের জীবন সহজ করতে, মানুষকে মর্যাদা দিতে। অথচ আমরা প্রযুক্তিকে বানিয়ে ফেলেছি মানুষকে অসম্মান করার ও হয়রানি করার এক অদ্ভুত দেয়াল।"</blockquote>
          
          <p>বৃদ্ধাটি ফ্যালফ্যাল করে তাকিয়ে রইলেন। তিনি বোঝেন না অ্যালগরিদম কী, ডেটাবেজ কী। তিনি শুধু বোঝেন এটা তার নিজের উপার্জিত টাকা, যা দিয়ে তিনি আজ রাতের ভাত আর ওষুধ কিনবেন। কাগজের ফাইল আর স্ক্রিনের আড়ালে আমাদের মানবিক সংবেদনশীলতা কবে এত ভোঁতা হয়ে গেল?</p>
        `
      },
      {
        id: 'silence',
        title: "বোবা মানুষের গল্প: শব্দহীন চোখের যে ভাষা হৃদয় ছুঁয়ে যায়",
        category: "আধ্যাত্মিক উপলব্ধি",
        readTime: "৪ মিনিট পাঠ",
        date: "২০২৪",
        coverImg: "./Asist/Personal/1.jpg",
        snippet: "শব্দদূষণে ভরা এই পৃথিবীতে সবাই শুধু বলতে চায়, কেউ শুনতে চায় না। এক বাকপ্রতিবন্ধী যুবকের চোখের আলোতে যে শিক্ষা পেয়েছিলাম, তা হাজারও বক্তব্যের চেয়ে শক্তিশালী...",
        content: `
          <p>শব্দদূষণে ভরা এই পৃথিবীতে সবাই শুধু বলতে চায়, কেউ শুনতে চায় না। বক্তার অভাব নেই, কিন্তু শ্রোতা বিলুপ্তপ্রায় প্রাণী। ঠিক এই সময়ে এমন একজন মানুষের মুখোমুখি হওয়া, যিনি কখনোই কথা বলতে পারেন না— এক অভাবনীয় শিক্ষা।</p>
          
          <p>এক চায়ের দোকানে পরিচয় হয়েছিল এক বাকপ্রতিবন্ধী যুবকের সাথে। মুখে কোনো আওয়াজ নেই, কিন্তু তার দৃষ্টিতে যে গভীরতা, যে কৃতজ্ঞতা আর নিখাদ সত্য ছিল, তা কোনো সুললিত বক্তব্যের চেয়ে হাজার গুণ বেশি শক্তিশালী। এক কাপ চা আর একটু হাসিমুখের অভিবাদনে তার মুখের যে স্বর্গীয় আলো জ্বলে উঠেছিল, তা আজও আমার স্মৃতিতে জলজ্যান্ত।</p>
          
          <blockquote>"আমরা কোটি কোটি শব্দ খরচ করে মানুষকে আঘাত করি, মিথ্যা বলি, অহংকার প্রকাশ করি। অথচ যার জবান নেই, সে শুধু তার চোখের নীরব ভাষায় সৃষ্টিকর্তার মহিমা আর মানুষের প্রতি অকৃত্রিম ভালোবাসা প্রকাশ করে যায়।"</blockquote>
          
          <p>নীরবতারও একটা পবিত্র ভাষা আছে। যখন আমরা কথা বলা থামিয়ে সত্যিকার অর্থে মন দিয়ে চারপাশ দেখতে শিখি, তখনই কেবল এই সৃষ্টির নিগূঢ় সৌন্দর্য অনুভব করা সম্ভব হয়।</p>
        `
      }
    ],
    ventures: [
      {
        id: 'pflab',
        title: "Permanent Future Lab (PFLab)",
        category: "Open Innovation & Shared Tech",
        role: "Initiator & Grassroots Pioneer",
        coverImg: "./Asist/GenZ/start.1.jpg",
        snippet: "ডাচ কনসেপ্টের আদলে বাংলাদেশে প্রথম স্থায়ী উন্মুক্ত ল্যাব। যেখানে প্রতিটি গ্রামের শিশু-কিশোর ও তরুণ বিনা মূল্যে ভার্চুয়াল রিয়ালিটি (VR), রোবোটিক্স ও এআই প্রযুক্তি সরাসরি স্পর্শ করতে পারে।",
        content: `
          <p><strong>Permanent Future Lab (PFLab)</strong> এমন একটি আন্দোলন, যা বিশ্বাস করে প্রযুক্তির অভিজ্ঞতা কোনো বিশেষ শ্রেণির একচেটিয়া অধিকার হতে পারে না। নেদারল্যান্ডসের উদ্ভাবনী কনসেপ্টকে অনুপ্রেরণা নিয়ে আমরা বাংলাদেশে এই উদ্যোগ চালু করেছি।</p>
          
          <p>আমাদের মূল লক্ষ্য— রাজধানী ঢাকার বিলাসবহুল সেমিনারের বাইরে গিয়ে প্রত্যন্ত গ্রাম, চরাঞ্চল ও জেলা শহরের সাধারণ স্কুলগুলোতে আধুনিক প্রযুক্তিকে সাধারণ মানুষের দোরগোড়ায় পৌঁছে দেওয়া।</p>

          <div class="article-media-wrapper img-full">
            <img src="./Asist/GenZ/488735767_704711518685730_2015479684710930061_n.jpg" alt="গ্রামের শিশুদের ভিআর অভিজ্ঞতা">
            <span class="article-caption">প্রথমবারের মতো ভিআর হেডসেট চোখে দিয়ে নতুন এক জগৎ আবিষ্কার করছে গ্রামের শিক্ষার্থীরা</span>
          </div>

          <h2>মূল কর্মপ্রয়াস ও অর্জন</h2>
          <ul>
            <li><strong>১৫+ তৃণমূল প্রদর্শনী ও কর্মশালা:</strong> জাতীয় বিজ্ঞান ও প্রযুক্তি সপ্তাহ সহ প্রত্যন্ত স্কুলে হ্যান্ডস-অন টেক ডেমো।</li>
            <li><strong>১,৫০০+ ছাত্রছাত্রীর সরাসরি অংশগ্রহণ:</strong> ভিআর গগলস, থ্রিডি সিমুলেশন ও এআই ইন্টার‍্যাকশন।</li>
            <li><strong>নো-কস্ট লার্নিং ইকোসিস্টেম:</strong> ডিভাইস শেয়ারিং মডেলের মাধ্যমে প্রযুক্তিকে সবার কাছে উন্মুক্ত করা।</li>
          </ul>

          <blockquote>"আমরা শুধু গ্যাজেট দেখাই না, আমরা একটি প্রজন্মের চোখে এই বিশ্বাস জাগিয়ে তুলি যে তারাও বিশ্বমানের প্রযুক্তির স্রষ্টা হতে পারে।"</blockquote>

          <p>ভবিষ্যতের বাংলাদেশ গড়তে হলে আমাদের তৃণমূলের মেধাকে জাগ্রত করতে হবে। PFLab সেই দীর্ঘমেয়াদী স্বপ্নের এক সাহসী বাস্তব রূপ।</p>
        `
      },
      {
        id: 'seats2meet',
        title: "Seats2meet.com",
        category: "Social Capital & Coworking",
        role: "Social Entrepreneur & Community Architect",
        coverImg: "./Asist/GenZ/486066417_672583348651874_1740925206979679803_n.jpg",
        snippet: "সমাজ ও মেধার মিলনমেলা। কেবল চেয়ার-টেবিল নয়, মানুষের জ্ঞান ও অভিজ্ঞতার বিনিময়ে সামাজিক মূলধন (Social Capital) তৈরির আন্তর্জাতিক প্ল্যাটফর্ম।",
        content: `
          <p><strong>Seats2meet</strong> প্রচলিত কো-ওয়ার্কিং স্পেসের ধারণাকে সম্পূর্ণ বদলে দিয়েছে। এখানে কাজের স্থান কেবল টাকার বিনিময়ে ভাড়া নেওয়া যায় না; এখানে সবচেয়ে বড় মুদ্রা হলো <em>Social Capital</em> বা মেধা ও সহযোগিতার বিনিময়।</p>

          <p>যখন বিভিন্ন পেশার মানুষ একই টেবিলে বসে কফি পান করে এবং একে অপরের সমস্যার সমাধান খুঁজে দেয়, তখন অবচেতনভাবেই এক অনন্য সামাজিক নেটওয়ার্ক ও উদ্ভাবনী সুযোগের সৃষ্টি হয়।</p>

          <div class="article-media-wrapper img-center">
            <img src="./Asist/Personal/2.jpg" alt="কানেক্টিং কমিউনিটি">
            <span class="article-caption">মানুষকে সংযোগ করা এবং অর্থপূর্ণ কাজের সুযোগ তৈরি করাই আমাদের আসল সাধনা</span>
          </div>

          <h2>আমাদের মূল বিশ্বাস</h2>
          <p>সোশ্যাল এন্টারপ্রেনারশিপ কেবল ব্যবসা নয়, এটি সমাজ পরিবর্তনের হাতিয়ার। তরুণদের আমরা শিখিয়েছি কীভাবে পারস্পরিক সংযোগ এবং ইতিবাচক সম্পর্কের মাধ্যমে আন্তর্জাতিক ফ্রিল্যান্সিং ও রিমোট ওয়ার্কের দুনিয়ায় নিজের অবস্থান দৃঢ় করতে হয়।</p>
        `
      },
      {
        id: 'ssp',
        title: "SSP Organization LLC",
        category: "Global Operations & Remote Advisory",
        role: "Virtual Assistant & High-Level Operations",
        coverImg: "./Asist/Personal/1.jpg",
        snippet: "আন্তর্জাতিক মান বজায় রেখে দূরবর্তী ব্যবস্থাপনার জটিল কাজগুলো নিখুঁতভাবে পরিচালনা। ডিজিটাল নোম্যাড লাইফস্টাইলের আন্তর্জাতিক দৃষ্টান্ত।",
        content: `
          <p><strong>SSP Organization LLC</strong>-এর সাথে কাজ করার অভিজ্ঞতা আমাকে শিখিয়েছে কীভাবে ভৌগোলিক সীমানা পেরিয়েও শতভাগ নির্ভরযোগ্য ও সুশৃঙ্খল কর্মদক্ষতা নিশ্চিত করা যায়।</p>

          <p>রিমোট ওয়ার্ক মানে কেবল ল্যাপটপ নিয়ে বসা নয়; এটি হলো সময় সচেতনতা, উচ্চমানের পেশাদারিত্ব, গোপনীয়তা রক্ষা এবং আন্তর্জাতিক ক্লায়েন্টের সাথে সুস্পষ্ট যোগাযোগের এক আর্ট।</p>

          <blockquote>"বিশ্বাস ও সততা হলো রিমোট প্রফেশনালদের একমাত্র বৈশ্বিক মুদ্রা।"</blockquote>

          <p>বাংলাদেশে বসে আন্তর্জাতিক প্রতিষ্ঠানের গুরুত্বপূর্ণ অপারেশন পরিচালনা করার এই অভিজ্ঞতা আমি নতুন প্রজন্মের তরুণদের মাঝে ছড়িয়ে দিতে সচেষ্ট, যাতে তারাও বিশ্বমঞ্চে নিজেদের মেধার স্বাক্ষর রাখতে পারে।</p>
        `
      },
      {
        id: 'dujm',
        title: "Dujm Digital Portal",
        category: "Web Architecture & Digital Media",
        role: "Website Manager & Digital Strategist",
        coverImg: "./Asist/GenZ/start.1.jpg",
        snippet: "আধুনিক ওয়েব স্থাপত্য, তথ্য নিরাপত্তা এবং কমিউনিটি মিডিয়া প্ল্যাটফর্মের মসৃণ পরিচালনা ও ডিজিটাল পাবলিশিং ম্যানেজমেন্ট।",
        content: `
          <p>ডিজিটাল প্ল্যাটফর্ম পরিচালনায় <strong>Dujm</strong>-এর ওয়েবসাইট ম্যানেজার হিসেবে কাজ করা আমার প্রযুক্তিগত ও কন্টেন্ট ম্যানেজমেন্টের দক্ষতাকে সমৃদ্ধ করেছে।</p>

          <p>ওয়েবসাইটের ইউজার এক্সপেরিয়েন্স (UX), কনটেন্ট পাবলিশিং শিডিউল এবং ট্রাফিকের গতিপ্রকৃতি বিশ্লেষণ করে কমিউনিটির কাছে সঠিক বার্তা সঠিক সময়ে পৌঁছে দেওয়াই ছিল মূল দায়িত্ব।</p>
        `
      },
      {
        id: 'mentorship',
        title: "Gen-Z Digital Mentorship & Youth Power",
        category: "Youth Empowerment & Remote Careers",
        role: "Mentor & Youth Catalyst",
        coverImg: "./Asist/GenZ/nazmul.jpg",
        snippet: "বাংলাদেশের ১,৫০০+ তরুণকে ক্যারিয়ার গাইডেন্স, রিমোট কাজের সঠিক দিকনির্দেশনা এবং আত্মবিশ্বাসী জীবনের অনুপ্রেরণা দেওয়া।",
        content: `
          <p>তরুণদের চোখে যে স্বপ্ন থাকে, অনেক সময় সঠিক পথের অভাবে তা হারিয়ে যায়। আমাদের মেন্টরশিপ প্রোগ্রামের লক্ষ্য— শিক্ষার্থীদের হতাশা থেকে বের করে আন্তর্জাতিক রিমোট ক্যারিয়ার ও ফ্রিল্যান্সিংয়ে পথ দেখানো।</p>

          <div class="article-media-wrapper img-center">
            <img src="./Asist/GenZ/nazmul.jpg" alt="তরুণদের সাথে কর্মশালা">
            <span class="article-caption">তরুণদের সাথে সরাসরি মতবিনিময় ও ক্যারিয়ার কর্মশালা</span>
          </div>

          <p>আমরা তরুণদের শিখাই কীভাবে সোশ্যাল মিডিয়াকে অপচয়ের মাধ্যম না বানিয়ে নেটওয়ার্কিং ও কাজের শক্তিশালী হাতিয়ার হিসেবে ব্যবহার করতে হয়।</p>
        `
      }
    ],
    travels: [
      {
        id: 'bamna',
        title: "বামনার নদী ও শিকড়ের টান",
        category: "roots",
        date: "Homeland",
        coverImg: "./Asist/Personal/profile1.jpg",
        snippet: "বরগুনার বামনা ও বিষখালী নদীর পাড়ের স্মৃতি। মাটির ঘ্রাণ আর নদীর ঢেউ যা জীবনের প্রতিটি পদক্ষেপে সাহস জোগায়।",
        content: `
          <p>যতই পৃথিবী ঘুরি না কেন, বরগুনার বামনার সেই নদীমাতৃক রূপ, বর্ষায় বিষখালীর উথালপাথাল ঢেউ আর মেঠোপথের মাটির ঘ্রাণের মতো শান্তি আর কোথাও নেই।</p>
          <p>শিকড়কে ভুলে কোনো মানুষ বড় হতে পারে না। এই শিকড়ের গভীর শিক্ষাই আমাকে যেকোনো প্রতিকূলতায় মাথা উঁচু করে দাঁড়াতে শিখিয়েছে।</p>
        `
      },
      {
        id: 'samarkand',
        title: "উজবেকিস্তানের সমরকন্দ ও তাসখন্দ: সিল্ক রোডের হাতছানি",
        category: "heritage",
        date: "International Expedition",
        coverImg: "./Asist/Personal/profile.jpg",
        snippet: "নীল গম্বুজ, প্রাচীন স্থাপত্য আর শত শত বছরের সিল্ক রোডের ইতিহাস ছুঁয়ে দেখা। মধ্য এশিয়ার এক অবিস্মরণীয় সফর।",
        content: `
          <p>সমরকন্দের ঐতিহাসিক রেগিস্তান স্কয়ারের সামনে দাঁড়িয়ে বুক ভরে শ্বাস নিলে মনে হয় শতাব্দীর ইতিহাস জীবন্ত হয়ে উঠেছে। ইমাম বুখারী (রহঃ)-এর স্মৃতিবিজড়িত এই পুণ্যভূমি জ্ঞানের আলোয় বিশ্বকে আলোকিত করেছিল।</p>
          <div class="article-media-wrapper img-center">
            <img src="./Asist/Personal/profile.jpg" alt="সমরকন্দের স্মৃতি">
            <span class="article-caption">সিল্ক রোডের ঐতিহ্যের কোলে — সমরকন্দ, উজবেকিস্তান</span>
          </div>
          <p>ভ্রমণ মানুষকে উদার করে, মানুষের অহংকার ধূলিসাৎ করে দেয় এবং স্রষ্টার বিশাল সৃষ্টির সামনে মাথা নত করতে বাধ্য করে।</p>
        `
      }
    ],
    genz: [
      {
        id: 'vr-rural',
        title: "গ্রামের শিশুদের চোখে ভার্চুয়াল রিয়েলিটির বিস্ময় — প্রান্তিক শিক্ষায় ডিপ-টেক",
        category: "Permanent Future Lab Initiative • Future Tech",
        readTime: "৪ মিনিট পাঠ",
        date: "২০২৪",
        coverImg: "./Asist/GenZ/488735767_704711518685730_2015479684710930061_n.jpg",
        snippet: "প্রযুক্তি কেবল শহরের বিত্তবানদের জন্য নয়। যখন মফস্বলের একটি স্কুলপড়ুয়া বাচ্চা প্রথমবার ভিআর হেডসেট চোখে দিয়ে বলে— 'ভাইয়া, আমি তো পুরো অন্য এক জগতে চলে গিয়েছি!'— সেই ক্ষণিকের চমক আর আত্মবিশ্বাসই আগামীর বৈপ্লবিক বাংলাদেশের বীজ।",
        content: `
          <p class="article-lead">
            <em>"ভাইয়া, আমি তো পুরো অন্য এক জগতে চলে গিয়েছি! চারদিকে শুধু তারা, আকাশ আর নীল সমুদ্র... হাত বাড়ালেই যেন ছুঁয়ে ফেলা যায়!"</em>— বরিশালের এক গ্রামীণ স্কুলের ক্লাস সেভেনের ছেলেটি যখন চোখের সামনে থেকে ভিআর হেডসেটটি খুলে এই কথাটি বলছিল, তার মুখের অনাবিল বিস্ময় আর চোখের উজ্জ্বলতা আমি কোনোদিন ভুলব না।
          </p>

          <h2>প্রযুক্তির সমবণ্টন: শহরের চার দেয়াল ভেঙে প্রান্তিকে</h2>
          <p>
            আমাদের দেশে উন্নত প্রযুক্তি মানেই সাধারণত ধরে নেওয়া হয় রাজধানীর অভিজাত এলাকা কিংবা নামীদামী ইংলিশ মিডিয়াম স্কুলের বিলাসিতা। ভার্চুয়াল রিয়েলিটি (VR), অগমেন্টেড রিয়েলিটি (AR) বা হাই-এন্ড কম্পিউটিং— এগুলো সাধারণ মফস্বল বা গ্রামের শিক্ষার্থীদের কাছে যেন রূপকথার মতো। <strong>Permanent Future Lab (PFLab)</strong>-এর মূল লক্ষ্যই ছিল এই কৃত্রিম দূরত্বের দেয়ালে আঘাত করা।
          </p>

          <blockquote>
            "আমরা বিশ্বাস করি, ভবিষ্যৎ কারো ব্যক্তিগত সম্পত্তি নয়। একটি শিশুর জন্ম গ্রামে হয়েছে বলেই সে বিশ্বমানের আধুনিক প্রযুক্তি দেখার ও শেখার অধিকার থেকে বঞ্চিত হবে— এই বৈষম্য আমরা মানি না।"
          </blockquote>

          <div class="article-media-wrapper img-center">
            <img src="./Asist/GenZ/488735767_704711518685730_2015479684710930061_n.jpg" alt="গ্রামের স্কুলে ভিআর সেশন">
            <span class="article-caption">গ্রামের স্কুলে ভিআর সেশন — পাঠ্যবইয়ের থিওরি যখন চোখের সামনে জীবন্ত থ্রি-ডি জগতে রূপ নেয়</span>
          </div>

          <h2>ক্লাসরুম যখন গবেষণাগার</h2>
          <p>
            আমরা যখন ভিআর গিয়ার, সেন্সর ও ল্যাপটপ নিয়ে প্রত্যন্ত গ্রামের স্কুলঘরে যাই, প্রথমে শিক্ষকরাও একটু কৌতূহলী চোখে তাকান। কিন্তু যখন তারা দেখেন সৌরজগতের গ্রহগুলো চোখের সামনে কীভাবে প্রদক্ষিণ করছে, মানবদেহের রক্ত কীভাবে ধমনী দিয়ে প্রবাহিত হচ্ছে, কিংবা সমুদ্রের তলদেশের জীববৈচিত্র্য কীভাবে পলকের মধ্যে জীবন্ত হয়ে উঠছে— তখন গোটা ক্লাসরুমের পরিবেশ বদলে যায়। 
          </p>
          <p>
            মুখস্থ বিদ্যার চেয়ে সরাসরি চাক্ষুষ অভিজ্ঞতা একজন শিশুর চিন্তাশক্তিতে হাজার গুণ বেশি গভীর ছাপ ফেলে। যে ছেলেটি হয়তো কোনোদিন সমুদ্র দেখেনি, সে ভার্চুয়াল রিয়েলিটির মাধ্যমে গভীর সমুদ্রে তিমি মাছের বিচরণ দেখছে। যে মেয়েটি হয়তো বিজ্ঞানের জটিল সূত্র দেখে ভয় পেত, সে থ্রি-ডি অণুর গঠন নিজ হাতে ঘুরিয়ে দেখে বিজ্ঞানের অনুরাগী হয়ে উঠছে।
          </p>

          <h2>আগামীর স্বপ্নবাজদের জাগিয়ে তোলা</h2>
          <p>
            এই উদ্যোগগুলো কোনো একদিনের আনুষ্ঠানিক প্রদর্শনীর জন্য নয়। এর মূল উদ্দেশ্য হলো তরুণ প্রজন্মের মনে এই বিশ্বাস রোপণ করে দেওয়া— <strong>"আমিও পারি। বিশ্বমঞ্চের আধুনিক জ্ঞান আমারও নাগালের মধ্যে।"</strong>
          </p>
          <p>
            প্রযুক্তির উন্মুক্ত ভাগাভাগি এবং নিঃস্বার্থ মেন্টরশিপের মাধ্যমেই আমরা এমন এক তরুণ প্রজন্ম গড়ে তুলতে চাই, যারা প্রযুক্তির কেবল পরোক্ষ ভোক্তা হবে না, বরং ভবিষ্যতের উদ্ভাবক হয়ে বিশ্বদরবারে বাংলাদেশের পতাকাকে উজ্জ্বল করবে।
          </p>
        `
      },
      {
        id: 'science-week',
        title: "৪৪তম জাতীয় বিজ্ঞান ও প্রযুক্তি সপ্তাহ: আগামী দিনের উদ্ভাবনী মঞ্চে",
        category: "জাতীয় বিজ্ঞান মেলা • স্টেম শিক্ষা",
        readTime: "৪ মিনিট পাঠ",
        date: "জাতীয় বিজ্ঞান সপ্তাহ",
        coverImg: "./Asist/GenZ/486066417_694356463054569_8132001953531000436_n.jpg",
        snippet: "সরকারি ও জাতীয় পর্যায়ে তরুণদের ভবিষ্যৎমুখী প্রযুক্তির সাথে পরিচয় করিয়ে দেওয়া। রোবোটিক্স, এআই এবং উদীয়মান প্রযুক্তির গুরুত্ব তুলে ধরার বাস্তব কর্মযজ্ঞ।",
        content: `
          <p class="article-lead">
            ৪৪তম জাতীয় বিজ্ঞান ও প্রযুক্তি সপ্তাহ ছিল আমাদের জন্য এক অসাধারণ অভিজ্ঞতা। যেখানে সারাদেশের মেধাবী তরুণ, স্কুল-কলেজের শিক্ষার্থী, শিক্ষক এবং বিজ্ঞানপ্রেমী মানুষের এক বিশাল সমাগম ঘটেছিল।
          </p>

          <h2>উদ্ভাবনের জাতীয় মঞ্চ</h2>
          <p>
            বিজ্ঞান ও প্রযুক্তি সপ্তাহ কেবল একটি বার্ষিক উৎসব নয়; এটি বাংলাদেশের তরুণ উদ্ভাবকদের মেধা ও নতুন আইডিয়া তুলে ধরার এক জাতীয় প্ল্যাটফর্ম। আমাদের বুথে আমরা এমন কিছু প্রযুক্তি উপস্থাপন করেছিলাম যা প্রচলিত থিওরিটিক্যাল বিজ্ঞান শিক্ষার চেয়ে সম্পূর্ণ ব্যবহারিক, ইন্টারেক্টিভ ও বাস্তবমুখী।
          </p>

          <div class="article-media-wrapper img-center">
            <img src="./Asist/GenZ/486066417_694356463054569_8132001953531000436_n.jpg" alt="জাতীয় বিজ্ঞান ও প্রযুক্তি সপ্তাহে প্রদর্শনী">
            <span class="article-caption">জাতীয় বিজ্ঞান মেলায় শিক্ষার্থী ও দর্শনার্থীদের ভার্চুয়াল রিয়েলিটি ও আধুনিক টেকনোলজির সাথে পরিচয়</span>
          </div>

          <h2>শিক্ষার্থীদের স্বতঃস্ফূর্ত অংশগ্রহণ</h2>
          <p>
            আমাদের প্রদর্শনী স্টলে লাইন ধরে দাঁড়িয়েছিল বিভিন্ন স্কুলের কিশোর-কিশোরীরা। ইউনিফর্ম পরা স্কুলছাত্ররা যখন একে একে ভিআর হেডসেট চোখে দিয়ে বিজ্ঞান মডেলগুলোর ইন্টারঅ্যাক্টিভ সিমুলেশন পর্যবেক্ষণ করছিল, তাদের মুখের বিস্ময় আর আনন্দ দেখার মতো ছিল। 
          </p>

          <blockquote>
            "পাঠ্যপুস্তকের পৃষ্ঠায় আঁকা জটিল বৈজ্ঞানিক চিত্র যখন ভার্চুয়াল জগতে হাত দিয়ে নিয়ন্ত্রণ করা যায়, তখন শিক্ষার্থীদের মনে জানার আগ্রহ ও কৌতূহল শতগুণে বেড়ে যায়।"
          </blockquote>

          <h2>ভবিষ্যতের বার্তা</h2>
          <p>
            আমাদের উদ্দেশ্য ছিল স্পষ্ট— নীতি-নির্ধারক, শিক্ষক ও সাধারণ অভিভাবকদের কাছে এই বার্তা পৌঁছে দেওয়া যে, আমাদের শিক্ষা ব্যবস্থাকে আগামী চতুর্থ শিল্প বিপ্লবের জন্য এখনই প্রস্তুত করতে হবে। কৃত্রিম বুদ্ধিমত্তা (AI), অগমেন্টেড রিয়েলিটি (AR) এবং ভার্চুয়াল রিয়েলিটি (VR) আর ভবিষ্যতের বিষয় নয়, এগুলো বর্তমানের বাস্তবতা। বিজ্ঞান মেলার এই মঞ্চ থেকে আমরা সেই অনুপ্রেরণার মশাল আরও বহুদূর ছড়িয়ে দিয়েছি।
          </p>
        `
      },
      {
        id: 'nazmul-mentorship',
        title: "নাজমুলের গল্প: একনিষ্ঠ মেন্টরশিপ ও তরুণদের আত্মনির্ভরশীলতা",
        category: "Youth Empowerment • Remote Careers",
        readTime: "৪ মিনিট পাঠ",
        date: "ব্যক্তিগত মেন্টরশিপ",
        coverImg: "./Asist/GenZ/nazmul.jpg",
        snippet: "নাজমুলের মতো পরিশ্রমী তরুণদের পাশে বসে ল্যাপটপের ব্যবহার, আন্তর্জাতিক ক্লায়েন্টের সাথে যোগাযোগ এবং আত্মসম্মানের সাথে উপার্জনের পথ তৈরি করে দেওয়া।",
        content: `
          <p class="article-lead">
            বড় বড় অডিটোরিয়ামে মাইক হাতে শত শত মানুষের সামনে মোটিভেশনাল বক্তৃতা দেওয়া সহজ, কিন্তু একজন হতাশ ও বিভ্রান্ত তরুণের পাশে ঘণ্টার পর ঘণ্টা বসে তাকে নিজের পায়ে দাঁড়াতে শেখানো অনেক বেশি কঠিন এবং তাৎপর্যপূর্ণ। নাজমুলের গল্পটি ঠিক তেমনই এক নীরব বিপ্লবের।
          </p>

          <h2>হতাশা থেকে সম্ভাবনার খোঁজে</h2>
          <p>
            নাজমুল যখন প্রথম আমার কাছে আসে, তখন তার চোখে ছিল চরম অনিশ্চয়তা। পড়াশোনা শেষ করেও বাস্তবমুখী স্কিলের অভাবে কর্মসংস্থানের কোনো সুনির্দিষ্ট দিশা সে পাচ্ছিল না। পরিবারকে সাহায্য করার তাগিদ ছিল, ছিল নিজের আত্মসম্মান নিয়ে মাথা উঁচু করে বেঁচে থাকার আকুল ইচ্ছা। কিন্তু সঠিক গাইডলাইন আর আন্তর্জাতিক কাজের পরিবেশ সম্পর্কে স্বচ্ছ ধারণা না থাকায় সে দিশেহারা বোধ করছিল।
          </p>

          <div class="article-media-wrapper img-center">
            <img src="./Asist/GenZ/nazmul.jpg" alt="নাজমুলের সাথে মেন্টরশিপ সেশন">
            <span class="article-caption">একান্তে বসে ল্যাপটপ নিয়ে রিমোট ওয়ার্কফ্লো, প্রফেশনাল কমিউনিকেশন ও কাজের কৌশল শেখানোর মুহূর্ত</span>
          </div>

          <h2>ওয়ান-অন-ওয়ান মেন্টরশিপ: হাতে-কলমে শেখা</h2>
          <p>
            আমরা শুরু করলাম একদম গ্রাউন্ড লেভেল থেকে। কেবল ফ্রিল্যান্সিংয়ের তথাকথিত শর্টকাট টিপস নয়; আমরা গুরুত্ব দিলাম টেকসই দক্ষতায়:
          </p>
          <ul>
            <li><strong>প্রফেশনাল ইংরেজি যোগাযোগ:</strong> আন্তর্জাতিক ক্লায়েন্টদের সাথে কীভাবে স্পষ্ট, বিনম্র ও দায়িত্বশীলভাবে ইমেইল এবং মেসেজ আদান-প্রদান করতে হয়।</li>
            <li><strong>টাইম ম্যানেজমেন্ট ও দায়বদ্ধতা:</strong> রিমোট কাজের সবচেয়ে বড় মূলধন হলো সময় ও সততা। কোনো কাজ নেওয়ার পর ডেডলাইন কীভাবে রক্ষা করতে হয়।</li>
            <li><strong>আধুনিক ডিজিটাল টুলস:</strong> ক্লাউড ম্যানেজমেন্ট, প্রজেক্ট ট্র্যাকিং এবং ভার্চুয়াল অ্যাসিস্ট্যান্সের আধুনিক সফটওয়্যার ব্যবহার।</li>
          </ul>

          <blockquote>
            "কাউকে একবেলা মাছ খেতে দেওয়ার চেয়ে তাকে মাছ ধরার কৌশল শিখিয়ে দেওয়া হাজার গুণ শ্রেয়। নাজমুলকে আমরা কেবল পথ দেখাইনি, পথ চলার সাহস দিয়েছি।"
          </blockquote>

          <h2>আত্মসম্মানের হাসি</h2>
          <p>
            কয়েক মাসের কঠোর পরিশ্রম আর নিবেদিত অনুশীলনের পর নাজমুল যখন আন্তর্জাতিক কাজের মাধ্যমে প্রথম বৈধভাবে বৈদেশিক মুদ্রা উপার্জন করে আমার সামনে এসে দাঁড়াল, তার মুখের হাসিটি ছিল আমার জীবনের অন্যতম শ্রেষ্ঠ প্রাপ্তি। তরুণদের স্বাবলম্বী করা, পরনির্ভরশীলতার শৃঙ্খল ভাঙা এবং আত্মমর্যাদার সাথে নিজের ভাগ্য গড়তে সাহায্য করাই আমার জীবনের স্থায়ী ব্রত।
          </p>
        `
      },
      {
        id: 'pflab-philosophy',
        title: "জ্ঞান ভাগ করে নিলে তা বহুগুণ বেড়ে যায় — Permanent Future Lab দর্শন",
        category: "PFLab Philosophy • Community Innovation",
        readTime: "৫ মিনিট পাঠ",
        date: "ওপেন সোর্স মুভমেন্ট",
        coverImg: "./Asist/GenZ/start.1.jpg",
        snippet: "'Sharing without ownership, innovating without boundaries.' প্রতিটি যুবকের ভেতর লুকিয়ে থাকা সুপ্ত প্রতিভাকে জাগ্রত করার অনুপ্রেরণাদায়ী মুহূর্ত।",
        content: `
          <p class="article-lead">
            <em>"Sharing without ownership, innovating without boundaries."</em> — এই একটি মাত্র আদর্শে নিহিত রয়েছে Permanent Future Lab (PFLab)-এর আত্মিক দর্শন।
          </p>

          <h2>মালিকানা বনাম অংশীদারিত্ব</h2>
          <p>
            পুঁজিবাদী সমাজ আমাদের শিখিয়েছে সবকিছু ব্যক্তিগত মালিকানায় আটকে রাখতে। আমরা গ্যাজেট কিনি, ব্যবহার করি এবং ড্রয়ারে জমিয়ে রাখি। অথচ সেই একই গ্যাজেট, সেই একই প্রযুক্তি যদি উন্মুক্তভাবে সবার ব্যবহারের জন্য উন্মুক্ত করে দেওয়া হতো, তবে কত শত তরুণ নতুন কিছু উদ্ভাবন করার সুযোগ পেত!
          </p>

          <div class="article-media-wrapper img-center">
            <img src="./Asist/GenZ/start.1.jpg" alt="PFLab দর্শন ও বক্তব্য">
            <span class="article-caption">PFLab-এর টি-শার্ট গায়ে তরুণদের উদ্দেশ্যে ভবিষ্যতের মুক্ত জ্ঞান ও উদ্ভাবনের দিশা তুলে ধরার মুহূর্ত</span>
          </div>

          <h2>Permanent Future Lab কেন ব্যতিক্রম?</h2>
          <p>
            PFLab কোনো বাণিজ্যিক প্রতিষ্ঠান নয়, এটি একটি বৈশ্বিক ওপেন মুভমেন্ট। এর মূল নীতিগুলো হলো:
          </p>
          <ul>
            <li><strong>জিরো ফাইন্যান্সিয়াল ব্যারিয়ার:</strong> ল্যাবের প্রতিটি ডিভাইস, টেকনোলজি এবং রিসোর্স যেকোনো সাধারণ শিক্ষার্থী বা উদ্ভাবকের জন্য শতভাগ বিনামূল্যে উন্মুক্ত।</li>
            <li><strong>নলেজ স্পিলওভার (Knowledge Spillover):</strong> আমি যা শিখলাম, তা নিজের মাঝে লুকিয়ে না রেখে অন্যকে নির্দ্বিধায় শিখিয়ে দেওয়া।</li>
            <li><strong>সমস্যার স্থানীয় সমাধান:</strong> বৈশ্বিক প্রযুক্তি ব্যবহার করে আমাদের বাংলাদেশের স্থানীয় সমস্যাগুলোর যুগোপযোগী সমাধান তৈরি করা।</li>
          </ul>

          <blockquote>
            "জ্ঞান হলো প্রদীপের মতো। একটি প্রদীপ দিয়ে অন্য হাজারটি প্রদীপ জ্বালালে প্রথম প্রদীপের আলো কমে যায় না, বরং চারপাশের অন্ধকার দূর হয়ে চতুর্দিক আলোকিত হয়।"
          </blockquote>

          <h2>একটি সামাজিক আন্দোলনের সূচনা</h2>
          <p>
            যখন তরুণদের সামনে দাঁড়িয়ে আমি এই স্বপ্নের কথা বলি, তাদের চোখে এক অনন্য আগুন দেখতে পাই। এই তরুণরা চায় নতুন কিছু করতে, তারা চায় দেশের মুখ উজ্জ্বল করতে। তাদের শুধু দরকার একটু ভরসা, একটি উন্মুক্ত প্ল্যাটফর্ম এবং নিঃস্বার্থ সহযোগিতা। 
          </p>
          <p>
            আমরা সেই প্ল্যাটফর্মটি গড়ে তোলার লড়াইয়ে নেমেছি। ইনশাআল্লাহ, এই আন্দোলনের আলো বাংলাদেশের প্রতিটি জেলা, উপজেলা ও প্রত্যন্ত অঞ্চলে পৌঁছে যাবে।
          </p>
        `
      }
    ],
    settings: {
      name: "Fahad Bin Husne Ali",
      bio: "God First | Online professional | Traveler | Writer | PR guy | Family Man. Bridging remote digital work, grassroots human stories, and innovative community labs.",
      fb: "https://www.facebook.com/fahadbinhusneali1",
      email: "fahadbinhusneali@gmail.com",
      passcode: "2026"
    }
  };

  // 20 Curated Travel Gallery Photos for Parallax Carousel
  // Row 1 (Items 1-10) & Row 2 (Items 11-20)
  const DEFAULT_TRAVEL_GALLERY = [
    { id: 'tg_1', img: './Asist/Travel Gallery/1.jpeg', location: 'Samarkand, Uzbekistan', title: 'রেজিস্তান চত্বরের সোনালী প্রভাত', desc: 'সিল্ক রোডের কালজয়ী স্থাপত্যে সোনালী রোদের আলোড়ন।' },
    { id: 'tg_2', img: './Asist/Travel Gallery/2.jpeg', location: 'Kuala Lumpur, Malaysia', title: 'টুইন টাওয়ারের রাতের জাদুকরী রূপ', desc: 'আধুনিক স্থাপত্য ও নিয়ন আলোর বৈচিত্র্যময় এক অনন্য মেলবন্ধন।' },
    { id: 'tg_3', img: './Asist/Travel Gallery/3.jpg', location: 'Phewa Lake, Pokhara', title: 'ফেওয়া লেকে হিমালয়ের শান্ত প্রতিবিম্ব', desc: 'নীল জলরাশিতে অন্নপূর্ণার শুভ্র শৃঙ্গের স্নিগ্ধ ছায়া।' },
    { id: 'tg_4', img: './Asist/Travel Gallery/4.jpg', location: 'Shanti Stupa, Nepal', title: 'শান্তি স্তূপের চূড়ায় মেঘের আনাগোনা', desc: 'পাহাড়ের সুউচ্চ প্রান্তে গভীর প্রশান্তি আর সাদা স্তূপ।' },
    { id: 'tg_5', img: './Asist/Travel Gallery/5.jpg', location: 'Bukhara, Uzbekistan', title: 'কালয়ান মিনারের ছায়ায় পথচলা', desc: 'দ্বাদশ শতাব্দীর ইতিহাসের সাক্ষী প্রাচীন বোখারার অলিগলি।' },
    { id: 'tg_6', img: './Asist/Travel Gallery/6.jpg', location: 'Kathmandu Valley, Nepal', title: 'কাঠমান্ডুর প্রাচীন দরবার স্কয়ার', desc: 'ঐতিহাসিক মন্দির ও কারুকার্যখচিত কাঠের শিল্পকর্ম।' },
    { id: 'tg_7', img: './Asist/Travel Gallery/7.jpg', location: 'Langkawi, Malaysia', title: 'আন্দামান সাগরের নীল নির্জন সৈকত', desc: 'সাগরের উত্তাল ঢেউ আর দিগন্তজোড়া সবুজ পাহাড়ের মিতালী।' },
    { id: 'tg_8', img: './Asist/Travel Gallery/8.jpg', location: 'Tashkent Metro, Uzbekistan', title: 'মার্বেল পাথরে খোদাই করা ভূগর্ভস্থ প্রাসাদ', desc: 'সোভিয়েত ও প্রাচ্যের শিল্পে সাজানো অনন্য তাশখন্দ মেট্রো।' },
    { id: 'tg_9', img: './Asist/Travel Gallery/9.jpg', location: 'Sarangkot Peak, Nepal', title: 'সারংকোটের চূড়ায় হিমালয়ের সূর্যোদয়', desc: 'কুয়াশাভেজা পাহাড়ে প্রথম রোদের আগমনী গান।' },
    { id: 'tg_10', img: './Asist/Travel Gallery/10.jpg', location: 'Silk Road Bazaar, Uzbekistan', title: 'প্রাচীন সিল্ক রোডের সুগন্ধি মসলার বাজার', desc: 'হাজার বছরের ট্রেডিং পোস্টের প্রাণবন্ত বর্ণিল কোলাহল।' },
    { id: 'tg_11', img: './Asist/Travel Gallery/11.jpg', location: 'Nagarkot, Nepal', title: 'নাগরকোটের বুক চিরে হিমালয়ের দৃশ্য', desc: 'পাহাড়ের বাঁকে মেঘেদের সাথে লুকোচুরি খেলার মুহূর্ত।' },
    { id: 'tg_12', img: './Asist/Travel Gallery/12.jpg', location: 'Putrajaya, Malaysia', title: 'পুত্রজায়া পিংক মসজিদের স্থাপত্যশৈলী', desc: 'গোলাপী গম্বুজে ইসলামী ঐতিহ্য ও আধুনিকতার অপূর্ব সম্মেলন।' },
    { id: 'tg_13', img: './Asist/Travel Gallery/13.jpg', location: 'Khiva, Uzbekistan', title: 'ইচান কালা: খোলা আকাশের নিচে জাদুঘর', desc: 'মাটির রঙের প্রাচীন দুর্গনগরীর রহস্যময় সুরের মূর্ছনা।' },
    { id: 'tg_14', img: './Asist/Travel Gallery/14.jpg', location: 'Batu Caves, Malaysia', title: 'বাতু কেভসের রঙধনু সিঁড়ি ও মুরুগান', desc: 'চুনাপাথরের পাহাড়ে রঙিন ২৭২ সিঁড়ির বিস্ময়কর পথচলা।' },
    { id: 'tg_15', img: './Asist/Travel Gallery/15.jpg', location: 'Pokhara Valley, Nepal', title: 'পাহাড়ি ঝর্ণার গান আর সবুজ গিরিখাত', desc: 'ডেভিস ফলসের গর্জন আর প্রকৃতির স্নিগ্ধ শ্যামল ছোঁয়া।' },
    { id: 'tg_16', img: './Asist/Travel Gallery/16.jpg', location: 'Shah-i-Zinda, Uzbekistan', title: 'শাহ-ই-জিন্দা: ফিরোজা টালির নীল সাম্রাজ্য', desc: 'মায়াবী নীলাভ সিরামিকের মোজাইকে স্বর্গের ছোঁয়া।' },
    { id: 'tg_17', img: './Asist/Travel Gallery/17.jpg', location: 'Melaka, Malaysia', title: 'মেলাকা নদী ও ঔপনিবেশিক ইতিহাসের গল্প', desc: 'পর্তুগিজ ও ডাচ ঐতিহ্যের জলপথের মায়াবী সন্ধ্যা।' },
    { id: 'tg_18', img: './Asist/Travel Gallery/18.jpg', location: 'Annapurna Range, Nepal', title: 'অন্নপূর্ণা বেসক্যাম্পের দিকে যাত্রা', desc: 'পাথুরে পথ আর বরফশীতল বাতাসের সাথে মুখোমুখি যুদ্ধ।' },
    { id: 'tg_19', img: './Asist/Travel Gallery/19.jpg', location: 'Chorsu Bazaar, Tashkent', title: 'চোরসু বাজারের নীল গম্বুজ ও জনজীবন', desc: 'স্থানীয় রুটি, তাজা বাদাম ও মানুষের অকৃত্রিম হাসিমুখ।' },
    { id: 'tg_20', img: './Asist/Travel Gallery/20.jpg', location: 'Cameron Highlands, Malaysia', title: 'ক্যামেরন হাইল্যান্ডসের সবুজ চা বাগান', desc: 'সবুজের গালিচায় মোড়ানো কুয়াশাচ্ছন্ন শীতল শৈলশহর।' }
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

  const STORAGE_KEY = 'fahad_portfolio_data_v2';

  const PortfolioStore = {
    data: null,

    init() {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          this.data = JSON.parse(stored);
          let needsSave = false;
          // Ensure new fields exist
          if (!this.data.travelGallery || !this.data.travelGallery.length) { this.data.travelGallery = DEFAULT_TRAVEL_GALLERY;
          this.data.loveCards = DEFAULT_LOVE_CARDS; needsSave = true; }
          if (!this.data.loveCards || !this.data.loveCards.length) { this.data.loveCards = DEFAULT_LOVE_CARDS; needsSave = true; }
          if (!this.data.articles || !this.data.articles.length) { this.data.articles = DEFAULT_PORTFOLIO_DATA.articles; needsSave = true; }
          if (!this.data.ventures || !this.data.ventures.length) { this.data.ventures = DEFAULT_PORTFOLIO_DATA.ventures; needsSave = true; }
          if (!this.data.travels || !this.data.travels.length) { this.data.travels = DEFAULT_PORTFOLIO_DATA.travels; needsSave = true; }
          if (!this.data.genz || !this.data.genz.length) { this.data.genz = DEFAULT_PORTFOLIO_DATA.genz; needsSave = true; }
          if (!this.data.settings) { this.data.settings = DEFAULT_PORTFOLIO_DATA.settings; needsSave = true; }
          if (!this.data.settings.passcode) { this.data.settings.passcode = "2026"; needsSave = true; }
          if (needsSave) this.save();
        } else {
          this.data = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
          this.data.travelGallery = DEFAULT_TRAVEL_GALLERY;
          this.save();
        }
      } catch (e) {
        console.warn('PortfolioStore: Fallback to defaults', e);
        this.data = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
        this.data.travelGallery = DEFAULT_TRAVEL_GALLERY;
      }
    },

    save() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
      } catch (e) {
        console.error('Failed to save to localStorage:', e);
      }
    },

    getArticles() { return this.data.articles || []; },
    getArticle(id) { return (this.data.articles || []).find(a => a.id === id); },

    getVentures() { return this.data.ventures || []; },
    getVenture(id) { return (this.data.ventures || []).find(v => v.id === id); },

    getTravels() { return this.data.travels || []; },
    getTravel(id) { return (this.data.travels || []).find(t => t.id === id); },

    getGenzList() { return this.data.genz || []; },
    getGenz(id) { return (this.data.genz || []).find(g => g.id === id); },

    
    getLoveCards() {
      return (this.data && this.data.loveCards && this.data.loveCards.length)
        ? this.data.loveCards
        : DEFAULT_LOVE_CARDS;
    },

    saveLoveCard(cardObj) {
      if (!this.data.loveCards) this.data.loveCards = [...DEFAULT_LOVE_CARDS];
      const idx = this.data.loveCards.findIndex(c => c.id == cardObj.id);
      if (idx >= 0) {
        this.data.loveCards[idx] = cardObj;
      } else {
        this.data.loveCards.push(cardObj);
      }
      this.save();
    },

    deleteLoveCard(id) {
      if (!this.data.loveCards) this.data.loveCards = [...DEFAULT_LOVE_CARDS];
      this.data.loveCards = this.data.loveCards.filter(c => c.id != id);
      this.save();
    },

    getTravelGallery() { 
      return (this.data.travelGallery && this.data.travelGallery.length) 
        ? this.data.travelGallery 
        : DEFAULT_TRAVEL_GALLERY; 
    },

    saveTravelGalleryPhoto(photoObj) {
      if (!this.data.travelGallery) this.data.travelGallery = [...DEFAULT_TRAVEL_GALLERY];
      const idx = this.data.travelGallery.findIndex(p => p.id === photoObj.id);
      if (idx >= 0) {
        this.data.travelGallery[idx] = photoObj;
      } else {
        this.data.travelGallery.push(photoObj);
      }
      this.save();
    },

    deleteTravelGalleryPhoto(id) {
      if (!this.data.travelGallery) this.data.travelGallery = [...DEFAULT_TRAVEL_GALLERY];
      this.data.travelGallery = this.data.travelGallery.filter(p => p.id !== id);
      this.save();
    },

    saveArticle(articleObj) {
      if (!this.data.articles) this.data.articles = [];
      const idx = this.data.articles.findIndex(a => a.id === articleObj.id);
      if (idx >= 0) {
        this.data.articles[idx] = articleObj;
      } else {
        this.data.articles.unshift(articleObj);
      }
      this.save();
    },

    deleteArticle(id) {
      this.data.articles = (this.data.articles || []).filter(a => a.id !== id);
      this.save();
    },

    resetDefaults() {
      this.data = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
      this.save();
    }
  };

  
  PortfolioStore.init();

  // Cross-Tab Live Synchronization with dedicated Admin Portal (admin.html)
  const portfolioSyncChannel = typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel('fahad_portfolio_sync') : null;
  if (portfolioSyncChannel) {
    portfolioSyncChannel.onmessage = function (event) {
      console.log('🔄 Live sync update received from Admin Portal:', event.data);
      PortfolioStore.init();
      renderArticles();
      if (window.renderParallaxCarouselTracks) window.renderParallaxCarouselTracks();
      if (window.renderRotatingCards) window.renderRotatingCards();
      renderVentures();
      renderTravels();
      renderGenz();
      if (typeof showToast === 'function') {
        showToast('এডমিন আপডেট লাইভ সিঙ্ক হয়েছে! ✨');
      }
    };
  }

  window.addEventListener('storage', function (e) {
    if (e.key === STORAGE_KEY || e.key === 'fahad_portfolio_guestbook') {
      console.log('🔄 LocalStorage sync triggered from another tab');
      PortfolioStore.init();
      renderArticles();
      if (window.renderParallaxCarouselTracks) window.renderParallaxCarouselTracks();
      if (window.renderRotatingCards) window.renderRotatingCards();
      renderVentures();
      renderTravels();
      renderGenz();
    }
  });


  // Helper: Auto-convert Google Drive & Web URLs to Direct Embed Image URLs
  window.autoConvertDriveUrl = function(inputEl) {
    let url = typeof inputEl === 'string' ? inputEl : (inputEl ? inputEl.value : '');
    if (!url) return '';

    url = url.trim();
    let fileId = null;

    // Pattern 1: https://drive.google.com/file/d/FILE_ID/view...
    const match1 = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    // Pattern 2: https://drive.google.com/open?id=FILE_ID
    const match2 = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);

    if (match1 && match1[1]) {
      fileId = match1[1];
    } else if (match2 && match2[1]) {
      fileId = match2[1];
    }

    if (fileId) {
      // Use direct CDN endpoint
      const directUrl = `https://lh3.googleusercontent.com/d/${fileId}`;
      if (typeof inputEl === 'object' && inputEl && inputEl.value !== undefined) {
        inputEl.value = directUrl;
      }
      return directUrl;
    }
    return url;
  };

  window.showDriveHelp = function() {
    alert("গুগল ড্রাইভ ইমেজ ব্যবহারের নিয়ম:\n\n১. ড্রাইভে ছবিটি আপলোড করুন।\n২. Share -> 'Anyone with the link can view' নির্বাচন করুন।\n৩. Copy Link করে এখানে পেস্ট করুন।\n\nসিস্টেম স্বয়ংক্রিয়ভাবে সরাসরি ছবিতে রূপান্তর করে নেবে!");
  };

  // ==========================================
  // RENDER ARTICLES ON MAIN PAGE (#articlesGrid)
  // (2 Columns, Initial 3 Rows / 6 items max, Compact Thumbnails)
  // ==========================================
  let isShowingAllArticles = false;

  function renderArticlesGrid() {
    const grid = document.getElementById('articlesGrid');
    if (!grid) return;

    const articles = PortfolioStore.getArticles();
    const countPill = document.getElementById('articlesCountText');
    if (countPill) {
      countPill.textContent = `${articles.length}টি নির্বাচিত লেখা`;
    }

    if (!articles.length) {
      grid.innerHTML = `<div class="empty-notice glass-card"><p>এখনো কোনো আর্টিকেল যুক্ত করা হয়নি। এডমিন প্যানেল থেকে প্রথম আর্টিকেল লিখুন!</p></div>`;
      const seeMoreWrap = document.getElementById('articlesSeeMoreWrap');
      if (seeMoreWrap) seeMoreWrap.style.display = 'none';
      return;
    }

    // 2 columns x 3 rows = 6 articles maximum initially
    const INITIAL_LIMIT = 6;
    const seeMoreWrap = document.getElementById('articlesSeeMoreWrap');
    const seeMoreBtnText = document.getElementById('seeMoreBtnText');

    if (articles.length > INITIAL_LIMIT) {
      if (seeMoreWrap) seeMoreWrap.style.display = 'flex';
      if (seeMoreBtnText) {
        seeMoreBtnText.textContent = isShowingAllArticles
          ? 'সংক্ষেপ করুন (Show Less)'
          : `সি অল আর্টিকেল (${articles.length}টি লেখা দেখুন)`;
      }
    } else {
      if (seeMoreWrap) seeMoreWrap.style.display = 'none';
    }

    const displayArticles = isShowingAllArticles ? articles : articles.slice(0, INITIAL_LIMIT);

    grid.innerHTML = displayArticles.map(art => {
      const cover = art.coverImg || './Asist/Personal/profile1.jpg';
      return `
        <article class="story-card glass-card uiverse-tilt" onclick="openDetailView('article', '${art.id}')">
          <div class="story-card-cover-wrap">
            <img src="${cover}" alt="${art.title}" class="story-card-cover" onerror="this.src='./Asist/Personal/profile1.jpg'">
            <div class="story-tag-chip">${art.category || 'লেখা'}</div>
          </div>
          <div class="story-content">
            <div class="story-meta">
              <span><i class="fa-regular fa-clock"></i> ${art.readTime || '৩ মিনিট পাঠ'}</span>
              <span><i class="fa-regular fa-calendar"></i> ${art.date || '২০২৪'}</span>
            </div>
            <h3 class="story-title bengali-font">${art.title}</h3>
            <p class="story-excerpt bengali-font">${art.snippet || ''}</p>
            <div class="story-footer">
              <span class="read-more-link">
                <span>সম্পূর্ণ পড়ুন</span>
                <i class="fa-solid fa-arrow-right"></i>
              </span>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  window.toggleSeeAllArticles = function() {
    isShowingAllArticles = !isShowingAllArticles;
    renderArticlesGrid();
    if (!isShowingAllArticles) {
      const writingsSection = document.getElementById('writings');
      if (writingsSection) {
        writingsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  renderArticlesGrid();

  // ==========================================
  // FULL-PAGE INTERACTIVE DETAILS VIEWER
  // (Works for Articles, The Lab Ventures, Travels)
  // ==========================================
  const detailsPageView = document.getElementById('detailsPageView');
  const detailArticleContent = document.getElementById('detailArticleContent');
  let currentDetailItem = null;

  window.openDetailView = function(type, id) {
    let item = null;
    let categoryLabel = '';
    let authorName = 'ফাহাদ বিন হুসনে আলী';
    let authorRole = 'God First • Online Professional • Storyteller • Family Man';

    if (type === 'article') {
      item = PortfolioStore.getArticle(id);
      categoryLabel = item ? (item.category || 'আর্টিকেল') : '';
    } else if (type === 'venture') {
      item = PortfolioStore.getVenture(id);
      categoryLabel = item ? (item.category || 'The Lab Venture') : '';
    } else if (type === 'travel') {
      item = PortfolioStore.getTravel(id);
      categoryLabel = item ? (item.category || 'ভ্রমণ ডায়েরি') : '';
    } else if (type === 'genz') {
      item = PortfolioStore.getGenz(id);
      categoryLabel = item ? (item.category || 'Gen-Z Tech Hub') : '';
    }

    if (!item || !detailsPageView || !detailArticleContent) return;
    currentDetailItem = { type, id, item };

    // Update edit button visibility in top bar
    const editBtn = document.getElementById('editCurrentItemBtn');
    if (editBtn) {
      editBtn.style.display = type === 'article' ? 'inline-flex' : 'none';
    }

    const coverHtml = item.coverImg ? `
      <img src="${item.coverImg}" alt="${item.title}" class="details-hero-cover" onerror="this.style.display='none'">
    ` : '';

    detailArticleContent.innerHTML = `
      <header class="details-header">
        <div class="details-category-pill">
          <i class="fa-solid fa-feather-pointed"></i>
          <span>${categoryLabel}</span>
        </div>
        <h1 class="details-title bengali-font">${item.title}</h1>
        <div class="details-meta-bar">
          <span><i class="fa-solid fa-user-pen text-gold"></i> ${authorName}</span>
          ${item.readTime ? `<span><i class="fa-regular fa-clock"></i> ${item.readTime}</span>` : ''}
          ${item.date ? `<span><i class="fa-regular fa-calendar"></i> ${item.date}</span>` : ''}
          ${item.role ? `<span><i class="fa-solid fa-briefcase text-gold"></i> ${item.role}</span>` : ''}
        </div>
      </header>

      ${coverHtml}

      <div class="details-body bengali-font">
        ${item.content || item.snippet || ''}
      </div>

      <footer class="article-author-card">
        <img src="./Asist/Personal/profile1.jpg" alt="${authorName}" class="author-card-avatar">
        <div class="author-card-info">
          <h4>${authorName}</h4>
          <p>${authorRole}</p>
        </div>
      </footer>
    `;

    detailsPageView.classList.add('active');
    document.body.style.overflow = 'hidden';
    detailsPageView.scrollTop = 0;

    // Deep link hash update
    window.location.hash = `view/${type}/${id}`;
  };

  window.closeDetailView = function() {
    if (!detailsPageView) return;
    detailsPageView.classList.remove('active');
    document.body.style.overflow = '';
    currentDetailItem = null;

    if (window.location.hash && window.location.hash.startsWith('#view/')) {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  };

  window.editCurrentDetailItem = function() {
    if (!currentDetailItem) return;
    const targetId = currentDetailItem.id;
    if (!isAdminAuthenticated()) {
      pendingAdminTab = 'editor';
      openAdminAuthModal('editor');
      return;
    }
    if (currentDetailItem.type === 'article') {
      closeDetailView();
      editArticleFromAdmin(targetId);
    }
  };

  window.shareCurrentDetail = function() {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: currentDetailItem ? currentDetailItem.item.title : document.title,
        url: url
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url).then(() => {
        showToast('আর্টিকেল লিংক কপি হয়েছে!');
      });
    }
  };

  // Backwards compatibility for old story modal callers
  window.openStoryModal = function(storyKey) {
    window.openDetailView('article', storyKey);
  };
  window.closeStoryModal = window.closeDetailView;

  // ==========================================
  // ADMIN AUTHENTICATION & SECURITY (AUTHORIZED CMS)
  // ==========================================
  const ADMIN_SESSION_KEY = 'fahad_admin_session_auth_v1';
  let pendingAdminTab = 'articles';

  window.isAdminAuthenticated = function() {
    return sessionStorage.getItem(ADMIN_SESSION_KEY) === 'true';
  };

  window.requestAdminAccess = function(tab = 'overview') {
    window.location.href = 'admin.html';
  };

  window.openAdminAuthModal = function(tab = 'articles') {
    pendingAdminTab = tab;
    const modal = document.getElementById('adminAuthModal');
    if (!modal) {
      openAdminPanel(tab);
      return;
    }
    const input = document.getElementById('adminPasscodeInput');
    if (input) input.value = '';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (input) setTimeout(() => input.focus(), 100);
  };

  window.closeAdminAuthModal = function() {
    const modal = document.getElementById('adminAuthModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  window.handleAdminLogin = function(event) {
    if (event) event.preventDefault();
    const input = document.getElementById('adminPasscodeInput');
    const entered = input ? input.value.trim() : '';
    const correctPasscode = (PortfolioStore.data && PortfolioStore.data.settings && PortfolioStore.data.settings.passcode) || '2026';

    if (entered === correctPasscode) {
      sessionStorage.setItem(ADMIN_SESSION_KEY, 'true');
      closeAdminAuthModal();
      showToast('এডমিন ভেরিফিকেশন সফল! স্বাগতম ফাহাদ ভাই। 👑');
      if (currentDetailItem && currentDetailItem.type === 'article' && pendingAdminTab === 'editor') {
        const id = currentDetailItem.id;
        closeDetailView();
        editArticleFromAdmin(id);
      } else {
        openAdminPanel(pendingAdminTab);
      }
    } else {
      showToast('ভুল পাসকোড! শুধুমাত্র এডমিন প্রবেশ করতে পারবেন। ⚠️');
      if (input) {
        input.value = '';
        input.focus();
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 500);
      }
    }
  };

  window.handleAdminLogout = function() {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
    closeAdminPanel();
    showToast('এডমিন প্যানেল থেকে সফলভাবে লগআউট করা হয়েছে।');
  };

  // ==========================================
  // ADMIN CONTROL PANEL & CMS STUDIO
  // ==========================================
  const adminPanelModal = document.getElementById('adminPanelModal');

  window.openAdminPanel = function(defaultTab = 'articles') {
    if (!isAdminAuthenticated()) {
      openAdminAuthModal(defaultTab);
      return;
    }
    if (!adminPanelModal) return;
    adminPanelModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Populate Settings fields if they exist
    if (PortfolioStore.data && PortfolioStore.data.settings) {
      const s = PortfolioStore.data.settings;
      const nameInput = document.getElementById('settingName');
      const bioInput = document.getElementById('settingBio');
      const fbInput = document.getElementById('settingFb');
      const emailInput = document.getElementById('settingEmail');
      const passInput = document.getElementById('settingPasscode');

      if (nameInput) nameInput.value = s.name || '';
      if (bioInput) bioInput.value = s.bio || '';
      if (fbInput) fbInput.value = s.fb || '';
      if (emailInput) emailInput.value = s.email || '';
      if (passInput) passInput.value = s.passcode || '2026';
    }

    switchAdminTab(defaultTab);
  };

  window.closeAdminPanel = function() {
    if (!adminPanelModal) return;
    adminPanelModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  window.switchAdminTab = function(tabName) {
    // Update Tab Buttons
    document.querySelectorAll('.admin-tab').forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('data-tab') === tabName);
    });

    // Update Tab Panes
    document.querySelectorAll('.admin-tab-pane').forEach(pane => {
      pane.classList.remove('active');
    });

    const targetPane = document.getElementById(`tabPane-${tabName}`);
    if (targetPane) targetPane.classList.add('active');

    // Render corresponding contents
    if (tabName === 'articles') renderAdminArticles();
    if (tabName === 'ventures') renderAdminVentures();
    if (tabName === 'travel') renderAdminTravel();
    if (tabName === 'travel-gallery') renderAdminTravelGallery();
  };

  // Admin: Render Articles List
  window.renderAdminArticles = function() {
    const list = document.getElementById('adminArticlesList');
    if (!list) return;

    const articles = PortfolioStore.getArticles();
    if (!articles.length) {
      list.innerHTML = `<div class="empty-notice"><p>কোনো আর্টিকেল নেই। "নতুন আর্টিকেল লিখুন" বাটনে ক্লিক করুন।</p></div>`;
      return;
    }

    list.innerHTML = articles.map(art => `
      <div class="admin-article-card">
        <div class="admin-art-info">
          <div class="admin-art-meta">
            <span class="badge-tag">${art.category || 'লেখা'}</span>
            <span>${art.readTime || '৩ মিনিট'}</span>
            <span>${art.date || ''}</span>
          </div>
          <h4 class="admin-art-title bengali-font">${art.title}</h4>
          <p class="admin-art-snippet bengali-font">${art.snippet || ''}</p>
        </div>
        <div class="admin-item-actions">
          <button class="admin-action-pill btn-view" onclick="openDetailView('article', '${art.id}')" title="ভিউ করুন">
            <i class="fa-solid fa-eye"></i> ভিউ
          </button>
          <button class="admin-action-pill btn-edit" onclick="editArticleFromAdmin('${art.id}')" title="এডিট করুন">
            <i class="fa-solid fa-pen"></i> এডিট
          </button>
          <button class="admin-action-pill btn-delete" onclick="deleteArticleFromAdmin('${art.id}')" title="ডিলিট করুন">
            <i class="fa-solid fa-trash-can"></i> ডিলিট
          </button>
        </div>
      </div>
    `).join('');
  };

  // Admin: Render The Lab Ventures List
  window.renderAdminVentures = function() {
    const list = document.getElementById('adminVenturesList');
    if (!list) return;

    const ventures = PortfolioStore.getVentures();
    list.innerHTML = ventures.map(v => `
      <div class="admin-article-card">
        <div class="admin-art-info">
          <div class="admin-art-meta">
            <span class="badge-tag">${v.category || 'Venture'}</span>
            <span>${v.role || ''}</span>
          </div>
          <h4 class="admin-art-title">${v.title}</h4>
          <p class="admin-art-snippet">${v.snippet || ''}</p>
        </div>
        <div class="admin-item-actions">
          <button class="admin-action-pill btn-view" onclick="openDetailView('venture', '${v.id}')">
            <i class="fa-solid fa-eye"></i> বিস্তারিত দেখুন
          </button>
        </div>
      </div>
    `).join('');
  };

  // Admin: Render Travel & Gen-Z List
  window.renderAdminTravel = function() {
    const list = document.getElementById('adminTravelList');
    if (!list) return;

    const travels = PortfolioStore.getTravels();
    const genzList = PortfolioStore.getGenzList();

    const travelCards = travels.map(t => `
      <div class="admin-article-card">
        <div class="admin-art-info">
          <div class="admin-art-meta">
            <span class="badge-tag">${t.category || 'ভ্রমণ'}</span>
            <span>${t.date || ''}</span>
          </div>
          <h4 class="admin-art-title bengali-font">${t.title}</h4>
          <p class="admin-art-snippet bengali-font">${t.snippet || ''}</p>
        </div>
        <div class="admin-item-actions">
          <button class="admin-action-pill btn-view" onclick="openDetailView('travel', '${t.id}')">
            <i class="fa-solid fa-eye"></i> দেখুন
          </button>
        </div>
      </div>
    `).join('');

    const genzCards = genzList.map(g => `
      <div class="admin-article-card">
        <div class="admin-art-info">
          <div class="admin-art-meta">
            <span class="badge-tag">${g.category || 'Gen-Z'}</span>
            <span>${g.date || ''}</span>
          </div>
          <h4 class="admin-art-title bengali-font">${g.title}</h4>
          <p class="admin-art-snippet bengali-font">${g.snippet || ''}</p>
        </div>
        <div class="admin-item-actions">
          <button class="admin-action-pill btn-view" onclick="openDetailView('genz', '${g.id}')">
            <i class="fa-solid fa-eye"></i> বিস্তারিত দেখুন
          </button>
        </div>
      </div>
    `).join('');

    list.innerHTML = `
      <h4 style="color:#fbbf24; margin-bottom: 0.8rem; font-size: 1rem;"><i class="fa-solid fa-map-location-dot"></i> ভ্রমণ ডায়েরি ও অভিযান</h4>
      ${travelCards || '<p class="text-muted">কোনো ভ্রমণ রেকর্ড নেই</p>'}
      <h4 style="color:#38bdf8; margin: 1.6rem 0 0.8rem; font-size: 1rem;"><i class="fa-solid fa-vr-cardboard"></i> Gen-Z ইনিশিয়েটিভ ও ফিউচার ল্যাব</h4>
      ${genzCards || '<p class="text-muted">কোনো Gen-Z রেকর্ড নেই</p>'}
    `;
  };

  // Admin: Render Parallax Travel Gallery Manager
  window.renderAdminTravelGallery = function() {
    const list = document.getElementById('adminTravelGalleryManager');
    if (!list) return;

    const photos = PortfolioStore.getTravelGallery();
    if (!photos || !photos.length) {
      list.innerHTML = `<div class="empty-notice"><p>কোনো ফটো রেকর্ড নেই। "নতুন ছবি যুক্ত করুন" বাটনে ক্লিক করুন।</p></div>`;
      return;
    }

    list.innerHTML = `
      <div class="admin-gallery-grid">
        ${photos.map((p, idx) => `
          <div class="admin-gallery-card">
            <div class="admin-gallery-thumb-wrap">
              <img src="${p.img}" alt="${escapeHtml(p.title)}" onerror="this.src='./Asist/Travel/t.1.jpg'">
              <span class="admin-gallery-row-badge">
                ${idx < 10 ? 'Row 1 (Left ➔ Right)' : 'Row 2 (Right ➔ Left)'} • #${idx + 1}
              </span>
            </div>
            <div class="admin-gallery-card-body">
              <h5 class="admin-gallery-card-title bengali-font">${escapeHtml(p.title)}</h5>
              <span class="admin-gallery-card-location"><i class="fa-solid fa-location-dot"></i> ${escapeHtml(p.location)}</span>
              <p class="admin-gallery-card-desc bengali-font">${escapeHtml(p.desc)}</p>
              <div class="admin-gallery-card-actions">
                <button class="admin-action-pill btn-view" onclick="openLightbox('${p.img}', '${escapeHtml(p.title)} — ${escapeHtml(p.desc)}')">
                  <i class="fa-solid fa-eye"></i> ফুল ফটো
                </button>
                <button class="admin-action-pill btn-edit" onclick="editGalleryPhotoPrompt('${p.id}')">
                  <i class="fa-solid fa-pen"></i> এডিট
                </button>
                <button class="admin-action-pill btn-delete" onclick="deleteGalleryPhotoFromAdmin('${p.id}')">
                  <i class="fa-solid fa-trash"></i> ডিলিট
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  };

  window.addNewGalleryPhotoPrompt = function() {
    if (!isAdminAuthenticated()) {
      showToast('শুধুমাত্র অনুমোদিত এডমিন ছবি যোগ করতে পারবেন!');
      openAdminAuthModal('travel-gallery');
      return;
    }

    const title = prompt("ছবির শিরোনাম / ক্যাপশন লিখুন (যেমন: ফেওয়া লেকে সানসেট):");
    if (!title) return;
    const location = prompt("স্থান বা লোকেশন লিখুন (যেমন: Pokhara, Nepal):") || "Travel Chronicle";
    let rawImg = prompt("ছবির URL অথবা Google Drive লিংক দিন:") || "";
    if (!rawImg) return;
    const img = autoConvertDriveUrl(rawImg);
    const desc = prompt("সংক্ষিপ্ত মনোরম বর্ণনা (ক্যাপশন):") || "";

    const newPhoto = {
      id: 'tg_' + Date.now(),
      img: img,
      location: location,
      title: title,
      desc: desc
    };

    PortfolioStore.saveTravelGalleryPhoto(newPhoto);
    renderAdminTravelGallery();
    if (typeof renderParallaxCarouselTracks === 'function') {
      renderParallaxCarouselTracks();
    }
    showToast('নতুন ট্রাভেল ফটো গ্যালারিতে যুক্ত হয়েছে! ✨');
  };

  window.editGalleryPhotoPrompt = function(id) {
    if (!isAdminAuthenticated()) {
      showToast('শুধুমাত্র অনুমোদিত এডমিন এডিট করতে পারবেন!');
      openAdminAuthModal('travel-gallery');
      return;
    }

    const photos = PortfolioStore.getTravelGallery();
    const photo = photos.find(p => p.id === id);
    if (!photo) return;

    const newTitle = prompt("ছবির শিরোনাম পরিবর্তন করুন:", photo.title);
    if (newTitle === null) return;
    const newLocation = prompt("লোকেশন পরিবর্তন করুন:", photo.location) || photo.location;
    let newImg = prompt("ছবির URL (খালি রাখলে বর্তমান ছবি বহাল থাকবে):", photo.img) || photo.img;
    newImg = autoConvertDriveUrl(newImg);
    const newDesc = prompt("মনোরম বর্ণনা পরিবর্তন করুন:", photo.desc) || photo.desc;

    photo.title = newTitle;
    photo.location = newLocation;
    photo.img = newImg;
    photo.desc = newDesc;

    PortfolioStore.saveTravelGalleryPhoto(photo);
    renderAdminTravelGallery();
    if (typeof renderParallaxCarouselTracks === 'function') {
      renderParallaxCarouselTracks();
    }
    showToast('ট্রাভেল ফটো তথ্য আপডেট হয়েছে! ✨');
  };

  window.deleteGalleryPhotoFromAdmin = function(id) {
    if (!isAdminAuthenticated()) {
      showToast('শুধুমাত্র অনুমোদিত এডমিন ডিলিট করতে পারবেন!');
      openAdminAuthModal('travel-gallery');
      return;
    }

    if (confirm("আপনি কি নিশ্চিত যে এই ছবিটি ট্রাভেল গ্যালারি থেকে মুছে ফেলতে চান?")) {
      PortfolioStore.deleteTravelGalleryPhoto(id);
      renderAdminTravelGallery();
      if (typeof renderParallaxCarouselTracks === 'function') {
        renderParallaxCarouselTracks();
      }
      showToast('ছবি মুছে ফেলা হয়েছে!');
    }
  };

  // Admin: Create / Edit Article Actions
  window.createNewArticleFromAdmin = function() {
    const form = document.getElementById('articleEditorForm');
    if (form) form.reset();
    document.getElementById('editArticleId').value = '';
    const btnText = document.getElementById('saveArticleBtnText');
    if (btnText) btnText.textContent = 'আর্টিকেল প্রকাশ করুন (Publish Article)';
    
    const preview = document.getElementById('editorLivePreview');
    if (preview) { preview.style.display = 'none'; preview.innerHTML = ''; }

    switchAdminTab('editor');
  };

  window.editArticleFromAdmin = function(id) {
    const article = PortfolioStore.getArticle(id);
    if (!article) return;

    openAdminPanel('editor');
    document.getElementById('editArticleId').value = article.id;
    document.getElementById('editorTitle').value = article.title || '';
    document.getElementById('editorCategory').value = article.category || '';
    document.getElementById('editorReadTime').value = article.readTime || '';
    document.getElementById('editorCoverImg').value = article.coverImg || '';
    document.getElementById('editorSnippet').value = article.snippet || '';
    document.getElementById('editorContent').value = article.content || '';

    const btnText = document.getElementById('saveArticleBtnText');
    if (btnText) btnText.textContent = 'আর্টিকেল আপডেট করুন (Update Article)';
  };

  window.deleteArticleFromAdmin = function(id) {
    if (!isAdminAuthenticated()) {
      showToast('শুধুমাত্র অনুমোদিত এডমিন আর্টিকেল মুছতে পারবেন!');
      openAdminAuthModal('articles');
      return;
    }
    const art = PortfolioStore.getArticle(id);
    if (!art) return;
    if (confirm(`আপনি কি নিশ্চিত যে "${art.title}" মুছে ফেলতে চান?`)) {
      PortfolioStore.deleteArticle(id);
      renderAdminArticles();
      renderArticlesGrid();
      showToast('আর্টিকেল মুছে ফেলা হয়েছে!');
    }
  };

  // Form Submission
  window.handleSaveArticle = function(event) {
    event.preventDefault();

    if (!isAdminAuthenticated()) {
      showToast('শুধুমাত্র অনুমোদিত এডমিন আর্টিকেল প্রকাশ করতে পারবেন!');
      openAdminAuthModal('editor');
      return;
    }

    const idInput = document.getElementById('editArticleId').value.trim();
    const title = document.getElementById('editorTitle').value.trim();
    const category = document.getElementById('editorCategory').value.trim();
    const readTime = document.getElementById('editorReadTime').value.trim();
    let coverImg = document.getElementById('editorCoverImg').value.trim();
    const snippet = document.getElementById('editorSnippet').value.trim();
    let content = document.getElementById('editorContent').value.trim();

    // Auto-convert Google Drive cover URL if needed
    if (coverImg) {
      coverImg = autoConvertDriveUrl(coverImg);
    }

    const articleId = idInput || 'art_' + Date.now();

    const articleObj = {
      id: articleId,
      title: title,
      category: category || 'সামাজিক পর্যবেক্ষণ',
      readTime: readTime || '৩ মিনিট পাঠ',
      date: '২০২৪',
      coverImg: coverImg || './Asist/Personal/profile1.jpg',
      snippet: snippet,
      content: content
    };

    PortfolioStore.saveArticle(articleObj);
    renderArticlesGrid();
    renderAdminArticles();

    showToast(idInput ? 'আর্টিকেল সফলভাবে আপডেট হয়েছে! ✨' : 'নতুন আর্টিকেল প্রকাশিত হয়েছে! 🎉');
    switchAdminTab('articles');
  };

  // Formatting Toolbar Buttons
  window.insertFormat = function(type) {
    const textarea = document.getElementById('editorContent');
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = textarea.value.substring(start, end);
    let replacement = '';

    switch(type) {
      case 'bold':
        replacement = `<b>${selected || 'বোল্ড টেক্সট'}</b>`;
        break;
      case 'italic':
        replacement = `<em>${selected || 'ইটালিক টেক্সট'}</em>`;
        break;
      case 'h2':
        replacement = `\n<h2>${selected || 'শিরোনাম ২'}</h2>\n`;
        break;
      case 'h3':
        replacement = `\n<h3>${selected || 'উপ-শিরোনাম ৩'}</h3>\n`;
        break;
      case 'quote':
        replacement = `\n<blockquote>"${selected || 'উদ্ধৃতি বা বাণী'}"</blockquote>\n`;
        break;
      case 'bullet':
        replacement = `\n<ul>\n  <li>${selected || 'পয়েন্ট ১'}</li>\n  <li>পয়েন্ট ২</li>\n</ul>\n`;
        break;
    }

    textarea.value = textarea.value.substring(0, start) + replacement + textarea.value.substring(end);
    textarea.focus();
    updateLivePreview();
  };

  // Image Insertion Prompt with Alignment Options
  window.promptInsertImage = function() {
    const rawUrl = prompt("ইমেজ URL অথবা Google Drive লিংক দিন:");
    if (!rawUrl) return;

    const directUrl = autoConvertDriveUrl(rawUrl);
    const caption = prompt("ইমেজের ক্যাপশন বা বিবরণ (ঐচ্ছিক):", "") || "";
    const alignChoice = prompt(
      "ইমেজ পজিশন ও সাইজ নির্বাচন করুন:\n1. center (মাঝখানে বড়)\n2. left (লেখার বাম পাশে)\n3. right (লেখার ডান পাশে)\n4. full (সম্পূর্ণ চওড়া)", 
      "1"
    );

    let alignClass = 'img-center';
    if (alignChoice === '2' || alignChoice === 'left') alignClass = 'img-float-left';
    else if (alignChoice === '3' || alignChoice === 'right') alignClass = 'img-float-right';
    else if (alignChoice === '4' || alignChoice === 'full') alignClass = 'img-full';

    const imgSnippet = `
<div class="article-media-wrapper ${alignClass}">
  <img src="${directUrl}" alt="${caption}">
  ${caption ? `<span class="article-caption">${caption}</span>` : ''}
</div>
`;

    const textarea = document.getElementById('editorContent');
    if (textarea) {
      const pos = textarea.selectionStart;
      textarea.value = textarea.value.substring(0, pos) + imgSnippet + textarea.value.substring(pos);
      textarea.focus();
      updateLivePreview();
    }
  };

  // Video Insertion Prompt (YouTube / Direct Video)
  window.promptInsertVideo = function() {
    const rawUrl = prompt("YouTube ভিডিও লিংক দিন (e.g. https://www.youtube.com/watch?v=... or https://youtu.be/...):");
    if (!rawUrl) return;

    let embedUrl = rawUrl.trim();
    // YouTube link conversion
    const ytMatch1 = embedUrl.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    if (ytMatch1 && ytMatch1[1]) {
      embedUrl = `https://www.youtube.com/embed/${ytMatch1[1]}`;
    }

    const videoSnippet = `
<div class="video-embed-box">
  <iframe src="${embedUrl}" title="YouTube video player" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
</div>
`;

    const textarea = document.getElementById('editorContent');
    if (textarea) {
      const pos = textarea.selectionStart;
      textarea.value = textarea.value.substring(0, pos) + videoSnippet + textarea.value.substring(pos);
      textarea.focus();
      updateLivePreview();
    }
  };

  // Live Preview Toggle
  window.toggleEditorPreview = function() {
    const preview = document.getElementById('editorLivePreview');
    if (!preview) return;
    const isShowing = preview.style.display !== 'none';
    preview.style.display = isShowing ? 'none' : 'block';
    if (!isShowing) updateLivePreview();
  };

  window.updateLivePreview = function() {
    const textarea = document.getElementById('editorContent');
    const preview = document.getElementById('editorLivePreview');
    if (!textarea || !preview || preview.style.display === 'none') return;
    preview.innerHTML = textarea.value || '<p class="text-muted">আর্টিকেলের লাইভ প্রিভিউ এখানে দেখতে পাবেন...</p>';
  };

  // Site Settings & JSON Backup/Restore
  window.saveSiteSettings = function() {
    if (!isAdminAuthenticated()) {
      showToast('শুধুমাত্র অনুমোদিত এডমিন সেটিংস পরিবর্তন করতে পারবেন!');
      openAdminAuthModal('settings');
      return;
    }

    const name = document.getElementById('settingName').value.trim();
    const bio = document.getElementById('settingBio').value.trim();
    const fb = document.getElementById('settingFb').value.trim();
    const email = document.getElementById('settingEmail').value.trim();
    const passInput = document.getElementById('settingPasscode');
    const passcode = passInput ? passInput.value.trim() : '2026';

    PortfolioStore.data.settings = { name, bio, fb, email, passcode: passcode || '2026' };
    PortfolioStore.save();
    showToast('সাইট সেটিংস ও সিকিউরিটি পাসকোড সংরক্ষিত হয়েছে! ✨');
  };

  window.exportSiteDataJSON = function() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(PortfolioStore.data, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `fahad_portfolio_backup_${Date.now()}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
    showToast('ব্যাকআপ JSON ফাইল ডাউনলোড হয়েছে!');
  };

  window.importSiteDataJSON = function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        const imported = JSON.parse(e.target.result);
        if (imported && (imported.articles || imported.ventures)) {
          PortfolioStore.data = imported;
          PortfolioStore.save();
          renderArticlesGrid();
          renderAdminArticles();
          showToast('ডেটা সফলভাবে রিস্টোর হয়েছে! 🎉');
        } else {
          alert('ভুল JSON ফরম্যাট!');
        }
      } catch (err) {
        alert('ফাইল লোড করতে সমস্যা হয়েছে: ' + err.message);
      }
    };
    reader.readAsText(file);
  };

  window.resetToFactoryDefaults = function() {
    if (confirm("আপনি কি নিশ্চিত যে সাইটের সব তথ্য পূর্ববর্তী ডিফল্ট অবস্থায় ফিরিয়ে নিতে চান?")) {
      PortfolioStore.resetDefaults();
      renderArticlesGrid();
      renderAdminArticles();
      showToast('সব ডেটা ডিফল্ট অবস্থায় ফিরে এসেছে!');
    }
  };

  // URL Hash Deep Linking Check on Load
  function checkUrlHashDeepLink() {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#view/')) {
      const parts = hash.replace('#view/', '').split('/');
      if (parts.length >= 2) {
        const [type, id] = parts;
        setTimeout(() => {
          openDetailView(type, id);
        }, 300);
      }
    }
  }

  checkUrlHashDeepLink();
  window.addEventListener('hashchange', checkUrlHashDeepLink);

  // ==========================================
  // 5. PHOTO LIGHTBOX MODAL
  // ==========================================
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');

  window.openLightbox = function(imageSrc, caption) {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.src = imageSrc;
    lightboxCaption.textContent = caption || '';
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeLightbox = function() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  // Keyboard escape handler for modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeStoryModal();
      closeAdminAuthModal();
      closeAdminPanel();
    }
  });

  // ==========================================
  // 6. TRAVEL GALLERY FILTER TABS
  // ==========================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const travelItems = document.querySelectorAll('.travel-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      travelItems.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.style.display = 'block';
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => {
            if (btn.classList.contains('active') && btn.getAttribute('data-filter') !== 'all' && cat !== btn.getAttribute('data-filter')) {
              item.style.display = 'none';
            }
          }, 200);
        }
      });
    });
  });

  // ==========================================
  // 7. HERO CREED ACTION & CELEBRATION
  // ==========================================
  const heroVoiceBtn = document.getElementById('heroPlayVoiceBtn');
  if (heroVoiceBtn) {
    heroVoiceBtn.addEventListener('click', () => {
      const creedSection = document.getElementById('creed');
      if (creedSection) {
        creedSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  function fireCelebrationConfetti() {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  }

    // ==========================================
    // 9. ANIMATED NUMBER STAT COUNTERS
    // ==========================================
    const statNumbers = document.querySelectorAll('.stat-number');
    let statsCounted = false;

    function countUp(el) {
      const target = parseInt(el.getAttribute('data-target'), 10);
      const duration = 1800;
      const stepTime = 30;
      const steps = duration / stepTime;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          el.textContent = target >= 1000 ? (target / 1000).toFixed(0) + 'K+' : target + '+';
          clearInterval(timer);
        } else {
          el.textContent = target >= 1000 ? (current / 1000).toFixed(1) + 'K' : Math.floor(current) + '+';
        }
      }, stepTime);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !statsCounted) {
          statsCounted = true;
          statNumbers.forEach(num => countUp(num));
        }
      });
    }, { threshold: 0.3 });

    const statsGrid = document.querySelector('.hero-stats-grid');
    if (statsGrid) observer.observe(statsGrid);

    // ==========================================
    // 10. COPY TEXT & TOAST NOTIFICATION
    // ==========================================
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMsg');
    let toastTimer = null;

    window.showToast = function(message) {
      if (!toast || !toastMsg) return;
      toastMsg.textContent = message;
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        toast.classList.remove('show');
      }, 2800);
    };

    window.copyText = function(text, btnElement) {
      navigator.clipboard.writeText(text).then(() => {
        showToast('Email copied to clipboard: ' + text);
        if (btnElement) {
          const icon = btnElement.querySelector('i');
          if (icon) {
            icon.className = 'fa-solid fa-check';
            setTimeout(() => { icon.className = 'fa-regular fa-copy'; }, 2000);
          }
        }
      }).catch(() => {
        showToast('Copied: ' + text);
      });
    };

    // ==========================================
    // 11. SHARE PORTFOLIO MODAL
    // ==========================================
    const shareModal = document.getElementById('shareModal');

    window.openShareModal = function() {
      if (!shareModal) return;
      shareModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    window.closeShareModal = function() {
      if (!shareModal) return;
      shareModal.classList.remove('active');
      document.body.style.overflow = '';
    };

    window.copyShareUrl = function() {
      const shareUrlInput = document.getElementById('shareUrlInput');
      const urlToCopy = shareUrlInput ? shareUrlInput.value : window.location.href;
      navigator.clipboard.writeText(urlToCopy).then(() => {
        showToast('Portfolio URL copied to clipboard! 🔗');
        closeShareModal();
      }).catch(() => {
        showToast('Copied: ' + urlToCopy);
      });
    };

    // ==========================================
    // 12. TRIBUTE GUESTBOOK & BLESSINGS SYSTEM
    // ==========================================
    const defaultBlessings = [
      {
        name: "Sayeed Ahmed",
        role: "Well-wisher, Dhaka",
        tag: "Prayers & Blessings",
        time: "10 mins ago",
        message: "Fahad bhai’s devotion to his family and profound faith in Allah inspires everyone around him. In a world full of noise, he remains authentic, humble, and deeply grounded. Wishing you continuous health, long life, and blessed milestones ahead!"
      },
      {
        name: "Alex & Global Team",
        role: "Netherlands / PFLab",
        tag: "Inspiration",
        time: "2 hours ago",
        message: "Fahad is a true bridge between worlds. Bringing VR and open innovation to grassroots village schools in Bangladesh through #PFLab is visionary work. Honored to walk alongside you on this mission!"
      },
      {
        name: "Tania Rahman",
        role: "12K Follower, Chittagong",
        tag: "Love & Respect",
        time: "Yesterday",
        message: "Your heartfelt stories of the Nilphamari workers and your vulnerable reflections on health and perseverance moved me to tears. Such vivid, empathetic storytelling is so rare today. Keep writing truth with your golden pen."
      },
      {
        name: "Nazmul Hasan",
        role: "Mentee & Tech Builder",
        tag: "Inspiration",
        time: "3 days ago",
        message: "Brother Fahad, my entire freelancing and remote tech journey began with your guidance. You didn’t just teach technical skills; you showed us how to uphold uncompromising honesty and integrity in our work. Forever grateful!"
      },
      {
        name: "Markus Lindqvist",
        role: "Seats2meet / Nomad Collective",
        tag: "Love & Respect",
        time: "5 days ago",
        message: "Working alongside Fahad has been an adventure. His sharp PR acumen, boundless curiosity, and genuine warmth for people make him an extraordinary community builder and dear friend."
      }
    ];

    const BLESSINGS_STORAGE_KEY = 'fbh_guestbook_notes_v3';

    function escapeHtml(str) {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    function getInitials(name) {
      if (!name) return 'FB';
      const clean = name.trim().replace(/[^a-zA-Z\s]/g, '');
      const parts = clean.split(/\s+/).filter(Boolean);
      if (parts.length === 0) return name.slice(0, 2).toUpperCase();
      if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }

    function getAvatarGradient(name) {
      const gradients = [
        'linear-gradient(135deg, #6366f1, #8b5cf6)',
        'linear-gradient(135deg, #0ea5e9, #38bdf8)',
        'linear-gradient(135deg, #f59e0b, #d97706)',
        'linear-gradient(135deg, #ec4899, #f43f5e)',
        'linear-gradient(135deg, #10b981, #059669)',
        'linear-gradient(135deg, #8b5cf6, #d946ef)'
      ];
      let hash = 0;
      for (let i = 0; i < (name || '').length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
      }
      const index = Math.abs(hash) % gradients.length;
      return gradients[index];
    }

    function getTagClass(tag) {
      const lower = (tag || '').toLowerCase();
      if (lower.includes('prayer') || lower.includes('দোয়া')) return 'tag-prayers';
      if (lower.includes('inspir') || lower.includes('অনুপ্রেরণা')) return 'tag-inspiration';
      return 'tag-love';
    }

    function loadBlessings() {
      const saved = localStorage.getItem(BLESSINGS_STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed;
          }
        } catch (e) {
          console.warn('Error reading stored guestbook notes:', e);
        }
      }
      return defaultBlessings;
    }

    function saveBlessings(blessings) {
      localStorage.setItem(BLESSINGS_STORAGE_KEY, JSON.stringify(blessings));
    }

    function renderBlessings() {
      const blessingsGrid = document.getElementById('blessingsGrid');
      const countDisplay = document.getElementById('blessingCountDisplay');
      if (!blessingsGrid) return;

      const blessings = loadBlessings();
      if (countDisplay) {
        countDisplay.textContent = `${blessings.length} ${blessings.length === 1 ? 'Note' : 'Notes'}`;
      }

      blessingsGrid.innerHTML = blessings.map(b => {
        const initials = getInitials(b.name);
        const gradient = getAvatarGradient(b.name);
        const tagClass = getTagClass(b.tag);
        return `
          <div class="blessing-card glass-card uiverse-tilt">
            <div class="blessing-card-top">
              <div class="blessing-author-group">
                <div class="blessing-avatar" style="background: ${gradient};">
                  ${escapeHtml(initials)}
                </div>
                <div class="blessing-author-info">
                  <span class="blessing-author">${escapeHtml(b.name)}</span>
                  <span class="blessing-meta">
                    <i class="fa-solid fa-location-dot"></i> ${escapeHtml(b.role)} • <i class="fa-regular fa-clock"></i> ${escapeHtml(b.time)}
                  </span>
                </div>
              </div>
              <span class="blessing-tag ${tagClass}">${escapeHtml(b.tag)}</span>
            </div>
            <div class="blessing-body">
              <i class="fa-solid fa-quote-left blessing-quote-icon"></i>
              <p class="blessing-text">${escapeHtml(b.message)}</p>
            </div>
          </div>
        `;
      }).join('');
    }

    window.selectTag = function(labelEl) {
      document.querySelectorAll('.tag-radio-label').forEach(l => l.classList.remove('active'));
      labelEl.classList.add('active');
    };

    window.handleTributeSubmit = function(event) {
      event.preventDefault();
      const nameInput = document.getElementById('guestName');
      const roleInput = document.getElementById('guestRole');
      const msgInput = document.getElementById('guestMsg');
      const tagInput = document.querySelector('input[name="messageTag"]:checked');

      if (!nameInput || !msgInput) return;

      const newBlessing = {
        name: nameInput.value.trim(),
        role: roleInput && roleInput.value.trim() ? roleInput.value.trim() : 'Community Member',
        tag: tagInput ? tagInput.value : 'Prayers & Blessings',
        time: 'Just now',
        message: msgInput.value.trim()
      };

      const currentList = loadBlessings();
      currentList.unshift(newBlessing);
      saveBlessings(currentList);
      renderBlessings();

      nameInput.value = '';
      if (roleInput) roleInput.value = '';
      msgInput.value = '';

      if (typeof fireCelebrationConfetti === 'function') {
        fireCelebrationConfetti();
      }
      if (typeof showToast === 'function') {
        showToast('Thank you! Your note has been posted to the guestbook. ❤️');
      }
    };

    renderBlessings();

    // ==========================================
    // 13. TOP SCROLL PROGRESS BAR
    // ==========================================
    const progressBar = document.getElementById('scrollProgressBar');

    function updateScrollProgress() {
      if (!progressBar) return;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      progressBar.style.width = progress + '%';
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true });

    // ==========================================
    // 14. INTERACTIVE CONSTELLATION PARTICLE CANVAS
    // ==========================================
    function initParticleCanvas() {
      const canvas = document.getElementById('particleCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');

      let width = canvas.width = window.innerWidth;
      let height = canvas.height = window.innerHeight;

      const particles = [];
      const particleCount = Math.min(Math.floor((width * height) / 18000), 70);

      window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      });

      let mouse = { x: null, y: null, radius: 120 };

      window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      });

      window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
      });

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 1.8 + 0.8,
          alpha: Math.random() * 0.5 + 0.2
        });
      }

      function drawParticles() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          // Mouse attraction / gentle interaction
          if (mouse.x !== null) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouse.radius) {
              const force = (mouse.radius - dist) / mouse.radius;
              p.x -= (dx / dist) * force * 1.5;
              p.y -= (dy / dist) * force * 1.5;
            }
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(148, 163, 184, ${p.alpha})`;
          ctx.fill();

          // Connect lines between nearby particles
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 110) {
              const lineAlpha = (1 - dist / 110) * 0.18;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(99, 102, 241, ${lineAlpha})`;
              ctx.lineWidth = 0.75;
              ctx.stroke();
            }
          }
        }

        requestAnimationFrame(drawParticles);
      }

      drawParticles();
    }

    initParticleCanvas();

    // ==========================================
    // 15. MOBILE MENU TOGGLE
    // ==========================================
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
      mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        mobileToggle.classList.toggle('active');
      });

      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('open');
          mobileToggle.classList.remove('active');
        });
      });
    }

    // ==========================================
    // 16. ACTIVE NAV HIGHLIGHT ON SCROLL
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      let scrollY = window.pageYOffset;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 140;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + sectionId) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { passive: true });

    // ==========================================
    // 17. REACT BITS PRO: 3D ROTATING CARDS COMPONENT (LOVE SECTION)
    // Configuration: radius=300, duration=30, cardWidth=190, cardHeight=250
    // ==========================================
    const rotatingCardsContainer = document.getElementById('rotatingCardsContainer');
    const rotatingCardsRing = document.getElementById('rotatingCardsRing');
    const rcCards = document.querySelectorAll('.rc-card');
    const rcPrevBtn = document.getElementById('rcPrevBtn');
    const rcNextBtn = document.getElementById('rcNextBtn');
    const rcPlayPauseBtn = document.getElementById('rcPlayPauseBtn');
    const rotatingCardsDots = document.getElementById('rotatingCardsDots');
    const rcSpotlight = document.getElementById('rcSpotlight');
    const rcSpotlightCounter = document.getElementById('rcSpotlightCounter');
    const rcSpotlightTag = document.getElementById('rcSpotlightTag');
    const rcSpotlightTitle = document.getElementById('rcSpotlightTitle');
    const rcSpotlightDesc = document.getElementById('rcSpotlightDesc');

    if (rotatingCardsContainer && rotatingCardsRing && rcCards.length > 0) {
      // Dynamic couple memories from PortfolioStore
      let rotatingCardsData = PortfolioStore.getLoveCards();

      window.renderRotatingCards = function() {
        rotatingCardsData = PortfolioStore.getLoveCards();
        const cards = rotatingCardsRing.querySelectorAll('.rc-card');
        rotatingCardsData.forEach((item, idx) => {
          if (cards[idx]) {
            const img = cards[idx].querySelector('img');
            const tag = cards[idx].querySelector('.rc-card-tag');
            const cap = cards[idx].querySelector('.rc-card-caption');
            if (img && item.img) img.src = item.img;
            if (tag && item.tag) tag.innerHTML = `<i class="fa-solid fa-heart"></i> ${escapeHtml(item.tag)}`;
            if (cap && item.title) cap.textContent = item.title;
          }
        });
        updateSpotlight(activeCardIndex);
      };

      const totalCards = rcCards.length;
      const stepAngle = 360 / totalCards; // 36 degrees per card
      const duration = 30; // 30 seconds for 360 deg
      const rotationSpeed = 360 / duration; // 12 deg / second

      let currentRotation = 0;
      let isPaused = false;
      let isHovered = false;
      let isDragging = false;
      let isSnapping = false;
      let dragStartX = 0;
      let dragStartRotation = 0;
      let lastDragX = 0;
      let lastDragTime = 0;
      let dragVelocity = 0;
      let momentumVelocity = 0;
      let totalDragDist = 0;
      let activeCardIndex = 0;
      let smoothAnimationId = null;

      // Responsive radius calculator (matches React Bits Pro 300px on desktop)
      function getResponsiveRadius() {
        const w = window.innerWidth;
        if (w <= 480) return 195;
        if (w <= 768) return 245;
        return 300;
      }

      let currentRadius = getResponsiveRadius();

      // Initial 3D placement around cylinder
      function positionCards() {
        currentRadius = getResponsiveRadius();
        rcCards.forEach((card, index) => {
          const baseAngle = index * stepAngle;
          card.style.transform = `rotateY(${baseAngle}deg) translateZ(${currentRadius}px)`;
        });
      }

      positionCards();
      window.addEventListener('resize', positionCards);

      // Create Scrubber Dots
      function buildDots() {
        if (!rotatingCardsDots) return;
        rotatingCardsDots.innerHTML = '';
        for (let i = 0; i < totalCards; i++) {
          const dot = document.createElement('button');
          dot.className = `rc-dot ${i === 0 ? 'is-active' : ''}`;
          dot.setAttribute('aria-label', `Go to memory ${i + 1}: ${rotatingCardsData[i].title}`);
          dot.setAttribute('title', `${i + 1}. ${rotatingCardsData[i].title}`);
          dot.innerHTML = `<span>${(i + 1).toString().padStart(2, '0')}</span>`;
          dot.addEventListener('click', (e) => {
            e.stopPropagation();
            snapToCard(i);
          });
          rotatingCardsDots.appendChild(dot);
        }
      }
      buildDots();

      // Update Spotlight information card
      let lastActiveSpotlightIndex = -1;
      function updateSpotlight(index) {
        if (index === lastActiveSpotlightIndex) return;
        lastActiveSpotlightIndex = index;
        const data = rotatingCardsData[index];
        if (!data) return;

        if (rcSpotlightCounter) rcSpotlightCounter.textContent = `Memory ${(index + 1).toString().padStart(2, '0')} / 10`;
        if (rcSpotlightTag) rcSpotlightTag.textContent = data.tag;
        if (rcSpotlightTitle) rcSpotlightTitle.textContent = data.title;
        if (rcSpotlightDesc) rcSpotlightDesc.textContent = `"${data.desc}"`;

        // Update active dot
        const dots = rotatingCardsDots ? rotatingCardsDots.querySelectorAll('.rc-dot') : [];
        dots.forEach((dot, idx) => {
          dot.classList.toggle('is-active', idx === index);
        });

        // Update active card class
        rcCards.forEach((card, idx) => {
          card.classList.toggle('is-active', idx === index);
        });
      }

      // Update the 3D scene every frame
      function updateScene() {
        // Rotate the 3D ring with a subtle -3deg tilt on X for realistic perspective
        rotatingCardsRing.style.transform = `rotateX(-3deg) rotateY(${currentRotation}deg)`;

        let closestIndex = 0;
        let minDiff = 999;

        rcCards.forEach((card, i) => {
          // Angle of card relative to front viewer camera
          const rawAngle = (i * stepAngle + currentRotation) % 360;
          const norm = ((rawAngle + 180) % 360 + 360) % 360 - 180;
          const diff = Math.abs(norm);

          if (diff < minDiff) {
            minDiff = diff;
            closestIndex = i;
          }

          // Depth shading and visibility
          if (diff <= 90) {
            const cosVal = Math.cos(norm * (Math.PI / 180));
            const opacity = 0.45 + 0.55 * Math.pow(cosVal, 1.2);
            card.style.opacity = opacity.toFixed(3);
            card.style.filter = `brightness(${(0.78 + 0.28 * cosVal).toFixed(2)})`;
            card.style.pointerEvents = 'auto';
          } else {
            card.style.opacity = '0';
            card.style.filter = 'brightness(0.5)';
            card.style.pointerEvents = 'none';
          }
        });

        activeCardIndex = closestIndex;
        updateSpotlight(activeCardIndex);
      }

      // Smooth shortest-path rotation to bring a target card to the front
      function snapToCard(targetIndex) {
        if (smoothAnimationId) cancelAnimationFrame(smoothAnimationId);
        isSnapping = true;
        momentumVelocity = 0;

        const targetBaseAngle = -targetIndex * stepAngle;
        const diff = ((targetBaseAngle - currentRotation) % 360 + 540) % 360 - 180;
        const targetAngle = currentRotation + diff;

        const startAngle = currentRotation;
        const distance = targetAngle - startAngle;
        const startTime = performance.now();
        const animDuration = 650; // ms

        function step(now) {
          const elapsed = now - startTime;
          const progress = Math.min(1, elapsed / animDuration);
          // easeOutCubic
          const ease = 1 - Math.pow(1 - progress, 3);
          currentRotation = startAngle + distance * ease;
          updateScene();

          if (progress < 1) {
            smoothAnimationId = requestAnimationFrame(step);
          } else {
            currentRotation = targetAngle;
            isSnapping = false;
            smoothAnimationId = null;
            updateScene();
          }
        }
        smoothAnimationId = requestAnimationFrame(step);
      }

      // Card click handler exposed globally
      window.handleCardClick = function(index) {
        if (totalDragDist > 8) return; // Prevent click on drag release
        if (index === activeCardIndex) {
          // Open lightbox with photo and Bengali caption
          const data = rotatingCardsData[index];
          if (data && window.openLightbox) {
            window.openLightbox(data.img, `${data.title} — ${data.desc}`);
          }
        } else {
          snapToCard(index);
        }
      };

      // Spotlight View Photo button handler
      window.handleActiveSpotlightClick = function() {
        const data = rotatingCardsData[activeCardIndex];
        if (data && window.openLightbox) {
          window.openLightbox(data.img, `${data.title} — ${data.desc}`);
        }
      };

      // Control Buttons
      if (rcNextBtn) {
        rcNextBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const nextIndex = (activeCardIndex + 1) % totalCards;
          snapToCard(nextIndex);
        });
      }

      if (rcPrevBtn) {
        rcPrevBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const prevIndex = (activeCardIndex - 1 + totalCards) % totalCards;
          snapToCard(prevIndex);
        });
      }

      if (rcPlayPauseBtn) {
        rcPlayPauseBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          isPaused = !isPaused;
          const icon = rcPlayPauseBtn.querySelector('i');
          if (icon) {
            if (isPaused) {
              icon.className = 'fa-solid fa-play';
              rcPlayPauseBtn.title = 'Resume Auto-Rotation';
            } else {
              icon.className = 'fa-solid fa-pause';
              rcPlayPauseBtn.title = 'Pause Auto-Rotation';
            }
          }
        });
      }

      // Mouse Wheel Navigation
      rotatingCardsContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (smoothAnimationId) cancelAnimationFrame(smoothAnimationId);
        isSnapping = false;
        momentumVelocity = 0;
        currentRotation += e.deltaY * 0.12;
        updateScene();
      }, { passive: false });

      // Pause on Hover
      rotatingCardsContainer.addEventListener('mouseenter', () => {
        isHovered = true;
      });

      rotatingCardsContainer.addEventListener('mouseleave', () => {
        isHovered = false;
        if (isDragging) {
          isDragging = false;
          rotatingCardsContainer.classList.remove('is-dragging');
        }
      });

      // Draggable Interaction (Mouse & Touch)
      function onDragStart(clientX) {
        if (smoothAnimationId) cancelAnimationFrame(smoothAnimationId);
        isSnapping = false;
        isDragging = true;
        totalDragDist = 0;
        dragStartX = clientX;
        dragStartRotation = currentRotation;
        lastDragX = clientX;
        lastDragTime = performance.now();
        dragVelocity = 0;
        momentumVelocity = 0;
        rotatingCardsContainer.classList.add('is-dragging');
      }

      function onDragMove(clientX) {
        if (!isDragging) return;
        const deltaX = clientX - dragStartX;
        totalDragDist += Math.abs(clientX - lastDragX);

        // Sensitivity matches circle circum
        const sensitivity = 0.28;
        currentRotation = dragStartRotation + deltaX * sensitivity;

        const now = performance.now();
        const dt = now - lastDragTime;
        if (dt > 0) {
          dragVelocity = (clientX - lastDragX) / dt;
        }
        lastDragX = clientX;
        lastDragTime = now;

        updateScene();
      }

      function onDragEnd() {
        if (!isDragging) return;
        isDragging = false;
        rotatingCardsContainer.classList.remove('is-dragging');

        // Apply momentum inertia
        if (Math.abs(dragVelocity) > 0.08) {
          momentumVelocity = dragVelocity * 5;
        }
      }

      // Mouse events
      rotatingCardsContainer.addEventListener('mousedown', (e) => {
        // Only main left click
        if (e.button !== 0) return;
        onDragStart(e.clientX);
      });

      window.addEventListener('mousemove', (e) => {
        if (isDragging) onDragMove(e.clientX);
      });

      window.addEventListener('mouseup', () => {
        if (isDragging) onDragEnd();
      });

      // Touch events
      rotatingCardsContainer.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
          onDragStart(e.touches[0].clientX);
        }
      }, { passive: true });

      window.addEventListener('touchmove', (e) => {
        if (isDragging && e.touches.length > 0) {
          onDragMove(e.touches[0].clientX);
        }
      }, { passive: true });

      window.addEventListener('touchend', () => {
        if (isDragging) onDragEnd();
      });

      // Continuous Animation Loop (Auto-play: duration = 30s)
      let lastTimestamp = performance.now();

      function animationLoop(timestamp) {
        const delta = Math.min(0.1, (timestamp - lastTimestamp) / 1000);
        lastTimestamp = timestamp;

        if (Math.abs(momentumVelocity) > 0.04) {
          currentRotation += momentumVelocity;
          momentumVelocity *= 0.92;
          updateScene();
        } else if (!isDragging && !isHovered && !isPaused && !isSnapping) {
          // Smooth forward rotation
          currentRotation -= rotationSpeed * delta;
          updateScene();
        }

        requestAnimationFrame(animationLoop);
      }

      // Start initial scene update & animation loop
      updateScene();
      requestAnimationFrame(animationLoop);
    }

    // ==========================================
    // 18. REACT BITS PRO: PARALLAX CAROUSEL (TRAVEL GALLERY)
    // Exact Config: imageHeight=410, gap=10, lerp=0.11, dragSensitivity=1
    // Row 1: Left to Right drift (1-10)
    // Row 2: Right to Left drift (11-20)
    // Parallax depth shift on inner images, dragging with inertia & lerp, pauseOnHover, lightbox
    // ==========================================
    const parallaxContainer = document.getElementById('travelParallaxCarousel');
    const viewport1 = document.getElementById('parallaxViewport1');
    const viewport2 = document.getElementById('parallaxViewport2');
    const track1 = document.getElementById('parallaxTrack1');
    const track2 = document.getElementById('parallaxTrack2');
    const playPauseBtn = document.getElementById('parallaxPlayPauseBtn');
    const playPauseText = document.getElementById('parallaxPlayPauseText');

    if (parallaxContainer && track1 && track2 && viewport1 && viewport2) {
      const config = {
        imageHeight: 410,
        gap: 10,
        lerp: 0.11, // Exact lerp=0.11 from prompt
        dragSensitivity: 1.0, // Exact dragSensitivity=1 from prompt
        baseSpeed: 0.65 // px per frame
      };

      let isGlobalPaused = false;

      // Render items from PortfolioStore
      window.renderParallaxCarouselTracks = function() {
        const allPhotos = PortfolioStore.getTravelGallery();
        const row1Photos = allPhotos.slice(0, 10);
        const row2Photos = allPhotos.slice(10, 20);

        function generateCardHtml(item) {
          return `
            <div class="parallax-card" data-id="${item.id}" onclick="openLightbox('${item.img}', '${escapeHtml(item.title)} — ${escapeHtml(item.desc)}')">
              <div class="parallax-inner-box">
                <img src="${item.img}" alt="${escapeHtml(item.title)}" class="parallax-inner-img" loading="lazy" onerror="this.src='./Asist/Travel/t.1.jpg'">
                <div class="parallax-card-hover-tag">
                  <span class="parallax-card-hover-title bengali-font">${escapeHtml(item.title)}</span>
                  <span class="parallax-card-hover-zoom"><i class="fa-solid fa-expand"></i></span>
                </div>
              </div>
            </div>
          `;
        }

        // We duplicate the list 3 times to create a seamless infinite loop
        function populateTrack(trackEl, photos) {
          const singleHtml = photos.map(p => generateCardHtml(p)).join('');
          trackEl.innerHTML = singleHtml + singleHtml + singleHtml;
        }

        populateTrack(track1, row1Photos);
        populateTrack(track2, row2Photos);

        // Re-measure controllers after DOM update
        if (window._row1Controller) window._row1Controller.initMeasurements();
        if (window._row2Controller) window._row2Controller.initMeasurements();
      };

      // Controller class for a single row track
      class ParallaxRowController {
        constructor(viewport, track, direction, speed) {
          this.viewport = viewport;
          this.track = track;
          this.direction = direction; // +1 for left-to-right, -1 for right-to-left
          this.speed = speed;
          this.currentX = 0;
          this.targetX = 0;
          this.isDragging = false;
          this.isHovered = false;
          this.startX = 0;
          this.dragDistance = 0;
          this.lastX = 0;
          this.lastTime = 0;
          this.velocity = 0;
          this.cardWidth = 330;
          this.singleSetWidth = 0;
          this.viewportWidth = window.innerWidth;
          this.cards = [];
          this.innerImgs = [];

          this.initMeasurements();
          this.bindEvents();
        }

        initMeasurements() {
          this.cards = Array.from(this.track.querySelectorAll('.parallax-card'));
          this.innerImgs = this.cards.map(c => c.querySelector('.parallax-inner-img'));
          this.viewportWidth = this.viewport.offsetWidth || window.innerWidth;

          if (this.cards.length > 0) {
            const cardCount = Math.floor(this.cards.length / 3);
            this.cardWidth = this.cards[0].offsetWidth || 330;
            this.singleSetWidth = cardCount * (this.cardWidth + config.gap);
            // Center start for smooth initial bidirectional movement
            if (this.direction > 0) {
              this.currentX = -this.singleSetWidth;
              this.targetX = -this.singleSetWidth;
            } else {
              this.currentX = 0;
              this.targetX = 0;
            }
          }
        }

        bindEvents() {
          // Hover pause
          this.viewport.addEventListener('mouseenter', () => { this.isHovered = true; });
          this.viewport.addEventListener('mouseleave', () => { 
            this.isHovered = false; 
            if (this.isDragging) this.endDrag();
          });

          // Mouse Drag
          this.viewport.addEventListener('mousedown', (e) => {
            if (e.button !== 0) return;
            this.startDrag(e.clientX);
          });

          window.addEventListener('mousemove', (e) => {
            if (this.isDragging) this.moveDrag(e.clientX);
          });

          window.addEventListener('mouseup', () => {
            if (this.isDragging) this.endDrag();
          });

          // Touch Drag
          this.viewport.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
              this.startDrag(e.touches[0].clientX);
            }
          }, { passive: true });

          window.addEventListener('touchmove', (e) => {
            if (this.isDragging && e.touches.length > 0) {
              this.moveDrag(e.touches[0].clientX);
            }
          }, { passive: true });

          window.addEventListener('touchend', () => {
            if (this.isDragging) this.endDrag();
          });

          // Prevent click if user was dragging
          this.track.addEventListener('click', (e) => {
            if (this.dragDistance > 8) {
              e.preventDefault();
              e.stopPropagation();
            }
          }, true);
        }

        startDrag(clientX) {
          this.isDragging = true;
          this.dragDistance = 0;
          this.startX = clientX;
          this.lastX = clientX;
          this.lastTime = performance.now();
          this.velocity = 0;
          this.viewport.classList.add('is-dragging');
        }

        moveDrag(clientX) {
          const deltaX = (clientX - this.lastX) * config.dragSensitivity;
          this.dragDistance += Math.abs(clientX - this.lastX);
          this.targetX += deltaX;

          const now = performance.now();
          const dt = now - this.lastTime;
          if (dt > 0) {
            this.velocity = (clientX - this.lastX) / dt;
          }
          this.lastX = clientX;
          this.lastTime = now;
        }

        endDrag() {
          if (!this.isDragging) return;
          this.isDragging = false;
          this.viewport.classList.remove('is-dragging');

          // Add momentum
          if (Math.abs(this.velocity) > 0.1) {
            this.targetX += this.velocity * 120;
          }
        }

        update() {
          // Auto-play drift if not dragging, not hovered, and not globally paused
          if (!this.isDragging && !this.isHovered && !isGlobalPaused) {
            this.targetX += this.direction * this.speed;
          }

          // Exact lerp smoothing: lerp = 0.11
          this.currentX += (this.targetX - this.currentX) * config.lerp;

          // Infinite Seamless Loop modulo Wrap
          if (this.singleSetWidth > 0) {
            if (this.currentX > 0) {
              this.currentX -= this.singleSetWidth;
              this.targetX -= this.singleSetWidth;
            } else if (this.currentX < -this.singleSetWidth * 2) {
              this.currentX += this.singleSetWidth;
              this.targetX += this.singleSetWidth;
            }
          }

          // Move the track
          this.track.style.transform = `translate3d(${this.currentX.toFixed(2)}px, 0, 0)`;

          // Apply Smooth UV Counter-Shift to inner images as they travel
          this.applyParallaxImages();
        }

        applyParallaxImages() {
          const viewportCenter = this.viewportWidth / 2;
          // Noticeable, realistic parallax window effect (~100px shift range)
          const maxShift = this.cardWidth * 0.32;
          const total = this.cards.length;

          for (let i = 0; i < total; i++) {
            // Precise horizontal coordinate of card center in viewport
            const cardCenter = this.currentX + i * (this.cardWidth + config.gap) + this.cardWidth / 2;
            
            // Only update cards currently in or near viewport for optimal performance
            if (cardCenter > -150 && cardCenter < this.viewportWidth + 150) {
              // Normalized distance from center (-1 to +1)
              const normalizedDist = (cardCenter - viewportCenter) / viewportCenter;
              // Counter-parallax shift: as card moves left, inner image shifts right
              const parallaxShift = -normalizedDist * maxShift;
              const img = this.innerImgs[i];
              if (img) {
                img.style.transform = `translate3d(${parallaxShift.toFixed(1)}px, 0, 0) scale(1.18)`;
              }
            }
          }
        }
      }

      // Initialize tracks
      renderParallaxCarouselTracks();

      // Initialize Row 1 (Direction +1: Left to Right)
      // Initialize Row 2 (Direction -1: Right to Left)
      window._row1Controller = new ParallaxRowController(viewport1, track1, 1, config.baseSpeed);
      window._row2Controller = new ParallaxRowController(viewport2, track2, -1, config.baseSpeed);

      // Play/Pause toggle button
      if (playPauseBtn) {
        playPauseBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          isGlobalPaused = !isGlobalPaused;
          const icon = playPauseBtn.querySelector('i');
          if (icon) {
            if (isGlobalPaused) {
              icon.className = 'fa-solid fa-play';
              if (playPauseText) playPauseText.textContent = 'Resume Flow';
            } else {
              icon.className = 'fa-solid fa-pause';
              if (playPauseText) playPauseText.textContent = 'Pause Flow';
            }
          }
        });
      }

      // Handle Resize to re-calculate widths
      window.addEventListener('resize', () => {
        if (window._row1Controller) window._row1Controller.initMeasurements();
        if (window._row2Controller) window._row2Controller.initMeasurements();
      });

      // Master Animation Loop
      function parallaxAnimationLoop() {
        if (window._row1Controller) window._row1Controller.update();
        if (window._row2Controller) window._row2Controller.update();
        requestAnimationFrame(parallaxAnimationLoop);
      }

      requestAnimationFrame(parallaxAnimationLoop);
    }

  });



