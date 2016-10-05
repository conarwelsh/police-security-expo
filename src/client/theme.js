import theme from '@/ui/theme'
import base, { config, palette } from '@/ui/theme/themes/base'

palette.primary = '#1a4ca0'
palette.accent = palette.red[800]

const myTheme = base(config, palette)


myTheme.FullPage = {
	width: '100%',
	height: '100%',
	position: 'relative',
}

myTheme.Content = {
	wrapper: {
		width: '100%',
		height: '100%',
		backgroundColor: palette.primaryOffset,
	},
	inner: {
		height: '100%',
		paddingTop: config.headerSizeSm,
	},
}

myTheme.Home = {
	wrapper: {
		height: '100%',
	}
}

myTheme.Footer.footer.backgroundColor = 'white'
myTheme.Footer.footer.color = '#333'
myTheme.Footer.footer.padding = '2em 0 0 0'


theme.set(myTheme)



export default theme