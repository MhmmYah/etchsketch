const issquare = document.getElementById("square");
const row = document.getElementById("row");
const col = document.getElementById("col");
const main = document.getElementById("main");

document.addEventListener('keypress', function(e) {
    if(e.key="Enter"){
        createbox();
    }
})

issquare.addEventListener('change',()=>{
    col.disabled = issquare.checked;
})

function removeContent(element){
    var removecontent = element.querySelectorAll('*');
    removecontent.forEach((thing) => {element.removeChild(thing)});
}

function checkInput(){
    let rows = row.value>100?100:row.value;
    let cols= issquare.checked == 1? rows:col.value>100?100:col.value;
    row.value = rows;
    col.value = cols;
}

function createbox(){
    checkInput();
    removeContent(main);
    main.style.gridTemplateColumns=String.prototype.repeat(col.value,"1fr ");
    main.style.gridTemplateRows = String.prototype.repeat(row.value,"1fr ");
    for(let i = 1; i<=row.value; i++){
        for(let j = 1;  j<=col.value; j++){
            var content =document.createElement('div');
            content.classList.add('hoverpixel');
            content.style.backgroundColor = "#F4F4F4";
            content.style.gridRow = i;
            content.style.gridColumn = j;
            content.addEventListener('mouseover',(e)=>{e.target.style.backgroundColor = "black"});
            main.appendChild(content);
        }
    }
}