//radio
let item = document.querySelectorAll('.options__items')
for (let i = 0; i < item.length; i++) {
	item[i].onclick = function () {
		let checkbox = document.getElementById(`license${i + 1}`)
		if (checkbox.checked == true) {
			checkbox.checked = false
		} else {
			checkbox.checked = true
		}
		document.querySelector('.form__text span').innerText = `${i + 1}`
	}
}

//select
let select = function () {
	let selectHeader = document.querySelectorAll('.select__header')
	let selectItem = document.querySelectorAll('.select__item')
	selectHeader.forEach(item => {
		item.addEventListener('click', selectToggle)
	})
	selectItem.forEach(item => {
		item.addEventListener('click', selectChoose)
	})

	function selectToggle() {
		this.parentElement.classList.toggle('is-active')
	}
	function selectChoose() {
		let text = this.innerText
		let select = this.closest('.select')
		let currentText = select.querySelector('.select__current')

		currentText.innerText = text
		select.classList.remove('is-active')
	}


}
select()

//main
function calc() {
	let numLic = document.querySelector('.select__current').innerText
	let licPln = document.querySelectorAll('.options__input')
	let coast = 0
	licPln.forEach(item => {
		if (item.checked == true) {
			coast = item.attributes.value.nodeValue
		}
	})
	let rez = numLic * coast
	document.querySelector('.coast').innerHTML = rez
}
let timer = setInterval(calc, 300)
document.querySelector('button').onclick = function () {
	clearInterval(timer)
}






