function showDetail(serviceName) {
    let detailContainer = document.getElementById("detail-container");
    detailContainer.innerHTML = '<span class="close-btn" onclick="hideDetail()">&times;</span>';

    let title = document.createElement("div");
    title.classList.add("detail-title");

    let services = [];
    let descriptions = [];
    let largeDescriptions = [];
    let tarifs = [];
    let imageSrc = [];

    switch(serviceName) {
        case 'Hypnose':
            title.innerText = "Les prestations d'Hypnose";
            services = ["Hypnose au quotidien", "Hypnose et addictions", "Hypnose et gestion du poids"];
            descriptions = [
                "L’hypnose peut apporter de nombreux bienfaits au quotidien.",
                "Les dépendances addictives nuisent autant à vous qu’à votre entourage. Si vous désirez vous en libérer, l’hypnose peut vous y aider.",
                "L'hypnose vous réapprend à <span class='highlight'>manger en conscience</span>, en domptant vos troubles alimentaires et leurs origines."
            ];
            largeDescriptions = [
               "L’hypnose peut apporter de nombreux bienfaits au quotidien, tant sur le plan mental que physique. Voici quelques-uns de ses effets positifs :<br><br>"
                + "<ul class='benefits-list'>"
                + "<li><span class='highlight'>Renforce le bien-être général</span> : en se reconnectant à ses ressources intérieures, l’hypnose favorise un état de bien-être global, un meilleur équilibre émotionnel et une approche plus positive de la vie.</li>"
                + "<li><span class='highlight'>Gestion du stress et de l’anxiété</span> : elle induit un état de relaxation profonde, réduisant le stress et l’anxiété. Elle aide à retrouver un état de calme intérieur.</li>"
                + "<li><span class='highlight'>Améliore le sommeil</span> : en travaillant sur les pensées négatives et en favorisant un relâchement mental, l’hypnose peut améliorer la qualité du sommeil et réduire les insomnies.</li>"
                + "<li><span class='highlight'>Renforce la confiance en soi</span> : grâce à des suggestions positives, l’hypnose aide à surmonter le manque de confiance en soi, et encourage des comportements plus affirmés.</li>"
                + "<li><span class='highlight'>Gestion de la douleur</span> : elle est efficace pour réduire la perception de la douleur, notamment des douleurs chroniques, des migraines ou même lors de l’accouchement.</li>"
                + "<li><span class='highlight'>Améliore la concentration et la performance</span> : en renforçant la connexion entre le conscient et l’inconscient, l’hypnose aide à améliorer la concentration, la mémoire et l’apprentissage (dans les études, le travail mais également dans les performances sportives).</li>"
                + "</ul>",

                "Que ce soit aux jeux, au tabac, à l’alcool ou la drogue, les dépendances nuisent autant à vous qu’à ceux qui vous entourent. Si vous désirez vous <span class='highlight'>libérer de ces addictions</span>, l’hypnose peut vous y aider.<br><br>"
                +"Vous pouvez apprendre à <span class='highlight'>gérer le \"craving\"</span> (envie de consommer), trouver les origines de son addiction, prendre soin de soi, être plus positif, etc.<br><br>"
                +"Cet accompagnement vous amène vers un chemin de liberté.<br><br>"
                +"Une personne souffrant d’addiction peut trouver également un complément efficace auprès de soins énergétiques.<br><br>",

                "L’anorexie, la boulimie, l’hyperphagie ou le grignotage sont les <span class='highlight'>troubles alimentaires</span> les plus fréquents.<br><br>"
                + "Lorsque vous souhaitez combattre l’un de ces troubles, vous pouvez recourir à l’hypnose.<br><br>"
                + "Cette technique va déterminer les origines de la prise de poids et vous aider à <span class='highlight'>manger en conscience</span>, à repositionner la faim et la satiété et à retrouver le plaisir de manger.<br><br>"
                + "On parle souvent de <span class='highlight'>poids émotionnel ou de kilos de souffrance</span> : ils proviennent souvent de chocs émotionnels ou d’un manque (d’amour, de confiance en soi…) ces techniques vont permettre de vous libérer et de retrouver votre poids idéal en allégeant votre vie.<br><br>"
                + "Cette technique va également vous permettre de <span class='highlight'>retrouver confiance et estime de vous</span>.<br><br>"
                + "<span class='tarifs-title'>Tarifs :</span>"
                + "<span class='tarif-green'>110€ la 1ère séance</span> <span class='tarif-black'>- 1h30</span><br>"
                + "<span class='tarif-green'>80€ les séances suivantes</span> <span class='tarif-black'>- 1h</span>"
            ];
            tarifs = ["80€ / séance - 1h00", "80€ / séance - 1h00", "190€ / 2 séances - 2h30 minimum"];
            imageSrc = ["/static/images/hypnose_quotidien.jpg", "/static/images/hypnose_tabac.jpg", "/static/images/hypnose_poids.jpg"];
            break;
        case 'Méthode LEAA':
            title.innerText = "Les prestations LEAA";
            services = ["Séance 1", "Séance 2"];
            descriptions = [
                "Libération émotionnelle assistée.",
                "Techniques avancées de nettoyage énergétique."
            ];
            tarifs = ["50€ / séance", "60€ / séance"];
            imageSrc = ["/static/images/fleurs.jpg", "/static/images/fleurs.jpg"];
            break;
        case 'Sophrologie':
            title.innerText = "Les prestations de Sophrologie";
            services = ["Séance de Sophrologie"];
            descriptions = [
                "Exercices de relaxation et visualisation.",
            ];
            tarifs = ["70€ / séance - 1h00"];
            imageSrc = ["/static/images/sophro_desc.jpg"];
            break;
        case 'Reiki':
            title.innerText = "Les prestations de Reiki";
            services = ["Séance sur mesure", "Forfait de 4 séances", "Forfait 4 séances + 21 jours à distance"];
            descriptions = [
                "Une séance sur mesure en fonction de vos besoins et de mes ressentis avec le Reiki.",
                "Ces 4 séances permettent de redynamiser le corps et l'esprit, réduire les tensions et les blocages énergétiques et ainsi retrouver plus de sérénité.",
                "En intégrant le Reiki dans votre routine de bien-être, vous pourrez bénéficier d’une meilleure gestion du stress et d’une harmonie intérieure renforcée."
            ];
            largeDescriptions = [
                "todo",
                "todo",
                "todo",
             ];
            tarifs = ["80€ / séance - 1h00", "290€ le pack - 4h30 au total", "390€ le pack - 4h30 sur place"];
            imageSrc = ["/static/images/reiki_1.jpg", "/static/images/reiki_2.jpg","/static/images/reiki_3.jpg"];
            break;
        case 'Liens transgénérationnels':
            title.innerText = "Les prestations de Liens transgénérationnels";
            services = ["Etude du génosociogramme", "Coupure des liens"];
            largeDescriptions = [
                "todo",
                "todo",
                "todo",
            ];
            descriptions = [
                "todo",
                "Libération des schémas familiaux répétitifs et travail sur les héritages émotionnels inconscients."
            ];
            tarifs = ["80€ / séance - 1h00 (min. 3 séances)", "160€ le pack - 2h30 au total"];
            imageSrc = ["/static/images/liens_trans_seance1.jpg", "/static/images/liens_trans_seance2.jpg"];
            break;
    }

    detailContainer.appendChild(title);

    services.forEach((service, index) => {
        let box = document.createElement("div");
        box.classList.add("service-box");
        box.setAttribute("data-service-group", serviceName);
    
        // Container principal qui aligne image + contenu
        let contentContainer = document.createElement("div");
        contentContainer.classList.add("content-container");
    
        // Image
        let img = document.createElement("img");
        img.src = imageSrc[index];
        img.alt = service;
        img.classList.add("service-image");
    
        // Text Container (titre, description, tarif, bouton)
        let textContainer = document.createElement("div");
        textContainer.classList.add("service-text-container");
    
        let text = document.createElement("span");
        text.innerText = service;
        text.classList.add("service-title");
    
        let description = document.createElement("p");
        description.innerHTML = descriptions[index];
        description.classList.add("service-description");
    
        let tarif = document.createElement("p");
        tarif.innerText = tarifs[index];
        tarif.classList.add("service-tarif");
    
        let discoverButton = document.createElement("button");
        discoverButton.innerText = "Découvrir plus";
        discoverButton.classList.add("discover-button");
    
        // Grande description container
        let largeDescriptionContainer = document.createElement("div");
        largeDescriptionContainer.classList.add("large-description-container");
        largeDescriptionContainer.style.display = "none"; 
    
        let largeDescription = document.createElement("div");
        largeDescription.innerHTML = largeDescriptions[index];
        largeDescription.classList.add("large-description");
    
        largeDescriptionContainer.appendChild(largeDescription);
    
        // Gestion du bouton de découverte
        discoverButton.addEventListener("click", function() {
            let allServiceBoxes = document.querySelectorAll(`.service-box[data-service-group='${serviceName}']`);
    
            if (largeDescriptionContainer.style.display === "none") {
                allServiceBoxes.forEach(el => {
                    if (el !== box) el.style.display = "none";
                });
    
                largeDescriptionContainer.style.display = "block";
                box.classList.add("expanded");
                discoverButton.innerText = "Voir moins";
            } else {
                allServiceBoxes.forEach(el => el.style.display = "flex");
                largeDescriptionContainer.style.display = "none";
                box.classList.remove("expanded");
                discoverButton.innerText = "Découvrir plus";
            }
        });
    
        // Ajouter éléments dans textContainer
        textContainer.appendChild(text);
        textContainer.appendChild(description);
        textContainer.appendChild(tarif);
        textContainer.appendChild(discoverButton);
    
        // Ajouter image et texte dans contentContainer
        contentContainer.appendChild(img);
        contentContainer.appendChild(textContainer);
    
        // Ajouter tout dans box
        box.appendChild(contentContainer);
        box.appendChild(largeDescriptionContainer);
    
        detailContainer.appendChild(box);
    });

    detailContainer.classList.add("active");
}

function hideDetail() {
    let detailContainer = document.getElementById("detail-container");
    detailContainer.classList.remove("active");
}
