import React, { Component } from 'react'
import theme from '@/ui/theme'
import Link from '@/ui/Link'

const palette = theme.get('palette')
const styles = theme.get('Footer')

export default class Footer extends Component {

	render() {
		return <footer style={styles.footer}>
			<div style={{ width: `${100/3}%`, float: 'left', height: 250 }}>
				<span style={{ height: '100%', verticalAlign: 'middle', display: 'inline-block' }} />
				<Link href="http://policeandsecuritynews.com/">
					<img src="/img/cropped-logopng-100-1.png" style={{ verticalAlign: 'middle' }} />
				</Link>
			</div>
			<div style={{ width: `${100/3}%`, float: 'left', height: 250 }}>
				<span style={{ height: '100%', verticalAlign: 'middle', display: 'inline-block' }} />
				<Link href="http://www.njsacop.org/">
					<img src="/img/NJ Chiefs logo-JPEG file.jpg" style={{ width: 250, verticalAlign: 'middle' }} />
				</Link>
			</div>
			<div style={{ width: `${100/3}%`, float: 'left', height: 250 }}>
				<span style={{ height: '100%', verticalAlign: 'middle', display: 'inline-block' }} />
				<Link href="http://www.siteworkassociates.com/">
					<img src="/img/swa-logo.png" style={{ verticalAlign: 'middle' }} />
				</Link>
			</div>
			
			<div style={{ clear: 'both' }} />

			<div style={{ width: `${100/3}%`, float: 'left' }}>
				<Link href="http://policeandsecuritynews.com/">
					Media Sponsor: Police & Security News
				</Link>
			</div>
			<div style={{ width: `${100/3}%`, float: 'left' }}>
				<Link href="http://www.njsacop.org/">
					Expo Sponsor: NJ State Association of Chiefs of Police
				</Link>
			</div>
			<div style={{ width: `${100/3}%`, float: 'left' }}>
				<Link href="http://www.siteworkassociates.com/">
					Sitework Associates
				</Link>
			</div>

			<div style={{ clear: 'both' }} />

			<div style={{
				padding: '1em',
				backgroundColor: palette.primary,
				color: palette.primaryOffset,
				marginTop: '2em',
			}}>
				<h3>Police Security Expo 2017</h3>

				<p>
					P.O. Box 20068
					Sarasota, FL 34276
				</p>

				<p>
					<Link href="mailto:police-securityexpo@comcast.net">
						police-securityexpo@comcast.net
					</Link>
				</p>

				<p>
					P. 1-800-323-1927
				</p>
				
				<p>
					F. 941-927-5407
				</p>

				<p>
					<Link href="https://www.facebook.com/Police-Security-Expo-161331839134/?fref=ts">
						Facebook
					</Link>
					&nbsp;&middot;&nbsp;
					<Link href="https://www.instagram.com/policesecurityexpo/">
						Instagram
					</Link>
				</p>
			</div>
		</footer>
	}

}