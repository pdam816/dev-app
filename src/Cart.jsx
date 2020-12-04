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

/**
 * Component which handles and renders the Cart element, which displays elements
 * added to 'cart'
 */
class Cart extends Component {
	/**
	 * Renders a cart element.
	 * @param {*} item - a building element
	 */
	createItem = item => {
		// styling for cards in cart
		const listItemStyle = {
			width: '33%',
			height: '100%'
		}

		const imageStyle = {
			width: '100%',
			height: '100%'
		}

		const cardId = "cart_card" + item.key

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
						<ListItemText>Quantity: {item.qty}</ListItemText>
					</CardContent>
					<CardActions>
						<Button color="primary" variant="contained" onClick={this.props.removeItem}> Remove</Button>
					</CardActions>
				</Card>
			</ListItem >
		);
	};

	/**
	 * Renders the Cart and its elements.
	 */
	render() {
		const flexContainer = {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap'
		};
		const cart = this.props.cart;
		const listItems = cart.map(this.createItem);
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