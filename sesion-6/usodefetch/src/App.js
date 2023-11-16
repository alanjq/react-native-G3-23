import './App.css';

function App() {
  const URL_API = 'https://api.coindesk.com/v1/bpi/currentprice.json'

  function handleError(causa) {
    console.log(causa.message);
  }

  fetch(URL_API)
    .then((response) => response.json())
    .then((response) => {
      window.monedas = response.bpi
    })
    .catch(handleError)

  return (
    <div>
      Ejemplo con fetch
    </div>
  );
}

export default App;
