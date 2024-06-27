const predefinedQuotes = [    
    { "quote": "The only way to do great work is to love what you do.", "author": "Steve Jobs" },
    { "quote": "In three words I can sum up everything I've learned about life: it goes on.", "author": "Robert Frost" },
    { "quote": "Life is what happens when you're busy making other plans.", "author": "John Lennon" },
    { "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.", "author": "Winston Churchill" },
    { "quote": "You miss 100% of the shots you don't take.", "author": "Wayne Gretzky" },
    { "quote": "The only true wisdom is in knowing you know nothing.", "author": "Socrates" },
    { "quote": "It is better to conquer yourself than to win a thousand battles. Then the victory is yours.", "author": "Buddha" },
    { "quote": "Education is the most powerful weapon which you can use to change the world.", "author": "Nelson Mandela" },
    { "quote": "Science is the poetry of reality.", "author": "Richard Dawkins" },
    { "quote": "The important thing is to never stop questioning.", "author": "Albert Einstein" },
    { "quote": "The best way to predict the future is to invent it.", "author": "Alan Kay" },
    { "quote": "Life isn't about finding yourself. Life is about creating yourself.", "author": "George Bernard Shaw" },
    { "quote": "The future belongs to those who believe in the beauty of their dreams.", "author": "Eleanor Roosevelt" },
    { "quote": "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.", "author": "Harriet Tubman" },
    { "quote": "We must accept finite disappointment, but never lose infinite hope.", "author": "Martin Luther King Jr." },
    { "quote": "Believe you can and you're halfway there.", "author": "Theodore Roosevelt" },
    { "quote": "I have not failed. I've just found 10,000 ways that won't work.", "author": "Thomas Edison" },
    { "quote": "The journey of a thousand miles begins with one step.", "author": "Lao Tzu" },
    { "quote": "Strive not to be a success, but rather to be of value.", "author": "Albert Einstein" },
    { "quote": "If you want to lift yourself up, lift up someone else.", "author": "Booker T. Washington" },
    { "quote": "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", "author": "Helen Keller" },
    { "quote": "Don't watch the clock; do what it does. Keep going.", "author": "Sam Levenson" },
    { "quote": "It is never too late to be what you might have been.", "author": "George Eliot" },
    { "quote": "You are never too old to set another goal or to dream a new dream.", "author": "C.S. Lewis" },
    { "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", "author": "Albert Schweitzer" },
    { "quote": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", "author": "Thomas A. Edison" },
    { "quote": "Start where you are. Use what you have. Do what you can.", "author": "Arthur Ashe" },
    { "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us.", "author": "Ralph Waldo Emerson" },
    { "quote": "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.", "author": "William James" },
    { "quote": "The only person you are destined to become is the person you decide to be.", "author": "Ralph Waldo Emerson" },
    { "quote": "Success usually comes to those who are too busy to be looking for it.", "author": "Henry David Thoreau" },
    { "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.", "author": "Nelson Mandela" },
    { "quote": "In the end, it's not the years in your life that count. It's the life in your years.", "author": "Abraham Lincoln" },
    { "quote": "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.", "author": "Helen Keller" },
    { "quote": "The only way to achieve the impossible is to believe it is possible.", "author": "Charles Kingsleigh" },
        {
            "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            "author": "Winston Churchill"
        },
        {
            "quote": "You miss 100% of the shots you don't take.",
            "author": "Wayne Gretzky"
        },
        {
            "quote": "The only true wisdom is in knowing you know nothing.",
            "author": "Socrates"
        },
        {
            "quote": "It is better to conquer yourself than to win a thousand battles. Then the victory is yours.",
            "author": "Buddha"
        },
        {
            "quote": "Education is the most powerful weapon which you can use to change the world.",
            "author": "Nelson Mandela"
        },
        {
            "quote": "Science is the poetry of reality.",
            "author": "Richard Dawkins"
        },
        {
            "quote": "The important thing is to never stop questioning.",
            "author": "Albert Einstein"
        },
        {
            "quote": "The best way to predict the future is to invent it.",
            "author": "Alan Kay"
        },
        {
            "quote": "Life isn't about finding yourself. Life is about creating yourself.",
            "author": "George Bernard Shaw"
        },
        {
            "quote": "The future belongs to those who believe in the beauty of their dreams.",
            "author": "Eleanor Roosevelt"
        },
        {
            "quote": "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",
            "author": "Harriet Tubman"
        },
        {
            "quote": "We must accept finite disappointment, but never lose infinite hope.",
            "author": "Martin Luther King Jr."
        },
        {
            "quote": "Believe you can and you're halfway there.",
            "author": "Theodore Roosevelt"
        },
        {
            "quote": "I have not failed. I've just found 10,000 ways that won't work.",
            "author": "Thomas Edison"
        },
        {
            "quote": "The journey of a thousand miles begins with one step.",
            "author": "Lao Tzu"
        },
        {
            "quote": "Strive not to be a success, but rather to be of value.",
            "author": "Albert Einstein"
        },
        {
            "quote": "The mind is everything. What you think you become.",
            "author": "Buddha"
        },
        {
            "quote": "A person who never made a mistake never tried anything new.",
            "author": "Albert Einstein"
        },
        {
            "quote": "It does not matter how slowly you go as long as you do not stop.",
            "author": "Confucius"
        },
        {
            "quote": "The best preparation for tomorrow is doing your best today.",
            "author": "H. Jackson Brown Jr."
        },
        {
            "quote": "Happiness is not something ready made. It comes from your own actions.",
            "author": "Dalai Lama"
        },
        {
            "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
            "author": "Franklin D. Roosevelt"
        },
        {
            "quote": "It always seems impossible until it's done.",
            "author": "Nelson Mandela"
        },
        {
            "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
            "author": "Mahatma Gandhi"
        },
        {
            "quote": "Do not go where the path may lead, go instead where there is no path and leave a trail.",
            "author": "Ralph Waldo Emerson"
        },
        {
            "quote": "Change your thoughts and you change your world.",
            "author": "Norman Vincent Peale"
        },
        {
            "quote": "If you want to lift yourself up, lift up someone else.",
            "author": "Booker T. Washington"
        },
        {
            "quote": "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
            "author": "Helen Keller"
        },
        {
            "quote": "Don't watch the clock; do what it does. Keep going.",
            "author": "Sam Levenson"
        },
        {
            "quote": "It is never too late to be what you might have been.",
            "author": "George Eliot"
        },
        {
            "quote": "You are never too old to set another goal or to dream a new dream.",
            "author": "C.S. Lewis"
        },
        {
            "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
            "author": "Albert Schweitzer"
        },
        {
            "quote": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
            "author": "Thomas A. Edison"
        },
        {
            "quote": "Start where you are. Use what you have. Do what you can.",
            "author": "Arthur Ashe"
        },
        {
            "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
            "author": "Ralph Waldo Emerson"
        },
        {
            "quote": "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.",
            "author": "William James"
        },
        {
            "quote": "The only person you are destined to become is the person you decide to be.",
            "author": "Ralph Waldo Emerson"
        },
        {
            "quote": "Success usually comes to those who are too busy to be looking for it.",
            "author": "Henry David Thoreau"
        },
        {
            "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            "author": "Nelson Mandela"
        },
        {
            "quote": "In the end, it's not the years in your life that count. It's the life in your years.",
            "author": "Abraham Lincoln"
        },
        {
            "quote": "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
            "author": "Helen Keller"
        },
        {
            "quote": "The only way to achieve the impossible is to believe it is possible.",
            "author": "Charles Kingsleigh"
        },
        {
            "quote": "Keep your face always toward the sunshine - and shadows will fall behind you.",
            "author": "Walt Whitman"
        },
        {
            "quote": "Success is not how high you have climbed, but how you make a positive difference to the world.",
            "author": "Roy T. Bennett"
        },
        {
            "quote": "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.",
            "author": "Roy T. Bennett"
        },
        {
            "quote": "Life is what happens when you're busy making other plans.",
            "author": "John Lennon"
        },
        {
            "quote": "The only way to do great work is to love what you do.",
            "author": "Steve Jobs"
        },
        {
            "quote": "You don’t have to be great to start, but you have to start to be great.",
            "author": "Zig Ziglar"
        },
        {
            "quote": "Dream big. Start small. Act now.",
            "author": "Robin Sharma"
        },
        {
            "quote": "Don’t wait. The time will never be just right.",
            "author": "Napoleon Hill"
        },
        {
            "quote": "Your limitation—it's only your imagination.",
            "author": "Unknown"
        },
        {
            "quote": "The future depends on what you do today.",
            "author": "Mahatma Gandhi"
        },
        {
            "quote": "It’s not whether you get knocked down, it’s whether you get up.",
            "author": "Vince Lombardi"
        },
        {
            "quote": "Action is the foundational key to all success.",
            "author": "Pablo Picasso"
        },
        {
            "quote": "You must be the change you wish to see in the world.",
            "author": "Mahatma Gandhi"
        },
        {
            "quote": "Everything you’ve ever wanted is on the other side of fear.",
            "author": "George Addair"
        },
        {
            "quote": "Life is 10% what happens to us and 90% how we react to it.",
            "author": "Charles R. Swindoll"
        },
        {
            "quote": "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
            "author": "Joshua J. Marine"
        },
        {
            "quote": "The harder you work for something, the greater you’ll feel when you achieve it.",
            "author": "Unknown"
        },
        {
            "quote": "The secret of getting ahead is getting started.",
            "author": "Mark Twain"
        },
        {
            "quote": "Don’t let yesterday take up too much of today."},
                {
                    "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
                    "author": "Winston Churchill"
                },
                {
                    "quote": "You miss 100% of the shots you don't take.",
                    "author": "Wayne Gretzky"
                },
                {
                    "quote": "The only true wisdom is in knowing you know nothing.",
                    "author": "Socrates"
                },
                {
                    "quote": "It is better to conquer yourself than to win a thousand battles. Then the victory is yours.",
                    "author": "Buddha"
                },
                {
                    "quote": "Education is the most powerful weapon which you can use to change the world.",
                    "author": "Nelson Mandela"
                },
                {
                    "quote": "Science is the poetry of reality.",
                    "author": "Richard Dawkins"
                },
                {
                    "quote": "The important thing is to never stop questioning.",
                    "author": "Albert Einstein"
                },
                {
                    "quote": "The best way to predict the future is to invent it.",
                    "author": "Alan Kay"
                },
                {
                    "quote": "Life isn't about finding yourself. Life is about creating yourself.",
                    "author": "George Bernard Shaw"
                },
                {
                    "quote": "The future belongs to those who believe in the beauty of their dreams.",
                    "author": "Eleanor Roosevelt"
                },
                {
                    "quote": "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",
                    "author": "Harriet Tubman"
                },
                {
                    "quote": "We must accept finite disappointment, but never lose infinite hope.",
                    "author": "Martin Luther King Jr."
                },
                {
                    "quote": "Believe you can and you're halfway there.",
                    "author": "Theodore Roosevelt"
                },
                {
                    "quote": "I have not failed. I've just found 10,000 ways that won't work.",
                    "author": "Thomas Edison"
                },
                {
                    "quote": "The journey of a thousand miles begins with one step.",
                    "author": "Lao Tzu"
                },
                {
                    "quote": "Strive not to be a success, but rather to be of value.",
                    "author": "Albert Einstein"
                },
                {
                    "quote": "The mind is everything. What you think you become.",
                    "author": "Buddha"
                },
                {
                    "quote": "A person who never made a mistake never tried anything new.",
                    "author": "Albert Einstein"
                },
                {
                    "quote": "It does not matter how slowly you go as long as you do not stop.",
                    "author": "Confucius"
                },
                {
                    "quote": "The best preparation for tomorrow is doing your best today.",
                    "author": "H. Jackson Brown Jr."
                },
                {
                    "quote": "Happiness is not something ready made. It comes from your own actions.",
                    "author": "Dalai Lama"
                },
                {
                    "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
                    "author": "Franklin D. Roosevelt"
                },
                {
                    "quote": "It always seems impossible until it's done.",
                    "author": "Nelson Mandela"
                },
                {
                    "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
                    "author": "Mahatma Gandhi"
                },
                {
                    "quote": "Do not go where the path may lead, go instead where there is no path and leave a trail.",
                    "author": "Ralph Waldo Emerson"
                },
                {
                    "quote": "Change your thoughts and you change your world.",
                    "author": "Norman Vincent Peale"
                },
                {
                    "quote": "If you want to lift yourself up, lift up someone else.",
                    "author": "Booker T. Washington"
                },
                {
                    "quote": "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
                    "author": "Helen Keller"
                },
                {
                    "quote": "Don't watch the clock; do what it does. Keep going.",
                    "author": "Sam Levenson"
                },
                {
                    "quote": "It is never too late to be what you might have been.",
                    "author": "George Eliot"
                },
                {
                    "quote": "You are never too old to set another goal or to dream a new dream.",
                    "author": "C.S. Lewis"
                },
                {
                    "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
                    "author": "Albert Schweitzer"
                },
                {
                    "quote": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
                    "author": "Thomas A. Edison"
                },
                {
                    "quote": "Start where you are. Use what you have. Do what you can.",
                    "author": "Arthur Ashe"
                },
                {
                    "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
                    "author": "Ralph Waldo Emerson"
                },
                {
                    "quote": "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.",
                    "author": "William James"
                },
                {
                    "quote": "The only person you are destined to become is the person you decide to be.",
                    "author": "Ralph Waldo Emerson"
                },
                {
                    "quote": "Success usually comes to those who are too busy to be looking for it.",
                    "author": "Henry David Thoreau"
                },
                {
                    "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
                    "author": "Nelson Mandela"
                },
                {
                    "quote": "In the end, it's not the years in your life that count. It's the life in your years.",
                    "author": "Abraham Lincoln"
                },
                {
                    "quote": "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
                    "author": "Helen Keller"
                },
                {
                    "quote": "The only way to achieve the impossible is to believe it is possible.",
                    "author": "Charles Kingsleigh"
                },
                {
                    "quote": "Keep your face always toward the sunshine - and shadows will fall behind you.",
                    "author": "Walt Whitman"
                },
                {
                    "quote": "Success is not how high you have climbed, but how you make a positive difference to the world.",
                    "author": "Roy T. Bennett"
                },
                {
                    "quote": "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.",
                    "author": "Roy T. Bennett"
                },
                {
                    "quote": "Life is what happens when you're busy making other plans.",
                    "author": "John Lennon"
                },
                {
                    "quote": "The only way to do great work is to love what you do.",
                    "author": "Steve Jobs"
                },
                {
                    "quote": "You don’t have to be great to start, but you have to start to be great.",
                    "author": "Zig Ziglar"
                },
                {
                    "quote": "Dream big. Start small. Act now.",
                    "author": "Robin Sharma"
                },
                {
                    "quote": "Don’t wait. The time will never be just right.",
                    "author": "Napoleon Hill"
                },
                {
                    "quote": "Your limitation—it's only your imagination.",
                    "author": "Unknown"
                },
                {
                    "quote": "The future depends on what you do today.",
                    "author": "Mahatma Gandhi"
                },
                {
                    "quote": "It’s not whether you get knocked down, it’s whether you get up.",
                    "author": "Vince Lombardi"
                },
                {
                    "quote": "Action is the foundational key to all success.",
                    "author": "Pablo Picasso"
                },
                {
                    "quote": "You must be the change you wish to see in the world.",
                    "author": "Mahatma Gandhi"
                },
                {
                    "quote": "Everything you’ve ever wanted is on the other side of fear.",
                    "author": "George Addair"
                },
                {
                    "quote": "Life is 10% what happens to us and 90% how we react to it.",
                    "author": "Charles R. Swindoll"
                },
                {
                    "quote": "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
                    "author": "Joshua J. Marine"
                },
                {
                    "quote": "The harder you work for something, the greater you’ll feel when you achieve it.",
                    "author": "Unknown"
                },
                {
                    "quote": "The secret of getting ahead is getting started.",
                    "author": "Mark Twain"
                },
];


// Function to get quotes from local storage
function getLocalQuotes() {
    const quotes = localStorage.getItem('quotes');
    return JSON.parse(quotes); // Parse JSON string back to array of quotes
}

// Store predefinedQuotes in local storage
function storeQuotes() {
    localStorage.setItem('quotes', JSON.stringify(predefinedQuotes));
}

// Example usage: Display a random quote from local storage
function displayRandomQuote() {
    const quotes = getLocalQuotes();
    if (quotes && quotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        const quoteElement = document.getElementById('quote');
        quoteElement.textContent = `"${randomQuote.quote}" - ${randomQuote.author}`;
    } else {
        console.log('No quotes available in local storage.');
    }
}

// Store quotes in local storage when the page loads
window.onload = storeQuotes;

// Event listener for button click to display a random quote
const quoteButton = document.getElementById('quoteButton');
quoteButton.addEventListener('click', displayRandomQuote);

                        