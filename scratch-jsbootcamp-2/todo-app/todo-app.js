const paragraphs = document.querySelector('p')

paragraphs.forEach(function (paragraph) {
    if (paragraph.textContent.includes('the')) {
        paragraph.remove()
    }
    
})
