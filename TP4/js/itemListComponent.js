import React from 'react'
import { render } from 'react-dom'

fetch('http://localhost:9312/', {
    method: 'get',
    mode: 'no-cors'
}).then(function(response) {
    console.log(response);
}).catch(function(err) {
 
});

var ItemListe = React.createClass({
  render: function() {
    return <tr>
    <td>{this.props.id}</td>
    <td>{this.props.serie}</td>
    <td>{this.props.season}</td>
    <td>{this.props.episode}</td>
    </tr>;
  }
});

render(<ItemListe id="1" serie="Prison Break" season="1" episode="1" />, document.querySelector('#tabEpisodes tbody'));
