import React from 'react'
import './App.css'

import Main from './Components/Main'
import { Route, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import ImageInput from './Components/views/ImageInput'; //to get descriptors; not used in interface

import { StoriesContainer } from './Container/StoriesContainer';
import Carousel from './Components/Carousel';
import Twitter from './Components/Twitter'

function App() {
	return (
		<div className="App">
			<Router history={createHistory()}>
				<div className="route">
					<Route exact path="/" component={props => <Main {...props} />} /> 
					<Route exact path="/photo" component={props => <ImageInput {...props} />} />
					<Route exact path="/news" component={props => <StoriesContainer {...props} />} />
					<Route exact path="/carousel" component={props => <Carousel {...props} />} />
					<Route exact path="/twitter" component={props => <Twitter {...props} />} />
				</div>
			</Router> 
		</div>
	);
}

export default App;
