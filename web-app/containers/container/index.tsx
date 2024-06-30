import styles from "./container.module.css";

const Container = ({ children, className, ...props }: ContainerProps) => {
  const containerClassNames = [styles.container, className].join(" ");

  return (
    <div {...props} className={containerClassNames}>
      {children}
    </div>
  );
};

type ContainerProps = React.HTMLAttributes<HTMLElement>;

export default Container;
