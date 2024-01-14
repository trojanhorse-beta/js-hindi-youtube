const buttons = document.querySelectorAll('.button')
console.log(buttons)

const body = document.querySelector('body')

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click',function(e){
    body.style.backgroundColor = e.target.id
    /* console.log(e)
    const targetId = e.target.id
    body.style.backgroundColor = targetId */

    /* if(targetId === 'grey'){
      body.style.backgroundColor = targetId
    }
    else if(targetId === 'yellow'){
      body.style.backgroundColor = targetId
    }
    else if(targetId === 'blue'){
      body.style.backgroundColor = targetId
    }
    else if(targetId === 'white'){
      body.style.backgroundColor = targetId
    } */
  })
})