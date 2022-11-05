import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const instance = basicLightbox.create(
  `
    <div class="modal">
        <img src="" alt="large img">
    </div>
`
);
const gallery = document.querySelector("div.gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      ` <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
      </a>
      </div>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", markup);
const closeModal = (event) => {
  if (event.key === "Escape") {
    instance.close();
    return document.removeEventListener("keydown", closeModal);
  }
};
const IMG = document.querySelector("img");
gallery.addEventListener("click", (event) => {
  event.preventDefault();
  const clickedElement = event.target;

  if (clickedElement.nodeName !== "IMG") return;
  const largeImgAlt = clickedElement.alt;
  const largeImgUrl = clickedElement.dataset.source;
  const img = instance.element();
  const modalImg = img.querySelector("img");
  modalImg.src = largeImgUrl;
  modalImg.alt = largeImgAlt;
  document.addEventListener("keydown", closeModal);
  instance.show();
});
