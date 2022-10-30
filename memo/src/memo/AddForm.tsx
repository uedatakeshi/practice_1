import React, { useState, useEffect } from 'react'
import usePersist from '../Persist';


function AddForm(props:any) {
    const [memo, setMemo] = usePersist("memo", []);
    const [message, setMessage] = useState('');

    // ここでセットしている。だからmessageで取り出せる
    const doChange = (e:any) => {
        setMessage(e.target.value);
    }

    const doAction = (e:any) => {
        alert(message);
        const data = {
            message: message,
            created: new Date()
        }
        memo.unshift(data);
        setMemo(memo);
        setMessage('');
    }

    return (
        <form onSubmit={doAction} action="">
            <div className='form-group row'>
                <input type='text' className='form-control-sm col'
                onChange={doChange} value={message} required />
                <input type='submit' value='add' 
                className='btn btn-primary btn-sm col-2' />
            </div>
        </form>
    )
}
export default AddForm
