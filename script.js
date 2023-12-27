document.getElementById('changeColor').addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
});

document.getElementById('changeSize').addEventListener('click', function() {
    document.getElementById('message').style.fontSize = getRandomSize() + 'px';
});

document.getElementById('showMessage').addEventListener('click', function() {
    document.getElementById('message').innerHTML = getRandomMessage();
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomSize() {
    return Math.floor(Math.random() * 50) + 16;
}

function getRandomMessage() {
    const messages = [
        'Ganda mo always',
        'Sana wag ka mag sawa saken',
        'Hindi ko alam gagawin ko pag nawala ka',
        'Wahhhhh ganda mo',
        'Can you be mine forever',
        'Im so lucky to have you',
        'I dont how to say this but i really love i fell inlove with you all the time',
        'Please dont be inlove with someone else',
        'Please sorry lalove',
    ];
    return messages[Math.floor(Math.random() * messages.length)];
}