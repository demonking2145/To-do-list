document.addEventListener('DOMContentLoaded', () => {



    document.getElementById('to-next-page').addEventListener('click', function() {
        window.location.href = 'to-do-list.html'; // Replace with the actual URL of the next page
    });
    
    document.getElementById('to-prev-page').addEventListener('click', function() {
        window.location.href = 'index.html'; // Replace with the actual URL of the first page
    });

    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const nextPageButton = document.getElementById('to-next-page');
    if (nextPageButton !== null) {
        nextPageButton.addEventListener('click', function() {
            window.location.href = 'to-do-list.html'; // Replace with the actual URL of the next page
        });
    }    const prevPageButton = document.getElementById('to-prev-page');
    if (prevPageButton !== null) {
        prevPageButton.addEventListener('click', function() {
            window.location.href = 'index.html'; // Replace with the actual URL of the first page
        });
    }


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







const inputBox = document.getElementById("input-box");
const listcontianer = document.getElementById("list-container");
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontianer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listcontianer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listcontianer.innerHTML);
}

function showTask(){
    listcontianer.innerHTML = localStorage.getItem("data");
}
showTask();







