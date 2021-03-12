import { addNewScore } from './funcScore'

export const launchCalculGame = (history, serie, mode) => {
  localStorage.setItem('timeStart', Date.now())
  localStorage.setItem('serie', serie)
  localStorage.setItem('mode', mode)
  history.push('/game')
}

export const verifyCalcul = (
  resultPlayer,
  resultExpected,
  setErrorCalcul,
  history,
  setPage,
  page,
  serie
) => {
  if (resultPlayer == resultExpected) {
    if (page == serie) {
      localStorage.setItem('timeEnd', Date.now())
      history.push('/result')
    }
    setPage(page + 1)
    setErrorCalcul('')
  } else {
    setErrorCalcul('Résultat faux !')
  }
}

export const generateCalcul = (setCalcul, setResultExpected, numberMax) => {
  let operateur = randomInt(4)
  let number1 = randomInt(numberMax)
  let number2 = randomInt(numberMax)
  switch (operateur) {
    case 1:
      setResultExpected(number1 + number2)
      setCalcul(`${number1} + ${number2}`)
      return
    case 2:
      setResultExpected(number1 - number2)
      setCalcul(`${number1} - ${number2}`)
      return
    case 3:
      setResultExpected(number1 * number2)
      setCalcul(`${number1} x ${number2}`)
      return
    case 4:
      setResultExpected(Math.round((number1 / number2) * 1000) / 1000)
      setCalcul(`${number1} / ${number2}`)
      return
  }
}

export const resetGame = history => {
  cleanCache()
  history.push('/menu')
}

export const getResultGame = setResult => {
  const start = localStorage.getItem('timeStart')
  const end = localStorage.getItem('timeEnd')
  let malus = localStorage.getItem('malus')
  if (!malus) malus = 0
  const result = end - start + Number(malus)
  setResult(result)
  addNewScore(result)
}

export const cleanCache = () => {
  localStorage.removeItem('malus')
  localStorage.removeItem('timeStart')
  localStorage.removeItem('timeEnd')
  localStorage.removeItem('isAlreadyAdd')
}

const randomInt = max => {
  return Math.ceil(Math.random() * Math.round(max))
}
