let button = document.querySelector("button");

function isEmpty(str) {
   if (!str || 0 === str.length){
      return true;
   }
}

button.addEventListener("click", () => {
    let name = document.getElementById("name");
    let bid = document.getElementById("price");
    let price = bid.value;
    if(isEmpty(name.value) || isEmpty(bid.value)){
       alert("Name or Price is empty?");
    }
       else {
         let education = document.getElementById("education"); 
         let networth = document.getElementById("networth");
         let skills = document.getElementsByClassName("skills");
         let ages = document.getElementsByName("age");
         let reputations = document.getElementsByClassName("reputations");
         price *= education.value * networth.value;
         price = getCheckboxValuesForLoop(skills, price);
         price = getRadioValue(ages, price);
         price = getCheckboxValuesForLoop(reputations, price);
         let loveletter = document.querySelector("textarea");
         let person = {
            bride_name: name.value,
            bride_price: price,
            letter_to_bride: loveletter.value
            }
            alert('Brides name: ' + person.bride_name + '\nPrice for her: ' + person.bride_price + '\nYour love letter: ' + person.letter_to_bride);
       }});

    const getCheckboxValuesReduce = (skills, price) => {
      let list = Array.from(skills)
      let result = list.reduce((price, item) => {
          if (item.checked) {
             price += Number(item.value);
          } return price;
      }, price)
      return result;
  }

    const getRadioValue = (ages, price) => {  
      ages.forEach(item => {
          if (item.checked) {
              price *= Number(item.value)
          }
      })
      return price;
      }
      
      const getCheckboxValuesForLoop = (reputations, price) => {
      for (i=0; i < reputations.length; i++) {  
         if (reputations[i].checked === true) {
            if (Number(reputations[i].value) != 200) {
            price *= Number(reputations[i].value);
         } else {
            price -= Number(reputations[i].value);
         }
      }
   }
      return price;
   }
   