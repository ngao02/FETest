export const Ellipse = () => {
    return (
        <div>
            <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_d_1_404)">
                    <ellipse
                        cx="6.79397"
                        cy="3.99128"
                        rx="3.46721"
                        ry="3.46721"
                        fill="white"
                    />
                    <path
                        d="M9.87417 3.99128C9.87417 5.69243 8.49512 7.07149 6.79397 7.07149C5.09282 7.07149 3.71377 5.69243 3.71377 3.99128C3.71377 2.29014 5.09282 0.911083 6.79397 0.911083C8.49512 0.911083 9.87417 2.29014 9.87417 3.99128Z"
                        stroke="#4EAEFD"
                        stroke-width="0.77401"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_d_1_404"
                        x="-0.00147414"
                        y="0.291876"
                        width="13.5909"
                        height="13.5909"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="3.09604" />
                        <feGaussianBlur stdDeviation="1.66412" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_1_404"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_1_404"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};
