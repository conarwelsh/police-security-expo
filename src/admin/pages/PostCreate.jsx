import React, { Component } from 'react'
import Button from '@/ui/Button'
import Input from '@/ui/Input'
import Textarea from '@/ui/Textarea'

export default class PostCreate extends Component {

	constructor(...args) {
		super(...args)

		this.state = {
			userSlug: false,
			title: '',
			slug: '',
			body: '',
		}
	}

	_handleChange(field, { target: { value }}) {
		let state = Object.assign({}, this.state)
		
		state[field] = value
		
		if(field === 'slug'){
			state.userSlug = true
			state.slug = this.slug(state.slug)
		}

		if(field === 'title'){
			if(! state.userSlug) {
				state.slug = this.slug(state.title)
			}
		}

		this.setState(state)
	}

	slug(str) {
		return str
			.toLowerCase()
			.replace(/ /g, '-')
	}

	render() {
		return <div>
			<h1>Create Post</h1>

			<form>
				<Input
					value={this.state.title}
					label="Title"
					placeholder="The title of the post..."
					onChange={this._handleChange.bind(this, 'title')}
				/>
				<Input
					value={this.state.slug}
					label="Slug"
					onChange={this._handleChange.bind(this, 'slug')}
				/>
				<Textarea
					value={this.state.body}
					label="Body"
					placeholder="The body of the post..."
					rows="8"
					onChange={this._handleChange.bind(this, 'body')}
				/>

				<Button type="submit">Create</Button>
			</form>
		</div>
	}

}