let result;
let units;
function convertUnits(number)
{
    units=document.getElementById("units").value;
    number=document.getElementById("feet").value;
    result=number*units;
    document.getElementById("resultMeters").innerHTML=result+" meters";
}