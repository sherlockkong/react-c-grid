react-c-grid
=========================

[Demo](http://grid.sherlockkong.com/) 

## Installation
```bash
npm install react-c-grid
```

## Usage
```javascript
import CGrid from 'react-c-grid'
// import index.css from node_modules/react-c-grid/lib to your sass or less file.

class App extends Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        const columns = [
            { key: 'name', label: 'Name' },
            { key: 'email', label: 'Email' },
            { key: 'company', label: 'Company' },
            { key: 'phone', label: 'Phone' }
        ]
        const rows = [/* ... */]

        return <CGrid 
            rows={rows} 
            columns={columns} 
        />
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
