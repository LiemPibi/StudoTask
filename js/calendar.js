const calendar =
document.getElementById(
    "calendar"
);

const monthYear =
document.getElementById(
    "monthYear"
);

const detailContent =
document.getElementById(
    "detailContent"
);

let currentDate =
new Date();

let tasks =
JSON.parse(
    localStorage.getItem(
        "tasks"
    )
) || [];

function renderCalendar(){

    calendar.innerHTML = "";

    const year =
    currentDate.getFullYear();

    const month =
    currentDate.getMonth();

    monthYear.innerText =

    currentDate.toLocaleString(
        "default",
        {
            month:"long",
            year:"numeric"
        }
    );

    const firstDay =
    new Date(
        year,
        month,
        1
    ).getDay();

    const lastDate =
    new Date(
        year,
        month + 1,
        0
    ).getDate();

    for(
        let i=0;
        i<firstDay;
        i++
    ){

        const empty =
        document.createElement(
            "div"
        );

        calendar.appendChild(
            empty
        );

    }

    for(
        let day=1;
        day<=lastDate;
        day++
    ){

        const cell =
        document.createElement(
            "div"
        );

        cell.className =
        "calendar-day";

        const dateString =

        `${year}-${
            String(
                month+1
            ).padStart(
                2,
                "0"
            )
        }-${
            String(
                day
            ).padStart(
                2,
                "0"
            )
        }`;

        let html =

        `<div class="day-number">
            ${day}
        </div>`;

        const taskList =
        tasks.filter(
            task =>
            task.deadline ===
            dateString
        );

        taskList.forEach(
            task=>{

                html +=

                `<div class="deadline-tag ${task.urgency.toLowerCase()}-color">
                ${task.title}
                </div>`;

            }
        );

        cell.innerHTML = html;

        cell.addEventListener(
            "click",
            ()=>{

                showDetails(
                    dateString
                );

            }
        );

        calendar.appendChild(
            cell
        );

    }

}

function showDetails(date){

    const dateTasks =
    tasks.filter(
        task =>
        task.deadline === date
    );

    if(
        dateTasks.length === 0
    ){

        detailContent.innerHTML =

        `
        <p>
            No task on ${date}
        </p>
        `;

        return;

    }

    let html = "";

    dateTasks.forEach(
        task=>{

            html +=

            `
            <div
            style="
            margin-bottom:15px">

            <h4>
            ${task.title}
            </h4>

            <p>
            ${task.description}
            </p>

            <p>
            Deadline:
            ${task.deadline}
            </p>

            <p>
            Urgency:
            ${task.urgency}
            </p>

            <a
            href="${task.link}"
            target="_blank">

            Open Link

            </a>

            </div>
            `;

        }
    );

    detailContent.innerHTML =
    html;

}

document
.getElementById(
    "prevMonth"
)
.addEventListener(
    "click",
    ()=>{

        currentDate.setMonth(
            currentDate.getMonth()
            -1
        );

        renderCalendar();

    }
);

document
.getElementById(
    "nextMonth"
)
.addEventListener(
    "click",
    ()=>{

        currentDate.setMonth(
            currentDate.getMonth()
            +1
        );

        renderCalendar();

    }
);

renderCalendar();
