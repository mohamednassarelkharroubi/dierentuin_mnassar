function showPrice(prijs) {
    if (prijs == 5) {
        for (i = 1; i <= 5; i++) {
            totaal = i * prijs;
            document.getElementById("table1").innerHTML += "<tr><td>" + i + "</td>" + "<td>" + totaal + " €</td></tr>";
        }
    } else if (prijs == 10) {
        for (i = 1; i <= 5; i++) {
            totaal = i * prijs;
            document.getElementById("table1").innerHTML += "<tr><td>" + i + "</td>" + "<td>" + totaal + " €</td></tr>";
        }
    } else if (prijs == 15) {
        for (i = 1; i <= 5; i++) {
            totaal = i * prijs;
            document.getElementById("table1").innerHTML += "<tr><td>" + i + "</td>" + "<td>" + totaal + " €</td></tr>";
        }
    }
}