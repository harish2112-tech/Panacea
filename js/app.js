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

function toggleLanguageModal() {
  const modal = document.getElementById('languageModal');
  if (modal) {
    modal.classList.toggle('active');
  }
}

function saveLanguage() {
  const selected = document.querySelector('input[name="language"]:checked');
  if (selected) {
    localStorage.setItem('language', selected.value);
    alert('Language preference saved! (Demo - full translation not implemented)');
    toggleLanguageModal();
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
