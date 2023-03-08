import styles from './Input.module.css'
interface InputProps {
  placeholder: string
  defaultValue?: string
  type: string
  field: string
}
export default function Input ({ placeholder, defaultValue, type, field }: InputProps): JSX.Element {
  return (
    <>
      <label htmlFor={field}>
        <span>{field}</span>
        <input className={styles.input} id={field } placeholder={placeholder} type={type} defaultValue={defaultValue} />
      </label>
    </>
  )
}
