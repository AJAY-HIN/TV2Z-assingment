import React from 'react'
import './Secon.css';
import  firstdog from './FirstDog.jpeg';
import back from './back.jpeg'

const Seconpage = () => {


  
  return (
    <>

    <nav>
    <h1>TV2Z</h1>
      
        <li>Movies</li>
        <li>Series</li>
        <li>Podcasts</li>
        <li>Radio</li>
     
    </nav>


    <div className='card-io'>
      <img src={firstdog} alt="childwithdog" />
      <div className='card'>
        <h1>CAINELE PRESEDITNELUI</h1>
        <h6>CAINELE PRESEDITNELUI</h6>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident iure, nostrum blanditiis odit expedita commodi deleniti fugit libero, labore temporibus placeat inventore maiores similique dolores sequi ex molestias repellat amet delectus necessitatibus quo ipsam quis! Totam quisquam nemo laudantium ipsa nulla adipisci non? Soluta reiciendis saepe optio iste, at laboriosam.</p>
        <input type='submit' value="View Details"/>

      </div>
        {/* <button style={{paddin:'15px'}} id='btn-details'>View Details</button> */}

    </div>

    <div id="footer">
      <footer>
        &copy; 2020 WT TV2Z All rights reserved.
      </footer>
    </div>



    </>
  )
}

export default Seconpage