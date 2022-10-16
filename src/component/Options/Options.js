import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Options = ({ optn, correctAnswer,id }) => {

    const handleToClick = () => {

        if (correctAnswer === optn) {
            toast.success('Great You Answer is Correct!', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else {
            toast.error('Incorrect, Please Try Again!', {
                position: toast.POSITION.TOP_CENTER
            });
        }

    }
    return (
        <div>
            <div>
                
          
            <label> <input onClick={() => handleToClick()} type="radio" name={id} className="radio  mx-5" />{optn} </label>
           
             
            <ToastContainer />
            

            </div>
        </div>
    );
};

export default Options;