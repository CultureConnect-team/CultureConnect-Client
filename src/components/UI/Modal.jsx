// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../../components/UI/Form/LoginForm";

const Modal = ({ isOpen, onClose, linkTo }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative p-4 w-full max-w-md bg-white rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-xl font-semibold text-gray-900">Masuk ke akun Anda</h3>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 cursor-pointer hover:text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div className="p-4">
          <LoginForm onSuccess={() => navigate("/dashboard")} />

          {linkTo && (
            <div className="flex justify-center mt-2 text-sm">
              <p className="text-xs md:text-sm text-gray-500">
                {linkTo.text}{" "}
                <span className="text-amber-800 border border-l-0 border-t-0 border-r-0 border-secondary">
                  <strong>
                    <Link to={linkTo.href}>{linkTo.label}</Link>
                  </strong>
                </span>
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
