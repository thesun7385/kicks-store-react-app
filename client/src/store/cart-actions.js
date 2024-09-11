// All of these for the footer component

// import { uiActions } from './ui-slice';
// import { cartActions } from './cart-slice';

// // This action creator will fetch cart data from the firebase database
// export const fetchCartData = () => {

//     // Return a function as an action
//     return async (dispatch) => {

//         // Fetch cart data from the database
//         const fetchData = async () => {
//             const response = await fetch(
//                 'https://react-demo2-a8694-default-rtdb.firebaseio.com/cart.json'
//             )

//             // validate response
//             if (!response.ok) {
//                 throw new Error('Could not fetch cart data!');
//             }

//             const data = await response.json();

//             return data;

//         }


//         // Try fetching cart data
//         try {
//             const cartData = await fetchData();
//             dispatch(cartActions.replaceCart({
//                 item: cartData.items || [],
//                 totalQuantity: cartData.totalQuantity
//             }))
//         } catch (error) {
//             dispatch(
//                 uiActions.showNotification({
//                     status: 'error',
//                     title: 'Error!',
//                     message: 'Fetching cart data failed!'
//                 })
//             )
//         }
//     }
// }

// // This is the action creator that will send PUT request to the firebase database
// export const sendCartData = (cart) => {
//     return async (dispatch) => {
//         dispatch(
//             uiActions.showNotification({
//                 status: 'pending',
//                 title: 'Sending...',
//                 message: 'Sending cart data!'
//             })
//         )

//         // this function will send the PUT request
//         const sendRequest = async () => {
//             const response = await fetch(
//                 'https://react-demo2-a8694-default-rtdb.firebaseio.com/cart.json', {
//                 method: 'PUT',
//                 body: JSON.stringify({
//                     items: cart.items,
//                     totalQuantity: cart.totalQuantity
//                 })
//             }
//             )

//             if (!response.ok) {
//                 throw new Error('Sending cart data failed.')
//             }
//         }


//         // Try sending the PUT request
//         try {
//             await sendRequest();

//             dispatch(
//                 uiActions.showNotification({
//                     status: 'success',
//                     title: 'Success!',
//                     message: 'Sent cart data successfully!'
//                 })
//             )
//         } catch (error) {
//             dispatch(
//                 uiActions.showNotification({
//                     status: 'error',
//                     title: 'Error!',
//                     message: 'Sending cart data failed!'
//                 })
//             )
//         }
//     }

// }