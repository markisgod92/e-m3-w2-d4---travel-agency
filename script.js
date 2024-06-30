const offersWeek = [
    {title: "Parigi, Francia", description: "Visita la Torre Eiffel, il Louvre e goditi una crociera sulla Senna.", offer: "4 giorni, 3 notti con volo incluso e colazione", img: "assets/destinations/pexels-thorsten-technoman-109353-338515.jpg"},
    {title: "Tokyo, Giappone", description: "Esplora i templi antichi, i moderni grattacieli e la vivace vita notturna.", offer: "7 giorni, 6 notti con tour guidato e biglietti per i trasporti pubblici", img: "assets/destinations/pexels-pierre-blache-651604-2389171.jpg"},
    {title: "New York, USA", description: "Scopri la Statua della Libertà, Times Square e Central Park.", offer: "5 giorni, 4 notti con volo, hotel e biglietti per attrazioni incluse.", img: "assets/destinations/pexels-pixabay-529621.jpg"},
    {title: "Barcellona, Spagna", description: "Ammira l'architettura di Gaudí, rilassati sulla spiaggia di Barceloneta e assapora tapas locali.", offer: "4 giorni, 3 notti con volo e colazione.", img: "assets/destinations/pexels-apasaric-1386444.jpg"}
];

const summerLocations = [
    {title: "Maldive", description: "Resort di lusso, immersioni subacquee e acque cristalline.", offer: "Offerta speciale per luna di miele.", img: "assets/destinations/pexels-asadphoto-3601426.jpg"},
    {title: "Bora Bora, Polinesia Francese", description: "Bungalow sull'acqua, snorkeling e romantici tramonti.", offer: "Pacchetti all-inclusive disponibili.", img: "assets/destinations/pexels-julius-silver-240301-753626.jpg"},
    {title: "Phuket, Thailandia", description: "Spiagge sabbiose, vita notturna vibrante e templi buddisti.", offer: "Pacchetti con escursioni incluse.", img: "assets/destinations/pexels-imagestudio-4679438.jpg"},
    {title: "Cancùn, Messico", description: "Resort all-inclusive, rovine maya e barriera corallina.", offer: "Offerte per famiglie.", img: "assets/destinations/pexels-israwmx-20210508.jpg"},
    {title: "Seychelles", description: "Spiagge bianche, foreste lussureggianti e riserve naturali.", offer: "Pacchetti eco-turismo disponibili.", img: "assets/destinations/pexels-heru-vision-289677440-13280841.jpg"},
    {title: "Hawaii, USA", description: "Spiagge vulcaniche, surf ed escursioni nei parchi nazionali.", offer: "Offerte speciali per gruppi.", img: "assets/destinations/pexels-recalmedia-60217.jpg"}
];

const offerDay = {title: "Santorini, Grecia", oldPrice: "€450.00", price: "€449.00", description: "3 giorni, 2 notti con volo e hotel. Goditi le viste mozzafiato sulla caldera, tramonti indimenticabili e la cucina greca.", offer: "28 GEN - 31 GEN", details: ["Volo andata e ritorno", "Soggiorno in hotel 2 stelle senza colazione", "Trasferimenti aeroporto-hotel", "Una cena tradizionale greca", "Escursione guidata di mezza giornata"], img: "assets/destinations/pexels-apasaric-1285625.jpg"};

const lastMinute = [
    {title: "Roma, Italia", description: "Offerta speciale per un weekend con volo e hotel.", offer: "7 days", img: "assets/destinations/pexels-pixabay-532263.jpg"},
    {title: "Dubai, Emirati Arabi Uniti", description: "4 giorni, 3 notti con visita al Burj Khalifa inclusa.", offer: "10 days", img: "assets/destinations/pexels-apasaric-2115367.jpg"},
    {title: "Bali, Indonesia", description: "7 giorni, 6 notti con escursioni e colazione.", offer: "14 days", img: "assets/destinations/pexels-freestockpro-2166553.jpg"},
    {title: "Lisbona, Portogallo", description: "3 giorni, 2 notti con tour della città incluso.", offer: "5 days", img: "assets/destinations/pexels-daniel-1547735.jpg"},
    {title: "Sydney, Australia", description: "5 giorni, 4 notti con escursione alla Grande Barriera Corallina", offer: "10 days", img: "assets/destinations/pexels-patrick-995765.jpg"}
];

const comments = [
    {user: "Mario Rossi", text: "Non posso credere di essere finito in un'escursione guidata nel boschi senza una guida! Ci hanno dato una mappa disegnata a mano e una bussola rotta."},
    {user: "Laura Bianchi", text: "La mia crociera alle Bahamas si è trasformata in una gita scolastica! C'erano più bambini urlanti che posti a sedere, e il capitano sembrava appena uscito da un film comico. Pensavo di essere su una nave da crociera, non su un set cinematografico!"},
    {user: "Gianni Verdi", text: "Il safari in Africa era così mal organizzato che abbiamo finito per essere inseguiti da un elefante! La nostra guida si è persa e abbiamo dovuto fare affidamento su Google Maps."},
    {user: "Federica Neri", text: "Pensavo che un giro in mongolfiera sarebbe stato romantico, Invece, siamo finiti in un campo di mucche, con il pilota che non sapeva come farci scendere. Alla fine, siamo stati salvati da un contadino locale. Non esattamente il finale che immaginavo."},
    {user: "Luca Gialli", text: "Le escursioni subacquee erano una delle attrazioni principali del viaggio. Peccato che ci abbiano dato attrezzature che sembravano provenire direttamente dagli anni '80. Ho finito con un tubo di respirazione pieno d'acqua e il panico totale."},
    {user: "Sofia Azzurri", text: "Abbiamo prenotato un'escursione in montagna, ma la guida non parlava una parola d'inglese o italiano. Ci siamo persi per ore, seguendo indicazioni che sembravano indovinelli."},
    {user: "Alessandro Viola", text: "Il tour in bicicletta attraverso Amsterdam sembrava un'ottima idea fino a quando le biciclette non hanno iniziato a rompersi una dopo l'altra. Mi sono ritrovato a spingere la bici per metà del percorso. Non proprio la mia idea di divertimento."},
    {user: "Chiara Rosa", text: "Pensavo che una giornata in barca a vela fosse rilassante. Peccato che il nostro skipper fosse un principiante che ha quasi fatto ribaltare la barca! Abbiamo finito con l'essere soccorsi dalla guardia costiera. Avventura indimenticabile, ma non in senso positivo!"}
];

const offersWeekList = document.getElementById("offersWeekList");
const welcomeSummerList = document.getElementById("welcomeSummerList");
const hotDealImg = document.getElementById("hot-deal-img");
const hotDealData = document.getElementById("hot-deal-data");
const lastMinuteList = document.getElementById("last-minute-list");
const feedbacksList = document.getElementById("feedbacks-list");

const createCard = (travel) => {
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "travel card h-100");

    const cardImageContainer = document.createElement("div");
    cardImageContainer.setAttribute("class", "card-img-top");

    const cardImage = document.createElement("img");
    cardImage.src = travel.img;
    cardImageContainer.appendChild(cardImage);


    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    const cardTitle = document.createElement("h4");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.innerText = travel.title;

    const cardDescription = document.createElement("p");
    cardDescription.setAttribute("class", "card-text");
    cardDescription.innerText = travel.description;

    const cardOffer = document.createElement("p");
    cardOffer.setAttribute("class", "card-text lead");
    cardOffer.innerText = travel.offer;

    cardBody.append(cardTitle, cardDescription, cardOffer)
    cardContainer.append(cardImageContainer, cardBody);

    return cardContainer;
};

offersWeek.forEach(travel => {
    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "col-6 col-md-4, col-lg-3");
    cardDiv.append(createCard(travel));
    offersWeekList.appendChild(cardDiv);
});

summerLocations.forEach(travel => {
    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "col-6 col-md-4, col-lg-2");
    cardDiv.append(createCard(travel));
    welcomeSummerList.appendChild(cardDiv);
})

const compileHotDeal = () => {
    hotDealImg.src = offerDay.img;
    hotDealImg.setAttribute("alt", offerDay.title);

    const hotDealTitle = document.createElement("h4");
    hotDealTitle.innerText = offerDay.title;

    const hotDealOffer = document.createElement("p");
    hotDealOffer.innerText = offerDay.offer;

    const detailUl = document.createElement("ul");
    offerDay.details.forEach(detail => {
        const detailLi = document.createElement("li");
        detailLi.innerText = detail;
        detailUl.appendChild(detailLi);
    })

    const hotDealOldPrice = document.createElement("p");
    hotDealOldPrice.setAttribute("class", "price-old");
    hotDealOldPrice.innerText = offerDay.oldPrice;

    const hotDealPrice = document.createElement("p");
    hotDealPrice.setAttribute("class", "price");
    hotDealPrice.innerText = offerDay.price;

    const priceDiv = document.createElement("div");
    priceDiv.setAttribute("class", "d-flex flex-wrap justify-content-start align-items-center gap-3");
    priceDiv.append(hotDealOldPrice, hotDealPrice)

    const hotDealDescription = document.createElement("p");
    hotDealDescription.innerText = offerDay.description;

    hotDealData.append(hotDealTitle, hotDealOffer, detailUl, priceDiv, hotDealDescription);
}

compileHotDeal();

lastMinute.forEach(travel => {
    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "col-6 col-md-4, col-lg-3");
    cardDiv.append(createCard(travel));
    lastMinuteList.appendChild(cardDiv);
})

comments.forEach(comment => {
    const feedbackContainer = document.createElement("div");
    feedbackContainer.setAttribute("class", "col-12 card card-body");

    const feedbackUser = document.createElement("p");
    feedbackUser.setAttribute("class", "mb-3")
    feedbackUser.innerText = comment.user;

    const feedbackText = document.createElement("p");
    feedbackText.setAttribute("class", "lead")
    feedbackText.setAttribute("class", "comment")
    feedbackText.innerText = comment.text;

    feedbackContainer.append(feedbackUser, feedbackText);
    feedbacksList.appendChild(feedbackContainer);
})


// JS EXTRA 1

const offersWeekBtn = document.getElementById("offersWeekBtn");
const welcomeSummerBtn = document.getElementById("welcomeSummerBtn");
const hotDealBtn = document.getElementById("hotDealBtn");
const hotDealContent = document.getElementById("hotDealContent");
const lastMinuteBtn = document.getElementById("lastMinuteBtn");
const feedbackBtn = document.getElementById("feedbackBtn");

const sectionButton = (button, section) => {
    if (section.classList.contains("d-none")) {
        section.classList.remove("d-none");
        button.innerHTML = `<i class="bi bi-arrow-up-circle"></i>`;
    } else {
        section.classList.add("d-none");
        button.innerHTML = `<i class="bi bi-arrow-down-circle"></i>`;
    };
};

offersWeekBtn.addEventListener("click", () => {
    sectionButton(offersWeekBtn, offersWeekList);
});

welcomeSummerBtn.addEventListener("click", () => {
    sectionButton(welcomeSummerBtn, welcomeSummerList);
})

hotDealBtn.addEventListener("click", () => {
    sectionButton(hotDealBtn, hotDealContent);
})

lastMinuteBtn.addEventListener("click", () => {
    sectionButton(lastMinuteBtn, lastMinuteList);
})

feedbackBtn.addEventListener("click", () => {
    sectionButton(feedbackBtn, feedbacksList);
})


// JS EXTRA 2 - 5

const cardsTotal = document.querySelectorAll(".travel");
const wipeTravelsBtn = document.getElementById("wipe-travels");
console.log(`Ci sono ${cardsTotal.length + 1} viaggi nella pagina.`);

wipeTravelsBtn.addEventListener("click", () => {
    cardsTotal.forEach(card => {
        card.remove();
    });
    hotDealContent.remove();
    console.log("Tutti i viaggi sono stati rimossi dalla pagina.")
});