import { addClass, removeClass } from "@/util/helpers.js";


export default {
  install(app) {
    app.directive("tooltip", {
      mounted(el, binding) {
        const span = document.createElement("SPAN");
        const text = document.createTextNode(
          `Seats available : ${binding.value}`
        );
        span.appendChild(text);

        addClass(span, "tooltip");
        el.appendChild(span);

        const div = el.childNodes[0];

        function tooltipShow(e) {
          addClass(span, "tooltip-show");
        }
        div.addEventListener("mouseover", tooltipShow);
        function tooltipHide(e) {
          removeClass(span, "tooltip-show");
        }
        div.addEventListener("mouseout", tooltipHide);
      }
    });
  }
};
