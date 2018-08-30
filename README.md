# react-c-grid

[![Build Status](https://travis-ci.org/sherlockkong/react-c-grid.svg?branch=master)](https://travis-ci.org/sherlockkong/react-c-grid)
[![npm version](https://badge.fury.io/js/react-c-grid.svg)](https://badge.fury.io/js/react-c-grid)

## Demo

- [http://grid.sherlockkong.com](http://grid.sherlockkong.com)

## Installation

```bash
npm install react-c-grid
```

## Usage

```javascript
import CGrid from 'react-c-grid'
// import index.css from node_modules/react-c-grid/lib to your sass or less file.

class App extends Component {
    render() {
        const columns = [
            { key: 'name', label: 'Name' },
            { key: 'email', label: 'Email' },
            { key: 'company', label: 'Company' },
            { key: 'phone', label: 'Phone' }
        ];
        const rows = [/* ... */];

        return (
            <CGrid rows={rows} columns={columns} />
        );
    }
}
```

## Sample

Run the sample:

```bash
# Install dependencies
npm install
# Start sample
npm start
```

## License

MIT
