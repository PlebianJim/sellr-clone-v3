function fixedHeaderSection() {
  //When the user scrolls the page, execute the "stickToTheTop()" function
  window.onscroll = function () {
    stickToTheTop();
  };

  //Get the navbar using the ID
  let headerBar = document.getElementById("header-bar");

  //Get the offset position of the header
  let sticky = headerBar.offsetTop;

  //Add the .sticky class to the header section when you reach its scroll position. Remove .sticky when you leave the scroll position
  function stickToTheTop() {
    if (window.scrollY >= sticky) {
      headerBar.classList.add("sticky");
    } else {
      headerBar.classList.remove("sticky");
    }
  }
}

fixedHeaderSection();
