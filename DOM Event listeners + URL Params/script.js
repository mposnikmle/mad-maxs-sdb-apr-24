// Define the DOM elements globally
const dogElement = document.getElementById('dog');
const catElements = document.getElementsByClassName('CAT');
const modal = document.getElementById('myModal');
const closeBtn = document.querySelector('.close');
const dynamicH1Container = document.getElementById('dynamicH1Container');

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Function to update the URL parameter
function updateCatClickCounter() {
    let url = new URL(window.location);
    let catClicks = url.searchParams.get("catClicks");
    catClicks = catClicks ? parseInt(catClicks) + 1 : 1;
    url.searchParams.set("catClicks", catClicks);
    window.history.pushState({}, '', url);

    // Create and append the new H1 element
    const newH1 = document.createElement('h1');
    newH1.textContent = `Cat clicked: ${catClicks}`;
    dynamicH1Container.innerHTML = ''; // Clear previous H1
    dynamicH1Container.appendChild(newH1);
}

// Event listener for when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add click event listener to each cat element
    Array.from(catElements).forEach(catElement => {
        catElement.addEventListener('click', updateCatClickCounter);
    });

    // Add click event listener to the dog element
    dogElement.addEventListener('click', openModal);

    // Add click event listener to the close button
    closeBtn.addEventListener('click', closeModal);

    // Add click event listener to the window to close the modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });

    // Display the initial cat click counter if it exists in the URL
    let url = new URL(window.location);
    let catClicks = url.searchParams.get("catClicks");
    if (catClicks) {
        const initialH1 = document.createElement('h1');
        initialH1.textContent = `Cat clicked: ${catClicks}`;
        dynamicH1Container.appendChild(initialH1);
    }
});
