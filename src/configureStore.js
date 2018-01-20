// import { createStore, compose } from 'redux';
// import reducers from './reducers';
//
// const configureStore = (preloadedState) => {
//   const enhancers = [];
//
//   if (process.env.NODE_ENV === 'development') {
//     const devToolsExtension = window.devToolsExtension
//
//     if (typeof devToolsExtension === 'function') {
//       enhancers.push(devToolsExtension());
//     }
//   }
//
//   return createStore(
//     reducers,
//     preloadedState,
//     compose(
//       ...enhancers
//     )
//   );
// };
//
// export default configureStore;
