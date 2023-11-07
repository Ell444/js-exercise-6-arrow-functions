//Crea una semplice pagina HTML con un elemento div.
//Usa JavaScript per cambiare l'innerHTML e l'innerText del div.

window.addEventListener ('load', () => {
    const div = document.getElementById('tristezza')
    div.innerText += `
    Hey! Non essere triste. Io sono un semplice innerText. Uffa.`
    div.innerHTML += '<p>Heyla. io sono un p.</p>';
})
