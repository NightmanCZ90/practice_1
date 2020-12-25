import './Sentence.scss';

const Sentence = (props) => {

  return (
    <div className='sentence'>
      <h2 className='sentence-text'>{props.text}</h2>
      <form className='sentence-form' onSubmit={props.handleSubmit}>
        <input 
          type='submit'  
          className='sentence-button'
        />
      </form>
    </div>
  )
};

export default Sentence;