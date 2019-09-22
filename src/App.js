import React, { PureComponent } from 'react';

import './App.css';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  render() { //see Array Elements
    const elements = [
      {name:'Perry',
        age:32
      },
      {name:'Victor',
        age:35
      },
      {name:'Assan',
        age:29
      },
    ];

    const items = [] //render html

    for (const  of elements.entries()) {
      items.push( <div class="flex" key={index}>
          <p class="name">{value.name}</p>
          <p class="details">Age:{value.age}</p>
          </div>)
    }
    return (
        <div id="flex">
        {items}
        </div>
  )
  }
}
