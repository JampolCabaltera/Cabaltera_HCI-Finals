const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', ()=> {
  const currentScroll = window.pageYOffset

  if (currentScroll <= 0) {
    body.classList.remove("scroll-up")
  }
  
  if(currentScroll > lastScroll && !body.classList.contains("scroll-down")){
    body.classList.remove("scroll-up")
    body.classList.add("scroll-down")
  }

  if(currentScroll < lastScroll && body.classList.contains("scroll-down")){
    body.classList.remove("scroll-down")
    body.classList.add("scroll-up")
  }

  lastScroll = currentScroll
}) 


