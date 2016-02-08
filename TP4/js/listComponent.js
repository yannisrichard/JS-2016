import React from 'react'
import { render } from 'react-dom'

var List = React.createClass({
  render: function() {
    return <table id="tabEpisodes">
  		<thead>
  			<tr>
    			<td>Id</td>
    			<td>Serie</td> 
    			<td>Season</td>
    			<td>Episode</td>
    		</tr>
  		</thead>
  		<tbody>
  		</tbody>
  	</table>;
  }
});

render(<List />, document.getElementById('listEpisodes'));