import removeAllChilds from './removeAllChilds'

const render = (target: HTMLElement, data) => {
  removeAllChilds(target)

  const nameDiv = document.createElement('div')
  nameDiv.innerHTML = `ФИО: ${data.name}`

  const groupDiv = document.createElement('div')
  groupDiv.innerHTML = `Группа: ${data.group}`

  target.append(nameDiv, groupDiv)
}

export default render
