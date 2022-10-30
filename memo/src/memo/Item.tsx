import React, { useState, useEffect } from 'react'

function Item(props:any) {

    let d = new Date(Date.parse(props.value.created))
    let f = d.getMonth() + '/' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();

    return (
        <tr><th>No. {props.index}</th>
        <td>{props.value.message}</td>
        <td>{f}</td></tr>
    )
}

export default Item