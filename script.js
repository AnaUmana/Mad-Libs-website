/* Given the 'id' attribute of a form element, this will return the value entered by the user into that form element. */
function formValue(id) {
  // It gets the form element from the HTML by its ID
  let formElement = document.getElementById(id);
  
  // Checks if the form element ID exists
  if (formElement === null) {
    return `[${id} NOT FOUND]`;
  }

  let value = formElement.value;

	// Checks if the form is empty of has white space
  if (formElement.value.trim() === "") {
    return `[${formElement.placeholder}]`;
  }

  return document.getElementById(id).value;
}

/* Given the 'id' of an HTML element and a 'className', this will add that class name to the HTML element with the specified id. */
function addClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.add(className);
}

/* The code here will be executed each time the Generate button is clicked. */
function generate() {
  //Retrieve form values
  let relative = formValue("Relative");
  let adjective1 = formValue("Adjective-1");
  let adjecive2 = formValue("Adjective-2");
  let adjective3 = formValue("Adjective-3");
  let famousPerson = formValue("Famous-Person");
  let noun = formValue("Noun");
  let dessert = formValue("Dessert")
  let petName = formValue("Pet-name");
  // Insert form values into madlib
  let madLib = `
  Dear ${relative}, 
  <br><br> 
  I have been having a really ${adjective1} time at camp. The counselour is ${adjecive2} and the food is ${adjective3}. I met ${famousPerson} and we quickly became ${noun}. Talk soon! 
  <br><br> 
  Your ${dessert},
  <br> 
  ${petName}`;
  
  // Output madlib to player
  document.getElementById("output").innerHTML = madLib;
  addClassToElement("container", "generated");
}