const calculateTemp = ()=>{
    const numberTemp = document.getElementById("temp").value;
    const tempType = document.getElementById("temp_diff");
    const valueTemp = tempType.options[tempType.selectedIndex].value;
    console.log(valueTemp);



    const celToFeh = (cel)=>{
        let fahrenheit = Math.round((cel * 9 /5) + 32);
        return fahrenheit;
    }
    const fahToCel = (fah)=>{
        let celcius = Math.round((fah - 32) *  5/9 );
        return celcius;
    }


    let result;

    if(valueTemp == 'celcius'){
        result = celToFeh(numberTemp);
        document.getElementById("resultContainer").innerHTML =  `= ${result} Fahrenheit`;
    }else{
        result = fahToCel(numberTemp);
        document.getElementById("resultContainer").innerHTML =  `= ${result} Celcius`;

    }


}

