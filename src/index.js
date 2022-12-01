import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { items, filterGroups } from './data';
import './index.css';
import Item from './Item';
import Filter from './Filter';
import Sort from './Sort';

class App extends Component {

  constructor() {
    super()
    this.state = {
      items,
      filterGroups,
      filters: [],
      saved: []
    }
  }

  filterItems = (name, type) => {
    let totalFilters = [];
    if (this.state.filters.some((filter) => filter.name === name)) {
      totalFilters = this.state.filters.filter((element) => { return element.name !== name });
    } else {
      totalFilters = [...this.state.filters, { name, type }];
    }
    this.setState({
      filters: totalFilters,
      items: this.getFilteredItems(totalFilters)
    });

  }

  getFilteredItems = filters => {
    if (filters.length === 0) return items
    let filteredItems = [];
    this.keepSaved(items).forEach(item => {
      let containsAll = true;
      filters.forEach(filter => { if (!item[filter.type].includes(filter.name)) containsAll = false; });
      if (containsAll) filteredItems.push(item);
    });

    return filteredItems;
  }

  keepSaved = (items) => {
    let savedItems = [];
    items.forEach(item => {
      item.Other = this.state.saved[item.idx - 1] ? "Saved" : "";
      savedItems.push(item);
    });
    return savedItems;
  }


  render() {
    return (
      <div>
        <h1>IKEA Index</h1>
        <div className="container">
          <div className="controls">
            <Sort sortItems={(axis) => { this.setState({ items: this.state.items.sort((i, j) => { return i[axis] - j[axis] }) }) }} />
            <br />
            {this.state.filterGroups.map((group) => { return (<div><Filter {...group} filterItems={this.filterItems} key={group.title} /> <br /> </div>) })}
            <br />
            <h2>Price of Saved Items: ${this.state.items.filter(item => item.Other === "Saved").reduce((acc, item) => acc + item.price, 0)}</h2>
          </div>
          <div className="grid">
            {this.state.items.map((item) => {
              return <Item {...item} saveItem={(idx) => {
                let saved = this.state.saved;
                saved[idx - 1] = !saved[idx - 1];
                this.setState({ saved, items: this.keepSaved(this.state.items) });
                this.setState({ items: this.getFilteredItems(this.state.filters) });
              }} key={item.idx} />
            })}
          </div>
        </div>
      </div>
    )
  };
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);
