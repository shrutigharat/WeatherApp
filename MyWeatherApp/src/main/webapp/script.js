document.addEventListener("DOMContentLoaded", function() {
    const text = "Welcome to the Weather App";
    const typingTextElement = document.getElementById("typingText");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingTextElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 150); // Adjust the typing speed here (150 ms per character)
        }
    }

    type();
});
