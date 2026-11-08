// Масив об'єктів класу Faculty
let faculties = new Array();

// Резервні дані JSON (використовуються, якщо сторінку відкрито локально через file:// або немає доступу до мережі)
const fallbackFacultiesData = [
    {
        "name": "Факультет природничих наук та математики",
        "type": "загальний",
        "dean": "проф. Ковальчук О. М.",
        "departments": 5
    },
    {
        "name": "Факультет інформаційних технологій та комп'ютерної інженерії",
        "type": "технічний",
        "dean": "проф. Бондаренко І. В.",
        "departments": 7
    },
    {
        "name": "Факультет філології та іноземних мов",
        "type": "гуманітарний",
        "dean": "доц. Мельник С. П.",
        "departments": 6
    },
    {
        "name": "Загальнонауковий факультет фундаментальної підготовки",
        "type": "загальний",
        "dean": "проф. Савченко В. Г.",
        "departments": 4
    },
    {
        "name": "Факультет автоматизації, електроніки та телекомунікацій",
        "type": "технічний",
        "dean": "проф. Кравченко А. Д.",
        "departments": 6
    },
    {
        "name": "Історико-філософський факультет",
        "type": "гуманітарний",
        "dean": "проф. Ткаченко Н. О.",
        "departments": 5
    },
    {
        "name": "Факультет фізичного виховання та здорового способу життя",
        "type": "загальний",
        "dean": "доц. Романенко М. С.",
        "departments": 3
    },
    {
        "name": "Факультет машинобудування та робототехніки",
        "type": "технічний",
        "dean": "проф. Лисенко Д. К.",
        "departments": 6
    },
    {
        "name": "Факультет журналістики та соціальних комунікацій",
        "type": "гуманітарний",
        "dean": "доц. Шевченко О. В.",
        "departments": 4
    },
    {
        "name": "Факультет базової та міждисциплінарної освіти",
        "type": "загальний",
        "dean": "доц. Павленко Ю. І.",
        "departments": 4
    },
    {
        "name": "Факультет кібербезпеки та програмної інженерії",
        "type": "технічний",
        "dean": "проф. Гаврилюк Т. М.",
        "departments": 5
    },
    {
        "name": "Факультет психології, педагогіки та соціології",
        "type": "гуманітарний",
        "dean": "проф. Захарченко Л. П.",
        "departments": 5
    }
];

// Читання інформації з хмарного сховища (jsonbin.io або локального JSON-файлу)
async function populate() {
    // URL хмарного сховища jsonbin.io (можна підставити власний ID біну з jsonbin.io)
    const requestURL = "faculties.json";
    try {
        const request = new Request(requestURL);
        const response = await fetch(request);
        if (response.ok) {
            const data = await response.json();
            // Підтримка формату jsonbin.io (data.record) та звичайного JSON-масиву (data)
            const records = data.record ? data.record : data;
            newFaculty(records);
            showHeader();
            showFaculties();
        } else {
            alert("Помилка HTTP: " + response.status);
        }
    } catch (error) {
        // Якщо сторінку запущено локально без веб-сервера (протокол file://), використовуємо резервний JSON
        newFaculty(fallbackFacultiesData);
        showHeader();
        showFaculties();
    }
}

// Створення масиву об'єктів базового класу Faculty
function newFaculty(obj) {
    let list = obj;
    for (let f of list) {
        let item = new Faculty(f.name, f.type, f.dean, f.departments);
        faculties.push(item);
    }
}

// Виведення заголовка списку
function showHeader() {
    const headerContainer = document.getElementById("dynamic-header");
    const myH1 = document.createElement("h1");
    myH1.innerText = "Перелік факультетів університету за напрямами";
    headerContainer.appendChild(myH1);
}

// Виведення даних з поділом на три групи: загальні, технічні та гуманітарні
function showFaculties() {
    const main = document.querySelector("article");

    const divGeneral = document.createElement("div");
    divGeneral.className = "group-box general";

    const divTechnical = document.createElement("div");
    divTechnical.className = "group-box technical";

    const divHumanitarian = document.createElement("div");
    divHumanitarian.className = "group-box humanitarian";

    const myH2General = document.createElement("h2");
    myH2General.textContent = "Загальні факультети";

    const myH2Technical = document.createElement("h2");
    myH2Technical.textContent = "Технічні факультети";

    const myH2Humanitarian = document.createElement("h2");
    myH2Humanitarian.textContent = "Гуманітарні факультети";

    const listGeneral = document.createElement("ul");
    const listTechnical = document.createElement("ul");
    const listHumanitarian = document.createElement("ul");

    for (let f of faculties) {
        const listItem = document.createElement("li");

        const nameSpan = document.createElement("span");
        nameSpan.className = "faculty-name";
        nameSpan.textContent = f.name;

        const metaSpan = document.createElement("span");
        metaSpan.className = "faculty-meta";
        metaSpan.textContent = f.getInfo();

        listItem.appendChild(nameSpan);
        listItem.appendChild(metaSpan);

        if (f.type === "загальний") {
            listGeneral.appendChild(listItem);
        } else if (f.type === "технічний") {
            listTechnical.appendChild(listItem);
        } else {
            listHumanitarian.appendChild(listItem);
        }
    }

    divGeneral.appendChild(myH2General);
    divGeneral.appendChild(listGeneral);

    divTechnical.appendChild(myH2Technical);
    divTechnical.appendChild(listTechnical);

    divHumanitarian.appendChild(myH2Humanitarian);
    divHumanitarian.appendChild(listHumanitarian);

    main.appendChild(divGeneral);
    main.appendChild(divTechnical);
    main.appendChild(divHumanitarian);
}

populate();

