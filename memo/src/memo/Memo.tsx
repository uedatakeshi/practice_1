import React, { useState, useEffect } from 'react'
import usePersist from '../Persist';
import Item from './Item';

function Memo(props: any) {

    const [memo, setMemo] = usePersist("memo", []);
    const [fmemo, setFMemo] = usePersist("findMemo", []);
    const [mode, setMode] = usePersist("mode", "default");

    let data: any[] = [];

    data = memo.map((value: any, key: any) => (
        <Item key={value.message} value={value} index={key + 1} />
    ));
    //console.log(data);

    /*
        switch (mode) {
            case "default":
                data = memo.map((value:any, key:any) => (
                    <Item key={value.message} value={value} index={key + 1} />
                ));
                setMode("default");
                break;
    
            default:
                data = memo.map((value:any, key:any) => (
                    <Item key={value.message} value={value} index={key + 1} />
                ));
        }
    */
    return (
        <table className='table mt-4'>
            <tbody>
                {data}
            </tbody>
        </table>
    )
}

export default Memo