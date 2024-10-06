const form = document.getElementById('registrationForm');
let flag;

const registerButton = document.getElementById('regist');
registerButton.addEventListener('click', function(event)
{
  validate();
  if(flag == 5)
  {
    window.location.href = "reg1.html";
  }
});

function validate() 
{
    flag = 0;
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const dobInput = document.getElementById('dobInput');
    const agreementCheckbox = document.getElementById('agreementCheckbox');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const dobError = document.getElementById('dobError');
    const agreementError = document.getElementById('agreementError');

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value;
    const dobValue = dobInput.value;

    const gmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(nameValue === '') 
    {
        nameError.textContent = 'Name is required.'; return;
    } 
    else 
    {   
        nameError.textContent = '';
        flag = flag+1;
    }

    if(!gmail.test(emailValue)) 
    {
        emailError.textContent = 'Invalid email address'; return;
    } 
    else if (!emailValue.toLowerCase().endsWith('gmail.com')) 
    {
        emailError.textContent = 'Email must end with gmail.com.'; return;
    }
    else 
    {
        emailError.textContent = '';
        flag +=1;
    }

    if(passwordValue.length < 8) 
    {
        passwordError.textContent = 'Password must be at least 8 characters long'; return;
    } 
    else 
    {
        passwordError.textContent = '';
        flag +=1;
    }

    const currentDate = new Date();
    const selectedDate = new Date(dobValue);

    if(selectedDate >= currentDate) 
    {
        dobError.textContent = 'Invalid date of birth'; return;
    } 
    else 
    {
        dobError.textContent = '';
        flag +=1;
    }   

    if(!agreementCheckbox.checked) 
    {
        agreementError.textContent = 'You must agree'; return;
    } 
    else 
    {
        agreementError.textContent = '';
        flag +=1;
    }
}