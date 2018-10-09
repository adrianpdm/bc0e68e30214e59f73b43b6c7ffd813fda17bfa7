const NavigationMenuList = [
	{name: 'About Us'},
	{name: 'Careers', isActive: true},
	{name: 'Internship'}
]

const NavigationBar = {
	data(){
		return {
			brandIcon: "./static/kulina-logo-white.svg",
			menu: NavigationMenuList
		}
	},
	template:
		`<div class="navbar-container">`+
			`<div class="navbar-background"></div>`+
			`<nav class="navbar navbar-light navbar-expand-md fixed-top">`+
				`<a class="navbar-brand" href="#"><img :src="brandIcon"></a>`+
				`<button class="navbar-toggler" type="button" data-toggle="collapse" href="#navbar-header" aria-controls="navbar-header" aria-expanded="false" aria-label="Open Drawer">`+
					`<span class="navbar-toggler-icon"></span>`+
				`</button>`+
				`<div class="collapse navbar-collapse" id="navbar-header">`+
					`<ul class="navbar-nav">`+
						`<template v-for="(item, i) in menu">`+
							`<li class="nav-item" :class="{'active': item.isActive}" :key="'item-'+i">`+
								`<a class="nav-link" href="#">{{item.name}}</a>`+
							`</li>`+
						`</template>`+
					`</ul>`+
				`</div>`+
			`</nav>`+
		`</div>`
}