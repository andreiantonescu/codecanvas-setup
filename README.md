# Solana seed generator for use in Code Canvas projects

This project uses the solana/web3.js library to generate a base58-encoded Solana public key that is then added to the URL as a 'seed' param.

Code Canvas projects then use this param as a seed for the PRNG that drive the generative outputs - https://docs.codecanvas.art/docs/artist/project-structure

Check a live example on https://seed.superblob.studio/. Here, the seed param is parsed from the URL using and feeded to the seedrandom.js library with the PRNG then used to set the background color via p5.js.

Place your script under the **script.js** file and make sure you use the seed param from the URL. 

Still thinking about how to make this more independent to not interfere with final project upload to Code Canvas - more to come, definitely a work in progress.