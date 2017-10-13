var mapArray: Array<any> = [];

for (var i = 0; i < 7; i++) {
    mapArray.push([
        Math.floor(Math.random() * 2),
        Math.floor(Math.random() * 2),
        Math.floor(Math.random() * 2),
        Math.floor(Math.random() * 2),
        Math.floor(Math.random() * 2),
        Math.floor(Math.random() * 2),
        Math.floor(Math.random() * 2),
        Math.floor(Math.random() * 2),
        Math.floor(Math.random() * 2),
        Math.floor(Math.random() * 2)
    ]);
}

for (var i = 0; i < mapArray[0].length; i++) {
    let line = "";
    let rowDiv = <HTMLDivElement>(document.createElement('div'));
    for (var j = 0; j < mapArray[1].length; j++) {
        let tileDiv = <HTMLDivElement>(document.createElement('div'));
        tileDiv.style.width = "100px";
        tileDiv.style.height = "100px";
        tileDiv.style.display = "inline-block";
        tileDiv.style.color = "white";
        line += mapArray[i][j];
        mapArray[i][j] === 1 ? tileDiv.style.background = "#1e1e1d" : tileDiv.style.background = "#a8793c"
        rowDiv.appendChild(tileDiv)
    }
    console.log(line);
    document.getElementById("mainDiv").appendChild(rowDiv);
}

console.log(mapArray);

