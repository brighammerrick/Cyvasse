function translateColumnNumToLetter(col) {
    var data = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    return data[col];
}

function createBoard() {
    var boardHtml = "<table><tbody>";
    var oddClassName = "odd",
        evenClassName = "even";

    for (var row = 0; row < 10; row++) {
        boardHtml += "<tr>";
        for (var column = 0; column < 10; column++) {
            boardHtml += `<td id='${translateColumnNumToLetter(
                row
            ).toString()}${column.toString()}' class='${(column % 2 === 0
                ? evenClassName
                : oddClassName
            ).toString()}'></td>`;
        }
        boardHtml += "</tr>";
    }
    boardHtml += "</tbody></table>";
    document.getElementById("board").innerHTML = boardHtml;
}

function mountains() {
    let num = 0;
    [].forEach.call(document.getElementsByTagName("td"), function (cell) {
        cell.addEventListener("click", function () {
            if (num < 3) {
                cell.style.backgroundColor = "#A65F5F";
                num++;
            }
        });
    });
}

window.onload = function () {
    createBoard();
};