const pass = document.querySelector('#password')
const p = document.querySelector('.passinfo')
const letters = /[a-z]/
const bigLetters = /[A-Z]/g
const numbers = /[0-9]/
const special = /[!@#$%^&*()]/
const minValue = 10

const showMsg = () => {
	if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers) &&
		pass.value.match(special) &&
		pass.value.matchAll(bigLetters)
	) {
		p.textContent = 'Masz bardzo silne hasło! 💪'
		p.style.color = 'lime'
	} else if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers) &&
		pass.value.match(bigLetters)
	) {
		p.textContent = 'Masz dobre hasło! 👍'
		p.style.color = 'gold'
	} else {
		p.textContent = 'Masz słabe hasło! 👎'
		p.style.color = 'tomato'
	}
    console.log(pass.value.matchAll(bigLetters), 123);
}

const checkPassword = () => {
	if (pass.value !== '') {
		showMsg()
	} else {
		p.textContent = 'Nie podałeś hasła...'
		p.style.color = ''
	}
}

pass.addEventListener('keyup', checkPassword)
