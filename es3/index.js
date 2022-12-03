function millisecondi(){
let ore=document.querySelector("[name=number]");
let minuti=document.querySelector("[name=number]");
let millisecondi = document.querySelector("[name=number]");

    ore.value=parseInt(ore.value);
    minuti.value= parseInt(minuti.value);
    millisecondi.value=(ore.value*60+minuti.value)*60*1000;

    document.querySelector("#out").innerHTML= millisecondi.value;
}
