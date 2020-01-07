const cards = [
    {
        setup: 'What is the object oriented way to get wealthy ?',
        punchline: 'Inheritance',
    },
    {
        setup: 'To understand what recursion is...',
        punchline: "You must first understand what recursion is",
    },
    {
        setup: 'What do you call a factory that sells passable products?',
        punchline: 'A satisfactory',
    },
];

let cards_call_count = 0;

export default {
    'get /dev/cards': function (req, res) {
        const responseObj = cards[cards_call_count % cards.length];
        cards_call_count += 1;
        setTimeout(() => {
            res.json(responseObj);
        }, 3000);
    },
};