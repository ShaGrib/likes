var likes = [9, 12, 9];
var h3 = [
    document.querySelector("#like1"),
    document.querySelector("#like2"),
    document.querySelector("#like3")
];

function like(id) {
    likes[id]++;
    h3[id].innerHTML = likes[id];
}