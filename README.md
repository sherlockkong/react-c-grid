react-c-grid
=========================

## Installation
```bash
npm install react-c-grid
```

## Usage
```javascript
import { CGrid } from 'react-c-grid'
// import index.css from node_modules/react-grid/lib to your sass or less file.

class App extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = { selected: 1, progressBar: undefined }
    }

    selectedPageChanged = (selected) => {
        this.setState({ selected: selected })
        this.setState({ progressBar: { show: true } })

        // fetch data from server 
        setTimeout(() => {
            this.setState({ progressBar: { show: false } })
        }, 1000)
    }

    render() {
        const columns = [
            { key: 'name', label: 'Name' },
            { key: 'email', label: 'Email' },
            { key: 'company', label: 'Company' },
            { key: 'phone', label: 'Phone' },
            { key: 'city', label: 'City' },
            { key: 'country', label: 'Country' },
            { key: 'postal', label: 'Postal' }
        ]

        const rows = [
            {
                "name": "Stewart",
                "email": "nec@auctorMaurisvel.edu",
                "company": "Amet Diam Eu PC",
                "phone": "1675071109899",
                "city": "San Marcello",
                "country": "Iceland",
                "postal": "14778"
            },
            // some rows ...
            {
                "name": "Ulric",
                "email": "metus.In@atlacus.co.uk",
                "company": "Ut Nisi Inc.",
                "phone": "1665091581699",
                "city": "Bonlez",
                "country": "Philippines",
                "postal": "873475"
            }
        ]

        let pagination = {
            pageSize: 12,
            selected: this.state.selected,
            itemsCount: rows.length,
            visiblePageCount: 6,
            showCountMsg: true,
            selectedPageChanged: this.selectedPageChanged
        }
        let subRows = rows.slice((this.state.selected - 1) * pagination.pageSize, this.state.selected * pagination.pageSize)
        
        return <CGrid
            rows={subRows}
            columns={columns}
            columnResizing={true}
            pagination={pagination}
            progressBar={this.state.progressBar}
        />
    }
}
```
## Sample

Run the sample:
```bash
# Install dependencies
npm install
# Run webpack-dev-server
npm run wds
# Start sample
npm start
```


## License

MIT
