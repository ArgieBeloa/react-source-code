// adding images 
import profilePicture from './assets/cyber-security.png'
 
 function Card() {

    // apply css
   const myName = "Argie Beloa"
    return(
            <div className="card">

                <img src={profilePicture} alt="image" className='cardProfile'/>
                <h2>{myName}</h2>
                <p>Knowledge is power</p>

            </div>
    )
    
 }
 export default Card