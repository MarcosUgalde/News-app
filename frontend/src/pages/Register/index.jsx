import Styled from './styles'
import { useForm } from 'react-hook-form'
import { login } from '../../misc/templates'
import { useMutation } from 'react-query'
import { auth  } from '../../services'
import { useLocation } from 'wouter'

function Register() {
    const {register, formState, handleSubmit} = useForm()
    const { mutate } = useMutation({
        mutationFn: auth.register,
        onSuccess: (response) => {
            console.log('Response: ', response)
            if(response.success) setLocation('/login')
        }
    })
    
    const [, setLocation] = useLocation()

    const handleForm = (data) => {
        console.info('Form data: ', data)
        mutate(data)
    }

    const { errors } = login
    
    return (
        <Styled.Body>
            <h1>Create account</h1>
            <Styled.Form>
                <form onSubmit={handleSubmit(handleForm)}>
                    <Styled.Item>
                        <label htmlFor='email'>Insert email</label>
                        <input type='text' id='email' placeholder='example@example.com' {...register('email', {required: true})}/>
                        <p>{formState.errors && errors[formState.errors?.email?.type]}</p>
                    </Styled.Item>
                    <Styled.Item>
                        <label>username</label>
                        <input type="text" id='username' placeholder='username' {...register("username", { required: true})} />
                        <p>{formState.errors && errors[formState.errors?.username?.type]}</p>
                    </Styled.Item>
                    <Styled.Item>
                        <label>password</label>
                        <input type="password" id='password' placeholder='length must be at least 4' {...register("password", {required: true, minLength: 4})} />
                        <p>{formState.errors && errors[formState.errors?.password?.type]}</p>
                    </Styled.Item>
                    <Styled.Item>
                        <Styled.SubmitButton type='submit'>Submit</Styled.SubmitButton>
                    </Styled.Item>
                </form>
            </Styled.Form>
            <Styled.Link>
                Already have an account? <a href="/login">Login here!</a>
            </Styled.Link>
        </Styled.Body>
    )
}

export default Register