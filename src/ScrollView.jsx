import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import BuildingsList from './BuildingsList'
import FilteredList from './FilteredList'
import Cart from './Cart'

class ScrollView extends Component {
	constructor() {
		super()
		const buildings = [
			{
				key: 0,
				name: 'Center for Information Technology (CIT)',
				image: 'https://www.brown.edu/Facilities/Facilities_Management/maps/docx/building_picture/WATSON%20CIT_3.jpg',
				price: 70,
				type: 'Academic',
				size: 'Large',
				qty: 1
			},
			{
				key: 1,
				name: 'Engineering Research Center (ERC)',
				image: 'https://www.brown.edu/Facilities/Facilities_Management/maps/docx/building_picture/8654_2759.jpg',
				price: 99.5,
				type: 'Academic',
				size: 'Large',
				qty: 1
			},
			{
				key: 2,
				name: 'Faunce',
				image: 'https://www.brown.edu/Facilities/Facilities_Management/maps/docx/building_picture/8460_131.jpg',
				price: 58.73,
				type: 'Student Activities',
				size: 'Medium',
				qty: 1
			},
			{
				key: 3,
				name: 'Friedman Hall',
				image: 'https://www.brown.edu/Facilities/Facilities_Management/maps/docx/building_picture/8595_343.jpg',
				price: 32.8,
				type: 'Academic',
				size: 'Small',
				qty: 1
			},
			{
				key: 4,
				name: 'Minden Hall',
				image: 'https://www.brown.edu/Facilities/Facilities_Management/maps/docx/building_picture/8529_227.jpg',
				price: 55.2,
				type: 'Residence',
				size: 'Medium',
				qty: 1
			},
			{
				key: 5,
				name: 'Page-Robinson Hall',
				image: 'https://www.brown.edu/Facilities/Facilities_Management/maps/docx/building_picture/100431_185.jpg',
				price: 60.75,
				type: 'Administration',
				size: 'Medium',
				qty: 1
			},
			{
				key: 6,
				name: 'Perkins Hall',
				image: 'https://www.brown.edu/Facilities/Facilities_Management/maps/docx/building_picture/8397_260.jpg',
				price: 40.5,
				type: 'Residence',
				size: 'Small',
				qty: 1
			},
			{
				key: 7,
				name: 'Salomon Hall',
				image: 'https://www.brown.edu/Facilities/Facilities_Management/maps/docx/building_picture/100456_288.jpg',
				price: 50,
				type: 'Academic',
				size: 'Small',
				qty: 1
			},
			{
				key: 8,
				name: 'Sharpe Refectory (Ratty)',
				image: 'https://www.brown.edu/Facilities/Facilities_Management/maps/docx/building_picture/100388_296.jpg',
				price: 50.75,
				type: 'Dining',
				size: 'Large',
				qty: 1
			},
			{
				key: 9,
				name: 'T.F. Green Hall',
				image: 'https://www.brown.edu/Facilities/Facilities_Management/maps/docx/building_picture/100470_306.jpg',
				price: 17.25,
				type: 'Student Activities',
				size: 'Small',
				qty: 1
			},
			{
				key: 10,
				name: 'University Hall',
				image: 'https://www.brown.edu/Facilities/Facilities_Management/maps/docx/building_picture/8585_317.jpg',
				price: 35,
				type: 'Administration',
				size: 'Small',
				qty: 1
			},
			{
				key: 11,
				name: 'Verney-Woolley (VDub)',
				image: 'https://www.brown.edu/Facilities/Facilities_Management/maps/docx/building_picture/100475_322.jpg',
				price: 30.7,
				type: 'Dining',
				size: 'Small',
				qty: 1
			}
		]

		this.state = {
			buildings: buildings,
			filteredItems: buildings,
			typeFilter: '',
			sizeFilter: '',
			sort: '',
			cart: [],
			cost: 0
		}
	}

	applyTypeFilters = (tFilter) => {
		var filteredItems = []
		if (tFilter !== '') {
			filteredItems = this.state.buildings.filter(building => building.type === tFilter)
		}
		else {
			filteredItems = this.state.buildings
		}
		if (this.state.sizeFilter !== '') {
			filteredItems = filteredItems.filter(building => building.size === this.state.sizeFilter)
		}

		if (this.state.sort === '') {
			filteredItems = filteredItems.sort(function (a, b) { return a.name.localeCompare(b.name); })
		}
		if (this.state.sort === 'HL') {
			filteredItems = filteredItems.sort(function (a, b) { return b.price - a.price })
		}
		if (this.state.sort === 'LH') {
			filteredItems = filteredItems.sort(function (a, b) { return a.price - b.price })
		}

		this.setState({
			filteredItems: filteredItems,
			typeFilter: tFilter
		})
	}

	applySizeFilters = (sFilter) => {
		var filteredItems = []
		if (this.state.typeFilter !== '') {
			filteredItems = this.state.buildings.filter(building => building.type === this.state.typeFilter)
		}
		else {
			filteredItems = this.state.buildings
		}
		if (sFilter !== '') {
			filteredItems = filteredItems.filter(building => building.size === sFilter)
		}

		if (this.state.sort === '') {
			filteredItems = filteredItems.sort(function (a, b) { return a.name.localeCompare(b.name); })
		}
		if (this.state.sort === 'HL') {
			filteredItems = filteredItems.sort(function (a, b) { return b.price - a.price })
		}
		if (this.state.sort === 'LH') {
			filteredItems = filteredItems.sort(function (a, b) { return a.price - b.price })
		}

		this.setState({
			filteredItems: filteredItems,
			sizeFilter: sFilter
		})
	}

	applySort = (doSort) => {
		var filteredItems = []
		if (this.state.typeFilter !== '') {
			filteredItems = this.state.buildings.filter(building => building.type === this.state.typeFilter)
		}
		else {
			filteredItems = this.state.buildings
		}
		if (this.state.sizeFilter !== '') {
			filteredItems = filteredItems.filter(building => building.size === this.state.sizeFilter)
		}

		if (doSort === '') {
			filteredItems = filteredItems.sort(function (a, b) { return a.name.localeCompare(b.name); })
		}
		if (doSort === 'HL') {
			filteredItems = filteredItems.sort(function (a, b) { return b.price - a.price })
		}
		if (doSort === 'LH') {
			filteredItems = filteredItems.sort(function (a, b) { return a.price - b.price })
		}

		this.setState({
			filteredItems: filteredItems,
			sort: doSort
		})
	}

	filterOnTypeAll = event => {
		this.applyTypeFilters('')
	}

	filterOnTypeAcademic = event => {
		this.applyTypeFilters('Academic')
	}

	filterOnTypeAdministration = event => {
		this.applyTypeFilters('Administration')
	}

	filterOnTypeDining = event => {
		this.applyTypeFilters('Dining')
	}

	filterOnTypeResidence = event => {
		this.applyTypeFilters('Residence')
	}

	filterOnTypeStudentActivities = event => {
		this.applyTypeFilters('Student Activities')
	}

	filterOnSizeAll = event => {
		this.applySizeFilters('')
	}

	filterOnSizeSmall = event => {
		this.applySizeFilters('Small')
	}

	filterOnSizeMedium = event => {
		this.applySizeFilters('Medium')
	}

	filterOnSizeLarge = event => {
		this.applySizeFilters('Large')
	}

	sortNone = event => {
		this.applySort('')
	}

	sortLH = event => {
		this.applySort('LH')
	}

	sortHL = event => {
		this.applySort('HL')
	}

	addItem = event => {
		var cart = []
		var cost = this.state.cost
		event.preventDefault();
		const newItem = event.currentTarget.parentNode.parentNode

		const cardId = newItem.getAttribute('id')
		console.log(cardId)

		var item = this.state.buildings.filter(a => "card" + a.key === cardId)
		var inCart = this.state.cart.filter(a => "card" + a.key === cardId)

		if (inCart.length === 0) {
			cart = [this.state.cart, item].flat()
			cost += item[0].price
		}
		else {
			inCart[0].qty += 1
			console.log(cardId)
			cart = this.state.cart.filter(a => "card" + a.key !== cardId)
			cart = [cart, inCart[0]].flat()
			cost += inCart[0].price
		}

		cost = Math.round((cost + Number.EPSILON) * 100) / 100

		this.setState({
			cart: cart,
			cost: cost
		});
	};

	removeItem = event => {
		var cart = []
		var removed = []
		var cost = this.state.cost
		event.preventDefault();

		const item = event.currentTarget.parentNode.parentNode
		const cardId = item.getAttribute('id')

		cart = this.state.cart.filter(a => "cart_card" + a.key !== cardId)
		removed = this.state.cart.filter(a => "cart_card" + a.key === cardId)

		cost -= removed[0].price * removed[0].qty
		cost = Math.round((cost + Number.EPSILON) * 100) / 100

		this.setState({
			cart: cart,
			cost: cost
		})
	}

	render() {
		const filtersStyle = {
			padding: '10px',
			marginLeft: 'auto',
			marginRight: 'auto',
			alignItems: 'center',
			background: '#43cae8',
			width: '95%'
		}

		const catalogStyle = {
			padding: '10px',
			marginLeft: 'auto',
			marginRight: 'auto',
			alignItems: 'center',
			background: '#43cae8',
			width: '90%'

		}

		return (
			<div>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Paper style={filtersStyle}>
							<FilteredList
								filterOnTypeAll={this.filterOnTypeAll}
								filterOnTypeAcademic={this.filterOnTypeAcademic}
								filterOnTypeAdministration={this.filterOnTypeAdministration}
								filterOnTypeDining={this.filterOnTypeDining}
								filterOnTypeResidence={this.filterOnTypeResidence}
								filterOnTypeStudentActivities={this.filterOnTypeStudentActivities}
								filterOnSizeAll={this.filterOnSizeAll}
								filterOnSizeSmall={this.filterOnSizeSmall}
								filterOnSizeMedium={this.filterOnSizeMedium}
								filterOnSizeLarge={this.filterOnSizeLarge}
								sortNone={this.sortNone}
								sortLH={this.sortLH}
								sortHL={this.sortHL}
							/>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper style={catalogStyle}>
							<h2>Catalog</h2>
							<BuildingsList buildings={this.state.filteredItems} addItem={this.addItem} />
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper style={catalogStyle}>
							<h2>Cart</h2>
							<Cart cart={this.state.cart} removeItem={this.removeItem} cost={this.state.cost} />
						</Paper>
					</Grid>
				</Grid>
			</div>
		)
	}
}

export default ScrollView