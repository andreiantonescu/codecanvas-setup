import { Keypair } from '@solana/web3.js';
let initial = true

// Function to generate a Solana public key from a seed
function generateSolanaPublicKey() {
  const keypair = Keypair.generate(); // Generate a new keypair
  const publicKeyBase58 = keypair.publicKey.toBase58(); // Get the public key in base58 format
  return publicKeyBase58;
}

export function generateAndRedirectUrl() {
  const publicKey = generateSolanaPublicKey();
  const baseUrl = import.meta.env.DEV_SERVER_URL || window.location.origin;
  const url = new URL(baseUrl);
  url.searchParams.set('seed', publicKey); // Set the seed parameter to the generated public key
  console.log(url.toString())
  window.location.href = url.toString();
}

export function setupCounter(element) {
  const generateKey = (count) => {
    generateAndRedirectUrl()
  }
  element.addEventListener('click', () => generateKey())
}
