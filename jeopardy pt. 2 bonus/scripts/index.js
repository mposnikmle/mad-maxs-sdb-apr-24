// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

const categories = document.querySelectorAll('[class^="cat-"]');
const questions = placeholderQuestions;

const modal = document.querySelector('.modal');
const modalQuestion = document.querySelector('.modal-question');
const closeButton = document.querySelector('.close-button');

// Function to show the modal
function showModal(question) {
    modalQuestion.textContent = question;
    modal.style.display = 'flex';
}

// Function to hide the modal
function hideModal() {
    modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    hideModal(); // Ensure modal is hidden when the page loads
});

categories.forEach((category) => {
    category.addEventListener('click', (event) => {
        event.preventDefault();
        const className = category.classList[0]; // Get the first class name
        const match = className.match(/cat-(\d+)/); // Match the number in the class name
        if (match) {
            const categoryName = match[1]; // Extract the number
            const questionValue = category.textContent; // Get the question value from the category text
            const questionIndex = (parseInt(categoryName) - 1) * 10 + parseInt(questionValue) / 100 - 1;

            const question = questions[questionIndex];
            console.log(question);

            showModal(question.question); 
        }
    });
});

// Hide the modal when clicking the close button
closeButton.addEventListener('click', hideModal);

// Hide the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        hideModal();
    }
});
