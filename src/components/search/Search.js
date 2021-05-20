import donut from '../../img/search_donut.png'

const Search = ({search, handleSearch}) => {

    return ( 
        <div className='search mb-md'>
            <img src={donut} alt="Donut" className={`search__donut ${search === '' ? '' : 'search__donut--active'}`} />
            <input type="text" className='search__field' placeholder='Enter wish here' onChange={(e) => handleSearch(e.target.value)} value={search} spellCheck="false" />
        </div>
     );
}
 
export default Search;