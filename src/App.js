import axios from 'axios';
import { useState } from 'react'
import './App.css';

import Screenshots from './components/Screenshots';
import Loading from './components/Loading';

const App = () => {
  const [images, setImages] = useState();
  const [urls, setUrls] = useState('');
  const [rdh, setRdh] = useState('no');
  const [cookie, setCookie] = useState('no');
  const [loading, setLoading] = useState(false);

  const getImage = async (w, r, c) => {
    const { data } = await axios.post('http://localhost:3001/screens/screenshot', { urls, cookie, rdh });
    // // .get(`http://localhost:3001/screenshot?w=${w}&r=${r}&c=${c}`);
    setImages(data.screenshot);
    setLoading(false);
  }


  const handleChange = (e) => {
    if (e.target.name === 'rdh') setRdh(e.target.value);
    if (e.target.name === 'cookie') setCookie(e.target.value);
    if (e.target.name === 'url1') setUrls([...urls, e.target.value]);
    if (e.target.name === 'url2') setUrls([...urls, e.target.value]);
    if (e.target.name === 'url3') setUrls([...urls, e.target.value]);
    if (e.target.name === 'url4') setUrls([...urls, e.target.value]);
    if (e.target.name === 'url5') setUrls([...urls, e.target.value]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setImages();
    setLoading(true);
    getImage(urls, rdh, cookie)
  }

  return (
    <div className="app">
      <h1>Get Website Screenshots</h1>
      <p>Every boring task can be automated</p>
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <h2>Website</h2>
          <label htmlFor="url1">URL 1</label>
          <input type="text" name="url1" onChange={(e) => handleChange(e)} />
          <label htmlFor="url2">URL 2</label>
          <input type="text" name="url2" onChange={(e) => handleChange(e)} />
          <label htmlFor="url3">URL 3</label>
          <input type="text" name="url3" onChange={(e) => handleChange(e)} />
          <label htmlFor="url4">URL 4</label>
          <input type="text" name="url4" onChange={(e) => handleChange(e)} />
          <label htmlFor="url5">URL 5</label>
          <input type="text" name="url5" onChange={(e) => handleChange(e)} />
        </div>

        <div>
          <h2>Is it the Rare Disease Hub?</h2>
          <label>
            <input type="radio" name="rdh" value="no" onChange={(e) => handleChange(e)} />
            No
          </label>
          <label>
            <input type="radio" name="rdh" value="yes" onChange={(e) => handleChange(e)} />
            Yes
          </label>
        </div>

        <div>
          <h2>Ignore cookie consent banner?</h2>
          <label>
            <input type="radio" name="cookie" value="no" onChange={(e) => handleChange(e)} />
            No
          </label>
          <label>
            <input type="radio" name="cookie" value="yes" onChange={(e) => handleChange(e)} />
            Yes
          </label>
        </div>
        <input type="submit" value="Get Screenshots" />
      </form>
      <div className='screenshots'>
        {loading ? <Loading /> : null}
        {images ? <Screenshots images={images} /> : null}
      </div>

      {/* <img src={image} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default App;
