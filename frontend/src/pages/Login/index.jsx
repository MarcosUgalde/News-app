import Styled from './styles'
import { useForm } from 'react-hook-form'
import { login } from '../../misc/templates'
import { useMutation, useQueryClient } from 'react-query'
import { auth } from '../../services'
import { useEffect } from 'react'
import { useLocation } from 'wouter'
import { useUser } from '../../hooks'

function Login() {
  const { register, formState, handleSubmit } = useForm()
  const [, setLocation ] = useLocation();
  const { data } = useUser()
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: auth.signin,
    onSuccess: (response) => {
      console.log('Response: ', response)
      if(response.success) queryClient.invalidateQueries({ queryKey: ['user']}) && setLocation('/')
    }
  })

  const handleForm = (data) => {
    console.info('Form data: ', data)
    mutate(data)
  }

  useEffect(() => {
    data && setLocation('/')
  }, [data])

  const { errors } = login

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(handleForm)}>
        <label htmlFor="email">Inser email</label>
        <input type="text" id='email' placeholder='example@gmail.com' {...register("email", {required: true})} />
        <p>{formState.errors && errors[formState.errors?.email?.type]}</p>
        <label>password</label>
        <input type="password" id='password' placeholder='*******' {...register("password", {required: true, minLength: 4})} />
        <p>{formState.errors && errors[formState.errors?.password?.type]}</p>
        <Styled.SubmitButton type='submit'>Submit</Styled.SubmitButton>
      </form>
      <>
        Do not have an account yet? <a href='/signup'>Sign up here!</a>
      </>
    </>
  )
}

export default Login;
