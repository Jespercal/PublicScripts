var data = [
	{
		'slug': '%s',
		'name': 'Test',
		'images': [
			{
				'link': 'test1.png',
				'desc': ''
			},
			{
				'link': 'test2.png',
				'desc': 'Test desc 2'
			}
		],
		'sections': [
			{
				'title': 'Beskrivelse',
				'text': '<i>Bla bla bla</i>'
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