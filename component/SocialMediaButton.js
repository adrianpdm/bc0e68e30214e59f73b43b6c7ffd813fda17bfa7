const SocialMediaButton = {
	props: {
		name: String,
		link: String,
		icon: String,
	},
	template: `<img class="social-media-icon" :src="icon">`
}

const SocialMediaList = [
	{name: 'Facebook', link: 'facebook.com', img: './static/icons8-facebook-24.png'},
	{name: 'Twitter', link: 'twitter.com', img: './static/icons8-twitter-24.png'},
	{name: 'LinkedIn', link: 'linkedin.com', img: './static/icons8-linkedin-24.png'},
	{name: 'Instagram', link: 'instagram.com', img: './static/icons8-instagram-24.png'},
	{name: 'Line Messenger', link: 'line.co.jp', img: './static/icons8-line-filled-24.png'}
]