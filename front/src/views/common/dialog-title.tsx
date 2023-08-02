import XMarkIcon from '@heroicons/react/24/solid/XMarkIcon';
import { DialogTitle, IconButton, SvgIcon } from '@mui/material';

export interface DialogTitleProps {
  id?: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export default function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <SvgIcon color="error" fontSize="small">
            <XMarkIcon />
          </SvgIcon>
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}
