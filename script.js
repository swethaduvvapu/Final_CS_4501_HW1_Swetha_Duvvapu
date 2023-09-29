document.addEventListener('DOMContentLoaded', function () {
    const step1Div = document.getElementById('step1');
    const step2Div = document.getElementById('step2');
    const step3Div = document.getElementById('step3');
    const nameForm = document.getElementById('nameForm');
    const studentForm = document.getElementById('studentForm');
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

    // Initial state: Show Step 1 and requirements, hide Step 2, Step 3, and messages
    showStep(step1Div);
    showRequirements();
    hideStep(step2Div);
    hideStep(step3Div);
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
            hideRequirements();
        } else {
            errorDiv.innerHTML = 'Please enter both first and last names in ALL CAPS.';
            confirmationDiv.style.display = 'none';
            successMessageDiv.style.display = 'none';
            hideStep(step2Div);
            hideStep(step3Div);
        }
    });

    confirmYesButton.addEventListener('click', function () {
        successMessageDiv.style.display = 'block';
        confirmationDiv.style.display = 'none';
        showStep(step2Div);
        showRequirements(); // Show requirements for Step 2
    });

    submit2Button.addEventListener('click', function (e) {
        e.preventDefault();

        const studentIdInput = document.getElementById('student_id');
        const emailInput = document.getElementById('email');

        const studentId = studentIdInput.value;
        const email = emailInput.value;

        // Check if the email starts with the student ID and validate the email format
        if (email.startsWith(studentId) && /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
            successMessageDiv.textContent = 'Awesome! 3 more steps to go <3';
            showStep(step3Div);
            hideStep(step2Div);
            hideRequirements();
        } else {
            errorDiv.innerHTML = 'Please enter a valid email that starts with your student ID.';
        }
    });

    // ... (continue with the rest of the JavaScript code)
});
