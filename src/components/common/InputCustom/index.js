import PropTypes from 'prop-types'
import React from "react";
import styles from "./index.module.scss";
import {Input} from 'antd';
import classNames from "classnames";

// eslint-disable-next-line react/display-name
const InputCustom = React.forwardRef((props, ref) => {
    const {
        placeholder,
        name,
        className,
        onChange,
        onBlur,
        value,
        disabled,
        ...others
    } = props;

    return (
        <Input
            {...others}
            ref={ref}
            name={name}
            value={value}
            placeholder={placeholder}
            className={classNames(styles['input'], className)}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
        />
    )
});

export default InputCustom;

InputCustom.propTypes = {
    value: PropTypes.any,
    name: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    disabled: PropTypes.bool,
};
