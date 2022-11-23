import React from "react";
import TerminatorList from "./components/TerminatorList";
import { models } from "./models";
import SearchBox from "./components/SearchBox"; 

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			models: models,
			searchfield: ''
 		};
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });	
 	}

	render() {
		const filteredModels = this.state.models.filter((model) => {
			return model.name
			  .toLowerCase()
			  .includes(this.state.searchfield.toLowerCase());
		});
	   return (
			<div className="tc">
				<h1>Terminator modellek</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<TerminatorList models={filteredModels} />
			</div>
	   );
	}
}
 
export default App;