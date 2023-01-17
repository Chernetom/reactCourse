import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode,setEditMode] = useState(false);
    let [status,setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);

    }

    useEffect( () => {
        setStatus(props.status);
        }, [props.status]
    );

    return(
        <div>
            {editMode
            ? <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}></input>
            </div>

            : <div>
                <span onClick={activateEditMode}>{props.status || "You status"}</span>
            </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;