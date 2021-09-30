const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
]

const ulRef = document.querySelector('.js-gallery')
const modalRef = document.querySelector('.js-lightbox')
const closeBtn = document.querySelector('button[data-action="close-lightbox"]')
const modalContentRef = document.querySelector('.lightbox__image')

const dataSource = []

const liGallery = galleryItems
  .map((li) => {
    return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${li.original}"
  >
    <img
      class="gallery__image"
      src="${li.preview}"
      data-source="${li.original}"
      alt="${li.description}"
    />
  </a>
</li>`
  })
  .join('')
// console.log(liGallery)

ulRef.insertAdjacentHTML('beforeend', liGallery)

const galleryImgAll = document.querySelectorAll('.gallery__image')
// console.log(galleryImgAll)
galleryImgAll.forEach((elem) => {
  dataSource.push(elem.dataset.source)

  elem.addEventListener('click', (e) => {
    e.preventDefault()
    modalRef.classList.add('is-open')
    modalContentRef.src = e.target.dataset.source
    modalContentRef.alt = e.target.getAttribute('alt')
    console.log(e.target)
  })
})

closeBtn.addEventListener('click', closeModal)
modalRef.addEventListener('click', closeModal)

document.addEventListener('keydown', (e) => {
  const currentIndex = dataSource.indexOf(modalContentRef.src)

  if (e.key === 'ArrowLeft') {
    leftClick(currentIndex)
  } else if (e.key === 'ArrowRight') {
    rightCliick(currentIndex)
  }
})

function closeModal() {
  modalRef.classList.remove('is-open')
  modalContentRef.src = ''
  modalContentRef.alt = ''
}

function leftClick(currentIndex) {
  let nextIndex = currentIndex - 1

  if (nextIndex === -1) {
    nextIndex = dataSource[nextIndex]
  }
}

function rightCliick(currentIndex) {
  let nextIndex = currentIndex + 1

  if (nextIndex === dataSource.length) {
    nextIndex = 0
  }
  modalContentRef.src = dataSource[nextIndex]
}
