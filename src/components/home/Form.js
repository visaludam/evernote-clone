import useInput from '../../customhook/useInput'
import { addNote } from '../../store/actions/noteAction';
import {useDispatch} from 'react-redux'

const Form = () => {
    const [title, bindTitle, resetTitle] = useInput()
    const [content, bindContent, resetContent] = useInput()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addNote({title, content}))
        resetTitle()
        resetContent()
    }

    return (  
        <div className='section'> 
            <form className='white' onSubmit={handleSubmit}>
                <h5 className='grey-text text-darken-3'>New Note</h5>
                <div className="input-field">
                    <input id="note_title" type="text" class="validate" {...bindTitle}/>
                    <label htmlFor="note_title">Note Title</label>
                </div>
                <div className="input-field">
                    <textarea id="note_content" class="materialize-textarea" {...bindContent}></textarea>
                    <label htmlFor="note_content">Note Content</label>               
                </div>
                <button className="btn-green">Add</button>
            </form>
        </div>
    );
}
 
export default Form;