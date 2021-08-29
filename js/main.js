// Selecting DOM elements
const input = document.querySelector('input')
const datalist = document.querySelector('datalist')
const option = document.querySelector('option')

// Show Datalist
input.onfocus = () => {
  datalist.style.display = 'block'
}

datalist.childNodes.forEach(option => {
  // Assign value of the option to the input
  option.onclick = function() {
    input.value = this.value

    // Hide Datalist
    datalist.style.display = 'none'
  }
})

// Datalist Styles
datalist.style.width = input.offsetWidth + 'px'
datalist.style.left = input.offsetLeft + 'px'
datalist.style.top = input.offsetTop + input.offsetHeight + 'px'