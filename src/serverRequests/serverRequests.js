export const onSubmitSignIn = (email, password) => {
  return fetch('http://localhost:4000/signin', {
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
  return fetch('http://localhost:4000/movies', {
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
  return fetch('http://localhost:4000/remove', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      id: userId,
      movie_id: data.id
    })
  })
}

