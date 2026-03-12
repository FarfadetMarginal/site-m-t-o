const input = document.getElementById('search')
const searchButton = document.getElementById('searchButton')
const delButton = document.getElementById('delButton')
const liste = document.getElementById('liste')
const listefav = document.getElementById('listefav')
const voirfav = document.getElementById('voirfav')

let favorisls = [
    {
        nom : "Paris",
        region: "Île-de-France",
        lat: 48.85341,
        long: 2.3488
    }
];

const favorisdata = JSON.parse(localStorage.getItem("favorisls")) || favorisls

console.log(favorisdata[0].region)

searchButton.addEventListener('click',() => {
    let recherche = input.value;
    let lien1 = `https://geocoding-api.open-meteo.com/v1/search?name=${recherche}&language=fr&format=json`
    console.log(lien1)
    chargerMeteo(lien1)

});

delButton.addEventListener("click", () => {
    liste.textContent="";
    input.value="";
    console.log("ytubhnji")
})



async function chargerMeteo(x) {

    try {
		const req = await fetch(x)
		if (!req.ok) {
			throw new Error(`Erreur HTTP : ${req.status}`)
		}
		
		const resrecherche = await req.json();


        (resrecherche.results || []).forEach((lieu) => {
        let long = lieu.longitude;
        let lat = lieu.latitude;
        let nom = lieu.name;
        let region = lieu.admin1;
        let id = lieu.id;
        let lien2 = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`
        console.log(nom)
        console.log(long)
        console.log(lat)
        console.log(lien2)
        let truc = 
        `
        <div>
        <h3>${nom}</h3>
        <p>Région : ${region}</p>
        <a href="page.html?nom=${nom}&lat=${lat}&long=${long}">voir</a>
        <button>ajouter au favoris</button>
        </div>
        `

    
        liste.insertAdjacentHTML('beforeend', truc);



        const derniereDiv = liste.lastElementChild;
        const addfav = derniereDiv.querySelector('button');
        let machin = 
            {
        nom : `${nom}`,
        region: `${region}`,
        lat: `${lat}`,
        long: `${long}`
            }
        // `
        // <div class="elfav">
        // <h3>${nom}</h3>
        // <p>Région : ${region}</p>
        // <a href="page.html?nom=${nom}&lat=${lat}&long=${long}">voir</a>
        // <button>supprimer des favoris</button>
        // </div>
        // `

        addfav.addEventListener("click", () => {
            // listefav.insertAdjacentHTML('beforeend', machin);
            let favoris = JSON.parse(localStorage.getItem("favorisls")) || [] ;
            favoris.push(machin);
            localStorage.setItem("favorisls", JSON.stringify(favoris));
             console.log(localStorage.getItem("favorisls")) 
             alert(`c'est bon, ${nom} est en favori! (actualise et tu verras)`)
        })


    });

    } catch (e) {
		console.error("une erreur s'est produite :", e)
	}

}


    
    favorisdata.forEach((el) => {
        let machin =  `
        <div class="elfav">
        <h3>${el.nom}</h3>
        <p>Région : ${el.region}</p>
        <a href="page.html?nom=${el.nom}&lat=${el.lat}&long=${el.long}">voir</a>
        <button>supprimer des favoris</button>
        </div>
         `
        listefav.insertAdjacentHTML('beforeend', machin);

        const dernierFav = listefav.lastElementChild;
        const delfav = dernierFav.querySelector('button');

        delfav.addEventListener("click", () => {
            dernierFav.remove();
            let favoris = JSON.parse(localStorage.getItem("favorisls"));
            favoris = favoris.filter(f => f.nom !== el.nom);
            localStorage.setItem("favorisls", JSON.stringify(favoris));
        })

    });

    voirfav.addEventListener("click", () => {
    console.log("oui?")
    listefav.classList.toggle("cache")

})








