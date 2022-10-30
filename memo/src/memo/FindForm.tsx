import React, { useState, useEffect } from 'react'

function FindForm() {

    return (
        <form>
            <div className='form-group row'>
                <input type='text' className='form-control-sm col' />
                <input type='submit' value='find' className='btn btn-primary btn-sm col-2' />
            </div>
        </form>
    )
}

export default FindForm