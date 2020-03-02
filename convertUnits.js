let result;
function feetToMeters(number)
{
    number=document.getElementById("feet").value;
    result=number*0.305;
    document.getElementById("resultMeters").innerHTML=result+" meters";
}
function metersToFeet(number)
{
    number=document.getElementById("meters").value;
    result=number*3.279;
    document.getElementById("resultFeet").innerHTML=result+" feet";
}