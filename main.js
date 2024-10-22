function click_button(event) {
	event.preventDefault()

    let tovar = document.getElementById('list').value
	if (tovar === '-1') {
		alert('Вы не выбрали товар')
		return
	}

	let amount = document.getElementById('amount').value.match(/^[1-9]\d*$/)
	if (amount === null) {
		alert('Введите положительное число')
		return
	}

	document.getElementById('result').textContent = String(tovar * parseInt(amount))
	return false
}

window.addEventListener('DOMContentLoaded', function () {
	let click_but = document.getElementById('button')
	click_but.addEventListener('click', click_button)
})
