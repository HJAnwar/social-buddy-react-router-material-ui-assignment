import React ,{ useState} from 'react';
import './Commentdetail.css';
import fakeData from '../../fakeData';

const Commentdetail = (props) => {
   const {name, email, body} =props.comment;

    const first5 = fakeData.slice(0, 1);
    const [photo, setPhoto] = useState(first5);
    
    
    
    return (
        
        <div className="comment">
            {
                photo.map(photo => <li><img src={photo.img} alt="" class="rounded-circle" style={{height:"40px"}} /></li>)
            }
            <h6>{name}</h6>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    );
};

export default Commentdetail;