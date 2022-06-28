const test = () => {
    const title = document.createElement('h1')
    title.textContent = 'Работа с DOM'
    document.body.prepend(title)
}
test()  

const article = () => {
    const a = document.createElement('a')
    a.href = 'https://www.w3bai.com/ru/jsref/dom_obj_article.html'
    a.textContent = 'Статья о DOM'
    let div_main = document.getElementById('main')
    div_main.append(a)
}
article()

const changeColor = (color) => {
  document.body.style.backgroundColor = color
}
changeColor('orange')


const doSmth = (text) => {
  const li = document.createElement('li')
  const listId = document.getElementById('list')
  li.textContent = text
  listId.append(li)
}
doSmth('какой-то текст :)')


const deleteBlock = () => {
    const copyright = document.getElementById('copyright').remove()
}
deleteBlock()


