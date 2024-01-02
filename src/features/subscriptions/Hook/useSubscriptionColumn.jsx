import { useMemo, useState } from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Avatar, IconButton, Rating } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import ActiveDialog from '../components/dialog';
import Chip from '@mui/material/Chip';


const useSubscriptionColumn = () => {

  const [isDrawerOpenEdit, setIsDrawerOpenEdit] = useState(false);
  const { t } = useTranslation()
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);


  const handleEditClick = (params) => {

    setIsDrawerOpenEdit(true);
  };

  const handleClickOpen = (id) => {
    setDeleteId(id);
    setIsDeletePopupOpen(true);
  };

  const handleClose = () => {
    setIsDeletePopupOpen(false)
  };

  const handleDelete = () => {
    handleClose();
  };


  return useMemo(() => [
    {
      field: 'image',
       headerName: '',

        renderCell: (params)=>{

      return (
          <Avatar src={process.env.NEXT_PUBLIC_IMAGES+'/' + params.row?.image?.image} alt='' />

      )
    } },
    {
      field: 'name',
      headerName: t("User Name"),
      flex: 2,
      disableClickEventBubbling: true,

    },

    {
      field: 'remainingTime',
      headerName: t("Remaining Time"),
      flex: 2
    },

    {
      field: 'paidStatus',
      headerName: t("Remaining Time"),
      flex: 2,
      renderCell: (params) => {
        return (
          <Stack width={80}>
          <Chip
            label={params.value}
            color={params.value === 'paid' ? 'success' : 'primary'}

          />
        </Stack>
        );

    },

  },
    {
      field: 'daysNotPaid',
      headerName: t('days Not Paid'),
      flex: 2,

    },
    {
      field: 'SubscriptionDate',
      headerName: t('Subscription Date'),
      flex: 2
    },
    {
      field: 'Status',
      headerName: t('Status'),
      flex: 2,
      renderCell: (params) => {
        return(
          <>
          <Stack direction={"row"} spacing={2} justifyContent={"center"} marginTop={"10px"} >


          <Box>


              <Button onClick={() => handleClickOpen(params.row.id)} variant="contained"    size='small' disabled={params.row.paidStatus ==="paid"?true:""}>
              {t('Active')}
              </Button>

            </Box>

            <Box >

            </Box>

        </Stack>
        {isDeletePopupOpen && <ActiveDialog id={deleteId} open={isDeletePopupOpen} handleClose={handleClose} handleDelete={handleDelete} Data={params.row}   />}
      </>
      );
    }
    }
  ])


}

export default useSubscriptionColumn
