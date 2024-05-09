const quote = [
    {
        key: 1,
        author: "Steve Jobs",
        quote: "The only way to do great work is to love what you do. ",
        image: "/stevejobs.jpeg"
    },
    {
        key: 2,
        author: "Winston Churchill",
        quote: "'Success is not final, failure is not fatal: It is the courage to continue that counts.'",
        image: "/Winston.jpeg"
    },
    {
        key: 3,
        author: "Steve Jobs",
        quote: "Your time is limited, don't waste it living someone else's life. ",
        image: "/stevejobs.jpeg"
    },
    {
        key: 4,
        author: "Nelson Mandela",
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall. ",
        image: "/Abraham.jpeg"
    },
    {
        key: 5,
        author: "Abraham Lincoln",
        quote: "In the end, it's not the years in your life that count. It's the life in your years. ",
        image: "/Abraham.jpeg"
    },
    {
        key: 6,
        author: "Franklin D. Roosevelt",
        quote: "The only limit to our realization of tomorrow will be our doubts of today. ",
        image: "/Franklin.jpeg"
    },
    {
        key: 7,
        author: "Eleanor Roosevelt",
        quote: "The future belongs to those who believe in the beauty of their dreams. ",
        image: "/Eleanor.jpeg"
    },
    {
        key: 8,
        author: "John Lennon",
        quote: "Life is what happens when you're busy making other plans. ",
        image: "/jonh.jpeg"
    },
    {
        key: 9,
        author: "Chinese Proverb",
        quote: "The best time to plant a tree was 20 years ago. The second best time is now. ",
        image: "/Winston.jpeg"
    },
    {
        key: 10,
        author: "Confucius",
        quote: "It does not matter how slowly you go as long as you do not stop. ",
        image: "/confuisis.jpeg"
    }
];


let quoteGen = () => {
    let randomIndex = Math.floor(Math.random() * quote.length);
    let randomQuote = quote[randomIndex];
    document.getElementById("quote").textContent = randomQuote.quote;
    document.getElementById("author").textContent = randomQuote.author;
    document.getElementById("quoteImg").setAttribute("src", "./Images/" + randomQuote.image)
}