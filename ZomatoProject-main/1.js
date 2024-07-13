
document.addEventListener("DOMContentLoaded", function() {
    // When the user scrolls the page, execute the function
    window.onscroll = function() {makeSticky()};

    // Get the filters element
    var filters = document.querySelector('.filters');

    // Get the offset position of the filters
    var stickyOffset = filters.offsetTop;

    // Add the sticky class to the filters when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function makeSticky() {
        if (window.pageYOffset >= stickyOffset) {
            filters.classList.add("sticky");
        } else {
            filters.classList.remove("sticky");
        }
    }
});










