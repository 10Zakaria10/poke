import { Modal as MuiModal } from "@mui/material";
import { StyledModalContainer } from "./Modal.style";

interface IModalProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}
const Modal: React.FC<IModalProps> = ({ handleClose, open, children }) => {
  return (
    <MuiModal open={open} onClose={handleClose}>
      <StyledModalContainer>{children}</StyledModalContainer>
    </MuiModal>
  );
};

export default Modal;
