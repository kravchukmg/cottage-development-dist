document.addEventListener("DOMContentLoaded", () => {
  lazyload();
  AOS.init({
    duration: 700,
    anchorPlacement: "center-bottom",
  });

  let tabListArr = document.querySelectorAll(".tab-list");

  tabListArr.forEach((element) => {
    element.addEventListener("click", tabHandler);
  });
});

function tabHandler(e) {
  let tabItemArr = this.querySelectorAll(".tab-item");
  let paneList = this.nextElementSibling;
  let paneItemArr = paneList.querySelectorAll(".pane-item");

  if (e.target.classList.contains("is-active") || e.target == this) {
    return;
  }
  tabItemArr.forEach((element, index) => {
    if (element == e.target) {
      // activate the tab
      e.target.classList.add("is-active");
      // activate the pane
      paneItemArr[index].classList.add("show");
    } else {
      // deactivate the tabs
      element.classList.remove("is-active");
      // deactivate the panes
      paneItemArr[index].classList.remove("show");
    }
  });
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBsYXp5bG9hZCgpO1xyXG4gIEFPUy5pbml0KHtcclxuICAgIGR1cmF0aW9uOiA3MDAsXHJcbiAgICBhbmNob3JQbGFjZW1lbnQ6IFwiY2VudGVyLWJvdHRvbVwiLFxyXG4gIH0pO1xyXG5cclxuICBsZXQgdGFiTGlzdEFyciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiLWxpc3RcIik7XHJcblxyXG4gIHRhYkxpc3RBcnIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFiSGFuZGxlcik7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gdGFiSGFuZGxlcihlKSB7XHJcbiAgbGV0IHRhYkl0ZW1BcnIgPSB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiLWl0ZW1cIik7XHJcbiAgbGV0IHBhbmVMaXN0ID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgbGV0IHBhbmVJdGVtQXJyID0gcGFuZUxpc3QucXVlcnlTZWxlY3RvckFsbChcIi5wYW5lLWl0ZW1cIik7XHJcblxyXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1hY3RpdmVcIikgfHwgZS50YXJnZXQgPT0gdGhpcykge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICB0YWJJdGVtQXJyLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICBpZiAoZWxlbWVudCA9PSBlLnRhcmdldCkge1xyXG4gICAgICAvLyBhY3RpdmF0ZSB0aGUgdGFiXHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJpcy1hY3RpdmVcIik7XHJcbiAgICAgIC8vIGFjdGl2YXRlIHRoZSBwYW5lXHJcbiAgICAgIHBhbmVJdGVtQXJyW2luZGV4XS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGRlYWN0aXZhdGUgdGhlIHRhYnNcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xyXG4gICAgICAvLyBkZWFjdGl2YXRlIHRoZSBwYW5lc1xyXG4gICAgICBwYW5lSXRlbUFycltpbmRleF0uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIl0sImZpbGUiOiJtYWluLmpzIn0=
