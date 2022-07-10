const plazofijo = document.querySelector('.plazofijo')
const dolarhoy = document.querySelector('.dolarhoy')
const resultado = document.querySelector('.resultado')


// plazofijo.addEventListener('change', () => {console.log(plazofijo.value, dolarhoy.value)})

const calculo = () => {
    const res = plazofijo && dolarhoy && dolarhoy.value * plazofijo.value / 100
    resultado.innerHTML = res
}

plazofijo.addEventListener('change', calculo)
dolarhoy.addEventListener('change', calculo)

