import { Link } from "react-router-dom"

function Button({children, disabled, to, type, onClick}) {
    
const base = 'bg-yellow-400 font-semibold uppercase text-stone-800 inline-block text-sm rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed '
    const style = {
        primary: base + 'px-4 py-3 md:px-6 md:py-4',
        rounded: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
        small: base + 'px-4 py-2 md:px-5 md:py-2.5 text-xs',
        secondary: ' text-sm px-4 py-2.5 md:px-6 md:py-3.5 font-semibold border-2 border-stone-300 uppercase text-stone-400 inline-block rounded-full hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:bg-stone-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed '
    }
    
    if(to) return <Link to={to} className={style[type]}>{children}</Link>

    if(onClick)
    return (
        <button onClick={onClick} disabled={disabled} className={style[type]}>
            {children}
        </button>
    )

    return (
        <button disabled={disabled} className={style[type]}>
            {children}
        </button>
    )
    
}

export default Button
