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
        <>
            <h1>Create account</h1>
            <form onSubmit={handleSubmit(handleForm)}>
                <label htmlFor='email'>Insert email</label>
                <input type='text' id='email' placeholder='example@example.com' {...register('email', {required: true})}/>
                <p>{formState.errors && errors[formState.errors?.email?.type]}</p>
                <label>username</label>
                <input type="text" id='username' placeholder='username' {...register("username", { required: true})} />
                <p>{formState.errors && errors[formState.errors?.username?.type]}</p>
                <label>password</label>
                <input type="password" id='password' placeholder='length must be at least 4' {...register("password", {required: true, minLength: 4})} />
                <p>{formState.errors && errors[formState.errors?.password?.type]}</p>
                <>Submit</>
            </form>
            <>Already have an account? <a href="/login">Login here!</a></>
        </>
    )
}

export default Register