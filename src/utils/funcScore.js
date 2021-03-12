import _ from 'lodash'
import { v4 as uuidv4 } from 'uuid'

export const getScoreList = scoreListTab => {
  scoreListTab.forEach(serie => {
    let nameItem = `scoresSerie${serie.value}`
    let tmp = localStorage.getItem(nameItem)
    if (tmp) {
      tmp = JSON.parse(tmp)
    } else {
      tmp = []
    }
    serie.setSerie(tmp)
  })
}

export const addNewScore = time => {
  let isAlreadyAdd = localStorage.getItem('isAlreadyAdd')
  if (!isAlreadyAdd) {
    let serie = localStorage.getItem('serie')
    let name = localStorage.getItem('playerName')
    let tmp = localStorage.getItem(`scoresSerie${serie}`)
    if (tmp) {
      tmp = JSON.parse(tmp)
    } else {
      tmp = []
    }
    let playerScore = { id: uuidv4(), name: name, score: time }
    tmp.push(playerScore)
    let tab = _.sortBy(tmp, [
      o => {
        return o.score
      }
    ])
    if (tab.length > 5) tab = tab.slice(0, 4)
    localStorage.setItem(`scoresSerie${serie}`, JSON.stringify(tab))
    localStorage.setItem('isAlreadyAdd', true)
  }
}

export const addMalus = () => {
  const value = 20000
  let malus = localStorage.getItem('malus')
  if (!malus) {
    malus = 0
  }
  malus = Number(malus) + Number(value)
  console.log(malus)
  localStorage.setItem('malus', malus)
}
