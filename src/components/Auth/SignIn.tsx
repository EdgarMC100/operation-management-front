import styles from './SignIn.module.css'
import image from '../../assets/security.png'
import { useForm } from 'react-hook-form'
import Input from './components/Input'
import ActionButton from './components/ActionButton'
import GoogleLogo from './components/GoogleLogo'
import AuthButton from './components/AuthButton'
import GitHubLogo from './components/GitHubLogo'

export default function SignIn (): JSX.Element {
  const { register, handleSubmit } = useForm()
  // eslint-disable-next-line @typescript-eslint/ban-types
  const onSubmit = (data: {}): void => { console.log(data) }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.images}>
          <img src={image} />
        </div>
        <div className={styles.form}>
          <h1 className={styles.formTitle}>Welcome to Mind Access</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input field='Name' placeholder='Enter you name here' type='text' {...register('name')} />
            <Input field='Email' placeholder='Enter your email here' type='text' {...register('email')} />
            <Input field='Password' placeholder='Enter your password here' type='text' {...register('password')} />
            <div className={styles.actionButtons}>
              <ActionButton />
              <span style={{ color: '#4D5959', fontSize: '1.125rem', marginTop: '24px' }}>Already have and account?<a style={{ color: '#06a8e0', marginLeft: '20px' }}>Log in</a></span>
            </div>
          </form>
          <div className={styles.auth}>
            <span style={{ color: '#043133', fontSize: '1.625rem', fontWeight: '500', lineHeight: '39px' }}>OR</span>
            {/* <button style={{fontSize:"1rem"}}><img src={googleImage} width="16px" style={{marginRight:"15px"}}/>Sign up with Google</button> */}
            <div className={styles.authButtons}>
              <AuthButton text='Google'>
                <GoogleLogo size='50' />
              </AuthButton>
              <AuthButton text='Github'>
                <GitHubLogo width='50px' height='50px' />
              </AuthButton>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
