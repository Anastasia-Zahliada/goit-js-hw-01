function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content);
    const pdngWidth = parseFloat(padding);
    const brdrWidth = parseFloat(border);
    const summary = contentWidth + (pdngWidth * 2) + (brdrWidth * 2);
    return summary;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
