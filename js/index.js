let id = (id) => document.getElementById(id);

let form = id('form');
let city = id('city');
let country = id('country');
let submit = id('submit');

const apikey = '';

if (form !== undefined && form !== null && submit !== undefined && submit !== null){
	form.addEventListener('submit', (e) => {e.preventDefault();
		if (city.value === '' || country.value === '' )  {
			alert('city and country are mandatory');
		}
		else {
			alert('success');
		}
	});
}
else {
	alert('something bad happened. please try again.');
}




function weather(latitude, longitude) {
	const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=' + apikey + '&units=metric';


}

function forecast(latitude, longitude) {
	const url = 'api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=' + apikey + '&units=metric';
	
}