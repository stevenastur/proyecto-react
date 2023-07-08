import "./style.css"

const Button = ({ text, id, className, type, onClick, status, role }) => {
    return(
        <div className={`botton ${status}`}>
            <button id={id} className={className} type={type} onClick={onClick} role={role}>
                {text}
            </button>
        </div>
    )
}

export { Button }