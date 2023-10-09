const c=document.getElementById("celcius");
const f=document.getElementById("fahrenheit");
const k=document.getElementById("kelvin");
const inputs= document.getElementsByClassName("input");
for (let i = 0; i < inputs.length; i++)
{
    let input = inputs[i];
    input.addEventListener("input", function (e) {
        let val= parseFloat(e.target.value);
        switch (e.target.name) {
            case "celcius":
                f.value= (val * 1.8) + 32;
                k.value = val + 273.15;
                break;
            case "fahrenheit":
                c.value = (val- 32) / 1.8;
                k.value = ((val- 32) / 1.8) + 273.15;
                break;
            case "kelvin":
                c.value = val- 273.15;
                f.value = ((val - 273.15) * 1.8) + 32;
                break;
        }
    });
}
function reset()
{
    c.value=""
    f.value=""
    k.value=""
}