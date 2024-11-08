const body = document.querySelector('body')
body.style.backgroundColor="orange"
const form = document.querySelector('form')
const input = document.querySelectorAll('input')
const ul = document.querySelector('ul')

function saveTodo(e){
    e.preventDefault()

    const Name = document.createElement('li')
    Name.className = 'list-group-item w-50 mt-2 shadow'
    Name.innerText = input[0].value
    ul.appendChild(Name)
    
    const Age = document.createElement('li')
    Age.className = 'list-group-item w-50 mt-2 shadow'
    Age.innerText = input[1].value
    ul.appendChild(Age)

    const Phone = document.createElement('li')
    Phone.className = 'list-group-item w-50 mt-2 shadow'
    Phone.innerText = input[2].value
    ul.appendChild(Phone)       

    const Address = document.createElement('li')
    Address.className = 'list-group-item w-50 mt-2 shadow'
    Address.innerText = input[3].value
    ul.appendChild(Address)

}

form.addEventListener('submit', saveTodo)