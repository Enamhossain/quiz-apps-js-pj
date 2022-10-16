import React from 'react';

const Options = ({ optn, correctAnswer,id }) => {

    const handleToClick = () => {
        if (correctAnswer === optn) {
            
        }
        else {
            alert('Your Answer is incorrect')
        }

    }
    return (
        <div>
            <div>
                
          
            <label> <input onClick={() => handleToClick()} type="radio" name={id} className="radio  mx-5" />{optn} </label>
           
             
                   
            

            </div>
        </div>
    );
};

export default Options;