import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

type Props = {
    open: any,
    setOpen: any,
    message: any,
};

const Popup: React.FC<Props> = ({
    open,
    setOpen,
    message
}) => {

    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            message={`Add ${message}`}
            action={
                <React.Fragment>
                    <Button color="secondary" size="small" onClick={handleClose}>
                        Close
                    </Button>
                </React.Fragment>
            }
        />
    )
}

export default Popup;