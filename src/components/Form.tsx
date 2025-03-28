import '../index.css';

export function Form(){
    return(
        <div className='bg-white p-8 rounded-2xl shadow-lg w-96'>
            <h1 className='text-5xl font-semibold'>Bienvenido!</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Porfavor, ingrese sus credenciales.</p>
            <div className='mt-8'>
                <div>
                    <label className='text-lg font-medium' htmlFor="email">Email:   </label>
                        <input 
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' type="email" id="email" 
                        placeholder='Ingrese su email'  />
                </div>
                <div>
                    <label className='text-lg font-medium' htmlFor="password">Contraseña:   </label>
                        <input 
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' type="password" id="password" 
                        placeholder='Ingrese su contraseña'  />
                </div>
            </div>
            <div className='mt-8 flex justify-between items-center'>
                <div>
                    <input type="checkbox" id="remember" />
                    <label className='ml-2 font-medium text-base' htmlFor="remember">Recuerdame</label>
                </div>
                <div>
                    <button className='font-medium text-base text-pink-500'>
                        Olvidaste la contraseña?
                    </button>
                </div>
            </div>
            <div>
                <button
                className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all w-full bg-gradient-to-r from-pink-500 to-sky-500 text-white font-semibold text-lg rounded-xl p-4 mt-8' onClick={() => { alert('Sesión iniciada exitosamente!') }}>
                    Iniciar Sesión </button>
                <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all w-full bg-white text-gray-500 font-semibold text-lg rounded-xl p-4 mt-4 flex items-center justify-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-key">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M14.52 2c1.029 0 2.015 .409 2.742 1.136l3.602 3.602a3.877 3.877 0 0 1 0 5.483l-2.643 2.643a3.88 3.88 0 0 1 -4.941 .452l-.105 -.078l-5.882 5.883a3 3 0 0 1 -1.68 .843l-.22 .027l-.221 .009h-1.172c-1.014 0 -1.867 -.759 -1.991 -1.823l-.009 -.177v-1.172c0 -.704 .248 -1.386 .73 -1.96l.149 -.161l.414 -.414a1 1 0 0 1 .707 -.293h1v-1a1 1 0 0 1 .883 -.993l.117 -.007h1v-1a1 1 0 0 1 .206 -.608l.087 -.1l1.468 -1.469l-.076 -.103a3.9 3.9 0 0 1 -.678 -1.963l-.007 -.236c0 -1.029 .409 -2.015 1.136 -2.742l2.643 -2.643a3.88 3.88 0 0 1 2.741 -1.136m.495 5h-.02a2 2 0 1 0 0 4h.02a2 2 0 1 0 0 -4" />
                    </svg>
                    Entrar con una clave
                </button>
            </div>
        </div>
    )
}