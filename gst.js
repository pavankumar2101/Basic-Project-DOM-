

 
  
  function calculate() {
  
    let Name = document.getElementById("name").value;
  
    let Phone = document.getElementById("mobile").value;
  
    let Email = document.getElementById("email").value;
  
    let Address = document.getElementById("address").value;
  
    let gadgets = document.getElementById("gadgets").value;
  
    let jewel = document.getElementById("jewel").value;
  
    let hoodies = document.getElementById("hoodies").value;
  
    let imported = document.getElementById("imported").value;
  
    let scent = document.getElementById("perfumes").value;
  
    let GST = document.getElementById("GST").value;
  
    let payment = document.getElementById("payment");
  
  
    // let total = parseInt(gadgets,jewel,hoodies,imported,scent);
    let total = [parseInt(gadgets), parseInt(jewel), parseInt(hoodies), parseInt(imported), parseInt(scent)];
  
    amount = 0;
  
    for (let i = 0; i < total.length; i++) {
        amount += total[i];
    }
  
    let bill = amount * (GST / 100);
  
    if (!isNaN(amount)) {
      document.getElementById("answer").innerHTML = `Name : ${Name},
      <br>Mobile : ${Phone},
      <br>Email : ${Email},
      <br>Address : ${Address},
      <br>Total Amount : ${amount}/-,
      <br>Total bill payment with ${GST}% GST is ${bill + amount}/-`;
  
      if ( amount < 5000) {
        document.getElementById("final").innerHTML = `With GST Charges 500 rupees : ${bill + amount + 500}/-<br><br>Note : bill exceeds more than 5000 then pay 800 rupees for Service Charges`;
      } else {
        document.getElementById("final").innerHTML = `With GST Charges 800 rupees : ${bill + amount + 800}/-<br><br>Note : bill exceeds more than 5000 then pay 800 rupees for Service Charges`;
      }
    }
  
  
  }
  calculate();
  
  
    