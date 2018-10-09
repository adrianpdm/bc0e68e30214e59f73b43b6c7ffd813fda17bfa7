const JobListingStrip = {
	props: {
		title: String,
		classification: String,
		contract: String,
		location: String
	},
	template:
	//@formatter:off
            `<div class="row job-listing-strip">` +
                `<div class="col-md-8">`+
                `<span class="job-title">{{title}}</span>`+
                `<span class="job-details">{{classification + " \u2022 " + contract + " \u2022 " + location}}</span>`+
                `</div>`+
                `<div class="col-md d-flex align-self-center btn-container" >`+
				`<button type="button" class="btn">Apply</button>`+
				`</div>`+
            `</div>`
		//@formatter:on
}