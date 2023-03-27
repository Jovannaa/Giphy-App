import './Giphy.css'
import { useState } from 'react'

export const Giphy = () => {
    const [term, setTerm] = useState('');
    const [giphs, setGiphs] = useState([]);

    const onChangeHandler = (event) => {
        setTerm(event.target.value)
    };

    const onClickHandler = () => {
        let APIKEY = 'WXZhFB6XcgEx8WMOXwzrxer14RST4k9o'
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=12&q=${term}`)
        .then((respons) => respons.json())
        .then((data) => {
            setGiphs(data.data)
        });
    }

    const onEnterCLick = (event) => {
        if (event.key === "Enter") {
            onClickHandler()
        }
    }
    // console.log(giphs);
    return (
        <div className='container'>
            <div className='searchbar'>
                <label>Search Giphy</label>
                <input className='search' type='serch' value={term} onChange={onChangeHandler} onKeyDown={onEnterCLick} />
                {/* <button onClick={onClickHandler}>Search</button> */}
            </div>
            <div id="gifsContainer">
                {giphs.map(gif => (
                    <div className="card" key={gif.id}> <img src={gif.images.original.url} className="gif" alt="gif"/></div>
                ))}
            </div>
        </div>
    )
}