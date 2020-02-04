import React, { Component } from 'react';

export default class RecursiveComponent extends Component {


	//write recursive method here
	renderChildren(components) {
    const [First, ...rest] = components;
    return (
      <First>
        {!!rest.length && this.renderChildren(rest) }
      </First>
    );
  }

	render() {
		const {components} = this.props;
		return (
		  <div>
				{this.renderChildren(components)}
		  </div>
		);
	}


};
