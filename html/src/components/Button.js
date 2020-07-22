import styles from './Button.styl'


export default function Button({onClick, ...props}) {

  return <div
    className={styles.Button}
    onClick={onClick}
    {...props}
  />
}
