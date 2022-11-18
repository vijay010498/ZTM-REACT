import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";


class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: '',
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((resp) => resp.json())
            .then((users) => {
                this.setState((state, prop) => {
                    return {
                        monsters: users,
                    };
                })
            })
            .catch((err) => console.log('Fetch Users Error', err))
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(() => {
            return {searchField}
        });
    }

    render() {
        const {monsters, searchField} = this.state;
        const {onSearchChange} = this;
        const filteredMonsters = monsters.filter(({name}) => {
            return name.toLocaleLowerCase().includes(searchField);
        });
        return (
            <div className="App">
                <h1 className='app-title'>Monsters Rolodex</h1>
                <SearchBox className='monsters-search-box'
                           onChangeHandler={onSearchChange}
                           placeholder='search monsters'
                />
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
