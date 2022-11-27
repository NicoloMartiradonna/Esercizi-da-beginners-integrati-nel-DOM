
    function ore() {
    let x=document.querySelector("[name=number]");
    let m=document.querySelector("[name=number]");

    x.value= parseInt(x.value);
    m.value = parseInt(m.value);

    let y;
    let c=24-x.value;
    
    y=x-6;
    let ny=(x.value+c.value+y.value)%24;

    y.value=x.value+7;
    let tk=(x.value+c.value+y.value)%24;

    y=x+1;
    let mo=(x.value+c.value+y.value)%24;


    document.querySelector("#out").innerHTML=(ny+"."+m);
    document.querySelector("#out").innerHTML=(tk+"."+m);
    document.querySelector("#out").innerHTML=(mo+"."+m);
}