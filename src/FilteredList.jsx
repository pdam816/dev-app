// to map the filter methods
import React, { Component } from 'react'
import { Button } from '@material-ui/core'

import './FilteredList.css';

class FilteredList extends Component {

	constructor(props) {
		super(props)
		this.state = {
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

	handleSelectedSizeAll = () => {
		this.setState({
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

	render() {
		return (
			<div>
				<div>
					<p>Building size:</p>
					<Button color="primary" variant="contained" onClick={this.handleSelectedSizeAll} disabled={this.state.selectedSizeAll}> All</Button>
					<Button color="primary" variant="contained" onClick={this.handleSelectedSizeSmall} disabled={this.state.selectedSizeSmall}> Small</Button>
					<Button color="primary" variant="contained" onClick={this.handleSelectedSizeMedium} disabled={this.state.selectedSizeMedium}> Medium</Button>
					<Button color="primary" variant="contained" onClick={this.handleSelectedSizeLarge} disabled={this.state.selectedSizeLarge}> Large</Button>
				</div>
				<div>
					<p>Building function:</p>
					<Button color="primary" variant="contained" onClick={this.handleSelectedTypeAll} disabled={this.state.selectedTypeAll}> All</Button>
					<Button color="primary" variant="contained" onClick={this.handleSelectedTypeAcademic} disabled={this.state.selectedTypeAcademic}> Academic</Button>
					<Button color="primary" variant="contained" onClick={this.handleSelectedTypeAdmin} disabled={this.state.selectedTypeAdmin}> Administration</Button>
					<Button color="primary" variant="contained" onClick={this.handleSelectedTypeDining} disabled={this.state.selectedTypeDining}> Dining</Button>
					<Button color="primary" variant="contained" onClick={this.handleSelectedTypeResidence} disabled={this.state.selectedTypeResidence}> Residence</Button>
					<Button color="primary" variant="contained" onClick={this.handleSelectedTypeStudentAct} disabled={this.state.selectedTypeStudentAct}> Student Activities</Button>
				</div>
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