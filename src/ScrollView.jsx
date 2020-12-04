import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import BuildingsList from './BuildingsList'
import FilteredList from './FilteredList'
import Cart from './Cart'

/**
 * Component which serves as the parent component to the BuildingsList, FilteredList,
 * and Cart children components.
 */
class ScrollView extends Component {
	constructor() {
		super()

		// an array of building jsons
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
			// original list of buildings (complete list)
			buildings: buildings,
			// displayed list of buildings
			filteredItems: buildings,
			// type filter ('Academic', 'Dining', etc.)
			typeFilter: '',
			// size filter ('Small', 'Medium', 'Large')
			sizeFilter: '',
			// sort from high to low ('HL') or low to high ('LH')
			sort: '',
			// elements in cart
			cart: [],
			// cost of elements in cart
			cost: 0
		}
	}

	/**
	 * Function to handle adding an item to the Cart.
	 * @param {} event - the event which called this handler
	 */
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
			cart = this.state.cart
			cost += inCart[0].price
		}

		cost = Math.round((cost + Number.EPSILON) * 100) / 100

		this.setState({
			cart: cart,
			cost: cost
		});
	};

	/**
	 * Function which handles when an item is removed from the cart.
	 * @param {} event - event which called this handler
	 */
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
		removed[0].qty = 1

		this.setState({
			cart: cart,
			cost: cost
		})
	}

	/**
	 * Function which applies the type filter along with state.size and state.sort filters.
	 * @param {*} tFilter - string representation of what type to sort on
	 * @param {*} sFilter - string representation of what size to sort on
	 * @param {*} sort - string representation of sort order
	 */
	applyFilters = (tFilter, sFilter, sort) => {
		var filteredItems = []
		if (tFilter !== '')
			filteredItems = this.state.buildings.filter(building => building.type === tFilter)
		else filteredItems = this.state.buildings

		if (sFilter !== '')
			filteredItems = filteredItems.filter(building => building.size === sFilter)

		if (sort === '')
			filteredItems = filteredItems.sort(function (a, b) { return a.name.localeCompare(b.name); })

		if (sort === 'HL')
			filteredItems = filteredItems.sort(function (a, b) { return b.price - a.price })

		if (sort === 'LH')
			filteredItems = filteredItems.sort(function (a, b) { return a.price - b.price })

		this.setState({
			filteredItems: filteredItems,
			typeFilter: tFilter,
			sizeFilter: sFilter,
			sort: sort
		})
	}

	/**
	 * Methods which specify the string representation on what to filter/sort on.
	 * @param {} event
	 */
	filterOnTypeAll = event => { this.applyFilters('', this.state.sizeFilter, this.state.sort) }
	filterOnTypeAcademic = event => { this.applyFilters('Academic', this.state.sizeFilter, this.state.sort) }
	filterOnTypeAdministration = event => { this.applyFilters('Administration', this.state.sizeFilter, this.state.sort) }
	filterOnTypeDining = event => { this.applyFilters('Dining', this.state.sizeFilter, this.state.sort) }
	filterOnTypeResidence = event => { this.applyFilters('Residence', this.state.sizeFilter, this.state.sort) }
	filterOnTypeStudentActivities = event => { this.applyFilters('Student Activities', this.state.sizeFilter, this.state.sort) }
	filterOnSizeAll = event => { this.applyFilters(this.state.typeFilter, '', this.state.sort) }
	filterOnSizeSmall = event => { this.applyFilters(this.state.typeFilter, 'Small', this.state.sort) }
	filterOnSizeMedium = event => { this.applyFilters(this.state.typeFilter, 'Medium', this.state.sort) }
	filterOnSizeLarge = event => { this.applyFilters(this.state.typeFilter, 'Large', this.state.sort) }

	/**
	 * Methods which specify the string representation of what to sort on.
	 * @param {} event 
	 */
	sortNone = event => { this.applyFilters(this.state.typeFilter, this.state.sizeFilter, '') }
	sortLH = event => { this.applyFilters(this.state.typeFilter, this.state.sizeFilter, 'LH') }
	sortHL = event => { this.applyFilters(this.state.typeFilter, this.state.sizeFilter, 'HL') }


	/**
	 * Renders the sub-components in a grid layout.
	 */
	render() {
		// stylings for the grid
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
					{/**Section for filtering and sorting */}
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
					{/** Section for the Catalog of buildings */}
					<Grid item xs={12} sm={6}>
						<Paper style={catalogStyle}>
							<h2>Catalog</h2>
							<BuildingsList buildings={this.state.filteredItems} addItem={this.addItem} />
						</Paper>
					</Grid>
					{/**Section for the cart. */}
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