function getGithubProfileInfos() {
  const url = 'https://api.github.com/users/danielbressan93'

  fetch(url)
    .then(response => response.json())
    .then(data => {
      user.textContent = data.name
      userBio.textContent = data.bio
      github.href = data.html_url
      profile.src = data.avatar_url
      userLogin.textContent = data.login
    })

}

getGithubProfileInfos()
