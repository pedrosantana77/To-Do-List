// localStorage.setItem('teste', 'Pedro' )

// sessionStorage.setItem('teste', 'Pedro')

// const testeLocal = localStorage.getItem('teste')

// const testeSession = sessionStorage.getItem('teste')

const divLocal = document.getElementById('local')
const divSession = document.getElementById('session')

const nomes = ['Pedro', ' Maria Clara', ' Messi', ' Neymar']

localStorage.setItem('teste', JSON.stringify(nomes))

const recuparandoDados = JSON.parse(localStorage.getItem('teste'))

console.log(typeof(recuparandoDados))

// localStorage.removeItem('teste')

// divLocal.innerText = testeLocal

// divSession.innerText = testeSession
