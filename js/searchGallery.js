/**
 * Search for an <a>-wrapped image by its title or caption and display only those images in the 
 * .gallery HTML element
 */
const searchImg = () => {
    const input = document.getElementById('search');
    const filter = input.value.toLowerCase();
    let a, item, titleValue, captionValue;
    a = document.querySelectorAll("a");
    
    for (let i = 0; i < a.length; i++) {
        item = a[i];
        titleValue = item.title;
        captionValue = item.getAttribute("data-caption");
        if ( titleValue.toLowerCase().includes(filter) || captionValue.toLowerCase().includes(filter) ) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    }
};