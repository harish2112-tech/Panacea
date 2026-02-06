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
    'nav-home': 'Home',
    'nav-health': 'Healthcare',
    'nav-mind': 'Mental Health',
    'nav-info': 'Info Hub',
    'nav-community': 'Community',
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
    'card-comm-desc': 'Help exchange, volunteer & neighborhood support'
  },
  'hi': {
    'nav-home': 'होम',
    'nav-health': 'स्वास्थ्य',
    'nav-mind': 'मानसिक स्वास्थ्य',
    'nav-info': 'जानकारी',
    'nav-community': 'समुदाय',
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
    'card-comm-desc': 'मदद विनिमय, स्वयंसेवक और पड़ोस का समर्थन'
  },
  'ta': {
    'nav-home': 'முகப்பு',
    'nav-health': 'சுகாதாரம்',
    'nav-mind': 'மன நலம்',
    'nav-info': 'தகவல்',
    'nav-community': 'சமூகம்',
    'hero-title': 'பானேசியா',
    'hero-subtitle': 'தகவலறிந்து இருங்கள். இணைந்திருங்கள்.',
    'welcome-title': 'PANACEA வரவேற்கிறது',
    'welcome-desc': 'உங்கள் முழுமையான தொற்றுநோய் பதிலளிப்பு துணை. சுகாதாரம், மன ஆதரவு, சரிபார்க்கப்பட்ட தகவல்களை அணுகவும் மற்றும் உங்கள் சமூகத்துடன் இணையவும்.',
    'alert-text': 'சமீபத்திய புதுப்பிப்பு: உங்கள் பகுதியில் புதிய தடுப்பூசி மையங்கள் திறக்கப்பட்டுள்ளன.',
    'card-health-title': 'சுகாதாரம்',
    'card-health-desc': 'மருத்துவமனைகள், டெலிமெடிசின், அறிகுறிகள் சரிபார்ப்பு மற்றும் தடுப்பூசியைக் கண்டறியவும்',
    'card-mind-title': 'மன நலம்',
    'card-mind-desc': 'தியானம், மனநிலை கண்காணிப்பு மற்றும் தொழில்முறை ஆதரவு',
    'card-info-title': 'தகவல் மையம்',
    'card-info-desc': 'நிகழ்நேர புதுப்பிப்புகள், கட்டுக்கதை உடைப்பவர்கள் மற்றும் சரிபார்க்கப்பட்ட செய்திகள்',
    'card-comm-title': 'சமூகம்',
    'card-comm-desc': 'உதவி பரிமாற்றம், தன்னார்வலர் மற்றும் அண்டை வீட்டு ஆதரவு'
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
  
  // Update elements if they exist (Home Page Implementation)
  if (document.querySelector('.header-nav-link')) {
    const navs = document.querySelectorAll('.header-nav-link');
    if (navs[0]) navs[0].textContent = text['nav-home'];
    if (navs[1]) navs[1].textContent = text['nav-health'];
    if (navs[2]) navs[2].textContent = text['nav-mind'];
    if (navs[3]) navs[3].textContent = text['nav-info'];
    if (navs[4]) navs[4].textContent = text['nav-community'];
  }
  
  const heroTitle = document.querySelector('.logo-text h1');
  if (heroTitle) heroTitle.textContent = text['hero-title'];
  
  const heroSub = document.querySelector('.logo-text p');
  if (heroSub) heroSub.textContent = text['hero-subtitle'];
  
  const welcomeTitle = document.querySelector('.welcome-section h2');
  if (welcomeTitle) welcomeTitle.textContent = text['welcome-title'];
  
  const welcomeDesc = document.querySelector('.welcome-section p');
  if (welcomeDesc) welcomeDesc.textContent = text['welcome-desc'];
  
  const alertText = document.querySelector('#alertBanner div');
  if (alertText) {
    // Keep the link
    const link = alertText.querySelector('a');
    alertText.childNodes[0].textContent = '📢 '; // Icon
    // Need to handle mixed content carefully or just update text node
    // Simple approach for hackathon:
    alertText.innerHTML = `<strong>${lang === 'en' ? 'Latest Update:' : 'Update:'}</strong> ${text['alert-text']} <a href="healthcare.html#vaccination">${link ? link.textContent : '→'}</a>`;
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
