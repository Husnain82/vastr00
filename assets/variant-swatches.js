      class VariantSwatches extends HTMLElement {
        constructor () {
          super();
        }
        connectedCallback(){
          this.querySelectorAll(".swatch-image").forEach((swatch) => {
          swatch.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();

            const mainImage = e.currentTarget
              .closest(".card-wrapper")
              .querySelector(".card__media .media img");

            let newImage = e.currentTarget.src;
            newImage = newImage.replace("width=100", "width=500");

            mainImage.src = newImage;
            mainImage.removeAttribute("srcset");
          });
        });
        }
      }
customElements.define('variant-swatches', VariantSwatches)