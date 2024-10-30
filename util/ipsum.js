toFill = document.getElementsByClassName("ipsum");
ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut lobortis libero. Vestibulum vel sapien iaculis diam euismod commodo. Morbi sit amet ante vitae orci sagittis facilisis vitae viverra magna. Aliquam erat volutpat. Donec quis tellus nunc. Aliquam erat volutpat. Ut facilisis porta ipsum, placerat lobortis nisi pretium non. In congue mauris eget neque tempor, eget interdum magna rhoncus."

for (let element of toFill) {
    element.innerHTML = ipsum;
};