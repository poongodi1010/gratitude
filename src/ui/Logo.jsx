import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();
  return (
    <div>
      <img
        className="mt-4 flex h-[80%] w-full cursor-pointer justify-start rounded-[50%] shadow-2xl max-[767px]:my-8 max-[767px]:h-[20%] max-[767px]:w-[25%] max-[767px]:px-2 max-[374px]:my-2"
        src="/logo2.jpeg"
        alt="Logo"
        onClick={() => navigate(`/home`)}
      />
    </div>
  );
}

export default Logo;
