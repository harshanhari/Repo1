import React from 'react';

function JustInfo(props) {
    const {
        showLabel,
        onClick
    } = props
    return (
        <div>
            Just JustInfo {showLabel}
        </div>
    );
}

export default React.memo(JustInfo, (prevProps, nextProps) => {
    return false
});