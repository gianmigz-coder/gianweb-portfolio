function openTodo() {
    document.getElementById(
        "todoModal"
    ).style.display = "flex";
}


function openCalculator() {
    document.getElementById(
        "calculatorModal"
    ).style.display = "flex";
}


function closeModal(modalId) {
    document.getElementById(
        modalId
    ).style.display = "none";
}


/* TODO LIST */

function addTask() {

    const input =
        document.getElementById("todoInput");

    const task =
        input.value.trim();


    if (task === "") {

        alert("Please enter a task.");

        return;
    }


    const list =
        document.getElementById("todoList");


    const li =
        document.createElement("li");


    const taskText =
        document.createElement("span");

    taskText.textContent = task;


    const deleteButton =
        document.createElement("button");

    deleteButton.textContent = "Delete";


    deleteButton.addEventListener(
        "click",
        function () {

            li.remove();

        }
    );


    li.appendChild(taskText);

    li.appendChild(deleteButton);

    list.appendChild(li);


    input.value = "";

    input.focus();
}


/* PRESS ENTER TO ADD TASK */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const todoInput =
            document.getElementById("todoInput");


        todoInput.addEventListener(
            "keypress",
            function (event) {

                if (event.key === "Enter") {

                    addTask();

                }

            }
        );

    }
);


/* CALCULATOR */

function addToCalculator(value) {

    const display =
        document.getElementById(
            "calculatorDisplay"
        );


    display.value += value;
}


function clearCalculator() {

    document.getElementById(
        "calculatorDisplay"
    ).value = "";
}


function calculate() {

    const display =
        document.getElementById(
            "calculatorDisplay"
        );


    if (display.value === "") {
        return;
    }


    try {

        const result =
            Function(
                "return (" +
                display.value +
                ")"
            )();


        display.value = result;

    } catch (error) {

        display.value = "Error";

    }
}


/* CLOSE MODAL WHEN CLICKING OUTSIDE */

window.addEventListener(
    "click",
    function (event) {

        const todoModal =
            document.getElementById(
                "todoModal"
            );


        const calculatorModal =
            document.getElementById(
                "calculatorModal"
            );


        if (event.target === todoModal) {

            closeModal("todoModal");

        }


        if (event.target === calculatorModal) {

            closeModal("calculatorModal");

        }

    }
);