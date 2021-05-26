import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'
import {updateNote} from '../../store/actions/noteAction'
import useInput from '../../customhook/useInput';

const EditForm = () => {
    const note = useSelector((state) => state.note)
    console.log('edit form', note)
    const [title, bindTitle, resetTitle] = useInput(note.title)
    const [content, bindContent, resetContent] = useInput(note.content)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateNote({id: note.id, title, content}))
        resetTitle()
        resetContent()
        history.push('/')
    }

    return (  
        <div className='section'> 
            <form className='white' onSubmit={handleSubmit}>
                <h5 className='grey-text text-darken-3'>New Note</h5>
                <div className="input-field">
                    <input id="note_title" type="text" class="validate" {...bindTitle}/>
                    <label className='active' htmlFor="note_title">Note Title</label>
                </div>
                <div className="input-field">
                    <textarea id="note_content" class="materialize-textarea" {...bindContent}></textarea>
                    <label className='active' htmlFor="note_content">Note Content</label>               
                </div>
                <button className="btn-green">Update</button>
            </form>
        </div>
    );
}
 
export default EditForm;