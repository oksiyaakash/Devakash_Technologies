const scriptURL = 'https://script.google.com/macros/s/AKfycbyAvYm20gPPtDkqjjSnYEovOVRmkurlzSTF6aXTRVhTfRQ8RGXKdtmFHdrXG_ZUeI8Y/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})