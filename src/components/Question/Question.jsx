import './Question.scss';

const Question = () => {
  return (
    <div className='question'>
      <h3 className='question-title'>Who?</h3>
      <form className='input-form'>
        <input type="text"/>
        <input type='submit' />
      </form>
    </div>
  )
};

export default Question;