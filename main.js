const button = document.querySelectorAll('.btn')
const submit = document.querySelector('#submit')
let btnValue = 0

button.forEach((btn) => {
    btn.addEventListener('click', function () {
        button.forEach((bt) => {
            bt.classList.remove('bg-lightGrey')
        })
        btnValue = this.value
        this.classList.add('bg-lightGrey')
    })
})
submit.addEventListener('click', function (event) {
    event.preventDefault()
    document.querySelector('#rating').innerText = btnValue
    document.querySelector('.card').classList.remove('flex')
    document.querySelector('.card').classList.add('hidden')
    document.querySelector('.thankyou').classList.remove('hidden')
    document.querySelector('.thankyou').classList.add('flex')
})

