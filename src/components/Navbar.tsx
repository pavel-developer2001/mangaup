import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <svg className='navbar__logo' width="109" height="17" viewBox="0 0 109 17" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M2.49023 15.9316C2.24935 16.1074 1.97266 16.1953 1.66016 16.1953C1.35417 16.1953 1.10677 16.1172 0.917969 15.9609C0.735677 15.7982 0.644531 15.6126 0.644531 15.4043C0.644531 15.196 0.677083 15.043 0.742188 14.9453C0.93099 15.056 1.23047 15.1113 1.64062 15.1113C1.80339 15.1113 1.98242 15.0299 2.17773 14.8672C2.37305 14.6979 2.5293 14.4668 2.64648 14.1738V9.59375C2.64648 9.28776 2.58138 9.0599 2.45117 8.91016C2.25586 8.67578 1.92383 8.44466 1.45508 8.2168C1.93034 7.98893 2.22982 7.80013 2.35352 7.65039C2.54883 7.40299 2.64648 7.1263 2.64648 6.82031L2.65625 2.5625C2.5 2.15234 2.15495 1.94727 1.62109 1.94727C1.34766 1.94727 1.14583 2.0026 1.01562 2.11328C0.950521 2.02865 0.917969 1.91797 0.917969 1.78125C0.917969 1.64453 0.947266 1.52083 1.00586 1.41016C1.06445 1.29948 1.14583 1.20182 1.25 1.11719C1.47135 0.947917 1.76758 0.863281 2.13867 0.863281C2.50977 0.863281 2.81576 0.970703 3.05664 1.18555C3.27148 0.970703 3.52214 0.863281 3.80859 0.863281C4.09505 0.863281 4.33919 0.983724 4.54102 1.22461C4.79492 0.983724 5.01953 0.863281 5.21484 0.863281C5.41016 0.863281 5.5599 0.879557 5.66406 0.912109C5.76823 0.944661 5.8724 1.00651 5.97656 1.09766C6.1849 1.26042 6.40299 1.58919 6.63086 2.08398L10.3711 9.84766L13.457 2.24023L13.7305 1.60547C13.8932 1.2474 14.0462 1.03581 14.1895 0.970703C14.3327 0.899089 14.4987 0.863281 14.6875 0.863281C14.8828 0.863281 15.0814 0.934896 15.2832 1.07812C15.5306 0.934896 15.8529 0.863281 16.25 0.863281C16.6536 0.863281 17.002 0.970703 17.2949 1.18555C17.5553 0.970703 17.8255 0.863281 18.1055 0.863281C18.3919 0.863281 18.6133 0.886068 18.7695 0.931641C18.9323 0.977214 19.0723 1.03906 19.1895 1.11719C19.4368 1.29297 19.5605 1.51107 19.5605 1.77148C19.5605 1.90169 19.5247 2.01562 19.4531 2.11328C19.3099 2.0026 19.1276 1.94727 18.9062 1.94727C18.4115 1.94727 18.0762 2.17839 17.9004 2.64062V6.82031C17.9004 7.13932 17.9688 7.37695 18.1055 7.5332C18.3203 7.78711 18.6491 8.01497 19.0918 8.2168C18.6165 8.45117 18.3138 8.64323 18.1836 8.79297C17.9948 9.02734 17.9004 9.29427 17.9004 9.59375V14.3691C18.1217 14.8639 18.5221 15.1113 19.1016 15.1113C19.3229 15.1113 19.5052 15.056 19.6484 14.9453C19.7201 15.043 19.7559 15.1569 19.7559 15.2871C19.7559 15.4108 19.7168 15.528 19.6387 15.6387C19.5671 15.7493 19.4661 15.8438 19.3359 15.9219C19.0365 16.1042 18.6947 16.1953 18.3105 16.1953C17.9264 16.1953 17.5684 16.0911 17.2363 15.8828C16.9303 16.0911 16.582 16.1953 16.1914 16.1953C15.7747 16.1953 15.4069 16.0911 15.0879 15.8828C14.7559 16.0911 14.4466 16.1953 14.1602 16.1953C13.8802 16.1953 13.6491 16.1693 13.4668 16.1172C13.2845 16.0716 13.125 16.0065 12.9883 15.9219C12.7083 15.7526 12.5684 15.541 12.5684 15.2871C12.5684 15.1569 12.6042 15.043 12.6758 14.9453C12.819 15.056 13.0013 15.1113 13.2227 15.1113C13.8021 15.1113 14.2025 14.8639 14.4238 14.3691V3.69531L10.6152 13.1289L10.1953 14.0859C9.99349 14.5417 9.85026 14.7988 9.76562 14.8574C9.6875 14.916 9.6224 14.9453 9.57031 14.9453C9.40755 14.9453 9.29362 14.929 9.22852 14.8965L4.01367 4.61328V14.1641C4.13737 14.4635 4.30664 14.6979 4.52148 14.8672C4.73633 15.0299 4.97721 15.1113 5.24414 15.1113C5.51107 15.1113 5.73893 15.056 5.92773 14.9453C5.99935 15.0625 6.03516 15.2253 6.03516 15.4336C6.03516 15.6354 5.93424 15.8145 5.73242 15.9707C5.5306 16.1204 5.27018 16.1953 4.95117 16.1953C4.63216 16.1953 4.33919 16.1139 4.07227 15.9512C3.83789 16.1139 3.56771 16.1953 3.26172 16.1953C2.96224 16.1953 2.70508 16.1074 2.49023 15.9316ZM5.39062 3.7832C5.32552 3.88086 5.29297 4.02083 5.29297 4.20312C5.29297 4.73047 5.51432 5.43034 5.95703 6.30273L9.51172 13.4023C9.55729 13.3438 9.58008 13.2201 9.58008 13.0312C9.58008 12.4648 9.3099 11.6348 8.76953 10.541L5.39062 3.7832ZM15.3613 13.4121C15.6868 13.2884 15.8659 12.862 15.8984 12.1328C15.9375 11.4036 15.957 10.3945 15.957 9.10547C15.957 7.81641 15.9538 6.96029 15.9473 6.53711C15.9473 6.10742 15.944 5.76237 15.9375 5.50195C15.918 4.73372 15.8431 4.27148 15.7129 4.11523C15.5892 3.95247 15.472 3.84505 15.3613 3.79297V13.4121ZM3.87695 13.5391C3.87695 13.5911 3.88021 13.6302 3.88672 13.6562L3.87695 13.5391ZM2.7832 13.5391C2.77669 13.5651 2.77344 13.6042 2.77344 13.6562L2.7832 13.5391ZM21.6113 15.9316C21.3704 16.1074 21.0938 16.1953 20.7812 16.1953C20.4753 16.1953 20.2311 16.1172 20.0488 15.9609C19.86 15.7982 19.7656 15.6126 19.7656 15.4043C19.7656 15.196 19.7982 15.043 19.8633 14.9453C20.0521 15.056 20.2832 15.1113 20.5566 15.1113C20.8366 15.1113 21.0449 15.0755 21.1816 15.0039C21.3249 14.9258 21.4616 14.8216 21.5918 14.6914L22.9785 10.5801L23.1738 9.90625C23.2324 9.70443 23.2617 9.51888 23.2617 9.34961C23.2617 8.75716 22.9818 8.37956 22.4219 8.2168C22.9362 8.02148 23.2975 7.8099 23.5059 7.58203C23.8314 7.22396 24.0885 6.75195 24.2773 6.16602L25.3516 2.5625C25.1432 2.28255 24.8958 2.14258 24.6094 2.14258C24.3229 2.14258 24.056 2.20443 23.8086 2.32812C23.7435 2.21094 23.7109 2.08073 23.7109 1.9375C23.7109 1.78776 23.7402 1.64779 23.7988 1.51758C23.8639 1.38737 23.9518 1.27344 24.0625 1.17578C24.3099 0.967448 24.6615 0.863281 25.1172 0.863281C25.5729 0.863281 25.9603 1 26.2793 1.27344C26.6048 1 27.0085 0.863281 27.4902 0.863281C27.9785 0.863281 28.3659 0.99349 28.6523 1.25391C29.069 0.99349 29.4922 0.863281 29.9219 0.863281C30.3516 0.863281 30.6836 0.944661 30.918 1.10742C31.1589 1.27018 31.2793 1.49154 31.2793 1.77148C31.2793 1.90169 31.2402 2.01562 31.1621 2.11328C31.0124 2.0026 30.8366 1.94727 30.6348 1.94727C30.1986 1.94727 29.9154 2.24349 29.7852 2.83594L31.0352 6.83008C31.1914 7.33138 31.582 7.72201 32.207 8.00195C32.3828 8.08008 32.5618 8.15169 32.7441 8.2168C32.0931 8.43164 31.7676 8.75391 31.7676 9.18359C31.7676 9.34635 31.7936 9.48958 31.8457 9.61328L33.7109 14.6133C33.9974 14.9128 34.2871 15.0625 34.5801 15.0625C34.873 15.0625 35.1009 15.0072 35.2637 14.8965C35.3353 14.9486 35.3711 15.0462 35.3711 15.1895C35.3711 15.3327 35.3483 15.4661 35.3027 15.5898C35.2572 15.707 35.1855 15.8112 35.0879 15.9023C34.8796 16.0977 34.5736 16.1953 34.1699 16.1953C33.7663 16.1953 33.4147 16.0846 33.1152 15.8633C32.7767 16.0846 32.3926 16.1953 31.9629 16.1953C31.5397 16.1953 31.1751 16.0879 30.8691 15.873C30.5762 16.0879 30.2311 16.1953 29.834 16.1953C29.4368 16.1953 29.1081 16.1139 28.8477 15.9512C28.5872 15.7819 28.4505 15.5443 28.4375 15.2383C28.4375 15.056 28.4733 14.9421 28.5449 14.8965C28.7207 15.0072 28.8997 15.0625 29.082 15.0625C29.4661 15.0625 29.7363 14.9844 29.8926 14.8281L29.1504 12.3379H23.8672L23.2227 14.4961C23.4896 14.9062 23.8118 15.1113 24.1895 15.1113C24.5736 15.1113 24.86 15.056 25.0488 14.9453C25.1204 15.0625 25.1562 15.2253 25.1562 15.4336C25.1562 15.6354 25.0553 15.8145 24.8535 15.9707C24.6517 16.1204 24.3913 16.1953 24.0723 16.1953C23.7533 16.1953 23.4603 16.1139 23.1934 15.9512C22.959 16.1139 22.6888 16.1953 22.3828 16.1953C22.0833 16.1953 21.8262 16.1074 21.6113 15.9316ZM28.75 11.0195L26.4844 3.49023L24.2578 11.0195H28.75ZM30.6152 13.4121C30.7324 13.4121 30.791 13.2819 30.791 13.0215C30.791 12.5658 30.7227 12.123 30.5859 11.6934L30.2148 10.5508C29.9544 9.69141 29.8242 9.15104 29.8242 8.92969C29.8177 8.5651 29.9772 8.32422 30.3027 8.20703C29.8535 8.11589 29.5801 7.97591 29.4824 7.78711C29.4368 7.70898 29.3978 7.64714 29.3652 7.60156C29.3392 7.55599 29.3099 7.50391 29.2773 7.44531C29.2513 7.38021 29.2188 7.29883 29.1797 7.20117C29.1406 7.10352 29.0885 6.96354 29.0234 6.78125L28.418 4.95508C28.2747 4.49935 28.0632 4.1543 27.7832 3.91992C27.6986 3.84831 27.6204 3.80599 27.5488 3.79297C27.985 5.36849 28.2715 6.3776 28.4082 6.82031C29.3522 9.72396 29.9186 11.446 30.1074 11.9863L30.6152 13.4121ZM33.4961 14.291L33.5156 14.3496L33.4961 14.291ZM37.168 15.9316C36.9271 16.1074 36.6504 16.1953 36.3379 16.1953C36.0319 16.1953 35.7845 16.1172 35.5957 15.9609C35.4134 15.7982 35.3223 15.6126 35.3223 15.4043C35.3223 15.196 35.3548 15.043 35.4199 14.9453C35.6087 15.056 35.9049 15.1113 36.3086 15.1113C36.7188 15.1113 37.0573 14.8346 37.3242 14.2812V9.59375C37.3242 9.28776 37.2591 9.0599 37.1289 8.91016C36.9336 8.67578 36.6016 8.44466 36.1328 8.2168C36.6081 7.98893 36.9076 7.80013 37.0312 7.65039C37.2266 7.40299 37.3242 7.1263 37.3242 6.82031V2.69922C37.1029 2.19792 36.7025 1.94727 36.123 1.94727C35.9017 1.94727 35.7194 2.0026 35.5762 2.11328C35.5046 2.01562 35.4688 1.90169 35.4688 1.77148C35.4688 1.64128 35.5013 1.52083 35.5664 1.41016C35.6315 1.29948 35.7161 1.20182 35.8203 1.11719C36.0482 0.947917 36.3542 0.863281 36.7383 0.863281C37.1289 0.863281 37.4609 0.970703 37.7344 1.18555C37.9167 0.970703 38.1673 0.863281 38.4863 0.863281C38.8053 0.863281 39.0625 0.973958 39.2578 1.19531C39.4466 0.973958 39.6387 0.863281 39.834 0.863281C40.0358 0.863281 40.1855 0.882812 40.2832 0.921875C40.3874 0.960938 40.4753 1.01302 40.5469 1.07812C40.651 1.16276 40.7682 1.32878 40.8984 1.57617L46.9531 12.4844V9.50586C46.9531 9.2194 46.8913 9.00781 46.7676 8.87109C46.5788 8.66927 46.2435 8.45117 45.7617 8.2168C46.2109 7.99544 46.5007 7.81641 46.6309 7.67969C46.8457 7.45182 46.9531 7.19792 46.9531 6.91797V2.82617C46.8034 2.55273 46.6178 2.33789 46.3965 2.18164C46.1816 2.02539 45.9342 1.94727 45.6543 1.94727C45.3809 1.94727 45.1497 2.0026 44.9609 2.11328C44.8893 1.99609 44.8535 1.83659 44.8535 1.63477C44.8535 1.42643 44.9544 1.2474 45.1562 1.09766C45.3581 0.941406 45.6217 0.863281 45.9473 0.863281C46.2728 0.863281 46.5625 0.947917 46.8164 1.11719C47.0443 0.947917 47.3047 0.863281 47.5977 0.863281C47.8971 0.863281 48.1608 0.951172 48.3887 1.12695C48.6426 0.951172 48.9225 0.863281 49.2285 0.863281C49.5345 0.863281 49.7786 0.944661 49.9609 1.10742C50.1497 1.26367 50.2441 1.44596 50.2441 1.6543C50.2441 1.86263 50.2116 2.01562 50.1465 2.11328C49.9577 2.0026 49.6549 1.94727 49.2383 1.94727C48.8216 1.94727 48.4896 2.22721 48.2422 2.78711V6.91797C48.2422 7.19792 48.3008 7.40299 48.418 7.5332C48.6133 7.74805 48.9518 7.97591 49.4336 8.2168C48.9062 8.50326 48.5905 8.70182 48.4863 8.8125C48.3236 8.98828 48.2422 9.2194 48.2422 9.50586L48.418 14.4668C48.6523 14.8965 49.0202 15.1113 49.5215 15.1113C49.7428 15.1113 49.9251 15.056 50.0684 14.9453C50.14 15.043 50.1758 15.1569 50.1758 15.2871C50.1758 15.4173 50.1432 15.5378 50.0781 15.6484C50.013 15.7591 49.9284 15.8568 49.8242 15.9414C49.5964 16.1107 49.3197 16.1953 48.9941 16.1953C48.6686 16.1953 48.3757 16.1302 48.1152 16C47.6009 16.293 47.0768 16.2702 46.543 15.9316C46.3346 16.1074 46.1361 16.1953 45.9473 16.1953C45.7585 16.1953 45.6185 16.179 45.5273 16.1465C45.4362 16.1139 45.3516 16.0553 45.2734 15.9707C45.1497 15.847 44.9577 15.5378 44.6973 15.043L38.6914 4.69141V14.2812C38.9583 14.8346 39.2969 15.1113 39.707 15.1113C40.1172 15.1113 40.4167 15.056 40.6055 14.9453C40.6771 15.0625 40.7129 15.2253 40.7129 15.4336C40.7129 15.6354 40.612 15.8145 40.4102 15.9707C40.2083 16.1204 39.9479 16.1953 39.6289 16.1953C39.3099 16.1953 39.0169 16.1139 38.75 15.9512C38.5156 16.1139 38.2454 16.1953 37.9395 16.1953C37.64 16.1953 37.3828 16.1074 37.168 15.9316ZM44.8047 13.4121C44.8503 13.3535 44.873 13.2624 44.873 13.1387C44.873 13.0085 44.8535 12.8652 44.8145 12.709C44.7819 12.5462 44.7331 12.3737 44.668 12.1914C44.5312 11.8268 44.3522 11.4362 44.1309 11.0195L39.9902 3.79297C39.9447 3.86458 39.9219 3.99479 39.9219 4.18359C39.9219 4.58724 40.1986 5.29362 40.752 6.30273L44.8047 13.4121ZM61.875 15.7656C60.8724 16.1172 59.8796 16.293 58.8965 16.293C57.9199 16.293 57.0638 16.153 56.3281 15.873C55.599 15.5866 54.9544 15.1732 54.3945 14.6328C53.2031 13.4935 52.4935 11.9147 52.2656 9.89648C52.168 9.05013 51.8359 8.49023 51.2695 8.2168C51.8359 7.94987 52.1712 7.38997 52.2754 6.53711C52.3796 5.67773 52.627 4.88672 53.0176 4.16406C53.4082 3.4349 53.9095 2.81641 54.5215 2.30859C55.7715 1.27995 57.3372 0.765625 59.2188 0.765625C60.5143 0.765625 61.6016 1.06185 62.4805 1.6543C63.2943 2.20117 63.7988 2.91406 63.9941 3.79297C64.0983 4.28776 64.2318 4.59375 64.3945 4.71094C64.4596 4.76302 64.541 4.81185 64.6387 4.85742C64.2546 5.43034 63.8639 5.66797 63.4668 5.57031C63.3691 5.55078 63.278 5.52474 63.1934 5.49219C63.0501 5.77865 62.8646 6.01628 62.6367 6.20508C62.4089 6.39388 62.1549 6.50456 61.875 6.53711C61.6016 6.56315 61.429 6.54362 61.3574 6.47852C61.5202 6.23763 61.6016 5.93164 61.6016 5.56055C61.6016 5.51497 61.5918 5.45638 61.5723 5.38477C61.5397 5.39779 61.5104 5.4043 61.4844 5.4043C61.4583 5.4043 61.4095 5.40755 61.3379 5.41406C61.2663 5.41406 61.1654 5.38802 61.0352 5.33594C60.9049 5.28385 60.7845 5.21224 60.6738 5.12109C60.4264 4.92578 60.2962 4.71094 60.2832 4.47656C60.2832 4.42448 60.293 4.3724 60.3125 4.32031C60.7161 4.44401 61.1003 4.35286 61.4648 4.04688C61.7122 3.83203 61.8294 3.60417 61.8164 3.36328C61.8034 3.1224 61.735 2.92383 61.6113 2.76758C61.4941 2.60482 61.3249 2.46484 61.1035 2.34766C60.6087 2.08724 59.974 1.95703 59.1992 1.95703C57.4349 1.95703 56.5527 2.97917 56.5527 5.02344V6.64453C56.5527 7.38021 56.9108 7.9043 57.627 8.2168C56.9108 8.56185 56.5527 9.125 56.5527 9.90625V12.5234C56.5527 13.3503 56.709 13.9655 57.0215 14.3691C57.334 14.7663 57.8288 14.9648 58.5059 14.9648C59.3066 14.9648 59.8372 14.6068 60.0977 13.8906C60.1823 13.6562 60.2246 13.3861 60.2246 13.0801V10.8242C60.1009 10.7005 59.9284 10.6387 59.707 10.6387C59.4857 10.6387 59.3034 10.694 59.1602 10.8047C59.0885 10.7331 59.0527 10.5964 59.0527 10.3945C59.0527 10.1927 59.1374 10.0039 59.3066 9.82812C59.4759 9.64583 59.7331 9.55469 60.0781 9.55469C60.4297 9.55469 60.7194 9.64909 60.9473 9.83789C61.2598 9.64909 61.5951 9.55469 61.9531 9.55469C62.3112 9.55469 62.6367 9.65234 62.9297 9.84766C63.2031 9.65234 63.4603 9.55469 63.7012 9.55469C63.9421 9.55469 64.1309 9.57747 64.2676 9.62305C64.4043 9.66862 64.5247 9.73047 64.6289 9.80859C64.8633 9.98438 64.9805 10.2025 64.9805 10.4629C64.9805 10.6191 64.9447 10.7331 64.873 10.8047C64.7233 10.694 64.5312 10.6387 64.2969 10.6387C64.0625 10.6387 63.8346 10.86 63.6133 11.3027V14.5059C63.737 14.9095 64.0072 15.1113 64.4238 15.1113C64.5801 15.1113 64.7298 15.056 64.873 14.9453C64.9447 15.043 64.9805 15.1569 64.9805 15.2871C64.9805 15.554 64.834 15.7721 64.541 15.9414C64.248 16.1107 63.8281 16.1953 63.2812 16.1953C62.7409 16.1953 62.2721 16.0521 61.875 15.7656ZM54.4727 13.4121C54.5703 13.373 54.6191 13.3047 54.6191 13.207C54.6191 13.0638 54.5508 12.8392 54.4141 12.5332C54.2773 12.2207 54.1504 11.6966 54.0332 10.9609C53.9225 10.2188 53.8672 9.35938 53.8672 8.38281C53.8672 6.80078 54.0592 5.44987 54.4434 4.33008C54.4889 4.16732 54.5117 4.04362 54.5117 3.95898C54.5117 3.87435 54.4694 3.81901 54.3848 3.79297C54.0788 4.17708 53.8607 4.55794 53.7305 4.93555C53.4896 5.62565 53.2975 6.5599 53.1543 7.73828C53.1348 7.90755 52.9427 8.06706 52.5781 8.2168C52.9427 8.37956 53.1348 8.54557 53.1543 8.71484C53.3887 10.7331 53.6849 12.0807 54.043 12.7578C54.1732 12.9987 54.3164 13.2168 54.4727 13.4121ZM61.2305 13.998C61.6081 13.7637 61.7969 13.3503 61.7969 12.7578V12.2012C61.7969 11.6478 61.6081 11.2865 61.2305 11.1172V13.998ZM63.5352 14.1738L63.5059 13.9785L63.5352 14.1738ZM66.4355 15.9316C66.1947 16.1074 65.918 16.1953 65.6055 16.1953C65.2995 16.1953 65.0553 16.1172 64.873 15.9609C64.6842 15.7982 64.5898 15.6126 64.5898 15.4043C64.5898 15.196 64.6224 15.043 64.6875 14.9453C64.8763 15.056 65.1074 15.1113 65.3809 15.1113C65.6608 15.1113 65.8691 15.0755 66.0059 15.0039C66.1491 14.9258 66.2858 14.8216 66.416 14.6914L67.8027 10.5801L67.998 9.90625C68.0566 9.70443 68.0859 9.51888 68.0859 9.34961C68.0859 8.75716 67.806 8.37956 67.2461 8.2168C67.7604 8.02148 68.1217 7.8099 68.3301 7.58203C68.6556 7.22396 68.9128 6.75195 69.1016 6.16602L70.1758 2.5625C69.9674 2.28255 69.7201 2.14258 69.4336 2.14258C69.1471 2.14258 68.8802 2.20443 68.6328 2.32812C68.5677 2.21094 68.5352 2.08073 68.5352 1.9375C68.5352 1.78776 68.5645 1.64779 68.623 1.51758C68.6882 1.38737 68.776 1.27344 68.8867 1.17578C69.1341 0.967448 69.4857 0.863281 69.9414 0.863281C70.3971 0.863281 70.7845 1 71.1035 1.27344C71.429 1 71.8327 0.863281 72.3145 0.863281C72.8027 0.863281 73.1901 0.99349 73.4766 1.25391C73.8932 0.99349 74.3164 0.863281 74.7461 0.863281C75.1758 0.863281 75.5078 0.944661 75.7422 1.10742C75.9831 1.27018 76.1035 1.49154 76.1035 1.77148C76.1035 1.90169 76.0645 2.01562 75.9863 2.11328C75.8366 2.0026 75.6608 1.94727 75.459 1.94727C75.0228 1.94727 74.7396 2.24349 74.6094 2.83594L75.8594 6.83008C76.0156 7.33138 76.4062 7.72201 77.0312 8.00195C77.207 8.08008 77.3861 8.15169 77.5684 8.2168C76.9173 8.43164 76.5918 8.75391 76.5918 9.18359C76.5918 9.34635 76.6178 9.48958 76.6699 9.61328L78.5352 14.6133C78.8216 14.9128 79.1113 15.0625 79.4043 15.0625C79.6973 15.0625 79.9251 15.0072 80.0879 14.8965C80.1595 14.9486 80.1953 15.0462 80.1953 15.1895C80.1953 15.3327 80.1725 15.4661 80.127 15.5898C80.0814 15.707 80.0098 15.8112 79.9121 15.9023C79.7038 16.0977 79.3978 16.1953 78.9941 16.1953C78.5905 16.1953 78.2389 16.0846 77.9395 15.8633C77.6009 16.0846 77.2168 16.1953 76.7871 16.1953C76.3639 16.1953 75.9993 16.0879 75.6934 15.873C75.4004 16.0879 75.0553 16.1953 74.6582 16.1953C74.2611 16.1953 73.9323 16.1139 73.6719 15.9512C73.4115 15.7819 73.2747 15.5443 73.2617 15.2383C73.2617 15.056 73.2975 14.9421 73.3691 14.8965C73.5449 15.0072 73.724 15.0625 73.9062 15.0625C74.2904 15.0625 74.5605 14.9844 74.7168 14.8281L73.9746 12.3379H68.6914L68.0469 14.4961C68.3138 14.9062 68.6361 15.1113 69.0137 15.1113C69.3978 15.1113 69.6842 15.056 69.873 14.9453C69.9447 15.0625 69.9805 15.2253 69.9805 15.4336C69.9805 15.6354 69.8796 15.8145 69.6777 15.9707C69.4759 16.1204 69.2155 16.1953 68.8965 16.1953C68.5775 16.1953 68.2845 16.1139 68.0176 15.9512C67.7832 16.1139 67.513 16.1953 67.207 16.1953C66.9076 16.1953 66.6504 16.1074 66.4355 15.9316ZM73.5742 11.0195L71.3086 3.49023L69.082 11.0195H73.5742ZM75.4395 13.4121C75.5566 13.4121 75.6152 13.2819 75.6152 13.0215C75.6152 12.5658 75.5469 12.123 75.4102 11.6934L75.0391 10.5508C74.7786 9.69141 74.6484 9.15104 74.6484 8.92969C74.6419 8.5651 74.8014 8.32422 75.127 8.20703C74.6777 8.11589 74.4043 7.97591 74.3066 7.78711C74.2611 7.70898 74.222 7.64714 74.1895 7.60156C74.1634 7.55599 74.1341 7.50391 74.1016 7.44531C74.0755 7.38021 74.043 7.29883 74.0039 7.20117C73.9648 7.10352 73.9128 6.96354 73.8477 6.78125L73.2422 4.95508C73.099 4.49935 72.8874 4.1543 72.6074 3.91992C72.5228 3.84831 72.4447 3.80599 72.373 3.79297C72.8092 5.36849 73.0957 6.3776 73.2324 6.82031C74.1764 9.72396 74.7428 11.446 74.9316 11.9863L75.4395 13.4121ZM78.3203 14.291L78.3398 14.3496L78.3203 14.291ZM92.4316 12.8262C92.5488 13.1126 92.7865 13.3861 93.1445 13.6465C92.9167 13.7376 92.6302 13.9525 92.2852 14.291C91.9466 14.6296 91.5658 14.9323 91.1426 15.1992C90.7194 15.4661 90.2995 15.681 89.8828 15.8438C89.1276 16.1432 88.3105 16.293 87.4316 16.293C86.5592 16.293 85.765 16.1888 85.0488 15.9805C84.3392 15.7721 83.75 15.4889 83.2812 15.1309C82.3633 14.4212 81.9043 13.4772 81.9043 12.2988V9.59375C81.9043 9.29427 81.8424 9.07292 81.7188 8.92969C81.5234 8.6888 81.1882 8.45117 80.7129 8.2168C81.1556 8.01497 81.4421 7.83594 81.5723 7.67969C81.7936 7.42578 81.9043 7.13932 81.9043 6.82031V2.69922C81.6829 2.19792 81.2826 1.94727 80.7031 1.94727C80.4818 1.94727 80.2995 2.0026 80.1562 2.11328C80.0846 2.01562 80.0488 1.90495 80.0488 1.78125C80.0488 1.65104 80.0846 1.5306 80.1562 1.41992C80.2344 1.30924 80.3385 1.21484 80.4688 1.13672C80.7682 0.954427 81.11 0.863281 81.4941 0.863281C81.8848 0.863281 82.2428 0.970703 82.5684 1.18555C82.9069 0.970703 83.2845 0.863281 83.7012 0.863281C84.1178 0.863281 84.4954 0.970703 84.834 1.18555C85.1595 0.970703 85.4655 0.863281 85.752 0.863281C86.0384 0.863281 86.2728 0.889323 86.4551 0.941406C86.6374 0.986979 86.7969 1.05208 86.9336 1.13672C87.2135 1.30599 87.3535 1.51758 87.3535 1.77148C87.3535 1.90169 87.3177 2.01562 87.2461 2.11328C87.1029 2.0026 86.9206 1.94727 86.6992 1.94727C86.1198 1.94727 85.7194 2.19792 85.498 2.69922V6.82031C85.498 7.13932 85.5664 7.37695 85.7031 7.5332C85.918 7.78711 86.2467 8.01497 86.6895 8.2168C86.2142 8.45117 85.9115 8.64323 85.7812 8.79297C85.5924 9.02734 85.498 9.29427 85.498 9.59375V12.3184C85.498 13.1061 85.7943 13.7539 86.3867 14.2617C86.9336 14.724 87.5553 14.9551 88.252 14.9551C88.9811 14.9551 89.6289 14.7305 90.1953 14.2812C90.7747 13.8255 91.0645 13.2721 91.0645 12.6211V9.50586C91.0645 9.2194 91.0026 9.00781 90.8789 8.87109C90.6901 8.66927 90.3548 8.45117 89.873 8.2168C90.3223 7.99544 90.612 7.81641 90.7422 7.67969C90.957 7.45182 91.0645 7.19792 91.0645 6.91797V2.57227C90.7845 2.1556 90.4427 1.94727 90.0391 1.94727C89.6354 1.94727 89.3392 2.0026 89.1504 2.11328C89.0788 1.99609 89.043 1.83659 89.043 1.63477C89.043 1.42643 89.1439 1.2474 89.3457 1.09766C89.5475 0.941406 89.8112 0.863281 90.1367 0.863281C90.4622 0.863281 90.752 0.947917 91.0059 1.11719C91.2337 0.947917 91.4941 0.863281 91.7871 0.863281C92.0866 0.863281 92.3503 0.951172 92.5781 1.12695C92.832 0.951172 93.112 0.863281 93.418 0.863281C93.724 0.863281 93.9681 0.944661 94.1504 1.10742C94.3392 1.26367 94.4336 1.44596 94.4336 1.6543C94.4336 1.86263 94.401 2.01562 94.3359 2.11328C94.1471 2.0026 93.8444 1.94727 93.4277 1.94727C93.0176 1.94727 92.6855 2.1556 92.4316 2.57227V6.91797C92.4316 7.20443 92.4935 7.41276 92.6172 7.54297C92.8125 7.74479 93.1803 7.9694 93.7207 8.2168C93.1478 8.49674 92.806 8.69206 92.6953 8.80273C92.5195 8.97852 92.4316 9.21289 92.4316 9.50586V12.8262ZM83.3496 13.4121C83.4082 13.0605 83.4375 11.9342 83.4375 10.0332C83.4375 8.12565 83.4342 6.96029 83.4277 6.53711C83.4277 6.10742 83.4245 5.76237 83.418 5.50195C83.3984 4.73372 83.3236 4.27148 83.1934 4.11523C83.0697 3.95247 82.9525 3.84505 82.8418 3.79297C82.8418 6.05859 82.8027 7.34766 82.7246 7.66016C82.6335 7.92057 82.4121 8.10612 82.0605 8.2168C82.4512 8.35352 82.6725 8.51953 82.7246 8.71484C82.8027 9.02734 82.8418 9.70117 82.8418 10.7363C82.8418 11.7715 82.8548 12.3835 82.8809 12.5723C82.9134 12.7611 82.9557 12.9141 83.0078 13.0312C83.0924 13.2396 83.2064 13.3665 83.3496 13.4121ZM100.146 15.873C99.8079 16.0879 99.4271 16.1953 99.0039 16.1953C98.5872 16.1953 98.2129 16.0911 97.8809 15.8828C97.5488 16.0911 97.2396 16.1953 96.9531 16.1953C96.6732 16.1953 96.4421 16.1693 96.2598 16.1172C96.0775 16.0716 95.918 16.0065 95.7812 15.9219C95.5013 15.7526 95.3613 15.541 95.3613 15.2871C95.3613 15.1569 95.3971 15.043 95.4688 14.9453C95.612 15.056 95.7943 15.1113 96.0156 15.1113C96.5951 15.1113 96.9954 14.8639 97.2168 14.3691V9.59375C97.2168 9.29427 97.1549 9.07292 97.0312 8.92969C96.8359 8.6888 96.5007 8.45117 96.0254 8.2168C96.4681 8.01497 96.7546 7.83594 96.8848 7.67969C97.1061 7.42578 97.2168 7.13932 97.2168 6.82031V2.69922C96.9954 2.19792 96.5951 1.94727 96.0156 1.94727C95.7943 1.94727 95.612 2.0026 95.4688 2.11328C95.3971 2.01562 95.3613 1.90495 95.3613 1.78125C95.3613 1.65104 95.3971 1.5306 95.4688 1.41992C95.5469 1.30924 95.651 1.21484 95.7812 1.13672C96.0807 0.954427 96.4225 0.863281 96.8066 0.863281C97.1973 0.863281 97.5553 0.970703 97.8809 1.18555C98.2194 0.970703 98.5938 0.863281 99.0039 0.863281C99.4206 0.863281 99.7949 0.967448 100.127 1.17578C100.771 0.902344 101.497 0.765625 102.305 0.765625C103.118 0.765625 103.822 0.860026 104.414 1.04883C105.007 1.23763 105.54 1.5013 106.016 1.83984C107.005 2.54297 107.66 3.4707 107.979 4.62305C108.109 5.07227 108.418 5.4401 108.906 5.72656C108.405 6.00651 108.07 6.42969 107.9 6.99609C107.731 7.5625 107.448 8.08984 107.051 8.57812C106.66 9.0599 106.211 9.46354 105.703 9.78906C104.668 10.4531 103.568 10.7852 102.402 10.7852C101.895 10.7852 101.364 10.7201 100.811 10.5898V14.3203C100.986 14.6979 101.348 14.9453 101.895 15.0625C102.038 15.0951 102.197 15.1113 102.373 15.1113C102.549 15.1113 102.708 15.056 102.852 14.9453C102.923 15.043 102.959 15.1569 102.959 15.2871C102.959 15.4108 102.91 15.528 102.812 15.6387C102.721 15.7493 102.598 15.8438 102.441 15.9219C102.096 16.1042 101.719 16.1953 101.309 16.1953C100.898 16.1953 100.511 16.0879 100.146 15.873ZM100.811 8.04102C100.811 8.48372 100.973 8.83854 101.299 9.10547C101.598 9.35286 101.982 9.47656 102.451 9.47656C103.167 9.47656 103.685 9.20312 104.004 8.65625C104.115 8.46745 104.17 8.23633 104.17 7.96289V3.54883C104.17 3.08008 103.991 2.71224 103.633 2.44531C103.307 2.19792 102.982 2.07422 102.656 2.07422C102.337 2.07422 102.074 2.10677 101.865 2.17188C101.663 2.23047 101.484 2.32161 101.328 2.44531C100.983 2.71875 100.811 3.09961 100.811 3.58789V8.04102ZM104.805 9.04688C104.954 9.02083 105.107 8.83854 105.264 8.5C105.426 8.16146 105.547 7.76432 105.625 7.30859C105.71 6.84635 105.814 6.50781 105.938 6.29297C106.061 6.07161 106.26 5.91536 106.533 5.82422C106.084 5.67448 105.801 5.27734 105.684 4.63281C105.566 3.98177 105.426 3.50326 105.264 3.19727C105.107 2.89128 104.954 2.72526 104.805 2.69922C105.046 3.23958 105.166 4.28125 105.166 5.82422C105.166 6.85286 105.114 7.6276 105.01 8.14844C104.906 8.66927 104.837 8.96875 104.805 9.04688ZM98.1543 13.4121C98.4798 13.2884 98.6589 12.862 98.6914 12.1328C98.7305 11.4036 98.75 10.3945 98.75 9.10547C98.75 7.81641 98.7467 6.96029 98.7402 6.53711C98.7402 6.10742 98.737 5.76237 98.7305 5.50195C98.7109 4.73372 98.6361 4.27148 98.5059 4.11523C98.3822 3.95247 98.265 3.84505 98.1543 3.79297C98.1543 6.05859 98.1152 7.34766 98.0371 7.66016C97.946 7.92057 97.7246 8.10612 97.373 8.2168C97.7637 8.35352 97.985 8.51953 98.0371 8.71484C98.1152 9.02734 98.1543 10.1699 98.1543 12.1426V13.4121Z" fill="#F2F2F2"/>
            </svg>
            <div className='navbar__list'>
                <span className="navbar__list-item">Каталог</span>
                <span className="navbar__list-item">Рейтинг</span>
            </div>
            <div className='navbar__search'>
                <svg className='navbar__search-icon' width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.3031 11H11.587L11.3332 10.73C12.2215 9.59 12.7564 8.11 12.7564 6.5C12.7564 2.91 10.1184 0 6.86403 0C3.60964 0 0.97168 2.91 0.97168 6.5C0.97168 10.09 3.60964 13 6.86403 13C8.32352 13 9.66516 12.41 10.6986 11.43L10.9434 11.71V12.5L15.4759 17.49L16.8266 16L12.3031 11ZM6.86403 11C4.60681 11 2.78471 8.99 2.78471 6.5C2.78471 4.01 4.60681 2 6.86403 2C9.12125 2 10.9434 4.01 10.9434 6.5C10.9434 8.99 9.12125 11 6.86403 11Z" fill="#E0E0E0"/>
                </svg>
                <input className="navbar__search-input" placeholder='Поиск...' type='text' />
            </div>
            <div className='navbar__register'>
                <span className="navbar__register-login">Войти</span>
                <span className="navbar__register-reg">Регистрация</span>
            </div>
            <button className='navbar__colors'>
                <svg className='navbar__colors-icon' width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.31 14.62L22.62 11.31L19.31 8V3.31H14.62L11.31 0L8 3.31H3.31V8L0 11.31L3.31 14.62V19.31H8L11.31 22.62L14.62 19.31H19.31V14.62ZM11.31 17.31V5.31C14.62 5.31 17.31 8 17.31 11.31C17.31 14.62 14.62 17.31 11.31 17.31Z" fill="#E0E0E0"/>
                </svg>
            </button>
        </div>
    )
}

export default Navbar