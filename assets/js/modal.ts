// TODO: Replace this with a proper class please.

let backdrop: HTMLElement | null = document.getElementById("modal");
let dummy: HTMLElement | null = document.getElementById("modalBackDrop");
let modalClose: HTMLElement | null = document.getElementById("imgModalClose");
let caption: HTMLElement | null = document.getElementById("imgModalCaption");
let modalImg: HTMLImageElement | null = document.getElementById(
  "modalImg",
) as HTMLImageElement;

let images: NodeListOf<HTMLElement> = document.querySelectorAll(
  ".zoomable, article img",
);

let currentImage: HTMLElement;
let oldRect: DOMRect;

let zoomed: boolean = false;
let busy: boolean = false;

let scale: number = 1;

modalClose!.addEventListener("click", closeModal);
dummy!.addEventListener("click", closeModal);
window.addEventListener("wheel", scroll);

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  currentX = e.clientX - startX;
  currentY = e.clientY - startY;
  modalImg!.style.transform = `translate(${currentX}px, ${currentY}px) scale(${scale})`;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  modalImg!.style.cursor = "grab";
});

images.forEach((image) => {
  image.addEventListener("click", () => {
    openModal(image as HTMLImageElement);
  });
});

function closeModal() {
  if (!busy) {
    busy = true;

    currentImage.style.transition = "none";

    currentImage.style.transform = setToBoundingClientRects(
      modalImg!.getBoundingClientRect(),
      oldRect,
    );

    currentImage.getBoundingClientRect();

    modalImg!.style.opacity = "0";
    currentImage!.style.opacity = "1";

    console.log(currentImage.style.transform);

    backdrop!.classList.remove("modal--active");
    modalClose!.classList.remove("modal--active");

    requestAnimationFrame(() => {
      zoomed = false;

      currentImage.style.transition = "";
      currentImage.style.transform = "";

      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    });
  }
}

const scrollAmount: number = 0.1;

let isDragging = false;
let startX: number, startY: number;
let currentX = 0,
  currentY = 0;

function openModal(image: HTMLImageElement) {
  if (!busy) {
    startX = 0;
    startY = 0;
    currentX = 0;
    currentY = 0;

    scale = 1;
    modalImg!.style.transform = `scale(${scale.toString()})`;

    oldRect = image.getBoundingClientRect();

    busy = true;
    currentImage = image;

    let figureCaption: HTMLElement | null =
      image.parentElement!.querySelector("figcaption");

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    //Get alt text
    if (figureCaption) {
      caption!.innerText = figureCaption!.querySelector("p")!.innerText;
    } else {
      caption!.innerText = image.getAttribute("alt")!;
    }

    image.classList.add("image-zoomable");
    modalImg!.src = image.src;

    image.addEventListener("transitionend", transitionLogic);

    function transitionLogic() {
      busy = false;

      if (zoomed) {
        modalImg!.style.opacity = "1";
        image.style.opacity = "0";
      } else {
        image.classList.remove("image-zoomable");
        image.removeEventListener("transitionend", transitionLogic);
      }
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        zoomed = true;
        setToBoundingClient(modalImg!, image);
      });
    });

    backdrop!.classList.add("modal--active");
    modalClose!.classList.add("modal--active");

    modalImg!.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.clientX - currentX;
      startY = e.clientY - currentY;
      modalImg!.style.cursor = "grabbing";
    });
  }
}

function scroll(e: WheelEvent) {
  if (e.deltaY > 0) {
    scale -= scrollAmount;
  } else {
    scale += scrollAmount;
  }
  modalImg!.style.transform = `translate(${currentX}px, ${currentY}px) scale(${scale})`;
}

function setToBoundingClient(elementFrom: HTMLElement, elementTo: HTMLElement) {
  elementFrom.offsetHeight;

  const rectFrom = elementFrom.getBoundingClientRect();
  const rectTo = elementTo.getBoundingClientRect();

  elementTo.style.transform = setToBoundingClientRects(rectFrom, rectTo);
}

function setToBoundingClientRects(rectFrom: DOMRect, rectTo: DOMRect) {
  const fromCX = rectFrom.left + rectFrom.width / 2;
  const fromCY = rectFrom.top + rectFrom.height / 2;

  const toCX = rectTo.left + rectTo.width / 2;
  const toCY = rectTo.top + rectTo.height / 2;

  const scaleX = rectFrom.width / rectTo.width;
  const scaleY = rectFrom.height / rectTo.height;

  const dx = fromCX - toCX;
  const dy = fromCY - toCY;

  return `translate3d(${dx}px, ${dy}px, 0) scale(${scaleX}, ${scaleY})`;
}
