import React, { useState, useEffect } from 'react'

function DelForm (props: any) {

    return (
        <form>
            <div className='form-group row'>
                <select></select>
                <input type='submit' value='del' 
                className='btn btn-primary btn-sm col-2' />

            </div>
        </form>
    )

}

export default DelForm