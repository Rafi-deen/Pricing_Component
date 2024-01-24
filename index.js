let isMonthly = true

const pr1 = document.querySelector(".pr1")
const pr2 = document.querySelector(".pr2")
const pr3 = document.querySelector(".pr3")
const toggle = document.querySelector(".toggle")
const toggleBtn = document.querySelector(".toggle-btn")

function values() {
  const prValue1 = isMonthly ? 19.99 : 199.99
  const prValue2 = isMonthly ? 24.99 : 249.99
  const prValue3 = isMonthly ? 39.99 : 399.99

  pr1.innerHTML = prValue1
  pr2.innerHTML = prValue2
  pr3.innerHTML = prValue3
}

values()

toggle.addEventListener("click", () => {
  toggleBtn.classList.toggle("toggled")
  isMonthly = !isMonthly
  values()
})
