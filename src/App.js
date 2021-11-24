import React, { Component } from 'react';
import Dropdown from './Dropdown';
class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: [
        {
          label: 'Acura',
          value: 'acura',
        },
        {
          label: 'Honda',
          value: 'honda',
        },
        {
          label: 'Toyota',
          value: 'toyota',
        },
        {
          label: 'Ferrari',
          value: 'ferrari',
        },
        {
          label: 'Volkswagen',
          value: 'volkswagen',
        },
        {
          label: 'Lamborghini',
          value: 'lamborghini',
        },
        {
          label: 'Ford',
          value: 'ford',
        },
      ],
    };
  }

  onChange = (item, name) => { console.log(item, name); }

  render() {
    const { cars } = this.state;

    return (
      <div className="App">
        <p>Dropdown menu</p>

        <h3>Click to display List of Car Manufacturers. Type to filter</h3>

        <div>
          <Dropdown
            name="cars"
            searchable={['Search for car', 'No matching cars']}
            title="Select cars"
            list={cars}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
