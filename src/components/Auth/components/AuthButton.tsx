import { ReactComponentElement, ReactNode } from "react"
import styles from './AuthButton.module.css'
type Props = {
  text: string,
  children: ReactNode
}

export default function AuthButton({text, children}: Props) {
  return (
    <button className={styles.button}>
      {children}
      {`Sign up with ${text}`}
    </button>
  )
}