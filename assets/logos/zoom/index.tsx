import styles from "./zoom.module.css";

/** A component for Zoom's logo */
const ZoomLogo = ({
    width,
    height,
    ...props
}: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={width}
        height={height ?? (width ? undefined : "1em")}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 356 80"
        role="img"
    >
        <path
            className={styles.text}
            d="M144.28,11.72C136.48,3.91,126.25,0,116.03,0h-.05c-10.23,0-20.45,3.91-28.26,11.72-15.62,15.62-15.62,40.95,0,56.57,15.62,15.62,40.95,15.62,56.57,0,15.62-15.62,15.62-40.95,0-56.57Zm-11.31,45.25c-9.37,9.37-24.57,9.37-33.94,0-9.37-9.37-9.37-24.57,0-33.94,9.37-9.37,24.57-9.37,33.94,0,9.37,9.37,9.37,24.57,0,33.94Z"
        />
        <path
            className={styles.text}
            d="M228.28,11.72C220.48,3.91,210.25,0,199.97,0c-10.23,0-20.45,3.91-28.26,11.72-15.62,15.62-15.62,40.95,0,56.57,15.62,15.62,40.95,15.62,56.57,0,15.62-15.62,15.62-40.95,0-56.57Zm-11.31,45.25c-9.37,9.37-24.57,9.37-33.94,0-9.37-9.37-9.37-24.57,0-33.94,9.37-9.37,24.57-9.37,33.94,0,9.37,9.37,9.37,24.57,0,33.94Z"
        />
        <path
            className={styles.text}
            d="M16,79.8l4,.2h60l-.2-4c-.54-6.59-5.2-11.39-11.8-11.8l-4-.2H28L76,16l-.2-4c-.32-6.64-5.17-11.45-11.8-11.8L60,0H0L.2,4c.52,6.51,5.25,11.43,11.8,11.8l4,.2H52L4,64l.2,4c.39,6.59,5.16,11.37,11.8,11.8Z"
        />
        <path
            className={styles.text}
            d="M289.84,23.97c1.37,2.36,1.8,5.02,1.95,8.02l.2,4v28l.2,4c.4,6.54,5.2,11.39,11.8,11.8l4,.2V36l.2-4c.16-2.97,.59-5.69,1.97-8.05,2.77-4.75,7.93-7.95,13.83-7.95s11.09,3.22,13.86,8c1.36,2.35,1.78,5.07,1.94,8l.2,4v28l.2,4c.41,6.58,5.19,11.42,11.8,11.8l4,.2V32c0-17.67-14.33-32-32-32-9.56,0-18.14,4.19-24,10.83-5.86-6.64-14.44-10.83-24-10.83-6.64,0-12.81,2.02-17.92,5.49-3.11-3.46-10.08-5.49-14.08-5.49V80l4-.2c6.68-.44,11.54-5.16,11.8-11.8l.2-4v-28l.2-4c.17-3.01,.59-5.68,1.96-8.04,2.77-4.76,7.93-7.96,13.84-7.96s11.08,3.21,13.84,7.97Z"
        />
    </svg>
);

export default ZoomLogo;
