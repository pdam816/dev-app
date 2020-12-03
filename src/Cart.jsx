import React, { Component } from 'react'
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

class Cart extends Component {
	createTask = shortName => {
		const listItemStyle = {
			width: '33%',
			height: '100%'
		}

		const imageStyle = {
			width: '100%',
			height: '100%'
		}

		const key = shortName.key
		const cardId = "cart_card" + key
		return (
			<ListItem style={listItemStyle}>
				<Card id={cardId}>
					<ListItemText>{shortName.name}</ListItemText>
					<img id="image"
						src={shortName.image}
						className="Img"
						style={imageStyle}
					/>
					<CardContent>
						<div>
							<ListItemIcon>
								<LocationCityIcon />
								<ListItemText>{shortName.type}</ListItemText>
							</ListItemIcon>
						</div>
						<div>
							<ListItemIcon>
								<SettingsOverscanIcon />
								<ListItemText>{shortName.size}</ListItemText>
							</ListItemIcon>
						</div>
						<ListItemText>$ {shortName.price} million</ListItemText>
						<ListItemText>Quantity: {shortName.qty}</ListItemText>
					</CardContent>
					<CardActions>
						<Button color="primary" variant="contained" onClick={this.props.removeItem}> Remove</Button>
					</CardActions>
				</Card>
			</ListItem >
		);
	};
	render() {
		const flexContainer = {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap'
		};
		const cart = this.props.cart;
		const listItems = cart.map(this.createTask);
		return (
			<div>
				<List style={flexContainer}>{listItems}</List>
				<h3>Total: $ {this.props.cost} million</h3>
				<Button color="primary" variant="contained" onClick={() => alert("Checkout Total: $" + this.props.cost + " million")}> Checkout</Button>
			</div>
		)
	}
}

export default Cart