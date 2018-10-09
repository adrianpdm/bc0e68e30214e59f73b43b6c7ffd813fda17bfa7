const SocialMediaButton = {
	props: {
		name: String,
		link: String,
		icon: String,
	},
	template: `<a :href="link"><img class="social-media-icon" :src="icon" :alt="name"></a>`
}

const SocialMediaList = [
	{name: 'Facebook', link: 'http://facebook.com', img: './static/icons8-facebook-24.png'},
	{name: 'Twitter', link: 'http://twitter.com', img: './static/icons8-twitter-24.png'},
	{name: 'LinkedIn', link: 'http://linkedin.com', img: './static/icons8-linkedin-24.png'},
	{name: 'Instagram', link: 'http://instagram.com', img: './static/icons8-instagram-24.png'},
	{name: 'Line Messenger', link: 'http://line.co.jp', img: './static/icons8-line-filled-24.png'}
]