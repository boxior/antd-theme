import React from 'react'

export const MinusIcon = props => {
    const { className } = props;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="2">
            <path
                d="M.145 1.3C.048 1.3 0 1.253 0 1.16V.14C0 .047.048 0 .145 0h11.7c.097 0 .145.047.145.14v1.02c0 .093-.048.14-.145.14H.145z"
                className={className}
                fillRule="nonzero"
            />
        </svg>
    )
}

export const PlusIcon = props => {
    const { className } = props;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8">
            <path
                d="M3.276 4.815c0-.076-.038-.114-.114-.114H.2c-.127 0-.2-.063-.2-.2V3.488c0-.126.063-.2.2-.2h2.97c.076 0 .114-.038.114-.114V.2c0-.126.063-.2.2-.2h1.067c.127 0 .2.063.2.2v2.995c0 .076.038.114.114.114H7.8c.127 0 .2.063.2.2v1.024c0 .126-.063.2-.2.2h-2.97c-.076 0-.114.038-.114.114V7.8c0 .126-.063.2-.2.2H3.467c-.127 0-.2-.063-.2-.2V4.815z"
                className={className}
                fillRule="nonzero"
            />
        </svg>
    )
}
