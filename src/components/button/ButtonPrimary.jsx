import s from './style.module.css';
const ButtonPrimary = ({children,onSubmit,onClick}) => {
  return (
    <div onClick={onClick}>
    
       <button type="button" onSubmit={onSubmit} className={`btn btn-info ${s.button}`}>
         {children}
       </button>
    </div>
  )
}

export default ButtonPrimary