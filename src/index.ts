import me from './me'
import pokemon from './pokemon'

const cache = [
  {
    key: 'me',
    title: 'Me',
    data: {
      name: 'Гордеев Никита Сергеевич',
      group: 'M3309',
    },
  },
  {
    key: 'pokemon1',
    title: 'Poke 1',
    data: () => fetch(`https://pokeapi.co/api/v2/pokemon/1/`),
  },
  {
    key: 'pokemon2',
    title: 'Poke 2',
    data: () => fetch(`https://pokeapi.co/api/v2/pokemon/2/`),
  },
  {
    key: 'pokemon3',
    title: 'Poke 3',
    data: () => fetch(`https://pokeapi.co/api/v2/pokemon/3/`),
  },
  {
    key: 'pokemon4',
    title: 'Poke 4',
    data: () => fetch(`https://pokeapi.co/api/v2/pokemon/4/`),
  },
  {
    key: 'pokemon5',
    title: 'Poke 5',
    data: () => fetch(`https://pokeapi.co/api/v2/pokemon/5/`),
  },
  {
    key: 'pokemon6',
    title: 'Poke 6',
    data: () => fetch(`https://pokeapi.co/api/v2/pokemon/6/`),
  },
  {
    key: 'pokemon7',
    title: 'Poke 7',
    data: () => fetch(`https://pokeapi.co/api/v2/pokemon/7/`),
  },
]

const root = document.querySelector('#root') //функция для выборки элемента из dom-дерева // # - id .-class ""-tag name
const app = document.createElement('div')

const tabList = document.createElement('ul') //тэг который мы хотим создать
const info = document.createElement('div')

for (let { title, key } of cache) {
  //Создаем элементы для переключения и навешиваем обработчики(66стр)
  const indexInCacheArray = cache.findIndex((item) => item.key === key)

  const li = document.createElement('li')
  const link = document.createElement('a')
  link.setAttribute('href', '#')
  li.appendChild(link)
  link.innerText = title

  link.addEventListener('click', async () => {
    const { data } = cache[indexInCacheArray]

    // resolve object fetching
    if (typeof data === 'function') {
      cache[indexInCacheArray].data = await (await data()).json()
    }

    const infoRenderer = key === 'me' ? me : pokemon
    infoRenderer(info, cache[indexInCacheArray].data)
  })

  tabList.appendChild(li)
}

app.appendChild(tabList)
app.appendChild(info)
root.appendChild(app)
