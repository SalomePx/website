function showDetail(serviceName) {
    let detailContainer = document.getElementById("detail-container");
    detailContainer.innerHTML = '<span class="close-btn" onclick="hideDetail()">&times;</span>';

    let title = document.createElement("div");
    title.classList.add("detail-title");

    let services = [];
    let descriptions = [];
    let tarifs = [];
    let imageSrc = "";

    switch(serviceName) {
        case 'Hypnose':
            title.innerText = "Les prestations d'Hypnose";
            services = ["Séance 1", "Séance 2", "Séance 3"];
            descriptions = [
                "Travail sur les blocages inconscients.",
                "Accompagnement pour la gestion du stress.",
                "Séance de relaxation et recentrage."
            ];
            tarifs = ["60€ / séance", "70€ / séance", "80€ / séance"];
            imageSrc = "/static/images/escaliers.jpg";
            break;
        case 'Méthode LEAA':
            title.innerText = "Les prestations LEAA";
            services = ["Séance 1", "Séance 2"];
            descriptions = [
                "Libération émotionnelle assistée.",
                "Techniques avancées de nettoyage énergétique."
            ];
            tarifs = ["50€ / séance", "60€ / séance"];
            imageSrc = "/static/images/fleurs.jpg";
            break;
        case 'Sophrologie':
            title.innerText = "Les prestations de Sophrologie";
            services = ["Séance 1", "Séance 2"];
            descriptions = [
                "Exercices de respiration et visualisation.",
                "Gestion des émotions et relaxation profonde."
            ];
            tarifs = ["55€ / séance", "65€ / séance"];
            imageSrc = "/static/images/nature.jpg";
            break;
        case 'Reiki':
            title.innerText = "Les prestations de Reiki";
            services = ["Séance 1", "Séance 2", "Séance 3"];
            descriptions = [
                "Harmonisation des énergies.",
                "Équilibrage des chakras.",
                "Transmission d'énergie positive."
            ];
            tarifs = ["50€ / séance", "60€ / séance", "70€ / séance"];
            imageSrc = "/static/images/mains.jpg";
            break;
        case 'Liens transgénérationnels':
            title.innerText = "Les prestations de Liens transgénérationnels";
            services = ["Séance 1", "Séance 2"];
            descriptions = [
                "Libération des schémas familiaux répétitifs.",
                "Travail sur les héritages émotionnels inconscients."
            ];
            tarifs = ["65€ / séance", "75€ / séance"];
            imageSrc = "/static/images/family_hands.jpg";
            break;
    }

    detailContainer.appendChild(title);

    services.forEach((service, index) => {
        let box = document.createElement("div");
        box.classList.add("service-box");

        let img = document.createElement("img");
        img.src = imageSrc;
        img.alt = service;

        let textContainer = document.createElement("div");
        textContainer.style.display = "flex";
        textContainer.style.flexDirection = "column";

        let text = document.createElement("span");
        text.innerText = service;

        let description = document.createElement("p");
        description.innerText = descriptions[index];
        description.style.marginTop = "10px";
        description.style.fontSize = "14px";
        description.style.color = "gray";

        let tarif = document.createElement("p");
        tarif.innerText = tarifs[index];
        tarif.style.marginTop = "10px";
        tarif.style.fontSize = "16px";
        tarif.style.color = "#789d78";

        textContainer.appendChild(text);
        textContainer.appendChild(description);
        textContainer.appendChild(tarif);
        box.appendChild(img);
        box.appendChild(textContainer);
        detailContainer.appendChild(box);
    });

    detailContainer.classList.add("active");
}
function hideDetail() {
    let detailContainer = document.getElementById("detail-container");
    detailContainer.classList.remove("active");
}