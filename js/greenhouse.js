var data = [
	{
		'slug': 'ananas-kirsebaer',
		'name': 'Ananas kirsebær',
		'images': [
			{
				'link': 'https://froesnapperen.dk/cdn/shop/files/Ananaskirsebaer_1200x1200_67166cae-eb60-4ef2-b16b-32ed3fbac9d5.jpg?v=1705672609&width=1080',
				'desc': ''
			},
			{
				'link': 'https://www.jespersplanteskole.dk/media/catalog/product/cache/051c18e49c95fa4b87f05acd0506319b/a/a/aa802ac27f-ananaskirseb_r.jpg',
				'desc': ''
			}
		],
		'sections': [
			{
				'title': 'Værd at vide',
				'text': '<p>Navnet på de orange bær kunne give indtryk af, at ananas kirsebær hører til kirsebær- eller ananasfamilien. Sådan forholder det sig ikke. De orange “kirsebær” stammer oprindeligt fra Sydamerika, hvor bærrene blev brugt til næring hos søfolk for at forhindre udvikling af skørbug. De små frugter er en særskilt blomsterart, der hører til natskyggefamilien. Den betydningsfulde plante har været elsket og velkendt siden 1800tallet, hvor den kom til Europa.</p><br/><p>Det eksotiske ophav gør, at frugterne fra Physalis er relativt dyre at købe herhjemme. Det kræver særlige plejeforhold at få succes med selv at plante og holde de orange kirsebær.</p>'
			},
			{
				'title': 'Plantevejledning',
				'text': '<p>Ananaskirsebær skal udplantes i jord eller plantekrukker i et drivhus. Planten stammer fra de varme himmelstrøg, og dette giver indtryk af, hvor meget sol og varme Physalis har behov for.</p><h3>Placering</h3><p>Både under udplantning og vækst skal Physalis have masser af direkte sol og stabil varme. Planten tåler ikke at befinde sig i omgivelser, hvor temperaturen svinger mere end 10 grader. Derfor er planten ikke egnet til at blive udgravet ubeskyttet i danske haver.</p><p>Det bedste sted for ananaskirsebær er et drivhus, hvor temperaturen fra forår til sensommer er over 20 grader.</p><p>Det er en god idé at plante Physalis ud i krukker, så du kan kontrollere og justere jordforholdene. Planten kræver næringsrig jord, som skal tilføres gødning regelmæssigt i vækstperioden.</p><h3>Valg af jord</h3><p>Physalis skal befinde sig i næringsrig jord i krukker eller bunden af drivhuset. Som tommelfingerregel skal du gøde jorden omkring planten cirka 1 gang om ugen i blomstringsperioden. Gødningens effekt forstærkes, når den gives sammen med vand.</p><p>Ved at nære jorden i krukker eller drivhusets jordbund er du med til at øge sandsynligheden for en god høst af frugter i efteråret.</p><h3>Tidspunkt</h3><p>Du kan med fordel selv forspire frø af ananaskirsebær derhjemme i en spirekasse i det tidlige forår. Det er muligt at spire frø hele året rundt, når du gør det indenfor.</p><h3>Udplantning</h3><p>Når dine frø spirer, er det tid til, at du planter Physalis ud i drivhuset. Vælger du at plante ud i krukker, skal du vælge beholdere, som er minimum 6-10L. Rødderne spreder sig i blomstringsperioden, og de har brug for masser af plads til at suge næring i jorden.</p>'
			},
			{
				'title': 'Pasning og beskæring',
				'text': '<p>Herunder kan du læse mere om, hvordan du får succes med at få friske og saftige ananaskirsebær derhjemme.</p><h3>Pasning</h3><p>Det vigtigste du skal være opmærksom på, når du dyrker ananas kirsebær er vanding og opbinding. Du skal sørge for, at planten altid står i fugtig jord (den må ikke overvandes). Physalis kan blive op til 30cm høj og 75cm i bredden og har bedst af at blive bundet op, så bladene kan få masser af sol, og frugterne kan blomstre frem.</p><h3>Beskæring</h3><p>Du skal ikke forholde dig til beskæring, når du plejer Physalis derhjemme.</p>'
			},
			{
				'title': 'Om blomstring',
				'text': '<p>For at lykkes med at få modne bær og flot høst skal du passe dine planter med ananas kirsebær i hele sommerperioden. Her skal de gødes og vandes, og der skal være god luft omkring planten efter udplantning.</p><p>I vinterperioden skal du lade planten gennemgå en tørkeperiode, hvor der hverken skal vandes eller gødes. Planten vil gå i dvale, og den er klar til at blive plantet igen til foråret næste år.</p>'
			},
			{
				'title': 'FAQ',
				'text': '<h3>Er ananaskirsebær flerårige planter?</h3><p>Det er muligt at få glæde af Physalis over flere år, når du sørger for at opbevare planten frostfrit. Har du et drivhus, skal du ikke forholde dig til meget arbejde med pleje og pasning. Du kan lade planterne med de orange frugter stå i krukker i drivhuset året igennem.</p><h3>Hvad kan jeg bruge Physalis-frugter til?</h3><p>De søde frugter fra Physalis har en unik smag, som gør dem egnet til mange ting. De kan nydes som en forfriskende og velsmagende snack, eller du kan dekorere sommersalaten med de letgenkendelige, orange bær. Det er kun den gastronomiske fantasi, der sætter grænser for, hvad du kan bruge de små, runde frugter til. De kan grilles, eller du kan eksperimentere med at lave marmelade eller sirup af frugterne.</p><h3>Hvor skal jeg plante Physalis?</h3><p>Din plante med eksotisk fortid skal have godt med stabil varme. Spiringen kan finde sted hele året indenfor, og udplantning skal ske i et drivhus. Ananaskirsebær kræver en del plads, og derfor skal omgivelserne i drivhuset være gearet til planten. Bladene på Physalis er kilde til at få næring via solens varmende stråler, og derfor er det en god idé at binde planten op, så bladene får størst mulig varmepåvirkning.</p>'
			}
		]
	}
];

var openPage = '';
function LoadPage( url )
{
	if(url == null || url == "") {
		$('#plantsPanel').removeClass('d-none');
		$('#plantsOverviewPanel').addClass('d-none');
		
		data.forEach(plant => {
			$('#plantsOverviewPanel > .row').append(`<div class='col-3'><button class='btn btn-success'>${ plant.name }</button></div>`);
		})
		
		return;
	}
	let plantData = data.find( e => e.slug == url )
	//console.log("Opening",url, plantData)
	openPage = url;
	
	$("#plantTitle").text(plantData.name)
	$("#plantSubtitle").text(plantData.subtitle)
	
	let imageIndex = 0;
	plantData.images.forEach(img => {
		$("#plantImagesIndicators").append(`<button type="button" data-bs-target="#plantImages" data-bs-slide-to="${imageIndex}" ${ imageIndex == 0 ? 'class="active" aria-current="true"' : '' } aria-label="Billed ${(imageIndex + 1)}"></button>`);
		$("#plantImagesPanels").append(`<div class="carousel-item ${ imageIndex == 0 ? 'active' : ''}">
			  <img src="./${ img.link }" class="d-block w-100" alt="...">
				  ` + (img.desc != "" ? `<div class="carousel-caption" style="padding-bottom: 0px;bottom: 0px;"><p>${ img.desc }.</p></div>` : ``) + `
			</div>`);
			
		imageIndex++;
	})
	
	if(plantData.images.length == 1) {
		$("#plantImages").find("button.carousel-control-prev,button.carousel-control-next").remove();
	}
	
	let textIndex = 0;
	plantData.sections.forEach( section => {
		$("#plantTexts").append(`<div class="accordion-item">
				<h2 class="accordion-header" id="panelsStayOpen-h${textIndex}">
				  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-c${textIndex}" aria-expanded="false" aria-controls="panelsStayOpen-c${textIndex}">
					${section.title}
				  </button>
				</h2>
				<div id="panelsStayOpen-c${textIndex}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-h${textIndex}">
				  <div class="accordion-body" style='font-size:small;'>
					${section.text}
				  </div>
				</div>
			  </div>`);
		textIndex++;
	})
}

$(function()
{
	console.log("Loaded")
	data.forEach( plant => {
		$("#navbarLinks").append(`<li class='nav-item'><a class='nav-link ${ plant.slug == openPage ? 'active' : '' }' aria-current='page' href='/plants/${ plant.slug }'>${plant.name}</a></li>`)
	})
})