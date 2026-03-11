const infos = document.getElementById('infos')

const params = new URLSearchParams(window.location.search)

const nom = params.get("nom")
const lat = params.get("lat")
const long = params.get("long")


console.log(nom)
console.log(lat)
console.log(long)

let lien2 = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`



async function chargerBonneMeteo() {

    try {
        const req = await fetch(lien2)
        if (!req.ok) {
            throw new Error(`Erreur HTTP : ${req.status}`)
        }
        
        const bonres = await req.json()
            

        class Info {
	        constructor(ville, temp, desc) {
                this.ville = ville;
                this.temp = temp;
                this.desc = desc;
	    }


        // afficherInfos() {
        // 	return 
        // }
        }

    const cetteVille = new Info(`${nom}`,`${bonres.current_weather.temperature}`,`${bonres.current_weather.weathercode}`)

function convertirMeteo(code) {
    const codes = {
        0: "🔆 Soleil et ciel bleu",
        1: "🌤️ Soleil, légèrement nuageux",
        2: "⛅ En partie nuageux",
        3: "☁️ Couvert",
        45: "🌫️ Brouillard",
        48: "🧊 Gros brouilard",
        51: "🌦️ Légères averses",
        53: "🌦️ Bruine",
        55: "🌦️ Forte bruine",
        56: "🌧️ Bruine froide",
        57: "🌧️ Bruine glacée",
        61: "🌧️ Pluie légère",
        63: "🌧️ Pluie",
        65: "🌧️ Forte pluie",
        66: "🌧️ Pluie froide",
        67: "🌧️ Pluie glacée",
        71: "🌨️ Neige légère",
        73: "🌨️ Neige",
        75: "🌨️ Forte Neige",
        80: "🌦️ Drache légère",
        81: "🌧️ Drache",
        83: "🌧️ Forte drache",
        86: "🌨️ Pluie de neige",
        95: "⛈️ Orage",
        96: "⛈️ Orages légers avec grêle",
        99: "⛈️ Orages avec grêle"
    }
    return codes[code] || "fin du monde?"
}

convertirMeteo(bonres.current_weather.weathercode)


        let affichage = 
        `<article>
            <p>${cetteVille.ville}</p>
            <p>température :  ${cetteVille.temp}°</p>
            <p>description : ${convertirMeteo(cetteVille.desc)}</p>
        </article>`

        infos.insertAdjacentHTML('beforeend', affichage);
    }  catch (e) {
		console.error("une erreur s'est produite :", e)
	}
};

chargerBonneMeteo()
