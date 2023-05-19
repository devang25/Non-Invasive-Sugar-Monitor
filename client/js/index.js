$(document).ready(function() {
    $('#prediction-form').submit(function(event) {
      event.preventDefault();
      console.log("Hello");
      $.ajax({
        url: 'cv',
        method: 'POST',
        data: $(this).serialize(),
        success: function(response) {
          console.log(response);
        }
      });
    });
  });




// function submitForm(event) {
//     event.preventDefault(); // Prevent default form submission behavior

//     // Get form data
//     const form = document.getElementById('prediction-form');
//     const formData = new FormData(form);

//     // Send AJAX request to the server
//     const backendURL = 'http://127.0.0.1:5000';
//     fetch(`${backendURL}/predict_sugar`, {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Update the HTML with the prediction result
//         const resultDiv = document.getElementById('prediction-result');
//         resultDiv.innerHTML = `Prediction: ${data.prediction}`;
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// }

// // Add event listener to the form submit event
// const form = document.getElementById('prediction-form');
// form.addEventListener('submit', submitForm);



// // function onClickedEstimateSugar(event) {
// //     event.preventDefault();
// //     console.log("Estimate sugar button clicked");

// //     var age = document.getElementById("age");
// //     var bmi = document.getElementById("bmi");
// //     var acetone = document.getElementById("acetone");
// //     var humidity = document.getElementById("humidity");
// //     var gender = document.getElementById("gender");
// //     var estSugar = document.getElementById("uiEstimatedSugar");
  
// //     var url = "http://127.0.0.1:5000/predict_sugar"; //Use this if you are NOT using nginx which is first 7 tutorials
  
// //     $.post(url, {
// //         age: age.value,
// //         bmi: bmi.value,
// //         acetone: acetone.value,
// //         humidity: humidity.value,
// //         gender: gender.value
// //     },function(data, status) {
// //         console.log(data.estimated_sugar);
// //         estSugar.innerHTML = "<h2>" + data.estimated_sugar.toString() + " mg/dL</h2>";
// //         console.log(status);
// //     });
// //   }
