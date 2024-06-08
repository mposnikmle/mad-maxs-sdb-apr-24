// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

const categories = document.querySelectorAll('[class^="cat-"]');
const questions = placeholderQuestions;

// ! for round 2
// const startingIndex = 5; // Starting index (zero-based) in placeholderQuestions

categories.forEach((category) => {
    category.addEventListener('click', () => {
        const className = category.classList[0]; // Get the first class name
        const match = className.match(/cat-(\d+)/); // Match the number in the class name
        if (match) {
            const categoryName = match[1]; // Extract the number
            const questionValue = category.textContent; // Get the question value from the category text
            const questionIndex = (parseInt(categoryName) - 1) * 10 + parseInt(questionValue) / 100 - 1;

            // ! For round 2
            // const questionIndex = startingIndex + parseInt(categoryName - 1) * 10 + ((parseInt(questionValue) / 100) - 1);

            const question = questions[questionIndex];
            
            
            
            console.log(question);

            
        }
    });
});




