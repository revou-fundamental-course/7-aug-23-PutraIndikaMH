const alas = document.getElementById('alas-input')
const tinggi = document.getElementById('tinggi-input')
const hitung = document.getElementById('hitung')
const reset = document.getElementById('reset')
const output = document.getElementById('output')

hitung.addEventListener("click", function () {
    let a = alas.value;
    let t = tinggi.value;
    let l = 0.5 * a * t;

    output.innerHTML = `Luas dari segitiga  adalah ${l} cm`;
});


reset.addEventListener("click", function () {
    alas.value = "";
    tinggi.value = "";
    output.textContent = "";
});


kelilingSegitigaDisplay () 

this.heroReeader.innerText= "segitiga"
this.heroImage.setAtribute("src","./assets/segitiga.jpg")



