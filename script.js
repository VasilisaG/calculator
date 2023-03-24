let lastOperation = ''
let result = ''

let currentDisplayValue = ''

let numbers = document.querySelectorAll(".number")
let display = document.querySelector(".display")
let actions = document.querySelectorAll('.action')
let ravno = document.querySelector('.result')
let clear = document.querySelector ('.AC')
let percent = document.querySelector('.percent')
let comma = document.querySelector('.comma')

ravno.addEventListener('click', function (e) {
  
  applyLastOperation()
  display.value = result
  resetVariableValues ()
  
})

function resetVariableValues ()
{
  result = ''
  lastOperation = ''
  currentDisplayValue = ''
}

function applyLastOperation(){
  if (lastOperation != ''){
    if(lastOperation == '+'){
      result = Number(result) + Number(currentDisplayValue)
    }
    if(lastOperation == '-'){
      result = Number(result) - Number(currentDisplayValue)
    }
    if(lastOperation == 'X'){
      result = Number(result) * Number(currentDisplayValue)
    }
    if(lastOperation == '÷'){
      if (Number(currentDisplayValue) === 0){
        result = 'ошибка'
      } else {
        result = Number(result) / Number(currentDisplayValue)
      }
    }
  } else {
    result = Number(currentDisplayValue)
  }
}

actions.forEach(function(action) {
  action.addEventListener('click', function(e) {
    applyLastOperation()

    lastOperation = e.target.value

    currentDisplayValue = ''
    display.value = result

  }) 
})

numbers.forEach(function(number) {
  number.addEventListener('click', function(e) {

    currentDisplayValue += e.target.value
    display.value = currentDisplayValue
  
  }) 
})

clear.addEventListener( 'click', function () {
  resetVariableValues ()
  display.value = ''
})

percent.addEventListener('click', function() {
  if (result == ''){
    result = 1
  }

  let currentDisplayValueWithPercent = Number(result) / 100 * Number(currentDisplayValue);

  display.value = currentDisplayValueWithPercent

  currentDisplayValue = currentDisplayValueWithPercent
}) 

comma.addEventListener ('click', function() {
 (currentDisplayValue =  currentDisplayValue + '.')
 display.value = currentDisplayValue 

})