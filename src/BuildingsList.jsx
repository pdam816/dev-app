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
		const id = shortName.id
		const nameId = "name" + id
		const typeId = "type" + id
		const sizeId = "size" + id
		const priceId = "price" + id
		return (
			<ListItem>
				<Card>
					<ListItemText id={nameId}>{shortName.name}</ListItemText>
					<img id="image"
						src={shortName.image}
						className="Img"
					/>
					<CardContent>
						<ListItemIcon>
							<LocationCityIcon />
							<ListItemText id={typeId}>{shortName.type}</ListItemText>
						</ListItemIcon>
					</CardContent>
					<CardContent>
						<ListItemIcon>
							<SettingsOverscanIcon />
							<ListItemText id={sizeId}>{shortName.size}</ListItemText>
						</ListItemIcon>
					</CardContent>
					<CardContent>
						<ListItemText id={priceId}>$ {shortName.price}</ListItemText>
					</CardContent>
					<CardActions>
						<Button color="primary" variant="contained" onClick={this.props.addItem}> Add to Cart</Button>
					</CardActions>
				</Card>
			</ListItem >
		)
	}

	render() {
		const names = this.props.names;
		const sorted = names.sort(function (a, b) { return a.price - b.price })
		const listNames = names.map(this.createNames);

		if (names.length === 0) {
			return <h3>Sorry, there are no results matching your filters. Try a different combination!</h3>
		}
		else {
			return <List>{listNames}</List>
		}
	}
}

export default BuildingsList;