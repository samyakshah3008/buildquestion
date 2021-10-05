var ramKundli = {
    name: "Ram",
    power: 2500,
    yuga: "Treta",
    
  }
  
  var krishnaKundli = {
    name: "Krishna",
    power: 2325,
    yuga: "Dwapara",
  
  }
  
  function kundli(one , two){
    if(one.power > two.power){
      return one
    } else{
      return two
    }
  }
  
  var confirm = kundli(ramKundli , krishnaKundli)
  console.log(confirm.power)
  