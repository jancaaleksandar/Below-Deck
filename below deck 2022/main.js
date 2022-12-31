const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
 // Initialize the EmailJS API
 emailjs.init("YOUR_USER_ID");
      
 // Get a reference to the form element
 var form = document.getElementById('yacht-form');
 
 // Add a submit event listener to the form
 form.addEventListener('submit', function(event) {
   // Prevent the default form submission behavior
   event.preventDefault();
   
   // Get the selected yacht and date values from the form
   var yacht = form.elements['yacht'].value;
   var startDate = form.elements['start-date'].value;
   var endDate = form.elements['end-date'].value;
   
   // Send an email using the EmailJS API
   emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
     to_email: 'belowdeckchartering@gmail.com',
     yacht: yacht,
     start_date: startDate,
     end_date: endDate
   })
   .then(function(response) {
     console.log('Email sent successfully');
   })
   .catch(function(error) {
     console.error('Error sending email:', error);
   });
 });