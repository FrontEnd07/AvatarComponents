import React, {useState} from 'react';

const ColoredUserpic = ({...props}) => {

    let {
        src,
        size,
        margin,
        backgroundColor,
        colors,
        hoverColors,
        colorWidth
    } =
        props;

    const [hover, setHover] = useState(false);
    let margeSize = size;

    if (margin) {
        margeSize += +margin * 2
    }

    if (colorWidth) {
        margeSize += +colorWidth * 2
    }
    const marge = {
        width: size ? margeSize : '',
        height: size ? margeSize : '',
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        cursor: "pointer",
    }

    const path = {
        normal: {
            ...marge,
            background: colors ?
                `linear-gradient(to right, ${colors[0]}, ${colors[1]}) padding-box` : "",
        },
        hover: {
            ...marge,
            background: hoverColors ?
                `linear-gradient(to right, ${hoverColors[0]}, ${hoverColors[1]}) padding-box` : "",
        }
    }

    const custom = {
        width: size ? size : '',
        height: size ? size : '',
        padding: margin ? margin : '',
        borderWidth: colorWidth ? colorWidth : "",
        backgroundColor: backgroundColor ? backgroundColor : '',
        display: "inline-block",
        borderRadius: "50%",
        overflow: "hidden",
    };

    const customImg = {
        width: "100%",
        borderRadius: "50%",
    }

    return (
        <div
            onMouseEnter={() => {
                setHover(true);
            }}
            onMouseLeave={() => {
                setHover(false);
            }}
            style={{
                ...path.normal,
                ...(hover ? path.hover : null)
            }}>
            <div style={custom}>
                <img style={customImg} src={src} alt=""/>
            </div>
        </div>
    );
};
export default ColoredUserpic;
