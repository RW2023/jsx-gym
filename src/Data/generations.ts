// Updated Generations Data with Variety
const generations = {
    silent: {
        years: "1928-1945",
        description: "The Silent Generation grew up during the Great Depression and World War II.",
        detailedDescription:
            "This generation is known for their strong work ethic, discipline, and traditional values. They witnessed major world events like the Great Depression and WWII, which deeply influenced their outlook on life. Many became leaders in business and government in the latter half of the 20th century.",
        definingItems: [
            { type: "Song", value: "Somewhere Over the Rainbow by Judy Garland" },
            { type: "Movie", value: "Gone with the Wind (1939)" },
            { type: "Event", value: "The end of World War II (1945)" }
        ],
        image: "/generations/silent.jpg",
    },
    babyBoomers: {
        years: "1946-1964",
        description: "Baby Boomers were born post-World War II during a time of economic prosperity.",
        detailedDescription:
            "Baby Boomers played a key role in shaping modern culture. They experienced the civil rights movement, the Vietnam War protests, and the rise of rock 'n' roll. As a generation, they value personal growth and were pioneers of social change.",
        definingItems: [
            { type: "Song", value: "Hey Jude by The Beatles" },
            { type: "Movie", value: "Psycho (1960)" },
            { type: "Event", value: "The Moon Landing (1969)" }
        ],
        image: "/generations/babyBoomers.jpg",
    },
    generationX: {
        years: "1965-1980",
        description: "Generation X grew up during the rise of personal computers.",
        detailedDescription:
            "Often referred to as the 'Latchkey Generation,' Generation X is known for their independence and entrepreneurial spirit. They were the first generation to grow up with video games, cable TV, and personal computers, marking the beginning of the digital age.",
        definingItems: [
            { type: "Song", value: "Smells Like Teen Spirit by Nirvana" },
            { type: "Movie", value: "Star Wars: A New Hope (1977)" },
            { type: "Event", value: "The Fall of the Berlin Wall (1989)" }
        ],
        image: "/generations/generationX.webp",
    },
    millennials: {
        years: "1981-1996",
        description: "Millennials came of age during the internet boom and the rise of social media.",
        detailedDescription:
            "Millennials are highly tech-savvy and value experiences over material possessions. They came of age during the dot-com boom, 9/11, and the 2008 financial crisis, shaping their adaptability and focus on work-life balance. They are also known for their environmental and social awareness.",
        definingItems: [
            { type: "Song", value: "Lose Yourself by Eminem" },
            { type: "Movie", value: "The Matrix (1999)" },
            { type: "Event", value: "9/11 Terrorist Attacks (2001)" }
        ],
        image: "/generations/millennials.webp",
    },
    generationZ: {
        years: "1997-2012",
        description: "Generation Z is the first generation to grow up with smartphones.",
        detailedDescription:
            "This generation is marked by their digital-native status. They value diversity and inclusivity, and they are highly vocal about social and political issues. Their strong connection to technology influences their communication and work preferences.",
        definingItems: [
            { type: "Song", value: "Old Town Road by Lil Nas X" },
            { type: "Movie", value: "Avengers: Endgame (2019)" },
            { type: "Event", value: "The COVID-19 Pandemic (2020)" }
        ],
        image: "/generations/generationZ.webp",
    },
    generationAlpha: {
        years: "2013-Present",
        description: "Generation Alpha is growing up in a world dominated by digital technologies.",
        detailedDescription:
            "Generation Alpha is still in its formative years, but they are already showing a deep connection to AI, automation, and cutting-edge technology. They are expected to be the most educated generation, with a strong focus on creativity and innovation.",
        definingItems: [
            { type: "Song", value: "Drivers License by Olivia Rodrigo" },
            { type: "Movie", value: "Encanto (2021)" },
            { type: "Event", value: "The rise of AI in daily life" }
        ],
        image: "/generations/generationAlpha.jpg",
    },
};

export default generations;
