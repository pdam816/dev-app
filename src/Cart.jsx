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


class Cart extends Component {
	createTask = item => {
		return (
			<ListItem button>
				<ListItemText>{item.name}</ListItemText>
			</ListItem>
		);
	};
	render() {
		console.log("gets to cart render")
		const todoEntries = this.props.cart;
		const listItems = todoEntries.map(this.createTask);
		return <List>{listItems}</List>;
	}
}

export default Cart