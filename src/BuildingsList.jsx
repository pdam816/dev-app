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

class BuildingsList extends Component {
	createNames = shortName => {

		const listItemStyle = {
			width: '33%',
			height: '100%'
		}

		const imageStyle = {
			width: '100%',
			height: '100%'
		}

		const key = shortName.key
		const cardId = "card" + key
		const nameId = "name" + key
		const typeId = "type" + key
		const sizeId = "size" + key
		const priceId = "price" + key
		return (
			<ListItem style={listItemStyle}>
				<Card id={cardId}>
					<ListItemText id={nameId}>{shortName.name}</ListItemText>
					<img id="image"
						src={shortName.image}
						className="Img"
						style={imageStyle}
					/>
					<CardContent>
						<div>
							<ListItemIcon>
								<LocationCityIcon />
								<ListItemText id={typeId}>{shortName.type}</ListItemText>
							</ListItemIcon>
						</div>
						<div>
							<ListItemIcon>
								<SettingsOverscanIcon />
								<ListItemText id={sizeId}>{shortName.size}</ListItemText>
							</ListItemIcon>
						</div>
						<ListItemText id={priceId}>$ {shortName.price} million</ListItemText>
					</CardContent>
					<CardActions>
						<Button color="primary" variant="contained" onClick={this.props.addItem}> Add to Cart</Button>
					</CardActions>
				</Card>
			</ListItem >
		)
	}

	render() {
		const flexContainer = {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap'
		};
		const names = this.props.names;
		const listNames = names.map(this.createNames);

		if (names.length === 0) {
			return <h3>Sorry, there are no results matching your filters. Try a different combination!</h3>
		}
		else {
			return <List style={flexContainer}>{listNames}</List>
		}
	}
}

export default BuildingsList;