import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter, generateAndRedirectUrl } from './generator.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Code Canvas builder</h1>
    <div class="card">
      <button id="counter" type="button">Generate New</button>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
window.onload = () => {
  let hasSeed = new URLSearchParams(window.location.search).has("seed")
  if (hasSeed == false) {
      generateAndRedirectUrl()
  }
}