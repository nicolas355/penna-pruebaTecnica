
import '../App.css'
const Formulario = ({ children }) => {
  return (
    <div>
      <div className="max-w-[500px]  mx-auto mt-5">
        <div  className="flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Formulario;
