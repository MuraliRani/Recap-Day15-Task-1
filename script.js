function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.getElementById('gender').value;
    const foodList = getSelectedFood();
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
  
    if (validateForm(firstName, lastName, address, pincode, gender, foodList, state, country)) {
      appendToTable(firstName, lastName, address, pincode, gender, foodList.join(', '), state, country);
      clearForm();
    }
  }
  
  function getSelectedFood() {
    const foodCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const selectedFood = Array.from(foodCheckboxes).map(checkbox => checkbox.nextSibling.textContent);
    return selectedFood;
  }
  
  function validateForm(firstName, lastName, address, pincode, gender, foodList, state, country) {
    if (foodList.length <= 2) {
      alert("Please select at least 2 food options🍕🍔🍟🌭🍿");
      return false;
    }
    return true;
  }
  
  function appendToTable(firstName, lastName, address, pincode, gender, food, state, country) {
    const tableBody = document.getElementById('dataTableBody');
    const newRow = tableBody.insertRow();
  
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
  
    cell1.textContent = firstName;
    cell2.textContent = lastName;
    cell3.textContent = address;
    cell4.textContent = pincode;
    cell5.textContent = gender;
    cell6.textContent = food;
    cell7.textContent = state;
    cell8.textContent = country;
  }
  
  function clearForm() {
    document.getElementById('myForm').reset();
  }
  