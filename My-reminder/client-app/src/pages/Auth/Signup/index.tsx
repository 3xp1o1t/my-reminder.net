import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { cn } from '../../../lib/utils';

const Index = () => {
  const formSchema = z
    .object({
      username: z
        .string()
        .min(3, { message: 'El nombre de usuario debe tener mínimo 3 letras' }),
      email: z
        .string()
        .min(1, { message: 'Correo es obligatorio' })
        .email('Email incorrecto'),
      password: z
        .string()
        .min(6, { message: 'La contraseña debe tener mínimo 6 caracteres' }),
      confirmPassword: z
        .string()
        .min(6, { message: 'La contraseña debe tener mínimo 6 caracteres' }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ['confirmPassword'],
      message: 'Las contraseñas no coinciden',
    });

  type ValidationSchemaType = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ValidationSchemaType>({
    resolver: zodResolver(formSchema),
  });

  // Evento para simular la carga de la data
  const onSubmit: SubmitHandler<ValidationSchemaType> = async (data) => {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, data });
      }, 3000);
    });

    console.log(response);
  };

  return (
    <>
      <form
        className="flex flex-col text-sm items-center justify-center p-1 mx-0 gap-2 mt-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="username">*Usuario:</label>
        <input
          type="text"
          placeholder="Nombre usuario"
          {...register('username')}
          className={cn(
            'focus-visible:outline-none py-1 px-2 ring-sky-800 ring-1 rounded-md',
            errors.username && 'ring-rose-500',
          )}
        />
        {errors.username && (
          <span className={'text-rose-500 text-xs'}>
            {errors.username?.message}
          </span>
        )}
        <label htmlFor="email">*Correo:</label>
        <input
          type="email"
          placeholder="johndoe@email.com"
          {...register('email')}
          className={cn(
            'focus-visible:outline-none py-1 px-2 ring-sky-800 ring-1 rounded-md',
            errors.email && 'ring-rose-500',
          )}
        />
        {errors.email && (
          <span className={'text-rose-500 text-xs'}>
            {errors.email?.message}
          </span>
        )}

        <label htmlFor="password">*Contraseña:</label>
        <input
          type="password"
          placeholder="password goes here..."
          {...register('password')}
          className={cn(
            'focus-visible:outline-none py-1 px-2 ring-sky-800 ring-1 rounded-md',
            errors.password && 'ring-rose-500',
          )}
        />
        {errors.password && (
          <span className={'text-rose-500 text-xs'}>
            {errors.password?.message}
          </span>
        )}

        <label htmlFor="confirmPassword">*Confirmar Contraseña:</label>
        <input
          type="password"
          placeholder="Confirm password"
          {...register('confirmPassword')}
          className={cn(
            'focus-visible:outline-none py-1 px-2 ring-sky-800 ring-1 rounded-md',
            errors.confirmPassword && 'ring-rose-500',
          )}
        />
        {errors.confirmPassword && (
          <span className={'text-rose-500 text-xs'}>
            {errors.confirmPassword?.message}
          </span>
        )}

        <button
          type="submit"
          className={cn('bg-sky-800 text-lg rounded-md px-2 py-1 text-white')}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="animate-ping">Cargando...</span>
          ) : (
            'Enviar'
          )}
        </button>
      </form>
      <br />
      <div className="flex items-center justify-center">
        <Link to={'/auth/sign-in'} className="text-sky-500 font-bold">
          Ya tengo una cuenta, iniciar sesión
        </Link>
      </div>
    </>
  );
};

export default Index;
