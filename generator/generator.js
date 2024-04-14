import './generatorStyle.css'
import { Keypair } from '@solana/web3.js';

function generateSolanaPublicKey() {
  const keypair = Keypair.generate();
  const publicKeyBase58 = keypair.publicKey.toBase58();
  return publicKeyBase58;
}

function generateAndRedirectUrl() {
  const publicKey = generateSolanaPublicKey();
  const baseUrl = import.meta.env.DEV_SERVER_URL || window.location.origin;
  const url = new URL(baseUrl);
  url.searchParams.set('seed', publicKey);
  console.log(url.toString())
  window.location.href = url.toString();
}

function setupCounter(element) {
  const generateKey = (count) => {
    generateAndRedirectUrl()
  }
  element.addEventListener('click', () => generateKey())
}

document.body.innerHTML = `
  <div id="sidebar">
    <h4>Code Canvas seed generator</h4>
    <div class="card">
      <button id="counter" type="button">Generate New</button>
    </div>
    <a href="https://superblob.studio">by Superblob Studio</a>
  </div>
`

setupCounter(document.querySelector('#counter'))
window.onload = () => {
  let hasSeed = new URLSearchParams(window.location.search).has("seed")
  if (hasSeed == false) {
      generateAndRedirectUrl()
  }
}