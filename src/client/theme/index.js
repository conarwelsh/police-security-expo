import ReactTheme from 'react-theme'
import theme from '~/theme'

theme.extendSource('palette', () => ({
	light: '#ddd',
	dark: '#4b4e53',
	primary: '#1a4ca0',
	primaryOffset: '#fff',
}))

theme.setSource('font', () => ({
}))

theme.setSource('clearfix', () => ({
	clear: 'both',
	height: 0,
}))

theme.setSource('float left', () => ({
	float: 'left',
}))

theme.setSource('float right', () => ({
	float: 'right',
}))

theme.setSource('text right', () => ({
	textAlign: 'right',
}))

theme.setSource('partial underline', (theme) => {
	const {
		dark
	} = theme.getStyle('palette')

	return {
		height: 3,
		width: 100,
		backgroundColor: dark,
		marginBottom: 50,
	}
})

theme.setSource('Header', () => ({
	boxShadow: '0 1px 15px rgba(0,0,0,.15)',
	height: 100,
	lineHeight: '100px',
	position: 'fixed',
	top: 0,
	right: 0,
	left: 0,
	zIndex: 9000,
	backgroundColor: 'white',
	padding: '0 2em',
}))

theme.setSource('Navigation', () => ({
	mixins: ['font'],
	float: 'right',
}))

theme.setSource('Navigation.link', (theme) => {
	const { dark } = theme.getStyle('palette')
	
	return {
		mixins: ['font'],
		padding: '0 1em',
		color: dark,
	}
})

theme.setSource('Footer', () => ({
	boxShadow: '0 1px 15px rgba(0,0,0,.15)',
	padding:'100px 2em 50px',
}))

theme.setSource('Footer.copyright', () => ({
	margin:'2em 2em 0 2em',
	padding:'2em 0 0 0',
	borderTop:'1px solid #ddd',
	fontSize: 12,
	color: '#ddd',
}))


theme.setSource('Overview', () => ({
	padding: '100px 0',
}))

theme.setSource('Overview.image', () => ({
	width: '50%',
}))

export default theme