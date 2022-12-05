const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c1407d4e63msh5e661620d30875cp1437d6jsn313c04356ef9',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));