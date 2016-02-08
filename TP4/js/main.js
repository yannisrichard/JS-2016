import React from 'react'
import { render } from 'react-dom'
//Faire un import afin d'inclure le component.
import { Liste } from './listComponent.js' 
import { ItemListe } from './itemListComponent.js'
import { AddForm } from './formComponent.js'
import { ButtonForm } from './buttonComponent.js'

/*
fetch('http://localhost:9312', {
    method: 'get'
}).then(function(response) {
    
}).catch(function(err) {
    
});

var Container = React.createClass({
  render: function() {
  return (
     <div className="container">
		 <div className="table">
			<HeaderTableComponent/>	
		</div>
		 <div>
			<FormComponent/>
			<ButtonComponent/>
		</div>
	 </div>

    );
  }
});

var HeaderTableComponent = React.createClass({
  render: function() {
    return (
			<table>
			 <thead>
			  <tr>
				 <th className="th__head">id</th>
				 <th className="th__head">Serie</th>
				 <th className="th__head">Season</th>
				 <th className="th__head">Episode</th>
			  </tr>
			 </thead>
			 <tbody>
			  <tr>
				 <td className="td__content">test</td>
				 <td className="td__content">test</td>
				 <td className="td__content">test</td>
				 <td className="td__content">test</td>
			  </tr>
			  <tr>
				 <td className="td__content">test</td>
				 <td className="td__content">test</td>
				 <td className="td__content">test</td>
				 <td className="td__content">test</td>
			  </tr>
			 </tbody>
			</table>
		);
	}
});

var ButtonComponent = React.createClass({
    getInitialState: function() {
        return {watched: false};
    },
    handleClick: function(event) {
      this.setState({watched: !this.state.watched});  
    },
    render: function() {
        var text = this.state.watched ? 'Watched' : 'Unwatched';
        return (
            <button onclick="{this.handleClick}">
                {text}
            </button>
        );
    }
});

var FormComponent = React.createClass({
  render: function() {
	  return (
		  <form className="form" action="#">
			Series : <input type="text" name="serie" placeholder="Serie"/><br/>
			Season : <input type="number" name="episode" placeholder="Season"/><br/>
			Episode : <input type="number" name="episode" placeholder="Episode"/>
		 </form> 
	  );
  }
});


render(<Container/>, document.getElementById('content'));
*/





