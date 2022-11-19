import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [search, setSearch] = useState('');
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://api.coinstats.app/public/v1/coins?skip=0&limit=10&currency=USD`
    ).then((res) => {
      setCrypto(res.data.coins);
    });
  }, []);

return (
  <>
  <div className="App">

  <div className="hero" style={{display:"flex", flexDirection:"column", padding:"2em"}} data-theme="dark">
   
    <hgroup>
            <h2>Crypto Tracker</h2>
            <h3>Search or select from Dropdown</h3>
          </hgroup>
      
      
          <label for="search" style={{maxWidth:"70%"}}>
            <input type="search" 
              id="search" 
              name="search" 
              placeholder="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }} 
              />
          </label>
    
  </div>

  

  <main className="container">
      

  


      <article>
        <section>
      <table role="grid">
      
          <thead>
            <tr>
              <th >Rank</th>
              <th >Name</th>
              <th >Symbol</th>
              <th >Market Cap</th>
              <th >Price</th>
              <th >Available Supply</th>
            </tr>
          </thead>
        

        
        <tbody>
          {crypto.filter((val) => {
            return val.name.toLowerCase().includes(search.toLowerCase());
          }).map((val, id) => {
            return (
              <>
              <tr id={id}>
                <th className="rank">{val.rank}</th>
                <td className='logo'>
                  <a href={val.websiteUrl}>
                    <img src={val.icon} alt="logo" width="30px" />
                  </a>
                  <p>{val.name}</p>
                </td>
                <td className="symbol">{val.symbol}</td>
                <td>{val.marketCap}</td>
                <td>{val.price.toFixed(2)}</td>
                <td>{val.availableSupply}</td>
              </tr>
              </>
            );
          
          })}
      </tbody>
      
      <footer>Cryptochecker.com</footer>
    </table>
    </section>
    </article>
    
    </main>
    
  </div>
  </>
  );
}

export default App;
