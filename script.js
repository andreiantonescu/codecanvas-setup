function setup() {
    createCanvas(innerWidth, innerHeight)

    const urlParams = new URLSearchParams(window.location.search);

    let r = urlParams.has("seed")
        ? new Math.seedrandom(urlParams.get("seed"), { state: true })
        : new Math.seedrandom()

    background(r() * 255, r() * 255, r() * 255)
}

function draw() {

}