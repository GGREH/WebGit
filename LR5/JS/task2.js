/* ==========================================================================
   ЗАВДАННЯ 2.1: ОБХІД БЛОКІВ DIV ТА ФОРМУВАННЯ СПИСКУ
   ========================================================================== */

function div_to_list() {
    let blocks = document.getElementsByClassName("source-block");
    let html = "<h4>Сформований список:</h4><ol>";

    for (let i = 0; i < blocks.length; i++) {
        html = html + "<li>" + blocks[i].textContent + "</li>";
    }

    html = html + "</ol>";
    document.getElementById("result_task2_1").innerHTML = html;
}

/* ==========================================================================
   ЗАВДАННЯ 2.2: ОБРОБКА ТАБЛИЦІ З ЧИСЛАМИ (ВАРІАНТ 6 ТА ВАРІАНТ 3)
   ========================================================================== */

let a = [];
let n = 0;

// Зчитування значень з таблиці у масив (як у прикладі методички)
function generate_arr() {
    let table = document.getElementById("table1");
    n = table.rows.length;
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr[i] = [];
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            arr[i][j] = parseFloat(table.rows[i].cells[j].innerHTML);
        }
    }
    return arr;
}

// Пошук екстремумів серед додатних та від'ємних чисел і фарбування
function table_obrab() {
    a = generate_arr();
    let table = document.getElementById("table1");

    let maxPos = -1000000;
    let minPos = 1000000;
    let maxNeg = -1000000;
    let minNeg = 1000000;

    let hasPos = false;
    let hasNeg = false;

    // Пошук екстремумів
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            let val = a[i][j];

            if (val > 0) {
                hasPos = true;
                if (val > maxPos) maxPos = val;
                if (val < minPos) minPos = val;
            } else if (val < 0) {
                hasNeg = true;
                if (val > maxNeg) maxNeg = val;
                if (val < minNeg) minNeg = val;
            }
        }
    }

    // Розфарбовування чарунок
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            let cell = table.rows[i].cells[j];
            let val = a[i][j];

            if (val > 0) {
                if (val == maxPos) {
                    cell.style.backgroundColor = "#2ecc71"; // Максимальне додатне (яскраво-зелений)
                    cell.style.color = "#ffffff";
                } else if (val == minPos) {
                    cell.style.backgroundColor = "#a8e6cf"; // Мінімальне додатне (світло-зелений)
                    cell.style.color = "#000000";
                } else {
                    cell.style.backgroundColor = "#bbdefb"; // Усі інші додатні (блакитний)
                    cell.style.color = "#000000";
                }
            } else if (val < 0) {
                if (val == minNeg) {
                    cell.style.backgroundColor = "#e74c3c"; // Мінімальне від'ємне (найменше число - червоний)
                    cell.style.color = "#ffffff";
                } else if (val == maxNeg) {
                    cell.style.backgroundColor = "#ffab91"; // Максимальне від'ємне (найближче до 0 - рожево-червоний)
                    cell.style.color = "#000000";
                } else {
                    cell.style.backgroundColor = "#ffe0b2"; // Усі інші від'ємні (оранжевий)
                    cell.style.color = "#000000";
                }
            }
        }
    }

    // Виведення текстового підсумку
    let out = "<p><b>Результати пошуку екстремумів:</b></p>";
    out = out + "<ul>";
    if (hasPos) {
        out = out + "<li>Максимальне додатне: <b>" + maxPos + "</b>, мінімальне додатне: <b>" + minPos + "</b></li>";
    }
    if (hasNeg) {
        out = out + "<li>Максимальне від'ємне (найближче до 0): <b>" + maxNeg + "</b>, мінімальне від'ємне: <b>" + minNeg + "</b></li>";
    }
    out = out + "</ul>";
    document.getElementById("result_task2_2").innerHTML = out;
}

// Додатково: Підрахунок сум по стовпцях (якщо варіант 3)
function col_sums() {
    a = generate_arr();
    let table = document.getElementById("table1");
    let cols = a[0].length;
    let sums = [];

    for (let j = 0; j < cols; j++) {
        let s = 0;
        for (let i = 0; i < a.length; i++) {
            s = s + a[i][j];
        }
        sums[j] = s;
    }

    let out = "<p><b>Суми чисел у стовпцях таблиці:</b></p><ul>";
    for (let j = 0; j < cols; j++) {
        out = out + "<li>Стовпець " + (j + 1) + ": <b>" + sums[j] + "</b></li>";
    }
    out = out + "</ul>";
    document.getElementById("result_task2_2").innerHTML = out;
}
