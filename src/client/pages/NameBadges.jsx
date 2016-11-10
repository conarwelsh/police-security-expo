import React, { Component } from 'react'
import theme from '../theme'
import Button from '~/Button'
import Input from '~/Input'

export default class NameBadges extends Component {

	render() {
		return <div style={theme.getStyle('Page')}>
			<h1>Name Badges</h1>
			
			<p>Each 10’x10’ booth space is allotted 5 exhibitor badges. If your company has contracted more than one 10’x10’ space, please fill out multiple forms to add the additional names. Thank You!</p>
			
			<p>If you need more than 5 name badges per 10’x10’ space, there will be a $10 fee per additional badge, payable through Paypal.</p>

			<form>
				<fieldset>

					<Input placeholder="Company Name" />

					<Input placeholder="Name Badge #1" />
					<Input placeholder="Name Badge #2" />
					<Input placeholder="Name Badge #3" />
					<Input placeholder="Name Badge #4" />
					<Input placeholder="Name Badge #5" />

					<Button type="submit">
						Submit Name Badges
					</Button>
				</fieldset>
			</form>
		</div>
	}
}