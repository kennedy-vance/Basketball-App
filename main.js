document.querySelector('button').addEventListener('click', findPlayer, findStats)

function findPlayer(){
  const choice = document.querySelector('input').value
  const url = `https://www.balldontlie.io/api/v1/players?search=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function findStats(){
    const choice = document.querySelector('input').value
    const url = `https://www.balldontlie.io/api/v1/stats`
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
         console.log(data)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }