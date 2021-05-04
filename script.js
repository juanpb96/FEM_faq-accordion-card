function toggle(e) {
    const cardSelector = 'card__';
    const buttonTag = e.target.parentNode.localName === 'div' ? e.target : e.target.parentNode;
    const arrowTag = buttonTag.children[1];
    const answerTag = buttonTag.nextElementSibling;
    // Check class active 
    if (!buttonTag.className.includes(` ${cardSelector}button--active`)) {
        buttonTag.className += ` ${cardSelector}button--active`;
        arrowTag.className  += ` ${cardSelector}arrow--active`;
        answerTag.className += ` ${cardSelector}answer--active`;
    } else {
        buttonTag.className = `${cardSelector}button`;
        arrowTag.className  = `${cardSelector}arrow`;
        answerTag.className = `${cardSelector}answer`;
    }
}

let buttons = [...document.getElementsByTagName('button')];

buttons.forEach(button => {
    button.addEventListener('click', toggle);
});