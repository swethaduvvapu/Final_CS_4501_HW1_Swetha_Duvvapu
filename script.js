document.addEventListener('DOMContentLoaded', function () {
    const step1Div = document.getElementById('step1');
    const step2Div = document.getElementById('step2');
    const step3Div = document.getElementById('step3');
    const step4Div = document.getElementById('step4');
    const nameForm = document.getElementById('nameForm');
    const studentForm = document.getElementById('studentForm');
    const locationForm = document.getElementById('locationForm');
    const personalInfoForm = document.getElementById('personalInfo');
    const confirmationDiv = document.getElementById('confirmation');
    const successMessageDiv = document.getElementById('successMessage');
    const errorDiv = document.getElementById('error');
    const requirementsDiv = document.getElementById('requirements');
    const confirmYesButton = document.getElementById('confirmYes');
    const confirmNoButton = document.getElementById('confirmNo');
    const confirmedFirstNameSpan = document.getElementById('confirmedFirstName');
    const confirmedLastNameSpan = document.getElementById('confirmedLastName');
    const submit1Button = document.getElementById('submit1');
    const submit2Button = document.getElementById('submit2');
    const submit3Button = document.getElementById('submit3');
    const submit4Button = document.getElementById('submit4');

    // Function to hide a step
    function hideStep(stepDiv) {
        stepDiv.style.display = 'none';
    }

    // Function to show a step
    function showStep(stepDiv) {
        stepDiv.style.display = 'block';
    }

    // Function to show requirements
    function showRequirements() {
        requirementsDiv.style.display = 'block';
    }

    // Function to hide requirements
    function hideRequirements() {
        requirementsDiv.style.display = 'none';
    }

    // Function to validate the date format (YYYY-MM-DD)
    function isValidDateFormat(date) {
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        return dateRegex.test(date);
    }

    // Initial state: Show Step 1 and requirements, hide other steps and messages
    showStep(step1Div);
    showRequirements();
    hideStep(step2Div);
    hideStep(step3Div);
    hideStep(step4Div);
    confirmationDiv.style.display = 'none';
    successMessageDiv.style.display = 'none';

    nameForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const firstNameInput = document.getElementById('first_name');
        const lastNameInput = document.getElementById('last_name');

        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;

        const isAllCaps = /^[A-Z]+$/.test(firstName) && /^[A-Z]+$/.test(lastName);

        if (isAllCaps) {
            confirmationDiv.style.display = 'block';
            confirmedFirstNameSpan.textContent = firstName;
            confirmedLastNameSpan.textContent = lastName;
            errorDiv.innerHTML = '';
            hideStep(step1Div);
        } else {
            errorDiv.innerHTML = 'Please enter both first and last names in ALL CAPS.';
            confirmationDiv.style.display = 'none';
            successMessageDiv.style.display = 'none';
            hideStep(step2Div);
            hideStep(step3Div);
            hideStep(step4Div);
        }
    });

    confirmYesButton.addEventListener('click', function () {
        successMessageDiv.style.display = 'block';
        confirmationDiv.style.display = 'none';
        showStep(step2Div);
        showRequirements(); // Show requirements for Step 2
    });

    confirmNoButton.addEventListener('click', function () {
        errorDiv.innerHTML = ''; // Clear any previous error messages
        successMessageDiv.style.display = 'block';
        confirmationDiv.style.display = 'none';
        hideStep(step1Div);
        hideRequirements();
        showStep(step1Div); // Show Step 1 again when the user clicks 'No'
    });

    submit1Button.addEventListener('click', function (e) {
        e.preventDefault();
    
        const firstNameInput = document.getElementById('first_name');
        const lastNameInput = document.getElementById('last_name');
    
        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
    
        const isAllCaps = /^[A-Z]+$/.test(firstName) && /^[A-Z]+$/.test(lastName);
    
        if (isAllCaps) {
            confirmationDiv.style.display = 'block';
            confirmedFirstNameSpan.textContent = firstName;
            confirmedLastNameSpan.textContent = lastName;
            errorDiv.innerHTML = ''; // Clear any previous error messages
            hideStep(step1Div);
            hideRequirements();
        } else {
            errorDiv.innerHTML = 'Try again please!';
            confirmationDiv.style.display = 'none';
            successMessageDiv.style.display = 'none';
            hideStep(step2Div);
            hideStep(step3Div);
            hideStep(step4Div);
        }
    });
    
    submit2Button.addEventListener('click', function (e) {
        e.preventDefault();
    
        const studentIdInput = document.getElementById('student_id');
        const emailInput = document.getElementById('email');
    
        const studentId = studentIdInput.value;
        const email = emailInput.value;
    
        // Check if the email starts with the student ID and validate the email format
        if (email.startsWith(studentId) && /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
            successMessageDiv.textContent ="Can't wait to learn more about you!";
            showStep(step3Div);
            hideStep(step2Div);
            errorDiv.innerHTML = ''; // Clear any previous error messages
        } else {
            errorDiv.innerHTML = 'That is not the email we are looking for. Input it correctly por favor!';
        }
    });
    

    submit3Button.addEventListener('click', function (e) {
        e.preventDefault();

        const schoolAddressInput = document.getElementById('school_address');
        const homeAddressInput = document.getElementById('home_address');

        const schoolAddress = schoolAddressInput.value;
        const homeAddress = homeAddressInput.value;

        if (schoolAddress && homeAddress) {
            successMessageDiv.textContent = 'Awesome, you are powering through it!';
            showStep(step4Div);
            hideStep(step3Div);
        } else {
            errorDiv.innerHTML = 'Please fill out both school and home addresses.';
        }
    });

    submit4Button.addEventListener('click', function (e) {
        e.preventDefault();
    
        // Get the values from Step 4 inputs
        const birthday = document.getElementById('birthday').value;
        const gender = document.getElementById('gender').value;
    
        // Check if any of the fields in Step 4 are empty or if the gender is not selected
        if (birthday.trim() === '' || gender.trim() === '' || gender === 'Select a number') {
            // Display the error message for Step 4
            const errorDiv = document.getElementById('error');
            errorDiv.textContent = 'Please fill out all fields in Step 4.';
            errorDiv.style.display = 'block';
        } else {
            // Clear the error message for Step 4
            if (isValidDateFormat(birthday)) {
                successMessageDiv.textContent = 'Congratulations! You have completed all the steps!';
                hideStep(step4Div);
                hideRequirements();
                errorDiv.innerHTML = ''; // Clear any previous error messages
            } else {
                errorDiv.innerHTML = 'Incorrect, make sure all information is inputted correctly!';
            }
        }
    });
    
});
