/* ==========================================================================
   ПОЧАТКОВІ ДАНІ
   ========================================================================== */

let arrMovies = [];

arrMovies[0] = {
    Name: "Дюна: Частина друга",
    Cinema: "Оскар",
    Hall: "Зал 1",
    Data: "20.10.2026",
    Time: "18:30"
};

arrMovies[1] = {
    Name: "Оппенгеймер",
    Cinema: "Планета Кіно",
    Hall: "", // Порожнє значення для перевірки умови
    Data: "25.10.2026",
    Time: "20:00"
};

arrMovies[2] = {
    Name: "Інтерстеллар",
    Cinema: "Жовтень",
    Hall: "Зал Класик",
    Data: "17.10.2026",
    Time: "17:15"
};

arrMovies[3] = {
    Name: "Початок",
    Cinema: "Мультиплекс",
    Hall: "Зал 3",
    Data: "10.10.2026",
    Time: "19:00"
};

arrMovies[4] = {
    Name: "Аватар 3",
    Cinema: "Сінема Сіті",
    Hall: "Зал IMAX",
    Data: "30.10.2026",
    Time: "19:45"
};

arrMovies[5] = {
    Name: "Тихе місце",
    Cinema: "Кіноман",
    Hall: "", // Порожнє значення для перевірки умови
    Data: "22.10.2026",
    Time: "21:30"
};

let html = "";

/* ==========================================================================
   ФУНКЦІЇ РОЗРАХУНКУ ТА ВИВЕДЕННЯ
   ========================================================================== */

// Розрахунок різниці між поточною датою і датою початку фільму
function ras_Diff_Days(text) {
    let currentDate = new Date();
    // Перетворення рядка DD.MM.YYYY на об'єкт дати
    let parts = text.split('.');
    let date1 = new Date(parts[2], parts[1] - 1, parts[0]);

    // Різниця у мілісекундах
    let timeDiff = currentDate.getTime() - date1.getTime();
    let daysPassed = Math.floor(timeDiff / (1000 * 3600 * 24));

    return daysPassed;
}

// Формування рядка таблиці для кожного фільму
function vivod(item, i, array) {
    let daysPassed = ras_Diff_Days(item['Data']);
    let statusText = "";
    let rowStyle = "";

    // Кожен фільм демонструється 10 днів
    if (daysPassed < 0) {
        // Фільм ще не почався
        let daysToStart = Math.abs(daysPassed);
        statusText = "Прем'єра через " + daysToStart + " дн.";
        rowStyle = "";
    } else if (daysPassed >= 0 && daysPassed <= 10) {
        // Фільм демонструється сьогодні
        let daysLeft = 10 - daysPassed;
        if (daysLeft <= 2) {
            rowStyle = "style='background-color: #fff9c4;'"; // Жовтий: закінчується показ
            statusText = "Сьогодні йде (залишилось " + daysLeft + " дн.)";
        } else {
            rowStyle = "style='background-color: #c8e6c9;'"; // Зелений: йде сьогодні
            statusText = "Сьогодні йде (залишилось " + daysLeft + " дн.)";
        }
    } else {
        // Минуло більше 10 днів
        rowStyle = "style='background-color: #ffcdd2;'"; // Червоний: показ завершено
        statusText = "Показ завершено";
    }

    // Перевірка зали (якщо зал не вказано)
    let hallInfo = item['Hall'];
    if (hallInfo == "") {
        hallInfo = "<span class='single-hall-note'>Не вказано (у кінотеатрі лише один зал)</span>";
    }

    html = html + "<tr " + rowStyle + ">";
    html = html + "<td>" + (i + 1) + "</td>";
    html = html + "<td><b>" + item['Name'] + "</b></td>";
    html = html + "<td>" + item['Cinema'] + "</td>";
    html = html + "<td>" + hallInfo + "</td>";
    html = html + "<td>" + item['Data'] + "</td>";
    html = html + "<td>" + item['Time'] + "</td>";
    html = html + "<td>" + statusText + "</td>";
    html = html + "</tr>";
}

// Головна функція, яка викликається при натисканні кнопки
function ras() {
    html = "<table class='b-table'>";
    html = html + "<tr><th>№</th><th>Назва фільму</th><th>Кінотеатр</th><th>Зал</th><th>Дата початку</th><th>Сеанс</th><th>Статус / Термін</th></tr>";
    
    arrMovies.forEach(vivod);
    
    html = html + "</table>";
    document.getElementById('rezult').innerHTML = html;
}
