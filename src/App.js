import React from 'react';
import styled from 'styled-components'
import { Provider } from 'react-redux'
import Homepage from './pages/Homepage';

import configureStore from './redux/store'

const App = () => (
	<Provider store={configureStore()}>
		<HomepageWrapper>
			<Homepage />
		</HomepageWrapper>
	</Provider>
);

export default App;

const HomepageWrapper = styled.div`
	padding: 3%;
	height: 100%;
	min-height: 100vh;
	background-color: rgba(229, 229, 229);
`

