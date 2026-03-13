// State untuk chat
let chatMessages = [
    { text: "Halo! Saya AI Legal Assistant dari LegalinBossID. Ada yang bisa saya bantu seputar legalitas dan perizinan bisnis Anda hari ini? ⚖️", isUser: false }
];
let chatIsLoading = false;

// Fungsi untuk mendapatkan respons AI
async function getAIResponse(userMessage) {
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    role: 'user',
                    parts: [{
                        text: websiteData.getSystemPrompt() + "\n\nPertanyaan dari pengunjung website: " + userMessage
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 800,
                }
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('Error:', error);
        return "Maaf, sedang gangguan teknis. Untuk bantuan cepat, silakan hubungi kami langsung via WhatsApp di 0877 1537 3601 atau telepon di nomor yang sama. Terima kasih! 🙏";
    }
}

// Render pesan chat
function renderChatMessages() {
    const chatMessagesDiv = document.getElementById('chatMessages');
    if (!chatMessagesDiv) return;

    chatMessagesDiv.innerHTML = '';
    chatMessages.forEach(msg => {
        const wrapper = document.createElement('div');
        wrapper.className = 'message-wrapper';
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${msg.isUser ? 'user-message' : 'bot-message'}`;
        messageDiv.textContent = msg.text;
        
        const timeDiv = document.createElement('div');
        timeDiv.className = 'message-time';
        timeDiv.textContent = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
        
        wrapper.appendChild(messageDiv);
        wrapper.appendChild(timeDiv);
        chatMessagesDiv.appendChild(wrapper);
    });
    
    chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight;
}

// Tampilkan typing indicator
function showTypingIndicator() {
    const chatMessagesDiv = document.getElementById('chatMessages');
    if (!chatMessagesDiv) return;

    const indicator = document.createElement('div');
    indicator.className = 'typing-indicator';
    indicator.id = 'typingIndicator';
    indicator.innerHTML = '<span></span><span></span><span></span>';
    chatMessagesDiv.appendChild(indicator);
    chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight;
}

// Hapus typing indicator
function removeTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) indicator.remove();
}

// Kirim pesan
async function sendMessage(message) {
    if (!message.trim() || chatIsLoading) return;

    // Tambah pesan user
    chatMessages.push({ text: message, isUser: true });
    renderChatMessages();
    
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendButton');
    
    if (chatInput) chatInput.value = '';
    chatIsLoading = true;
    if (chatInput) chatInput.disabled = true;
    if (sendButton) sendButton.disabled = true;

    // Tampilkan typing indicator
    showTypingIndicator();

    // Dapatkan respons AI
    const aiResponse = await getAIResponse(message);
    
    // Hapus typing indicator dan tambah respons bot
    removeTypingIndicator();
    chatMessages.push({ text: aiResponse, isUser: false });
    renderChatMessages();
    
    chatIsLoading = false;
    if (chatInput) {
        chatInput.disabled = false;
        chatInput.focus();
    }
    if (sendButton) sendButton.disabled = false;
}

// Render suggestion chips
function renderSuggestions() {
    const suggestionsDiv = document.getElementById('chatSuggestions');
    if (!suggestionsDiv) return;

    suggestionsDiv.innerHTML = '';
    websiteData.chatSuggestions.forEach(suggestion => {
        const chip = document.createElement('span');
        chip.className = 'suggestion-chip';
        chip.textContent = suggestion;
        chip.addEventListener('click', () => {
            sendMessage(suggestion);
        });
        suggestionsDiv.appendChild(chip);
    });
}

// Inisialisasi chat
function initChat() {
    const chatButton = document.getElementById('chatButton');
    const chatBox = document.getElementById('chatBox');
    const closeChat = document.getElementById('closeChat');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const notificationBadge = document.querySelector('.notification-badge');

    if (!chatButton || !chatBox || !closeChat || !chatForm) return;

    // Event listeners
    chatButton.addEventListener('click', () => {
        chatBox.style.display = 'flex';
        chatButton.style.display = 'none';
        if (notificationBadge) notificationBadge.style.display = 'none';
        renderChatMessages();
        renderSuggestions();
        setTimeout(() => chatInput?.focus(), 300);
    });

    closeChat.addEventListener('click', () => {
        chatBox.style.display = 'none';
        chatButton.style.display = 'flex';
    });

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (chatInput) sendMessage(chatInput.value);
    });

    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendMessage(chatInput.value);
            }
        });
    }

    // Render pesan awal
    renderChatMessages();
}