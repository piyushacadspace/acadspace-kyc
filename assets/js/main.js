"use strict";

/* ===== Smooth scrolling ====== */
/*  Note: You need to include smoothscroll.min.js (smooth scroll behavior polyfill) on the page to cover some browsers */
/* Ref: https://github.com/iamdustan/smoothscroll */

const pageNavLinks = document.querySelectorAll('.scrollto');

pageNavLinks.forEach((pageNavLink) => {

	pageNavLink.addEventListener('click', (e) => {

		e.preventDefault();

		var target = pageNavLink.getAttribute("href").replace('#', '');

		//console.log(target);

		document.getElementById(target).scrollIntoView({ behavior: 'smooth' });


	});

});


const submitFormData = async (e) => {
	e.preventDefault()
	console.log('fine')
	let email = document.getElementById('emailInput').value
	let name = document.getElementById('nameInput').value
	let mobile = document.getElementById('phoneInput').value

	var url = new URL("https://script.google.com/macros/s/AKfycbz0FFzcL6akCp3lJyEpdWR73i16bi-03PneUiOVaIs_6TBWYU-ucFuYWlpPNchoD80QOQ/exec");

	// If your expected result is "http://foo.bar/?x=1&y=2&x=42"
	url.searchParams.append('email', email);

	// If your expected result is "http://foo.bar/?x=42&y=2"
	url.searchParams.set('name', name);
	url.searchParams.set('mobile',mobile);
	let response = await axios.get(url)
	console.log(response.data)


	localStorage.setItem("name", name.toLowerCase());
	localStorage.setItem("email", email.toLowerCase());
	localStorage.setItem("mobile", mobile);
	window.location.href = "/kyc.html";

}



