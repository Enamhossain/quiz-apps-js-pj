
import Options from '../Options/Options';
import { EyeIcon } from '@heroicons/react/24/solid'
import './ps.css'

const Question = ({qz,index}) => {
     const {question,options,correctAnswer,id}=qz
    
    return (
        <div className='border-solid border-2  rounded-md shadow mt-5 pb-5'>
             <h1 className='font-bold text-center'>Quiz {index + 1}{question}</h1>
   
 <EyeIcon  className='h-6 w-8 ps' />
  

  <div className=' mx-auto mt-5 text-xl gap-2'>     
        {
                options.map(optn => <Options
                    key={optn.id}
                    optn={optn}
                    correctAnswer={correctAnswer}
                    id={id}
                ></Options>)
            }
        </div>
         

        </div>
    );
};

export default Question;