const signInForm = document.querySelector('form');
const signInButton = document.querySelector('#signin-btn');
const signOutButton = document.querySelector('#signout-btn');

signInForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const username = document.querySelector('#username').value;
	const password = document.querySelector('#password').value;

	// check if username and password are correct
	if (username === 'myusername' && password === 'mypassword') {
		alert('Sign in successful!');
	} else {
		alert('Invalid username or password. Please try again.');
	}
});

signOutButton.addEventListener('click', () => {
	alert('Sign out successful!');
});
