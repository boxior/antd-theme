import PropTypes from "prop-types";
import React from "react";
import styles from "./index.module.scss";
import ButtonCustom from "../ButtonCustom";
import InputCustom from "../InputCustom";
import classNames from "classnames";
import { getIsOnlyInteger } from "../../../utils/helpers";
import { MinusIcon, PlusIcon } from "../../../utils/svgIcons";

// eslint-disable-next-line react/display-name
const MinusPlusCustom = React.forwardRef((props, ref) => {
    const { name, value, placeholder, handleChange, className, ...others } = props;

    const onChange = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if (getIsOnlyInteger(value)) {
            handleChange({ name, value });
        }
    };

    const onChangeMinusPlusButtons = ({ type }) => () => {
        if (getIsOnlyInteger(value)) {
            if (type === "plus") {
                handleChange({ name, value: Number(value) + 1 });
                return;
            }

            if (type === "minus") {
                if (Number(value) - 1 <= 0) {
                    handleChange({ name, value: 1 });
                    return;
                }
                handleChange({ name, value: Number(value) - 1 });
            }
        }
    };

    const onBlur = e => {
        if (!value && (!e.relatedTarget || !e.relatedTarget.closest("#" + name))) {
            handleChange({ name, value: 1 });
        }
    };

    return (
        <div className={classNames(styles[`minus-plus`], className)} id={name}>
            <ButtonCustom
                className={classNames(styles[`button-left`], styles[`ant-btn`])}
                onClick={onChangeMinusPlusButtons({ type: "minus" })}
            >
                <div className={styles["icon-wrap"]}>
                    <MinusIcon className={classNames(styles["icon"])} />
                </div>
            </ButtonCustom>
            <InputCustom
                {...others}
                ref={ref}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                className={styles["input"]}
            />
            <ButtonCustom
                className={classNames(styles[`button-right`], styles[`ant-btn`])}
                onClick={onChangeMinusPlusButtons({ type: "plus" })}
            >
                <div className={styles["icon-wrap"]}>
                    <PlusIcon className={classNames(styles["icon"])} />
                </div>
            </ButtonCustom>
        </div>
    );
});

export default MinusPlusCustom;

MinusPlusCustom.propTypes = {
    value: PropTypes.any,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    handleChange: PropTypes.func,
    handleChangePlus: PropTypes.func,
    handleChangeMinus: PropTypes.func,
    handleBlur: PropTypes.func
};
