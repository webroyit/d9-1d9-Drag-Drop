const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const tallestAnimals = [
    "Giraffe",
    "African Elephant",
    "SIBERIAN TIGER",
    "Liger",
    "Polar Bear",
    "Asian Elephant",
    "Bengal Tiger",
    "Moose",
    "Grizzly Bear",
    "Ostrich",
];

// Store listitems
const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
    [...tallestAnimals]
        .map(a => ({ value: a, sort: Math.random() }))      // To randomize the list items
        .sort((a, b) => a.sort - b.sort)            // Sort the value
        .map(a => a.value)              // Convert object back to array
        .forEach((animal, index) => {
            // Create a new list item element
            const listItem = document.createElement('li');

            // Keep track of the listItem
            listItem.setAttribute('data-index', index);

            // 'draggable' attribute makes the list item draggable
            listItem.innerHTML = `
                <span class="number">${index + 1}</span>
                <div class="draggable" draggable="true">
                    <p class="person-name">${animal}</p>
                    <i class="fas fa-list"></i>
                </div>
            `;

            listItems.push(listItems);

            draggable_list.appendChild(listItem);
        });
}