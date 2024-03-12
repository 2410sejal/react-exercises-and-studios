export default function HobbyLinks(){
    let HobbiesTitle = "My Hobbies"
    let hobbyLinks = ["https://www.pinterest.com/KrissyCano/painting/","https://www.gardendesign.com/how-to/"]
    return (
        <div >
           <h3>{HobbiesTitle}</h3>
           <a href = {hobbyLinks[0]}>Painting</a>
           <a href = {hobbyLinks[1]}>Gardening</a>
        </div>      
     );
  }
