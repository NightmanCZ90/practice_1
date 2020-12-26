import './Question.scss';

const Question = (props) => {


  return (
    <div className='question'>
      <h3 className='question-title'>{props.title}</h3>
      <form className='question-form' onSubmit={props.handleSubmit}>
        <input 
          type="text" 
          className='question-input'
          placeholder={props.placeholder}
          onChange={props.handleChange}
        />
        <input 
          type='submit'  
          value='submit'
          className='question-button'
        />
      </form>
    </div>
  )
};

export default Question;