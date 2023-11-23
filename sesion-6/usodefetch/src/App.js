import './App.css';

function App() {
  const URL_API = 'https://api.coindesk.com/v1/bpi/currentprice.json'

  function handleError(causa) {

  }

  function fetch2(url) {
    return fetch(url)
    .then(response => response.json())
    .then(response => response.bpi)
    .catch((err) => console.log(err))
  }

  fetch2(URL_API)
    .then((data) => {
      window.monedas = data
    })


  fetch2(URL_API)
    .then((bpi) => {
      window.monedas = bpi
    })


  return (
    <div>
      Ejemplo con fetch
    </div>
  );
}

export default App;
