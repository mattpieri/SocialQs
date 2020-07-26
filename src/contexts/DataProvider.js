import React, { Component } from 'react'
import DataContext from './DataContext'



class DataProvider extends Component {
	constructor(props) {
		super(props)
		this.updateState = this.updateState.bind(this) // ← Here
		this.state = {
			Title: '...asdfasdf',
			Category: '...',
			SubCategory: '...',
			Visiblity: '...',
			update: this.updateState // ← Here
		}
	}

	updateState(values) { // ← And here
		this.setState(values)
	}

	render() {
		return (
			<DataContext.Provider value={"Hello"}>
				{this.props.children}
			</DataContext.Provider>
		)
	}
}

export default DataProvider;

