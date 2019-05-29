const url = 'https://pure-coast-97825.herokuapp.com/'

export const onSubmitSignIn = (email, password) => {
  return fetch(`${url}signin`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  .then(res => res.json())
}

export const dbUserSave = (data, userId) => {
  return fetch(`${url}movies`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      id: userId,
      movie_id: data.id,
      movies_data: data
    })
  })
  .then(res => res.json())
}

export const dbUserRemove = (data, userId) => {
  return fetch(`${url}remove`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      id: userId,
      movie_id: data.id
    })
  })
}

export const registerUser = (email, password, firstName, lastName) => {
  return fetch(`${url}register`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email: email,
      password: password,
      name: `${firstName} ${lastName}`
    })
  })
    .then(res => res.json())
}
