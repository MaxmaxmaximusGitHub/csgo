import styles from './Button.styl'


export default function Button({children, onClick, ...props}) {

  return <div className={styles.button} onClick={onClick} {...props}>
    {children}
  </div>
}
