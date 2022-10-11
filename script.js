function  adicionaItem(event) {

    const newArticle = document.createElement("article")

    newArticle.setAttribute("class", "item")

    const newContent = document.createTextNode("")

    newArticle.appendChild(newContent)

    const container = document.getElementById("container")

    container.insertAdjacentElement("beforeend", newArticle)
 
    
}



function removeItem(event){

    event.target.remove()

}