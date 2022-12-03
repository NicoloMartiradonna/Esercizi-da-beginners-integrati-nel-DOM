
function gradi() {
let gradiFahrenheit=document.querySelector("[name=number]");

gradiFahrenheit.value=parseInt(gradiFahrenheit.value);

let gradiCelsius=(gradiFahrenheit - 32) * 5/9;

document.querySelector("#out").innerHTML=gradiCelsius.value;
}