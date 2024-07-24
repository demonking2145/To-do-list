document.addEventListener('DOMContentLoaded', () => {
    // Load stored values and update the input fields and total count
    loadStoredValues();

    // Set up input event listener
    document.addEventListener('input', updateTotal);
    
    // Add event listener for the reset button
    document.getElementById('reset-data').addEventListener('click', resetData);


    document.getElementById('to-next-page').addEventListener('click', function() {
        window.location.href = 'to-do-list.html'; // Replace with the actual URL of the next page
    });
    
    document.getElementById('to-prev-page').addEventListener('click', function() {
        window.location.href = 'index.html'; // Replace with the actual URL of the first page
    });

    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const nextPageButton = document.getElementById('to-next-page');
    const prevPageButton = document.getElementById('to-prev-page');

    nextPageButton.addEventListener('click', function () {
        page1.classList.add('hidden');
        setTimeout(() => {
            page1.style.display = 'none';
            page2.style.display = 'block';
            page2.classList.remove('hidden');
        }, 1000); // 1-second delay for smooth transition
    });

    prevPageButton.addEventListener('click', function () {
        page2.classList.add('hidden');
        setTimeout(() => {
            page2.style.display = 'none';
            page1.style.display = 'block';
            page1.classList.remove('hidden');
        }, 1000); // 1-second delay for smooth transition
    });
    
});

function updateTotal() {
    const physicsCount = parseInt(document.getElementById('physics-count').value) || 0;
    const chemistryCount = parseInt(document.getElementById('chemistry-count').value) || 0;
    const mathsCount = parseInt(document.getElementById('maths-count').value) || 0;
    
    const totalCount = physicsCount + chemistryCount + mathsCount;
    document.getElementById('total-count').textContent = totalCount;
    
    // Store the values in localStorage
    localStorage.setItem('physicsCount', physicsCount);
    localStorage.setItem('chemistryCount', chemistryCount);
    localStorage.setItem('mathsCount', mathsCount);
}

function loadStoredValues() {
    // Retrieve values from localStorage or use 0 if they don't exist
    const physicsCount = parseInt(localStorage.getItem('physicsCount')) || 0;
    const chemistryCount = parseInt(localStorage.getItem('chemistryCount')) || 0;
    const mathsCount = parseInt(localStorage.getItem('mathsCount')) || 0;

    // Update input fields with stored values
    document.getElementById('physics-count').value = physicsCount;
    document.getElementById('chemistry-count').value = chemistryCount;
    document.getElementById('maths-count').value = mathsCount;

    // Update the total count display
    const totalCount = physicsCount + chemistryCount + mathsCount;
    document.getElementById('total-count').textContent = totalCount;
}

function resetData() {
    // Clear the counters
    document.getElementById('physics-count').value = 0;
    document.getElementById('chemistry-count').value = 0;
    document.getElementById('maths-count').value = 0;
    document.getElementById('total-count').textContent = 0;

    // Clear localStorage
    localStorage.removeItem('physicsCount');
    localStorage.removeItem('chemistryCount');
    localStorage.removeItem('mathsCount');
}
