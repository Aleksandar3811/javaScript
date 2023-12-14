function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/messenger';

    const [nameInput, contentInput, sendButton, refreshButton] = document.getElementsByTagName('input');
    const messagesTextArea = document.getElementById('messages');

    sendButton.addEventListener('click', async () => {

        const messageFormat = {
            author: nameInput.value,
            content: contentInput.value,
        };

        let isValidMessage = nameInput.value !== '' && contentInput.value !== '';


        if (isValidMessage) {
            await fetch(baseURL, {
                method: 'POST',
                body: JSON.stringify(messageFormat)
            });
        }

        nameInput.value = '';
        contentInput.value = '';

    });

    refreshButton.addEventListener('click', async () => {

        const response = await fetch(baseURL);
        const messages =  await response.json();
        const messageToDisplay = [];

        for (const messageInfo of Object.values(messages)) {
            messageToDisplay.push(`${messageInfo.author}: ${messageInfo.content}`);
        }
        messagesTextArea.textContent = messageToDisplay.join('\n');



    });

}

attachEvents();