// to map the filter methods
import React, { Component } from 'react'
import { Button } from '@material-ui/core'

import './FilteredList.css';

/**
 * Component which handles and renders the filtering and sorting elements of the page.
 */
class FilteredList extends Component {

	constructor(props) {
		super(props)
		this.state = {
			// booleans to toggle filter buttons on/off
			selectedSizeAll: true,
			selectedSizeSmall: false,
			selectedSizeMedium: false,
			selectedSizeLarge: false,
			selectedTypeAll: true,
			selectedTypeAcademic: false,
			selectedTypeAdmin: false,
			selectedTypeDining: false,
			selectedTypeResidence: false,
			selectedTypeStudentAct: false,
			selectedSortNone: true,
			selectedSortLH: false,
			selectedSortHL: false
		}
	}

	/**
	 * Methods to set state variables which toggle on/off filter buttons and 
	 * calls the passed in prop functions to update list accordingly
	 */
	handleSelectedSizeAll = () => {
		this.setState({
			// toggle on selected button and disable all other buttons
			selectedSizeAll: true,
			selectedSizeSmall: false,
			selectedSizeMedium: false,
			selectedSizeLarge: false,
		})
		this.props.filterOnSizeAll()
	}

	handleSelectedSizeSmall = () => {
		this.setState({
			selectedSizeAll: false,
			selectedSizeSmall: true,
			selectedSizeMedium: false,
			selectedSizeLarge: false,
		})
		this.props.filterOnSizeSmall()
	}

	handleSelectedSizeMedium = () => {
		this.setState({
			selectedSizeAll: false,
			selectedSizeSmall: false,
			selectedSizeMedium: true,
			selectedSizeLarge: false,
		})
		this.props.filterOnSizeMedium()
	}

	handleSelectedSizeLarge = () => {
		this.setState({
			selectedSizeAll: false,
			selectedSizeSmall: false,
			selectedSizeMedium: false,
			selectedSizeLarge: true,
		})
		this.props.filterOnSizeLarge()
	}

	handleSelectedTypeAll = () => {
		this.setState({
			selectedTypeAll: true,
			selectedTypeAcademic: false,
			selectedTypeAdmin: false,
			selectedTypeDining: false,
			selectedTypeResidence: false,
			selectedTypeStudentAct: false
		})
		this.props.filterOnTypeAll()
	}

	handleSelectedTypeAcademic = () => {
		this.setState({
			selectedTypeAll: false,
			selectedTypeAcademic: true,
			selectedTypeAdmin: false,
			selectedTypeDining: false,
			selectedTypeResidence: false,
			selectedTypeStudentAct: false
		})
		this.props.filterOnTypeAcademic()
	}

	handleSelectedTypeAdmin = () => {
		this.setState({
			selectedTypeAll: false,
			selectedTypeAcademic: false,
			selectedTypeAdmin: true,
			selectedTypeDining: false,
			selectedTypeResidence: false,
			selectedTypeStudentAct: false
		})
		this.props.filterOnTypeAdministration()
	}

	handleSelectedTypeDining = () => {
		this.setState({
			selectedTypeAll: false,
			selectedTypeAcademic: false,
			selectedTypeAdmin: false,
			selectedTypeDining: true,
			selectedTypeResidence: false,
			selectedTypeStudentAct: false
		})
		this.props.filterOnTypeDining()
	}

	handleSelectedTypeResidence = () => {
		this.setState({
			selectedTypeAll: false,
			selectedTypeAcademic: false,
			selectedTypeAdmin: false,
			selectedTypeDining: false,
			selectedTypeResidence: true,
			selectedTypeStudentAct: false
		})
		this.props.filterOnTypeResidence()
	}

	handleSelectedTypeStudentAct = () => {
		this.setState({
			selectedTypeAll: false,
			selectedTypeAcademic: false,
			selectedTypeAdmin: false,
			selectedTypeDining: false,
			selectedTypeResidence: false,
			selectedTypeStudentAct: true
		})
		this.props.filterOnTypeStudentActivities()
	}

	/**
	* Methods to set state variables which toggle on/off sorting buttons and
	* calls the passed in prop functions to update list accordingly
	*/
	handleSelectedSortNone = () => {
		this.setState({
			selectedSortNone: true,
			selectedSortLH: false,
			selectedSortHL: false
		})
		this.props.sortNone()
	}

	handleSelectedSortLH = () => {
		this.setState({
			selectedSortNone: false,
			selectedSortLH: true,
			selectedSortHL: false
		})
		this.props.sortLH()
	}

	handleSelectedSortHL = () => {
		this.setState({
			selectedSortNone: false,
			selectedSortLH: false,
			selectedSortHL: true
		})
		this.props.sortHL()
	}

	/**
	 * Renders the filter elements
	 */
	render() {
		return (
			<div>
				{/** Elements to filter by size */}
				<div>
					<p>Building size:</p>
					<Button color="primary" variant="contained" onClick={this.handleSelectedSizeAll} disabled={this.state.selectedSizeAll}> All</Button>
					<Button color="primary" variant="contained" onClick={this.handleSelectedSizeSmall} disabled={this.state.selectedSizeSmall}> Small</Button>
					<Button color="primary" variant="contained" onClick={this.handleSelectedSizeMedium} disabled={this.state.selectedSizeMedium}> Medium</Button>
					<Button color="primary" variant="contained" onClick={this.handleSelectedSizeLarge} disabled={this.state.selectedSizeLarge}> Large</Button>
				</div>
				{/** Elements to filter by type */}
				<div>
					<p>Building type:</p>
					<Button color="primary" variant="contained" onClick={this.handleSelectedTypeAll} disabled={this.state.selectedTypeAll}> All</Button>
					<Button color="primary" variant="contained" onClick={this.handleSelectedTypeAcademic} disabled={this.state.selectedTypeAcademic}> Academic</Button>
					<Button color="primary" variant="contained" onClick={this.handleSelectedTypeAdmin} disabled={this.state.selectedTypeAdmin}> Administration</Button>
					<Button color="primary" variant="contained" onClick={this.handleSelectedTypeDining} disabled={this.state.selectedTypeDining}> Dining</Button>
					<Button color="primary" variant="contained" onClick={this.handleSelectedTypeResidence} disabled={this.state.selectedTypeResidence}> Residence</Button>
					<Button color="primary" variant="contained" onClick={this.handleSelectedTypeStudentAct} disabled={this.state.selectedTypeStudentAct}> Student Activities</Button>
				</div>
				{/** Elements to sort */}
				<div>
					<p>Sort by Price:</p>
					<Button color="primary" variant="contained" onClick={this.handleSelectedSortNone} disabled={this.state.selectedSortNone}> None</Button>
					<Button color="primary" variant="contained" onClick={this.handleSelectedSortLH} disabled={this.state.selectedSortLH}> Lowest to Highest</Button>
					<Button color="primary" variant="contained" onClick={this.handleSelectedSortHL} disabled={this.state.selectedSortHL}> Highest to Lowest</Button>
				</div>
			</div>
		)
	}
}

export default FilteredList