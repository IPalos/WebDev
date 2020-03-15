function Calification(num){
  if ( num <= 50){
    return "Rebprobado"
  }
  else if (num <=80) {
    return "Bien"
  }
  else{
    return "Muy Bien"
  }

}


function Convert_Fahrehneit_Celcius(value,unit){
  if( unit =="Fahrenheit"){
    return (value-32)*(5/9)
  }
  else{
    return (value*9/5)+32
  }

}