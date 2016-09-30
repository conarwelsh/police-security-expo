import React, { Component } from 'react'

export default class Contact extends Component {

	render() {
		return <div>
			<form>
				<input type="text" name="name" placeholder="Name" />
				<input type="text" name="email" placeholder="email" />
				<textarea name="message" placeholder="Your message"></textarea>
			</form>
		</div>
	}

}