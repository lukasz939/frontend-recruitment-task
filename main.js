
    const popupQuerySelector = "#popup";
    const popupEl = document.querySelector(popupQuerySelector);
    const popupBttn = document.querySelector("#popup-trigger");
  
    popupBttn.addEventListener("click", () => {
      setTimeout(() => {
        if (!popupEl.classList.contains("show")) {
          // Add class `show` to filterList element
          popupEl.classList.add("show");
        }
      }, 250);
    });
  
  
    document.addEventListener("click", (e) => {
    // Check if the filter list parent element exist
    const isClosest = e.target.closest(popupQuerySelector);
  
    // If `isClosest` equals falsy & popup has the class `show`
    // then hide the popup
    if (!isClosest && popupEl.classList.contains("show")) {
      popupEl.classList.remove("show");
    }
  });



