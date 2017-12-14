let counterNumber = 0;
let paused = false;

function pauseHandler(pauseButton)
{
  console.log(pauseButton)
  if(paused)
  {
    paused = !paused
    pauseButton.innerHTML = "Pause"
  }else{
    paused = !paused

    pauseButton.innerHTML = "Resume"
  }
}

let counter = document.getElementById('counter')
let decrementButton = document.getElementById('-').addEventListener('click',function(){counterNumber--})
let incrementButton = document.getElementById('+').addEventListener('click', function(){counterNumber++})
let heartButton = document.getElementById('<3').addEventListener('click', function(){})
let pauseButton = document.getElementById('pause')
let theFormInput = document.getElementById('form-input')
let submitButton = document.getElementById('comment-form').addEventListener('submit', function(event){
  event.preventDefault()
  let newComment = document.createElement('div')
  newComment.innerHTML = theFormInput.value
  document.body.append(newComment)
  console.log(theFormInput.value)

})

pauseButton.addEventListener('click', function(){pauseHandler(pauseButton)})


setInterval(function(){
  if(!paused)
  {
    counterNumber++;
  }
  counter.innerHTML = counterNumber.toString()

}, 1000)
