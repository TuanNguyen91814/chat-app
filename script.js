document.querySelector('.chat-input button').addEventListener('click', function() {
    const input = document.querySelector('.chat-input input');
    const message = input.value.trim();
    
    if (message) {
        const chatMessages = document.querySelector('.chat-messages');
        const newMessage = document.createElement('div');
        newMessage.classList.add('message', 'sent');
        newMessage.innerHTML = `<p>${message}</p><span>${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>`;
        chatMessages.appendChild(newMessage);
        input.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});