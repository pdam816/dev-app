# Program Architecture

## Organization of Components

App.js : Main javascript file.
ScrollView.jsx : Parent component which renders its sub-components -- BuildingsList, FilteredList, CartList.
BuildingsList.jsx : The Component which renders the 'Catalog' section displaying the sortable/filterable list.
FilteredList.js : The Component which renders the filtering section displaying the filters which could be applied to the list.
Cart.jsx : The Component which renders the cart and its elements.

## How Data is Passed Through Components

ScrollView is the parent Component. It implements the functions for the filtering list, sorting list, adding to cart, and removing from cart actions. It also maintains the main states of the page, including the complete list of items, the filtered list of items, the cart of added items, the type and size to filter on, and the sort order.

The functions for filtering and sorting are passed into FilteredList to handle the onClick() actions of the corresponding buttons.

The function addItem() is passed into BuildingsList to handle the onClick() action of adding an item to the cart. Also, the filtered list state of items is passed into BuildingList for rendering.

The function removeItem() is passed into Cart to handle the onClick() action of removing from the cart. Also, the cart state of items is passed into Cart for rendering.

## How The User Triggers State Changes

If the user clicks 'Add to Cart' for any of the items in the Catalog section, it will update state.cart to include that item. If the item wasn't previously in the cart, it would be added to the cart. If it was previously in the cart, the counter of that item in the cart would increment. It will also update state.cost to reflect the new cost of all cart items.

If the user clicks 'Remove' for any of the items in the Cart section, it will update state.cart to remove that item. Pressing remove will update state.cost to reflect the new cost of all cart items.

Filtering has two categories: type and size. Clicking on a type button will sort the catalog list by that type. Clicking on a size button will sort the list by that size. Clicking 'All' for either filters will remove the respective filter.

If a user clicks on a sort order, the list in the catalog will sort by the specified order. If 'None' is clicked, the list defaults to its default order (alphabetical). 


















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
