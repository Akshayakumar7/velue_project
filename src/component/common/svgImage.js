import React from 'react';


const SvgImage = (props) => {
    const { Source = null,height,width,style } = props;
    return Source === null ? null : <Source {...props} />;
};
export default SvgImage;