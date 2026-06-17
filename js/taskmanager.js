let tasks =
JSON.parse(
    localStorage.getItem(
        "tasks"
    )
) || [];

const taskBody =
document.getElementById(
    "taskBody"
);

// BUG FIX: renderTasks was never defined; bare `return` at top-level
// caused a syntax error. Wrapped logic inside the function.
function renderTasks() {

    taskBody.innerHTML = "";

    if (tasks.length === 0) {

        taskBody.innerHTML =

        `
        <tr>

            <td colspan="3">

                No task available.

                Click + to add task.

            </td>

        </tr>
        `;

        return;

    }

    tasks.forEach(task => {

        const row =
        document.createElement("tr");

        row.innerHTML =

        `
        <td>${task.title}</td>

        <td>${task.deadline}</td>

        <td>
            <span class="tag ${task.urgency.toLowerCase()}">
                ${task.urgency}
            </span>
        </td>
        `;

        taskBody.appendChild(row);

    });

}

renderTasks();

document
.getElementById("sortSelect")
.addEventListener(
    "change",
    function(){

        if(
            this.value === "deadline"
        ){

            tasks.sort(
                (a,b)=>

                new Date(a.deadline)
                -
                new Date(b.deadline)
            );

        }

        if(
            this.value === "urgency"
        ){

            const priority = {

                High:1,
                Medium:2,
                Low:3

            };

            tasks.sort(
                (a,b)=>

                priority[a.urgency]
                -
                priority[b.urgency]
            );

        }

        renderTasks();

    }
);
