import removeAllChilds from './removeAllChilds'
const pokemon = (target: HTMLElement, data) => { 
  removeAllChilds(target)
  console.log(data)
//Постепенно создаем html элементы и добавляем их в дерево
  // Abilities
  const abilities = document.createElement('div')
  abilities.textContent = 'Abilities'
  const abilitiesUl = document.createElement('ul')
  abilities.appendChild(abilitiesUl)

  data.abilities.forEach((ability) => {
    const abilityLi = document.createElement('li')
    abilityLi.textContent = `${ability.ability.name} ${
      ability.is_hidden ? '(hidden)' : ''
    }`
    abilitiesUl.appendChild(abilityLi)
  })

  target.appendChild(abilities)

  // Base experience
  const baseExperience = document.createElement('div')
  baseExperience.textContent = `Base experience: ${data.base_experience}`
  target.appendChild(baseExperience)

  // Species
  const species = document.createElement('div')
  species.textContent = `Species: ${data.species.name}`
  target.appendChild(species)

  // Types
  const types = document.createElement('div')
  const typesUl = document.createElement('ul')
  types.textContent = `Types`
  types.appendChild(typesUl)

  data.types.forEach((typeEntity) => {
    const typeLi = document.createElement('li')
    typeLi.textContent = `${typeEntity.type.name} (${typeEntity.slot})`
    typesUl.appendChild(typeLi)
  })
  target.appendChild(types)
}

export default pokemon
