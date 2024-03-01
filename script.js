function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    const key= 'c2YxMXA1'
    if (x==atob(key)) {
        window.location.href = atob("aHR0cHM6Ly9raXJhbmJhYnUwMDcuZ2l0aHViLmlvL0N5YmVyLU9keXNzZXktUm91bmQz");
        text=""
    } else {
      text = "IS INCORRECT !!!";
    }
    document.getElementById("demo").innerHTML = text;
  }
//f1r6u3