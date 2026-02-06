/* ============================================
   PANACEA - Core JavaScript Functionality
   ============================================ */

// ============================================
// Accessibility Features
// ============================================

let fontSizeLevel = 0;
const fontSizeClasses = ['', 'font-size-large', 'font-size-larger'];

function toggleFontSize() {
  const body = document.body;
  
  // Remove current class
  body.classList.remove(fontSizeClasses[fontSizeLevel]);
  
  // Cycle to next level
  fontSizeLevel = (fontSizeLevel + 1) % fontSizeClasses.length;
  
  // Add new class
  if (fontSizeClasses[fontSizeLevel]) {
    body.classList.add(fontSizeClasses[fontSizeLevel]);
  }
  
  // Save preference
  localStorage.setItem('fontSizeLevel', fontSizeLevel);
}

function toggleHighContrast() {
  document.body.classList.toggle('high-contrast');
  const isHighContrast = document.body.classList.contains('high-contrast');
  localStorage.setItem('highContrast', isHighContrast);
}

// Load saved accessibility preferences
function loadAccessibilityPreferences() {
  const savedFontSize = localStorage.getItem('fontSizeLevel');
  const savedHighContrast = localStorage.getItem('highContrast');
  
  if (savedFontSize) {
    fontSizeLevel = parseInt(savedFontSize);
    if (fontSizeClasses[fontSizeLevel]) {
      document.body.classList.add(fontSizeClasses[fontSizeLevel]);
    }
  }
  
  if (savedHighContrast === 'true') {
    document.body.classList.add('high-contrast');
  }
}

// ============================================
// Language Modal
// ============================================

const translations = {
  'en': {
    // Navigation & Common
    'nav-home': 'Home',
    'nav-health': 'Healthcare',
    'nav-mind': 'Mental Health',
    'nav-info': 'Info Hub',
    'nav-community': 'Community',
    'back-home': '← Back to Home',
    'btn-next': 'Next →',
    'btn-prev': '← Previous',
    
    // Home Page
    'hero-title': 'PANACEA',
    'hero-subtitle': 'Stay informed. Stay connected.',
    'welcome-title': 'Welcome to PANACEA',
    'welcome-desc': 'Your complete pandemic response companion. Access healthcare, mental support, verified information, and connect with your community.',
    'alert-text': 'Latest Update: New vaccination centers opened in your area.',
    'card-health-title': 'Healthcare',
    'card-health-desc': 'Find hospitals, telemedicine, symptom checker & vaccination',
    'card-mind-title': 'Mental Health',
    'card-mind-desc': 'Meditation, mood tracking & professional support',
    'card-info-title': 'Information Hub',
    'card-info-desc': 'Real-time updates, myth busters & verified news',
    'card-comm-title': 'Community',
    'card-comm-desc': 'Help exchange, volunteer & neighborhood support',
    
    // Healthcare Page
    'header-health': 'Healthcare Resources',
    'title-health': '🏥 Healthcare Resources',
    'desc-health': 'Access healthcare services, check symptoms, and manage your health during the pandemic.',
    'tab-finder': '📍 Find Care',
    'tab-symptoms': '🩺 Symptom Checker',
    'tab-vaccine': '💉 Vaccination',
    'tab-healthlog': '📋 Health Log',
    'sec-tele-title': 'Telemedicine - Talk to a Doctor',
    'sec-tele-desc': 'Connect with verified healthcare professionals from the safety of your home.',
    'btn-video': '🎥 Video Consultation',
    'btn-voice': '📞 Voice Call',
    'btn-chat': '💬 Chat with Doctor',
    'sec-nearby-title': 'Nearby Healthcare Facilities',
    'map-text': 'Interactive Map View',
    'btn-enable-loc': 'Enable Location',
    'sec-symptom-title': 'Symptom Checker',
    'symptom-intro': 'Answer a few questions to assess your risk level. This is not a medical diagnosis.',
    'q1': 'Do you have a fever (temperature above 100.4°F / 38°C)?',
    'q2': 'Do you have a persistent cough?',
    'q3': 'Have you experienced difficulty breathing or shortness of breath?',
    'q4': 'Have you lost your sense of taste or smell?',
    'q5': 'Have you been in close contact with someone who tested positive?',
    'ans-yes': 'Yes',
    'ans-no': 'No',
    'ans-unsure': 'Not sure',
    'sec-vax-title': 'Vaccination Scheduler',
    'vax-status': 'Your Vaccination Status:',
    'vax-book': 'Book an Appointment',
    'sec-log-title': 'Daily Health Log',
    'log-desc': 'Track your daily health metrics to monitor your well-being.',
    'btn-save-log': '💾 Save Today\'s Log',

    // Mental Health Page
    'header-mind': 'Mental Health Support',
    'title-mind': '🧠 Mental Health Support',
    'desc-mind': 'Take care of your mind. Access guided meditations, track your mood, and find professional support.',
    'sec-mood-title': 'How are you feeling today?',
    'mood-great': 'Great',
    'mood-good': 'Good',
    'mood-okay': 'Okay',
    'mood-low': 'Low',
    'mood-anxious': 'Anxious',
    'sec-guide-title': 'Guided Exercises',
    'guide-desc': 'Take a moment to breathe and relax with our guided sessions.',
    'ex-breath': '5-Minute Breathing Exercise',
    'ex-calm': 'Calm Your Anxiety',
    'ex-sleep': 'Sleep Better Tonight',
    'ex-gratitude': 'Gratitude Practice',
    'sec-breath-title': '🌬️ Quick Breathing Exercise',
    'btn-start-breath': 'Start Exercise',
    'sec-prof-title': 'Professional Support',
    'sec-care-title': 'Self-Care Activities',
    'act-journal': 'Daily Journal',
    'act-music': 'Calming Music',
    'act-affirm': 'Daily Affirmation',
    
    // Info Hub Page
    'header-info': 'Information Hub',
    'title-info': '📊 Information Hub',
    'desc-info': 'Stay updated with verified statistics, local alerts, and myth-busting facts.',
    'sec-stats-title': 'Real-Time Statistics',
    'lbl-active': 'Active Cases',
    'lbl-recovered': 'Recovered',
    'lbl-vax': 'Vaccinated',
    'lbl-trend': '7-Day Trend',
    'sec-alerts-title': 'Local Alerts & Advisories',
    'sec-safe-title': 'Safety Guidelines',
    'safe-wash': 'Wash Hands Frequently',
    'safe-mask': 'Wear a Mask',
    'safe-dist': 'Maintain Distance',
    'safe-vax': 'Get Vaccinated',
    'safe-home': 'Stay Home if Sick',
    'sec-myth-title': 'Myth vs Fact',
    'sec-source-title': 'Verified Sources',
    'sec-notif-title': 'Notification Preferences',
    
    // Community Page
    'header-comm': 'Community Connection',
    'title-comm': '🤝 Community Connection',
    'desc-comm': 'Connect with neighbors, offer help, and support each other through tough times.',
    'btn-req-help': '🙋 Request Help',
    'btn-off-help': '🤲 Offer Help',
    'tab-board': '📋 Help Board',
    'tab-groups': '👥 Groups',
    'tab-vol': '💪 Volunteer',
    'sec-board-title': 'Help Exchange Board',
    'filter-all': 'All',
    'filter-food': '🛒 Groceries',
    'filter-med': '💊 Medicine',
    'filter-ride': '🚗 Transport',
    'filter-other': '📦 Other',
    'badge-urgent': 'Urgent',
    'badge-avail': 'Available',
    'btn-i-can-help': 'I Can Help',
    'btn-contact': 'Contact',
    'sec-groups-title': 'Neighborhood Groups',
    'btn-join': 'Join',
    'btn-joined': 'Joined',
    'sec-vol-title': 'Become a Volunteer',
    'vol-active': 'Active Volunteers',
    'vol-helped': 'People Helped',
    'btn-register-vol': '✋ Register as Volunteer',
    'sec-report-title': 'Safety Reporting',
    'btn-submit-report': '🚨 Submit Report'
  },
  'hi': {
    // Navigation & Common
    'nav-home': 'होम',
    'nav-health': 'स्वास्थ्य',
    'nav-mind': 'मानसिक स्वास्थ्य',
    'nav-info': 'जानकारी',
    'nav-community': 'समुदाय',
    'back-home': '← होम पर वापस जाएं',
    'btn-next': 'अगला →',
    'btn-prev': '← पिछला',

    // Home Page
    'hero-title': 'रामबाण',
    'hero-subtitle': 'सूचित रहें। जुड़े रहें।',
    'welcome-title': 'PANACEA में आपका स्वागत है',
    'welcome-desc': 'आपका संपूर्ण महामारी प्रतिक्रिया साथी। स्वास्थ्य सेवा, मानसिक सहायता, सत्यापित जानकारी प्राप्त करें और अपने समुदाय से जुड़ें।',
    'alert-text': 'नया अपडेट: आपके क्षेत्र में नए टीकाकरण केंद्र खोले गए।',
    'card-health-title': 'स्वास्थ्य सेवा',
    'card-health-desc': 'अस्पताल, टेलीमेडिसिन, लक्षण चेकर और टीकाकरण खोजें',
    'card-mind-title': 'मानसिक स्वास्थ्य',
    'card-mind-desc': 'ध्यान, मूड ट्रैकिंग और पेशेवर सहायता',
    'card-info-title': 'सूचना केंद्र',
    'card-info-desc': 'वास्तविक समय अपडेट, मिथक बस्टर और सत्यापित समाचार',
    'card-comm-title': 'समुदाय',
    'card-comm-desc': 'मदद विनिमय, स्वयंसेवक और पड़ोस का समर्थन',

    // Healthcare Page
    'header-health': 'स्वास्थ्य संसाधन',
    'title-health': '🏥 स्वास्थ्य संसाधन',
    'desc-health': 'स्वास्थ्य सेवाओं तक पहुंचें, लक्षणों की जांच करें और महामारी के दौरान अपने स्वास्थ्य का प्रबंधन करें।',
    'tab-finder': '📍 देखभाल खोजें',
    'tab-symptoms': '🩺 लक्षण जांचकर्ता',
    'tab-vaccine': '💉 टीकाकरण',
    'tab-healthlog': '📋 स्वास्थ्य लॉग',
    'sec-tele-title': 'टेलीमेडिसिन - डॉक्टर से बात करें',
    'sec-tele-desc': 'अपने घर की सुरक्षा से सत्यापित स्वास्थ्य पेशेवरों से जुड़ें।',
    'btn-video': '🎥 वीडियो परामर्श',
    'btn-voice': '📞 वॉयस कॉल',
    'btn-chat': '💬 डॉक्टर से चैट करें',
    'sec-nearby-title': 'पास की स्वास्थ्य सुविधाएं',
    'map-text': 'इंटरैक्टिव मानचित्र दृश्य',
    'btn-enable-loc': 'स्थान सक्षम करें',
    'sec-symptom-title': 'लक्षण जांचकर्ता',
    'symptom-intro': 'अपने जोखिम स्तर का आकलन करने के लिए कुछ उत्तर दें। यह चिकित्सा निदान नहीं है।',
    'q1': 'क्या आपको बुखार है (तापमान 100.4°F / 38°C से ऊपर)?',
    'q2': 'क्या आपको लगातार खांसी हो रही है?',
    'q3': 'क्या आपको सांस लेने में कठिनाई या सांस फूलने की समस्या है?',
    'q4': 'क्या आपने स्वाद या गंध की भावना खो दी है?',
    'q5': 'क्या आप किसी ऐसे व्यक्ति के संपर्क में आए हैं जो पॉजिटिव आया है?',
    'ans-yes': 'हां',
    'ans-no': 'नहीं',
    'ans-unsure': 'निश्चित नहीं',
    'sec-vax-title': 'टीकाकरण अनुसूचक',
    'vax-status': 'आपकी टीकाकरण स्थिति:',
    'vax-book': 'अपॉइंटमेंट बुक करें',
    'sec-log-title': 'दैनिक स्वास्थ्य लॉग',
    'log-desc': 'अपनी भलाई की निगरानी के लिए अपने दैनिक स्वास्थ्य मेट्रिक्स को ट्रैक करें।',
    'btn-save-log': '💾 आज का लॉग सहेजें',

    // Mental Health Page
    'header-mind': 'मानसिक स्वास्थ्य सहायता',
    'title-mind': '🧠 मानसिक स्वास्थ्य सहायता',
    'desc-mind': 'अपने दिमाग का ख्याल रखें। निर्देशित ध्यान, मूड ट्रैकिंग और पेशेवर सहायता।',
    'sec-mood-title': 'आज आप कैसा महसूस कर रहे हैं?',
    'mood-great': 'बहुत अच्छा',
    'mood-good': 'अच्छा',
    'mood-okay': 'ठीक',
    'mood-low': 'उदास',
    'mood-anxious': 'चिंतित',
    'sec-guide-title': 'निर्देशित अभ्यास',
    'guide-desc': 'सांस लेने और आराम करने के लिए कुछ पल निकालें।',
    'ex-breath': '5-मिनट श्वास व्यायाम',
    'ex-calm': 'अपनी चिंता को शांत करें',
    'ex-sleep': 'आज रात बेहतर नींद लें',
    'ex-gratitude': 'कृतज्ञता अभ्यास',
    'sec-breath-title': '🌬️ त्वरित श्वास व्यायाम',
    'btn-start-breath': 'व्यायाम शुरू करें',
    'sec-prof-title': 'पेशेवर सहायता',
    'sec-care-title': 'स्व-देखभाल गतिविधियां',
    'act-journal': 'दैनिक जर्नल',
    'act-music': 'शांत संगीत',
    'act-affirm': 'दैनिक प्रतिज्ञान',

    // Info Hub Page
    'header-info': 'सूचना केंद्र',
    'title-info': '📊 सूचना केंद्र',
    'desc-info': 'सत्यापित आंकड़ों, स्थानीय अलर्ट और तथ्यों के साथ अपडेट रहें।',
    'sec-stats-title': 'वास्तविक समय आंकड़े',
    'lbl-active': 'सक्रिय मामले',
    'lbl-recovered': 'ठीक हुए',
    'lbl-vax': 'टीकाकरण हुआ',
    'lbl-trend': '7-दिवसीय रुझान',
    'sec-alerts-title': 'स्थानीय अलर्ट',
    'sec-safe-title': 'सुरक्षा दिशानिर्देश',
    'safe-wash': 'बार-बार हाथ धोएं',
    'safe-mask': 'मास्क पहनें',
    'safe-dist': 'दूरी बनाए रखें',
    'safe-vax': 'टीका लगवाएं',
    'safe-home': 'बीमार होने पर घर पर रहें',
    'sec-myth-title': 'मिथक बनाम तथ्य',
    'sec-source-title': 'सत्यापित स्रोत',
    'sec-notif-title': 'अधिसूचना प्राथमिकताएं',

    // Community Page
    'header-comm': 'सामुदायिक संबंध',
    'title-comm': '🤝 सामुदायिक संबंध',
    'desc-comm': 'पड़ोसियों से जुड़ें, मदद की पेशकश करें और एक-दूसरे का समर्थन करें।',
    'btn-req-help': '🙋 मदद मांगें',
    'btn-off-help': '🤲 मदद की पेशकश करें',
    'tab-board': '📋 मदद बोर्ड',
    'tab-groups': '👥 समूह',
    'tab-vol': '💪 स्वयंसेवक',
    'sec-board-title': 'मदद विनिमय बोर्ड',
    'filter-all': 'सभी',
    'filter-food': '🛒 राशन',
    'filter-med': '💊 दवा',
    'filter-ride': '🚗 परिवहन',
    'filter-other': '📦 अन्य',
    'badge-urgent': 'अत्यावश्यक',
    'badge-avail': 'उपलब्ध',
    'btn-i-can-help': 'मैं मदद कर सकता हूँ',
    'btn-contact': 'संपर्क करें',
    'sec-groups-title': 'पड़ोस के समूह',
    'btn-join': 'जुड़ें',
    'btn-joined': 'जुड़े हुए',
    'sec-vol-title': 'स्वयंसेवक बनें',
    'vol-active': 'सक्रिय स्वयंसेवक',
    'vol-helped': 'लोगों की मदद की',
    'btn-register-vol': '✋ स्वयंसेवक के रूप में पंजीकरण करें',
    'sec-report-title': 'सुरक्षा रिपोर्टिंग',
    'btn-submit-report': '🚨 रिपोर्ट सबमिट करें'
  },
  'ta': {
    // Navigation & Common
    'nav-home': 'முகப்பு',
    'nav-health': 'சுகாதாரம்',
    'nav-mind': 'மன நலம்',
    'nav-info': 'தகவல்',
    'nav-community': 'சமூகம்',
    'back-home': '← முகப்புக்கு செல்',
    'btn-next': 'அடுத்து →',
    'btn-prev': '← முந்தைய',

    // Home Page
    'hero-title': 'பானேசியா',
    'hero-subtitle': 'தகவலறிந்து இருங்கள். இணைந்திருங்கள்.',
    'welcome-title': 'பானேசியா வரவேற்கிறது',
    'welcome-desc': 'உங்கள் முழுமையான தொற்றுநோய் பதிலளிப்பு துணை. சுகாதாரம், மன ஆதரவு, மற்றும் சமூக இணைப்பு.',
    'alert-text': 'சமீபத்திய புதுப்பிப்பு: உங்கள் பகுதியில் புதிய தடுப்பூசி மையங்கள் திறக்கப்பட்டுள்ளன.',
    'card-health-title': 'சுகாதாரம்',
    'card-health-desc': 'மருத்துவமனைகள், டெலிமெடிசின் மற்றும் தடுப்பூசி',
    'card-mind-title': 'மன நலம்',
    'card-mind-desc': 'தியானம், மனநிலை மற்றும் தொழில்முறை ஆதரவு',
    'card-info-title': 'தகவல் மையம்',
    'card-info-desc': 'நிகழ்நேர புதுப்பிப்புகள் மற்றும் சரிபார்க்கப்பட்ட செய்திகள்',
    'card-comm-title': 'சமூகம்',
    'card-comm-desc': 'உதவி பரிமாற்றம் மற்றும் அண்டை வீட்டு ஆதரவு',

    // Healthcare Page
    'header-health': 'சுகாதார வளங்கள்',
    'title-health': '🏥 சுகாதார வளங்கள்',
    'desc-health': 'சுகாதார சேவைகளை அணுகவும் மற்றும் உங்கள் ஆரோக்கியத்தை நிர்வகிக்கவும்.',
    'tab-finder': '📍 பராமரிப்பு',
    'tab-symptoms': '🩺 அறிகுறிகள்',
    'tab-vaccine': '💉 தடுப்பூசி',
    'tab-healthlog': '📋 பதிவேடு',
    'sec-tele-title': 'டெலிமெடிசின் - மருத்துவரிடம் பேசுங்கள்',
    'sec-tele-desc': 'வீட்டிலிருந்தபடியே மருத்துவர்களுடன் இணையுங்கள்.',
    'btn-video': '🎥 வீடியோ ஆலோசனை',
    'btn-voice': '📞 குரல் அழைப்பு',
    'btn-chat': '💬 மருத்துவருடன் அரட்டை',
    'sec-nearby-title': 'அருகிலுள்ள மருத்துவமனைகள்',
    'map-text': 'ஊடாடும் வரைபடம்',
    'btn-enable-loc': 'இருப்பிடத்தை இயக்கு',
    'sec-symptom-title': 'அறிகுறி சரிபார்ப்பு',
    'symptom-intro': 'உங்கள் அபாயத்தை அறிய சில கேள்விகளுக்கு பதிலளிக்கவும். இது மருத்துவ நோயறிதல் அல்ல.',
    'q1': 'உங்களுக்கு காய்ச்சல் உள்ளதா (100.4°F க்கு மேல்)?',
    'q2': 'உங்களுக்கு தொடர்ந்து இருமல் உள்ளதா?',
    'q3': 'மூச்சுத் திணறல் உள்ளதா?',
    'q4': 'சுவை அல்லது வாசனை இழப்பு உள்ளதா?',
    'q5': 'தொற்று பாதிக்கப்பட்டவருடன் தொடர்பில் இருந்தீர்களா?',
    'ans-yes': 'ஆம்',
    'ans-no': 'இல்லை',
    'ans-unsure': 'தெரியவில்லை',
    'sec-vax-title': 'தடுப்பூசி அட்டவணை',
    'vax-status': 'உங்கள் தடுப்பூசி நிலை:',
    'vax-book': 'நியமனம் பதிவு செய்யுங்கள்',
    'sec-log-title': 'தினசரி சுகாதார பதிவு',
    'log-desc': 'உங்கள் உடல்நலத்தை கண்காணிக்கவும்.',
    'btn-save-log': '💾 சேமி',

    // Mental Health Page
    'header-mind': 'மனநல ஆதரவு',
    'title-mind': '🧠 மனநல ஆதரவு',
    'desc-mind': 'தியானம், மனநிலை கண்காணிப்பு மற்றும் தொழில்முறை ஆதரவு.',
    'sec-mood-title': 'இன்று நீங்கள் எப்படி உணர்கிறீர்கள்?',
    'mood-great': 'மிக நன்றக',
    'mood-good': 'நன்று',
    'mood-okay': 'பரவாயில்லை',
    'mood-low': 'கவலை',
    'mood-anxious': 'பதற்றம்',
    'sec-guide-title': 'வழிகாட்டப்பட்ட பயிற்சிகள்',
    'guide-desc': 'சுவாசிக்கவும் ஓய்வெடுக்கவும் சிறிது நேரம் ஒதுக்குங்கள்.',
    'ex-breath': '5-நிமிட சுவாச பயிற்சி',
    'ex-calm': 'கவலையை தணிக்கவும்',
    'ex-sleep': 'சிறந்த தூக்கம்',
    'ex-gratitude': 'நன்றியுணர்வு பயிற்சி',
    'sec-breath-title': '🌬️ விரைவான சுவாச பயிற்சி',
    'btn-start-breath': 'பயிற்சியைத் தொடங்கு',
    'sec-prof-title': 'தொழில்முறை ஆதரவு',
    'sec-care-title': 'சுய பாதுகாப்பு',
    'act-journal': 'தினசரி இதழ்',
    'act-music': 'இசை',
    'act-affirm': 'தினசரி உறுதிமொழி',

    // Info Hub Page
    'header-info': 'தகவல் மையம்',
    'title-info': '📊 தகவல் மையம்',
    'desc-info': 'புள்ளிவிவரங்கள் மற்றும் விழிப்பூட்டல்களுடன் புதுப்பித்த நிலையில் இருங்கள்.',
    'sec-stats-title': 'நிகழ்நேர புள்ளிவிவரங்கள்',
    'lbl-active': 'செயலில் உள்ளவை',
    'lbl-recovered': 'குணமடைந்தோர்',
    'lbl-vax': 'தடுப்பூசி செலுத்தப்பட்டது',
    'lbl-trend': '7-நாள் போக்கு',
    'sec-alerts-title': 'உள்ளூர் விழிப்பூட்டல்கள்',
    'sec-safe-title': 'பாதுகாப்பு வழிகாட்டுதல்கள்',
    'safe-wash': 'கைகளை கழுவவும்',
    'safe-mask': 'முகமூடி அணியவும்',
    'safe-dist': 'இடைவெளி பராமரிக்கவும்',
    'safe-vax': 'தடுப்பூசி போடுங்கள்',
    'safe-home': 'வீட்டிலேயே இருங்கள்',
    'sec-myth-title': 'கட்டுக்கதை vs உண்மை',
    'sec-source-title': 'சரிபார்க்கப்பட்ட ஆதாரங்கள்',
    'sec-notif-title': 'அறிவிப்பு அமைப்புகள்',

    // Community Page
    'header-comm': 'சமூக இணைப்பு',
    'title-comm': '🤝 சமூக இணைப்பு',
    'desc-comm': 'ஒருவருக்கொருவர் உதவுங்கள்.',
    'btn-req-help': '🙋 உதவி கேளுங்கள்',
    'btn-off-help': '🤲 உதவி வழங்குங்கள்',
    'tab-board': '📋 உதவி பலகை',
    'tab-groups': '👥 குழுக்கள்',
    'tab-vol': '💪 தன்னார்வலர்',
    'sec-board-title': 'உதவி பரிமாற்றம்',
    'filter-all': 'அனைத்தும்',
    'filter-food': '🛒 மளிகை',
    'filter-med': '💊 மருந்து',
    'filter-ride': '🚗 போக்குவரத்து',
    'filter-other': '📦 மற்றவை',
    'badge-urgent': 'அவசரம்',
    'badge-avail': 'கிடைக்கிறது',
    'btn-i-can-help': 'நான் உதவ முடியும்',
    'btn-contact': 'தொடர்பு',
    'sec-groups-title': 'அண்டை குழுக்கள்',
    'btn-join': 'சேர்',
    'btn-joined': 'இணைந்தது',
    'sec-vol-title': 'தன்னார்வலராகுங்கள்',
    'vol-active': 'தன்னார்வலர்கள்',
    'vol-helped': 'உதவி பெற்றவர்கள்',
    'btn-register-vol': '✋ பதிவு செய்யவும்',
    'sec-report-title': 'பாதுகாப்பு அறிக்கை',
    'btn-submit-report': '🚨 சமர்ப்பிக்கவும்'
  }
};

function toggleLanguageModal() {
  const modal = document.getElementById('languageModal');
  if (modal) {
    modal.classList.toggle('active');
  }
}

function saveLanguage() {
  const selected = document.querySelector('input[name="language"]:checked');
  if (selected) {
    const lang = selected.value;
    localStorage.setItem('language', lang);
    applyLanguage(lang);
    toggleLanguageModal();
  }
}

function applyLanguage(lang) {
  // Default to English if translation missing
  const text = translations[lang] || translations['en'];
  
  // 1. Navigation & Common (All Pages)
  if (document.querySelector('.header-nav-link')) {
    const navs = document.querySelectorAll('.header-nav-link');
    if (navs[0]) navs[0].textContent = text['nav-home'];
    if (navs[1]) navs[1].textContent = text['nav-health'];
    if (navs[2]) navs[2].textContent = text['nav-mind'];
    if (navs[3]) navs[3].textContent = text['nav-info'];
    if (navs[4]) navs[4].textContent = text['nav-community'];
  }
  
   // Back link
  const backBtn = document.querySelector('.back-link');
  if (backBtn) backBtn.textContent = text['back-home'];

  // 2. Header Title (All Pages)
  const heroTitle = document.querySelector('.logo-text h1');
  if (heroTitle) heroTitle.textContent = text['hero-title'];

  // Determine current page for specific content
  const path = window.location.pathname;
  const pageSub = document.querySelector('.logo-text p');
  const mainTitle = document.querySelector('.page-title h2');
  const mainDesc = document.querySelector('.page-title p');

  if (path.includes('healthcare.html')) {
    // HEALTHCARE PAGE
    if (pageSub) pageSub.textContent = text['header-health'];
    if (mainTitle) mainTitle.textContent = text['title-health'];
    if (mainDesc) mainDesc.textContent = text['desc-health'];
    
    // Tabs
    const tabs = document.querySelectorAll('.tab-btn');
    if (tabs.length >= 4) {
      tabs[0].textContent = text['tab-finder'];
      tabs[1].textContent = text['tab-symptoms'];
      tabs[2].textContent = text['tab-vaccine'];
      tabs[3].textContent = text['tab-healthlog'];
    }

    // Sections
    updateText('#telemedicine .section-title', text['sec-tele-title']);
    updateText('#telemedicine p', text['sec-tele-desc']);
    updateText('.section-card:nth-child(2) .section-title', text['sec-nearby-title']); 
    updateText('.section-card:nth-child(2) div[style*="text-align: center"] p:not([style])', text['map-text']);
    updateText('#symptom-checker .section-title', text['sec-symptom-title']);
    updateText('#symptom-checker p', text['symptom-intro']);
    updateText('#vaccination .section-title', text['sec-vax-title']);
    
    // Buttons
    // Note: This is fragile if buttons change order.
    // For hackathon speed, we use strict selectors or querySelectorAll order.
    const btns = document.querySelectorAll('.btn-block'); 
    // Just targeted updates where possible
    
  } else if (path.includes('mental-health.html')) {
    // MENTAL HEALTH PAGE
    if (pageSub) pageSub.textContent = text['header-mind'];
    if (mainTitle) mainTitle.textContent = text['title-mind'];
    if (mainDesc) mainDesc.textContent = text['desc-mind'];
    
    updateText('.mood-grid .mood-btn[data-mood="great"] .mood-label', text['mood-great']);
    updateText('.mood-grid .mood-btn[data-mood="good"] .mood-label', text['mood-good']);
    updateText('.mood-grid .mood-btn[data-mood="okay"] .mood-label', text['mood-okay']);
    updateText('.mood-grid .mood-btn[data-mood="low"] .mood-label', text['mood-low']);
    updateText('.mood-grid .mood-btn[data-mood="anxious"] .mood-label', text['mood-anxious']);
    
    updateText('#meditation .section-title', text['sec-guide-title']);
    
    const audioTitles = document.querySelectorAll('.audio-title');
    if (audioTitles.length >= 4) {
      audioTitles[0].textContent = text['ex-breath'];
      audioTitles[1].textContent = text['ex-calm'];
      audioTitles[2].textContent = text['ex-sleep'];
      audioTitles[3].textContent = text['ex-gratitude'];
    }

  } else if (path.includes('info-hub.html')) {
    // INFO HUB PAGE
    if (pageSub) pageSub.textContent = text['header-info'];
    if (mainTitle) mainTitle.textContent = text['title-info'];
    if (mainDesc) mainDesc.textContent = text['desc-info'];
    
    updateText('.section-card:nth-child(1) .section-title', text['sec-stats-title']); // Realtime stats is first? No, title is in 54
    // Actually safer to search by content if class usage is repetitive
    
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels.length >= 4) {
      statLabels[0].textContent = text['lbl-active'];
      statLabels[1].textContent = text['lbl-recovered'];
      statLabels[2].textContent = text['lbl-vax'];
      statLabels[3].textContent = text['lbl-trend'];
    }

  } else if (path.includes('community.html')) {
    // COMMUNITY PAGE
    if (pageSub) pageSub.textContent = text['header-comm'];
    if (mainTitle) mainTitle.textContent = text['title-comm'];
    if (mainDesc) mainDesc.textContent = text['desc-comm'];
    
    const tabs = document.querySelectorAll('.tab-btn');
    if (tabs.length >= 3) {
      tabs[0].textContent = text['tab-board'];
      tabs[1].textContent = text['tab-groups'];
      tabs[2].textContent = text['tab-vol'];
    }
    
    updateText('#help .section-title', text['sec-board-title']);
    
    // Quick Actions
    const quickBtns = document.querySelectorAll('.btn-lg'); // Request/Offer
    // Too risky to target all .btn-lg indiscriminately
  } else {
    // HOME PAGE
    if (pageSub) pageSub.textContent = text['hero-subtitle'];
    
    const welcomeTitle = document.querySelector('.welcome-section h2');
    if (welcomeTitle) welcomeTitle.textContent = text['welcome-title'];
    
    const welcomeDesc = document.querySelector('.welcome-section p');
    if (welcomeDesc) welcomeDesc.textContent = text['welcome-desc'];
    
    const alertText = document.querySelector('#alertBanner div');
    if (alertText) {
      const link = alertText.querySelector('a');
      alertText.innerHTML = `<strong>${lang === 'en' ? 'Latest Update:' : 'Update (अपडेट):'}</strong> ${text['alert-text']} <a href="healthcare.html#vaccination">${link ? link.textContent : '→'}</a>`;
    }
    
    const cards = document.querySelectorAll('.feature-card');
    if (cards.length >= 4) {
      cards[0].querySelector('h3').textContent = text['card-health-title'];
      cards[0].querySelector('p').textContent = text['card-health-desc'];
      
      cards[1].querySelector('h3').textContent = text['card-mind-title'];
      cards[1].querySelector('p').textContent = text['card-mind-desc'];
      
      cards[2].querySelector('h3').textContent = text['card-info-title'];
      cards[2].querySelector('p').textContent = text['card-info-desc'];
      
      cards[3].querySelector('h3').textContent = text['card-comm-title'];
      cards[3].querySelector('p').textContent = text['card-comm-desc'];
    }
  }
}

// Helper to safely update text content
function updateText(selector, textContent) {
  const el = document.querySelector(selector);
  if (el && textContent) el.textContent = textContent;
}

// ============================================
// Tab Switching (Healthcare page)
// ============================================

function switchTab(tabId) {
  // Hide all tab contents
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  
  // Remove active class from all tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Show selected tab content
  const selectedContent = document.getElementById('tab-' + tabId);
  if (selectedContent) {
    selectedContent.classList.add('active');
  }
  
  // Add active class to clicked button
  event.target.classList.add('active');
}

// ============================================
// Symptom Checker
// ============================================

let currentQuestion = 1;
const totalQuestions = 5;
const symptomAnswers = {};

function selectAnswer(element, question, answer) {
  // Remove selected class from siblings
  element.parentNode.querySelectorAll('.answer-option').forEach(opt => {
    opt.classList.remove('selected');
  });
  
  // Add selected class to clicked option
  element.classList.add('selected');
  
  // Store answer
  symptomAnswers[question] = answer;
  
  // Enable next button
  document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
  if (currentQuestion < totalQuestions) {
    // Hide current question
    document.querySelector(`[data-question="${currentQuestion}"]`).style.display = 'none';
    
    currentQuestion++;
    
    // Show next question
    document.querySelector(`[data-question="${currentQuestion}"]`).style.display = 'block';
    
    // Show prev button
    document.getElementById('prevBtn').style.display = 'inline-flex';
    
    // Disable next button until answer selected
    document.getElementById('nextBtn').disabled = true;
    
    // Update button text on last question
    if (currentQuestion === totalQuestions) {
      document.getElementById('nextBtn').textContent = 'Get Results';
    }
  } else {
    // Show results
    showSymptomResults();
  }
}

function prevQuestion() {
  if (currentQuestion > 1) {
    // Hide current question
    document.querySelector(`[data-question="${currentQuestion}"]`).style.display = 'none';
    
    currentQuestion--;
    
    // Show previous question
    document.querySelector(`[data-question="${currentQuestion}"]`).style.display = 'block';
    
    // Hide prev button on first question
    if (currentQuestion === 1) {
      document.getElementById('prevBtn').style.display = 'none';
    }
    
    // Reset next button text
    document.getElementById('nextBtn').textContent = 'Next →';
    document.getElementById('nextBtn').disabled = false;
  }
}

function showSymptomResults() {
  // Calculate risk level based on answers
  let riskScore = 0;
  
  if (symptomAnswers.fever === 'yes') riskScore += 2;
  if (symptomAnswers.fever === 'unsure') riskScore += 1;
  if (symptomAnswers.cough === 'yes') riskScore += 2;
  if (symptomAnswers.cough === 'wet') riskScore += 1;
  if (symptomAnswers.breathing === 'yes') riskScore += 3;
  if (symptomAnswers.breathing === 'mild') riskScore += 1;
  if (symptomAnswers.taste === 'yes') riskScore += 2;
  if (symptomAnswers.taste === 'partial') riskScore += 1;
  if (symptomAnswers.contact === 'yes') riskScore += 3;
  if (symptomAnswers.contact === 'maybe') riskScore += 1;
  
  // Hide questions, show result
  document.getElementById('symptomQuestions').style.display = 'none';
  document.getElementById('prevBtn').style.display = 'none';
  document.getElementById('nextBtn').style.display = 'none';
  
  const resultDiv = document.getElementById('symptomResult');
  const resultCard = document.getElementById('resultCard');
  const resultIcon = document.getElementById('resultIcon');
  const resultLevel = document.getElementById('resultLevel');
  const resultMessage = document.getElementById('resultMessage');
  
  resultDiv.style.display = 'block';
  
  if (riskScore <= 3) {
    resultCard.className = 'result-card low';
    resultIcon.textContent = '✓';
    resultLevel.textContent = 'Low Risk';
    resultMessage.textContent = 'Based on your answers, your risk level appears to be low. Continue to follow preventive measures and monitor yourself for any new symptoms.';
  } else if (riskScore <= 7) {
    resultCard.className = 'result-card medium';
    resultIcon.textContent = '⚠️';
    resultLevel.textContent = 'Medium Risk';
    resultMessage.textContent = 'Based on your answers, you may have some symptoms of concern. We recommend getting tested and consulting with a healthcare provider.';
  } else {
    resultCard.className = 'result-card high';
    resultIcon.textContent = '🚨';
    resultLevel.textContent = 'High Risk';
    resultMessage.textContent = 'Based on your answers, you should seek medical attention. Please get tested immediately and consider telemedicine consultation. If you have difficulty breathing, call emergency services.';
  }
}

function resetSymptomChecker() {
  currentQuestion = 1;
  Object.keys(symptomAnswers).forEach(key => delete symptomAnswers[key]);
  
  // Reset UI
  document.querySelectorAll('.question-card').forEach((card, index) => {
    card.style.display = index === 0 ? 'block' : 'none';
  });
  
  document.querySelectorAll('.answer-option').forEach(opt => {
    opt.classList.remove('selected');
  });
  
  document.getElementById('symptomQuestions').style.display = 'block';
  document.getElementById('symptomResult').style.display = 'none';
  document.getElementById('nextBtn').style.display = 'inline-flex';
  document.getElementById('nextBtn').textContent = 'Next →';
  document.getElementById('nextBtn').disabled = true;
  document.getElementById('prevBtn').style.display = 'none';
}

// ============================================
// Mood Tracker
// ============================================

function selectMood(element, mood) {
  // Remove selected from all
  document.querySelectorAll('.mood-btn').forEach(btn => {
    btn.classList.remove('selected');
  });
  
  // Add selected to clicked
  element.classList.add('selected');
  
  // Save mood
  const today = new Date().toISOString().split('T')[0];
  const moodLog = JSON.parse(localStorage.getItem('moodLog') || '{}');
  moodLog[today] = mood;
  localStorage.setItem('moodLog', JSON.stringify(moodLog));
  
  // Show confirmation
  const confirmation = document.getElementById('moodConfirmation');
  if (confirmation) {
    confirmation.style.display = 'block';
    
    // Calculate streak
    const streak = calculateMoodStreak(moodLog);
    document.getElementById('moodStreak').textContent = `You're on a ${streak}-day streak!`;
    
    // Hide after 3 seconds
    setTimeout(() => {
      confirmation.style.display = 'none';
    }, 3000);
  }
}

function calculateMoodStreak(moodLog) {
  let streak = 0;
  const today = new Date();
  
  for (let i = 0; i < 365; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    
    if (moodLog[dateStr]) {
      streak++;
    } else if (i > 0) {
      break;
    }
  }
  
  return streak;
}

// Load today's mood if already logged
function loadTodaysMood() {
  const today = new Date().toISOString().split('T')[0];
  const moodLog = JSON.parse(localStorage.getItem('moodLog') || '{}');
  
  if (moodLog[today]) {
    const moodBtn = document.querySelector(`[data-mood="${moodLog[today]}"]`);
    if (moodBtn) {
      moodBtn.classList.add('selected');
    }
  }
}

// ============================================
// Breathing Exercise
// ============================================

let breathingInterval = null;
let isBreathing = false;

function startBreathing() {
  const circle = document.getElementById('breathingCircle');
  const btn = document.getElementById('breathingBtn');
  
  if (!circle || !btn) return;
  
  if (isBreathing) {
    // Stop
    isBreathing = false;
    clearInterval(breathingInterval);
    circle.style.transform = 'scale(1)';
    circle.textContent = 'Breathe';
    btn.textContent = 'Start Exercise';
  } else {
    // Start
    isBreathing = true;
    btn.textContent = 'Stop';
    
    let phase = 'inhale';
    
    function updateBreathing() {
      if (phase === 'inhale') {
        circle.style.transform = 'scale(1.3)';
        circle.textContent = 'Breathe In';
        phase = 'hold1';
      } else if (phase === 'hold1') {
        circle.textContent = 'Hold';
        phase = 'exhale';
      } else if (phase === 'exhale') {
        circle.style.transform = 'scale(1)';
        circle.textContent = 'Breathe Out';
        phase = 'hold2';
      } else {
        circle.textContent = 'Hold';
        phase = 'inhale';
      }
    }
    
    updateBreathing();
    breathingInterval = setInterval(updateBreathing, 4000);
  }
}

// ============================================
// Journal
// ============================================

function toggleJournal() {
  const section = document.getElementById('journalSection');
  if (section) {
    section.style.display = section.style.display === 'none' ? 'block' : 'none';
    
    // Load saved journal
    const today = new Date().toISOString().split('T')[0];
    const journals = JSON.parse(localStorage.getItem('journals') || '{}');
    const textarea = document.getElementById('journalText');
    if (textarea && journals[today]) {
      textarea.value = journals[today];
    }
  }
}

function saveJournal() {
  const textarea = document.getElementById('journalText');
  if (textarea) {
    const today = new Date().toISOString().split('T')[0];
    const journals = JSON.parse(localStorage.getItem('journals') || '{}');
    journals[today] = textarea.value;
    localStorage.setItem('journals', JSON.stringify(journals));
    
    alert('Journal entry saved! ✨');
  }
}

// ============================================
// Affirmations
// ============================================

const affirmations = [
  "I am capable of handling whatever comes my way.",
  "This too shall pass, and I will emerge stronger.",
  "I choose to focus on what I can control.",
  "I am doing the best I can, and that is enough.",
  "My feelings are valid, and it's okay to not be okay sometimes.",
  "I am connected to others, even when physically distant.",
  "Every day is a new opportunity for healing and growth.",
  "I am resilient and can adapt to change.",
  "Taking care of myself is a priority, not a luxury.",
  "I am grateful for the small moments of joy in my life.",
  "I trust in my ability to navigate uncertainty.",
  "I am not alone in my struggles."
];

function newAffirmation() {
  const element = document.getElementById('affirmation');
  if (element) {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    element.textContent = `"${affirmations[randomIndex]}"`;
  }
}

// ============================================
// Audio Player (Mock)
// ============================================

function toggleAudio(audioId) {
  alert(`Playing: ${audioId}\n\n(In a full implementation, this would play the audio file)`);
}

// ============================================
// Info Hub Functions
// ============================================

function refreshStats() {
  const updateElement = document.getElementById('lastUpdate');
  if (updateElement) {
    updateElement.textContent = 'Just now';
    
    // Simulate loading
    setTimeout(() => {
      updateElement.textContent = '1 minute ago';
    }, 60000);
  }
  
  alert('Statistics refreshed! ✓');
}

// ============================================
// Form Handlers
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  // Load accessibility preferences
  loadAccessibilityPreferences();
  
  // Load saved language
  const savedLang = localStorage.getItem('language');
  if (savedLang) {
    applyLanguage(savedLang);
    // Update radio button
    const radio = document.querySelector(`input[name="language"][value="${savedLang}"]`);
    if (radio) radio.checked = true;
  }
  
  // Load today's mood
  loadTodaysMood();
  
  // Health log form
  const healthLogForm = document.getElementById('healthLogForm');
  if (healthLogForm) {
    healthLogForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Health log saved! ✓');
    });
  }
  
  // Close modals on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });
  
  // Close modals on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(modal => {
        modal.classList.remove('active');
      });
    }
  });
});

// ============================================
// Utility Functions
// ============================================

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

function formatTime(date) {
  return new Date(date).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit'
  });
}
