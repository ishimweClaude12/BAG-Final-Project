const input = document.querySelector('#input')
const form = document.querySelector('#form')

form.addEventListener('submit', function (evt){
    evt.preventDefault
    // Create a div with a list item and some buttons

   const importantBtn =  document.createElement('button')
   importantBtn.textContent = 'Important'
   const trash =  document.createElement('button')
   trash.innerHTML = 'Delete'
   const listItem =  document.createElement('li')
   listItem.textContent = `${input.value}`
   listItem.append(trash)
   listItem.append(importantBtn)
   const list = document.querySelector('#list')
   list.appendChild(listItem)
   input.value = ''
}
)