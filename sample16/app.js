var ram = {
    name: "Ram",
    yuga: "Treta",
    power: 2500
  }
  
  var krishna = {
    name: "Krishna",
    yuga: "Dwapara",
    power: 2325
  }
  
  
  
  function compare(one,two){
    if(one.power > two.power) {
      return one 
    } else{
      return two
    }
  }
  
  var confirm = compare(ram,krishna)
  
  // console.log(confirm.power)
  
  var add = confirm.power + 35
  console.log(add)