const scriptURL =
'PASTE_URL_HERE';

const form =
document.querySelector('form');

form.addEventListener(

'submit',

e=>{

e.preventDefault();

const data={

company:
document.querySelector('#company').value,

contact:
document.querySelector('#contact').value,

email:
document.querySelector('#email').value,

phone:
document.querySelector('#phone').value,

origin:
document.querySelector('#origin').value,

destination:
document.querySelector('#destination').value,

commodity:
document.querySelector('#commodity').value,

weight:
document.querySelector('#weight').value,

dimensions:
"Multiple Dimensions",

container:
document.querySelector('#container').value,

remarks:
document.querySelector('#remarks').value

};

fetch(

scriptURL,

{

method:'POST',

body:JSON.stringify(data)

}

)

.then(response=>{

alert(

"Enquiry Submitted Successfully"

);

})

.catch(error=>{

alert(

"Submission Failed"

);

});

});