document.getElementById('send-btn').addEventListener('click', sendMessage);

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput === '') return;

    displayMessage(userInput, 'user');

    setTimeout(() => {
        const botResponse = generateBotResponse(userInput);
        displayMessage(botResponse, 'bot');
    }, 500);

    document.getElementById('user-input').value = '';
}

function displayMessage(message, sender) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message', sender);
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageContainer.appendChild(messageElement);

    const chatBox = document.getElementById('chat-box');
    chatBox.appendChild(messageContainer);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes('hello')) {
        return 'Hi there! are you intrested in buying this product';
    } else if (lowerCaseMessage.includes('yes')) {
        return 'okay thanks for approaching.';
    } else if (lowerCaseMessage.includes('bye')) {
        return 'Goodbye! Have a nice day!';
    } else {
        return 'I am sorry, I don’t understand that.';
    }
}