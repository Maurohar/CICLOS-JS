let isDateValid = false;
let isUnderAge = false;

alert("Para seguir en esta pagina debe ser mayor de edad");

let dob = prompt("Ingrese su fecha de nacimiento (dd/MM/aaaa)");
isDateValid = valDate(dob);
isUnderAge = isUnderage(dob);

while(!isDateValid || isUnderAge ){
    let dob = prompt("Ingrese una fecha valida en el formato (dd/MM/aaaa)");

    isDateValid = valDate(dob);

    if(!isDateValid){
        alert("Fecha de nacimiento invalida");
        continue;
    }
        
    isUnderAge = isUnderage(dob);
    if(isUnderAge){
        alert("Usted es menor de edad");
        continue;
    }
}

alert("Beba Quilmes");



function valDate(date) {
    let dateformat = /^(0?[1-9]|[1-2][0-9]|3[01])[\/](0?[1-9]|1[0-2])/;
    let valid = date.match(dateformat)      

    let operator = date.split('/');
    let datepart = [];
    if (operator.length > 1) {
        datepart = date.split('/');
    }
    let day = parseInt(datepart[0]);
    let month = parseInt(datepart[1]);
    let year = parseInt(datepart[2]);

    if(month < 1 || month > 12)
        valid = false;
    
    if(day < 1 || day > 31)
        valid = false;

    if(year<1900 || year > 2023 )
        valid = false;

    return valid;
}

function isUnderage(date) {
    let operator = date.split('/');
    let datepart = [];
    if (operator.length > 1) {
        datepart = date.split('/');
    }
    let day = parseInt(datepart[0]);
    let month = parseInt(datepart[1]);
    let year = parseInt(datepart[2]);

    let dob = new Date(year,month,day);

    //obtener diferencia en años entre fecha de nacimiento y hoy
    let years = diff_years(dob,new Date())
    return (years < 18);
}

function diff_years(dt2, dt1)
{
    let diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math. abs(Math. round(diff/365.25));
}