import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
    const [searchField, setSearchField] = useState(''); // [value, setValue]
    const [monsters, setMonsters] = useState([]); // [value, setValue]
    const [filteredMonsters, setFilteredMonsters] = useState(monsters); // [value,]

    console.log('render,app.js');
    useEffect(() => {
        console.log('fetch-call');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((resp) => resp.json())
            .then((users) => setMonsters(users))
            .catch((err) => console.log('Fetch Users Error', err))
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter(({name}) => {
            return name.toLocaleLowerCase().includes(searchField);
        });
        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchField]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    }

    return (
        <div className='App'>
            <h1 className='app-title'> Monsters Rolodex</h1>

            <SearchBox className='monsters-search-box'
                       onChangeHandler={onSearchChange}
                       placeholder='search monsters'
            />
            <CardList monsters={filteredMonsters}/>
        </div>
    )
}


export default App;
