import React from "react";
import './App.css';
import TerminatorList from "./components/TerminatorList";
import SearchBox from "./components/SearchBox"; 
import Scroll from "./components/Scroll";
import ErrorBoundary from "./components/errorBoundary";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			models: [],
			searchfield: ''
 		};
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });	
 	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ models: users }));
	}

	render() {
		const filteredModels = this.state.models.filter((model) => {
			return model.name
			  .toLowerCase()
			  .includes(this.state.searchfield.toLowerCase());
		});
		if(this.state.models.length === 0) {
			return <h1>Betöltés folyamatban...</h1>
		}

	   return (
			<div className="tc">
				<h1 className="f1">Terminátor modellek</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<TerminatorList models={filteredModels} />
					</ErrorBoundary>
				</Scroll>
			</div>
	   );
	}
}
 
export default App;