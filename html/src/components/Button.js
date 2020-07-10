import styles from './Button.styl'


export default function Button({onClick, ...props}) {

  return <div
    className={styles.button}
    onClick={onClick}
    {...props}
  />
}
