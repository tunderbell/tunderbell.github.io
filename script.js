// Define text for each image
const messages = {
    "message1": [
        "From the very start you've been by my side",
        "Your presence has shaped me into the person I am today.",
        "I appreciate where you've taken me and am i'm looking forward to where my future with you will go."
    ],
    "message2": [
        "You are the heart of our family.",
        "Your kindness and strength amaze me every day.",
        "Love you so much, Mum!"
    ],
    "message3": [
        "Every hug, every word of wisdom - I cherish them all.",
        "You prayers have always brought peace to my heart.",
        "Alhamdulillah"
    ],
    "message4": [
        "I hope one day to make you proud",
        "Repay you for all the love you've given me.",
        "I hope to be half the person you are.",
        "Insha'Allah"
    ],
    "message5": [
        "You're actions are an inspiration to me",
        "Pursuing an education while raising a family is no easy task",
        "But you did it with grace and love.",
        "No words can express how proud I am to be your son.",
        
    ]
};

// Function to change text dynamically
function changeText(messageKey) {
    const textContainer = document.getElementById("dynamicText");

    // Fade out effect
    textContainer.style.opacity = "0";

    setTimeout(() => {
        // Update text
        textContainer.innerHTML = messages[messageKey].map(line => `<p>${line}</p>`).join("");

        // Fade in effect
        textContainer.style.opacity = "1";
    }, 300);
}
