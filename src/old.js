const ulRef = document.querySelector('.js-gallery')
const modalRef = document.querySelector('.lightbox')
const modalContentRef = document.querySelector('.lightbox__image')
const dataSource = []

const addLiInUl = galleryItems.map((imgs) => {
  const li = document.createElement('img')
  li.setAttribute('src', imgs.preview)
  li.setAttribute('data-source', imgs.original)
  li.setAttribute('style', 'width: 100%')
  li.setAttribute('style', 'height: 100%')

  return li
})
ulRef.append(...addLiInUl)

addLiInUl.forEach((elem) => {
  dataSource.push(elem.dataset.source)
  elem.addEventListener('click', function (e) {
    modalRef.classList.add('is-open')
    modalContentRef.src = elem.dataset.source
  })
})

document.querySelector('.lightbox__button').addEventListener('click', () => {
  modalRef.classList.remove('is-open')
})

document.querySelector('.lightbox__overlay').addEventListener('click', () => {
  modalRef.classList.remove('is-open')
})

document.addEventListener('keydown', (e) => {
  const currentIndex = dataSource.indexOf(modalContentRef.src)

  if (e.key === 'ArrowLeft') {
    leftClick(currentIndex)
  } else if (e.key === 'ArrowRight') {
    rightCliick(currentIndex)
  }
})

function leftClick(currentIndex) {
  let nextIndex = currentIndex - 1

  if (nextIndex === -1) {
    nextIndex = dataSource.length - 1
  }
  modalContentRef.src = dataSource[nextIndex]
}
function rightCliick(currentIndex) {
  let nextIndex = currentIndex + 1
  if (nextIndex === dataSource.length) {
    nextIndex = 0
  }
  modalContentRef.src = dataSource[nextIndex]
}

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    modalRef.classList.remove('is-open')
    modalRef.src = ''
  }
})
