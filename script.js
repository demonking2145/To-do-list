<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task List</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.14.0/Sortable.min.js"></script>
</head>
<body>
    <div class="container">
        <input type="text" id="input-box" placeholder="Add a task">
        <ul id="list-container"></ul>
    </div>

    <script>
        const inputBox = document.getElementById("input-box");
        const listContainer = document.getElementById("list-container");

        function addTask() {
            if (inputBox.value === '') {
                alert("You must write something!");
            } else {
                let li = document.createElement("li");
                li.innerHTML = inputBox.value;
                listContainer.appendChild(li);
                let span = document.createElement("span");
                span.innerHTML = "\u00d7";
                li.appendChild(span);
            }
            inputBox.value = "";
            saveData();
        }

        inputBox.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                addTask();
            }
        });

        listContainer.addEventListener("click", function(e) {
            if (e.target.tagName === "LI") {
                e.target.classList.toggle("checked");
                saveData();
            } else if (e.target.tagName === "SPAN") {
                e.target.parentElement.remove();
                saveData();
            }
        }, false);

        function saveData() {
            localStorage.setItem("data", listContainer.innerHTML);
        }

        function showTask() {
            listContainer.innerHTML = localStorage.getItem("data");
        }
        
        // Initialize sortable list
        new Sortable(listContainer, {
            animation: 150,
            onEnd: function() {
                saveData();
            }
        });

        showTask();
    </script>
</body>
</html>
