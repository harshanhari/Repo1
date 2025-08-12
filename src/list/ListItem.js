import React, { useEffect } from 'react';
import Label from './Label';
import './ListItem.css';
import { useTooltip } from '../hooks/ourhooks';
import Tooltip from './Tooltip';

function ListItem(prosps) {
    const {
        title, descr, isActive, onDelete, onLabelClick
    } = prosps;

    const [showTooltip, setShowTooltip, labelRef, refObj] = useTooltip();

    useEffect(() => {
        // console.log('ListItem render' + title);
    });

    return (
        <div className='list-item'>

            <div className='list-title'>
                <h4>{title}</h4>
                <label onClick={onDelete} ref={labelRef} className='list-delete'
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                >
                    Delete
                    <Tooltip ref={refObj} showTooltip={showTooltip} message="Delete this"/>
                </label>
            </div>
            <div className='list-descr'>
                {descr}
            </div>
            <div className='list-label'>
                <Label isActive={isActive} onAction={onLabelClick} />

            </div>

        </div>
    );
}

export default ListItem;