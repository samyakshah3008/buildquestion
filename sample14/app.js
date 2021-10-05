var ramKundli = {
    name: "Ram",
    age: 25,
    yuga: "Treta",
    
  }
  
  var krishnaKundli = {
    name: "Krishna",
    age: 31,
    yuga: "Dwapara",
  
  }
  
  function kundli(one , two){
    if(one.age < two.age){
      return two
    } else{
      return one
    }
  }
  
  var confirm = kundli(ramKundli , krishnaKundli)
  console.log(confirm.yuga)
  