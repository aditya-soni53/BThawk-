import React, { useEffect, useState } from 'react';
const FAQComponent = ({
  questions,
  openQuestionIndex,
  setOpenQuestionIndex
}) => {
  const isOpen = (qIndex) => openQuestionIndex === qIndex;
  const handleOnClick = (qIndex) =>
    isOpen(qIndex) ? setOpenQuestionIndex(null) : setOpenQuestionIndex(qIndex);

  return (
    <>
     <h3 className='text-2xl my-3'>Frequently Asked Questions</h3>
      {questions.map((e, qIndex) => (

        <div key={qIndex} id="faq-wrapper" onClick={() => handleOnClick(qIndex)} className="cursor-pointer mb-4">
          <div className='flex justify-between border-b-2 pb-1'>
          <b className="text-md">
          {e.question}  
          </b>
          <p className='text-2xl'>{isOpen(qIndex) ? "-" : "+"} </p>
          </div>
          {isOpen(qIndex) && (
            <>
              <hr />
              <p className="mt-2">{e.answer}</p>
            </>
          )}
          
        </div>
      
      ))}
    </>
  );
};

export default function Faq(props) {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  console.log(props.faq)
  return (
    <>
      <div className="container grid  pb-16">
        <div  className='lg:mt-0 mt-10'>
          <FAQComponent
            questions={props.faq}
            openQuestionIndex={openQuestionIndex}
            setOpenQuestionIndex={setOpenQuestionIndex}
          />
        </div>
      </div>
    </>
  );
}
