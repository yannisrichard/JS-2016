import React from 'react'
import { render } from 'react-dom'

//~ import { ItemListe } from './itemListComponent.js';
//~ var ItemListe = require("./itemListComponent.js");
//~ import { ItemListe } from './itemListComponent.js';




var Liste = React.createClass({
  getInitialState: function() {
    return {listeEpisodes: []};
  },
  componentDidMount: function() {
    fetch('http://localhost:9312/', {
    method: 'get',
    mode: 'no-cors'
	}).then(function(response) {
		console.log(response.json());
		return response.json();
	}).then(function(tabItemEpisodeJson) {
		console.log(tabItemEpisodeJson);
		try{
			this.setState[(listeEpisodes: tabItemEpisodeJson)];
	}).catch(function(err) {
	 
	}).bind();

  },
  
  render: function() {	  
    return <table id="tabEpisodes">
  		<thead>
  			<tr>
    			<th className="th__head">Id</th>
    			<th className="th__head">Serie</th> 
    			<th className="th__head">Season</th>
    			<th className="th__head">Episode</th>
    		</tr>
  		</thead>
  		<tbody>
			for (var item in listeEpisodes){
				<td className="td__content">item</th>
			}
  		</tbody>
  	</table>
  }
});

render(<Liste/>, document.getElementById('content'));

//~ <ItemListe id="1" serie="Prison Break" season="1" episode="1" />
