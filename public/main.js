const hasilTrans = document.querySelector('#hasil')
const textInput = document.querySelector('#textinp')
const target = document.getElementById('targetLanguage')
const source = document.getElementById('sourceLanguage')

// Fetch weather data from API
const fetchText = async (text,lang,src) => {
  const url = `/api?q=${text}&target=${lang}&source=${src}`

  const res = await fetch(url)
  const data = await res.json()

  if (data.cod === '404') {
    alert('City not found')
    return
  }

  if (data.cod === 401) {
    alert('Invalid API Key')
    return
  }
  console.log(data);
  const hasil=data.data.translations[0].translatedText;

  hasilToDOM(hasil)
}

// Add display data to DOM
const hasilToDOM = (data) => {
  hasilTrans.value = data
}


const element = document.getElementById("buttons");
element.addEventListener("click", myFunction);

function myFunction() {
  

    fetchText(textInput.value,target.value,source.value)
  
}
// Event listener for form submission


// Initial fetch
//fetchWeather('Welcome to Translator')