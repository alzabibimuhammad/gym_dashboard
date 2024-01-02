import { useMemo, useState } from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import DrawerForm from '../Componets/DrawerForm/index';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Avatar, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AlertDialog from '../componets/dialog';


const useReportColumns = () => {

  const [isDrawerOpenEdit, setIsDrawerOpenEdit] = useState(false);
  const [EditData,setEditData]=useState([])
  const { t } = useTranslation()
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);


  const handleEditClick = (params) => {
    setIsDrawerOpenEdit(true);
    setEditData(params.row)
  };


      const handleClickOpen = (id) => {
        setDeleteId(id);
        setIsDeletePopupOpen(true);
      };

      const handleClose = () => {
        setIsDeletePopupOpen(false)
      };

  return useMemo(() => [
    {
      field: 'image',
       headerName: '',
      flex:2,
        renderCell: (params)=>{

      return (
          <Avatar src={process.env.NEXT_PUBLIC_IMAGES+'/' + params.row?.image?.image} alt='' />

      )
    } },
    {
      field: 'name',
      headerName: t("User Name"),
      flex: 2.5,
      disableClickEventBubbling: true,

    },
    {
      field: 'title',
      headerName: t("Title"),
      flex: 3,
      disableClickEventBubbling: true,

    },

    {
      field: 'text',
      headerName: t("Reasone"),
      flex: 5
    },

    {
      field: 'phoneNumber',
      headerName: t("Phone Number"),
      flex: 2.5
    },
    {
      field: 'created_at',
      headerName: t("Date"),
      flex: 3
    },
    {
      field: 'access',
      headerName: t("Access"),
      flex: 2,
      renderCell: (params) => {
        return(
          <>
         <Stack direction={"row"} spacing={2} justifyContent={"center"} marginTop={"10px"} >
        <Box>
        <IconButton onClick={() => handleClickOpen(params.row.id)}>
          <DeleteOutlinedIcon variant="contained" color="error" size='small'>  Delete   </DeleteOutlinedIcon>
          </IconButton>
          </Box>
          <Box >
          <DrawerForm  opent={isDrawerOpenEdit} setOpenParent={setIsDrawerOpenEdit} EditData={EditData} />
          </Box>
      </Stack>
      {isDeletePopupOpen && <AlertDialog id={deleteId} open={isDeletePopupOpen} handleClose={handleClose} />}
          </>
      );
    }
    }
  ])


}

export default useReportColumns
