({
    result: document.querySelector('.box__content').innerText === 'Oops! Something has gone wrong.\nReturn To Home Page',
    timestamp: new Date().toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' })
})