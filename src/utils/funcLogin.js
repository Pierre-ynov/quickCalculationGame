import md5 from 'md5'

export const logoutPlayer = history => {
  console.log('logout')
  localStorage.removeItem('token')
  localStorage.removeItem('playerName')
  history.push('/')
}

export const loginPlayer = (name, history) => {
  console.log(name)
  if (verifyNamePlayer(name)) {
    console.log('login')
    localStorage.setItem('token', md5(Date.now + name))
    localStorage.setItem('playerName', name)
    history.push('/menu')
  } else {
    history.push('/')
  }
}

const verifyNamePlayer = name => {
  if (name.length > 20) {
    localStorage.setItem(
      'message',
      'Votre nom de joueur est trop grand. Nb caractère max: 20.'
    )
    return false
  } else if (name.length < 3) {
    localStorage.setItem(
      'message',
      'Votre nom de joueur est trop petit. Nb caractère mini: 3.'
    )
    return false
  }
  localStorage.setItem('message', '')
  return true
}

export const accessAuthorize = history => {
  if (!localStorage.getItem('token')) history.push('/')
}
