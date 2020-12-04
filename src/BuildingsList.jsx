import React, { Component } from "react";
import {
	List,
	ListItemText,
	ListItem,
	ListItemIcon,
	Card,
	CardContent,
	CardActions,
	Button
} from "@material-ui/core";

import LocationCityIcon from '@material-ui/icons/LocationCity';
import SettingsOverscanIcon from '@material-ui/icons/SettingsOverscan';

/**
 * Component which renders the catalog of sortable and filterable list of buildings.
 */
class BuildingsList extends Component {
	/**
	 * Renders an item (a building)
	 * @param {} item - a building to be rendered.
	 */
	createItem = item => {
		// stylings for the item
		const listItemStyle = {
			width: '33%',
			height: '100%'
		}

		const imageStyle = {
			width: '100%',
			height: '100%'
		}

		const cardId = "card" + item.key

		return (
			<ListItem style={listItemStyle}>
				<Card id={cardId}>
					<ListItemText>{item.name}</ListItemText>
					<img id="image"
						src={item.image}
						className="Img"
						style={imageStyle}
					/>
					<CardContent>
						<div>
							<ListItemIcon>
								<LocationCityIcon />
								<ListItemText>{item.type}</ListItemText>
							</ListItemIcon>
						</div>
						<div>
							<ListItemIcon>
								<SettingsOverscanIcon />
								<ListItemText>{item.size}</ListItemText>
							</ListItemIcon>
						</div>
						<ListItemText>$ {item.price} million</ListItemText>
					</CardContent>
					<CardActions>
						<Button color="primary" variant="contained" onClick={this.props.addItem}> Add to Cart</Button>
					</CardActions>
				</Card>
			</ListItem >
		)
	}

	/**
	 * Renders the item elements in a list.
	 */
	render() {
		// styling for the list
		const flexContainer = {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap'
		};
		const buildings = this.props.buildings;
		// maps createItem function for every building
		const listNames = buildings.map(this.createItem);

		if (buildings.length === 0)
			return <h3>Sorry, there are no results matching your filters. Try a different combination!</h3>
		else return <List style={flexContainer}>{listNames}</List>

	}
}

export default BuildingsList;