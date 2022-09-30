import React from 'react'

interface inputProps {
    sleepTime: number,
    sleepHandler: (e: React.FormEvent<HTMLInputElement>) => void,
}

const Input = (props: inputProps) => {

    return (
        <div className="mb-3">
            <label className="form-label" htmlFor="sleep_time">睡眠時間(h)</label>
            <div className="row">
                <div className="col-auto">
                    <input type="number"
                        defaultValue={props.sleepTime} onChange={props.sleepHandler}
                        className="form-control" id="sleep_time" name="sleep_time" />
                </div>
            </div>
        </div>
    )
}

export default Input