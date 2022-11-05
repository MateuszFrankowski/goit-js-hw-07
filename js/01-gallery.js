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
console.log(gallery);
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
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

const IMG = document.querySelector("img");
gallery.addEventListener("click", (event) => {
  event.preventDefault();
  const clickedElement = event.target;
  console.log(clickedElement);
  if (clickedElement.nodeName !== "IMG") return;
  const largeImgAlt = clickedElement.alt;
  const largeImgUrl = clickedElement.dataset.source;
  const img = instance.element();
  const modalImg = img.querySelector("img");
  modalImg.src = largeImgUrl;
  modalImg.alt = largeImgAlt;

  instance.show();
  const modal = document.querySelector("div.modal");
  modal.addEventListener("keydown", (event) => {
    console.log("test");
    if (event.key === "Escape") {
      instance.close();
      modal.removeEventListener("keydown", event);
    }
  });
  console.log("xd");
});
