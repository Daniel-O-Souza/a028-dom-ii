function  adicionaItem(event) {

    const newArticle = document.createElement("article")

    const newContent = document.createTextNode("Teste")

    newArticle.appendChild(newContent)

    const container = document.getElementById("container")

    container.insertAdjacentElement("beforeend", newArticle)
 
}