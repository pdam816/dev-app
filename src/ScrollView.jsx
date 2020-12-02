import React, { Component } from 'react'

import BuildingsList from './BuildingsList'
import FilteredList from './FilteredList'
import Cart from './Cart'

class ScrollView extends Component {
	constructor() {
		super()

		var names = [
			{
				key: 0,
				name: 'Center for Information Technology (CIT)',
				image: 'https://www.brown.edu/Facilities/Facilities_Management/maps/docx/building_picture/WATSON%20CIT_3.jpg',
				price: '70,000,000',
				type: 'Academic',
				size: 'Large'
			},
			{
				key: 1,
				name: 'Engineering Research Center (ERC)',
				image: 'https://www.brown.edu/Facilities/Facilities_Management/maps/docx/building_picture/8654_2759.jpg',
				price: '99,900,000',
				type: 'Academic',
				size: 'Large'
			},
			{
				key: 2,
				name: 'Faunce',
				image: 'https://www.brown.edu/Facilities/Facilities_Management/maps/docx/building_picture/8460_131.jpg',
				price: '58,730,000',
				type: 'Student Activities',
				size: 'Medium'
			},
			{
				key: 3,
				name: 'Friedman Hall',
				image: 'https://www.brown.edu/Facilities/Facilities_Management/maps/docx/building_picture/8595_343.jpg',
				price: '32,900,000',
				type: 'Academic',
				size: 'Small'
			},
			{
				key: 4,
				name: 'Minden Hall',
				image: 'https://www.brown.edu/Facilities/Facilities_Management/maps/docx/building_picture/8529_227.jpg',
				price: '55,200,000',
				type: 'Residence',
				size: 'Medium'
			},
			{
				key: 5,
				name: 'Page-Robinson Hall',
				image: 'https://www.brown.edu/Facilities/Facilities_Management/maps/docx/building_picture/100431_185.jpg',
				price: '60,750,000',
				type: 'Administration',
				size: 'Medium'
			},
			{
				key: 6,
				name: 'Perkins Hall',
				image: 'https://www.brown.edu/Facilities/Facilities_Management/maps/docx/building_picture/8397_260.jpg',
				price: '40,500,000',
				type: 'Residence',
				size: 'Small'
			},
			{
				key: 7,
				name: 'Salomon Hall',
				image: 'https://www.brown.edu/Facilities/Facilities_Management/maps/docx/building_picture/100456_288.jpg',
				price: '50,000,000',
				type: 'Academic',
				size: 'Small'
			},
			{
				key: 8,
				name: 'Sharpe Refectory (Ratty)',
				image: 'https://www.brown.edu/Facilities/Facilities_Management/maps/docx/building_picture/100388_296.jpg',
				price: '50,750,000',
				type: 'Dining',
				size: 'Large'
			},
			{
				key: 9,
				name: 'T.F. Green Hall',
				image: 'https://www.brown.edu/Facilities/Facilities_Management/maps/docx/building_picture/100470_306.jpg',
				price: '17,250,000',
				type: 'Student Activities',
				size: 'Small'
			},
			{
				key: 10,
				name: 'University Hall',
				image: 'https://www.brown.edu/Facilities/Facilities_Management/maps/docx/building_picture/8585_317.jpg',
				price: '35,000,000',
				type: 'Administration',
				size: 'Small'
			},
			{
				key: 11,
				name: 'Verney-Woolley (VDub)',
				image: 'https://www.brown.edu/Facilities/Facilities_Management/maps/docx/building_picture/100475_322.jpg',
				price: '30,700,000',
				type: 'Dining',
				size: 'Small'
			}
		]

		this.state = {
			names: names,
			filteredNames: names,
			shortName: {
				text: '',
				key: ''
			},
			building: {
				key: '',
				name: '',
				image: '',
				price: '',
				type: '',
				size: ''
			},
			typeFilter: '',
			sizeFilter: '',
			sort: '',
			cart: []
		}
	}

	applyTypeFilters = (tFilter) => {
		var filteredNames = []
		if (tFilter !== '') {
			filteredNames = this.state.names.filter(building => building.type === tFilter)
		}
		else {
			filteredNames = this.state.names
		}
		if (this.state.sizeFilter !== '') {
			filteredNames = filteredNames.filter(building => building.size === this.state.sizeFilter)
		}

		this.setState({
			filteredNames: filteredNames,
			typeFilter: tFilter
		})
	}

	applySizeFilters = (sFilter) => {
		var filteredNames = []
		if (this.state.typeFilter !== '') {
			filteredNames = this.state.names.filter(building => building.type === this.state.typeFilter)
		}
		else {
			filteredNames = this.state.names
		}
		if (sFilter !== '') {
			filteredNames = filteredNames.filter(building => building.size === sFilter)
		}

		this.setState({
			filteredNames: filteredNames,
			sizeFilter: sFilter
		})
	}

	applySort = (doSort) => {
		var filteredNames = []
		if (this.state.typeFilter !== '') {
			filteredNames = this.state.names.filter(building => building.type === this.state.typeFilter)
		}
		else {
			filteredNames = this.state.names
		}
		if (this.state.sizeFilter !== '') {
			filteredNames = filteredNames.filter(building => building.size === this.state.sizeFilter)
		}

		if (doSort === '') {
			filteredNames = filteredNames.sort(function (a, b) { return a.name.localeCompare(b.name); })
		}
		if (doSort === 'HL') {
			filteredNames = filteredNames.sort(function (a, b) { return parseInt(b.price) - parseInt(a.price) })
		}
		if (doSort === 'LH') {
			filteredNames = filteredNames.sort(function (a, b) { return parseInt(a.price) - parseInt(b.price) })
		}

		this.setState({
			filteredNames: filteredNames,
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
		event.preventDefault();
		const newItem = event.currentTarget.parentNode.parentNode.children;
		const newItemName = newItem[0].innerText;
		const newItemImage = newItem[1].currentSrc;
		const newItemType = newItem[2].innerText;
		const newItemSize = newItem[3].innerText;
		const newItemPrice = newItem[4].innerText;

		console.log("gets to addItem")
		console.log(newItemName)
		console.log(newItemImage)
		console.log(newItemType)
		console.log(newItemSize)
		console.log(newItemPrice)

		debugger
		const cart = [...this.state.cart, newItem];
		this.setState({
			cart: cart
		});
	};

	render() {
		return (
			<div>
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
				<Cart cart={this.state.cart} />
				<BuildingsList names={this.state.filteredNames} addItem={this.addItem} />
			</div>
		)
	}
}

export default ScrollView