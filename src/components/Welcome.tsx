import '../index.css';

export function Welcome(){
    return(
        <div className='flex items-center justify-center'>
            <h1 className='text-2xl md:text-3xl lg:text-5xl bg-gradient-to-r from-pink-500 to-sky-500 bg-clip-text text-transparent font-semibold text-center px-4'>  
                Bienvenidos amigues!
            </h1>
        </div>
    )
}