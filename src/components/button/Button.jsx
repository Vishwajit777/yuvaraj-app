import React from "react";
export default function Button({ text, func, customClass, disabled }) {
    return (
        <button type="button"
            onClick={func}
            className={customClass}
            disabled={disabled}>
            {text}
        </button>
    );
}