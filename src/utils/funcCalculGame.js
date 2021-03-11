export const launchCalculGame = (history, serie) => {
  localStorage.setItem('timeStart', Date.now())
  localStorage.setItem('serie', serie)
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
  var operateur = randomInt(4)
  var number1 = randomInt(numberMax)
  var number2 = randomInt(numberMax)
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
  localStorage.setItem('timeStart', 0)
  localStorage.setItem('timeEnd', 0)
  history.push('/menu')
}

const randomInt = max => {
  return Math.round(Math.random() * Math.round(max))
}
