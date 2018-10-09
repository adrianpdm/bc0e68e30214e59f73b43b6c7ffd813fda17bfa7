const HeadlineGrid = {
	props: {
		headlineTitle: String,
	},
	template:
	//@formatter:off
        `<div class="headline-grid-container">` +
			`<div class="row">`+
				`<div class="col-md-3 headline-title"><span>{{headlineTitle}}</span></div>` +
				`<div class="col-md-1"></div>`+
				`<div class="col-md-8">`+
					`<slot></slot>`+
				`</div>` +
			`</div>`+
        `</div>`
        //@formatter:on
}