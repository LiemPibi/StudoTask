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

if(tasks.length === 0){

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