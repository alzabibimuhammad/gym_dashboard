import { useMemo, useState } from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import DrawerForm from '../Componets/DrawerForm/index';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Avatar, IconButton, Rating } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AlertDialog from '../Componets/dialog';
import Link from 'next/link';
import VisibilityIcon from '@mui/icons-material/Visibility';


const usePlayersColumns = () => {

  const [isDrawerOpenEdit, setIsDrawerOpenEdit] = useState(false);
  const [EditData,setEditData]=useState([])
  const { t } = useTranslation()
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);


  const handleEditClick = (row) => {
    setIsDrawerOpenEdit(true);
    setEditData(row)
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
      type: 'birthDate',
      field: 'birthDate',
      headerName: t("Birth Date"),
      flex: 2
    },

    {
      field: 'phoneNumber',
      headerName: t("Phone Number"),
      flex: 2
    },
    {
      field: 'rate',
      headerName: t("Rate"),
      flex: 2,
      renderCell: (params) => {
        return (
          <Rating name="read-only" value={params.row.rate} readOnly />
        );
      },
    },
    {
      field: 'access',
      headerName: t("Access"),
      flex: 2,
      renderCell: (params) => {
        return(
        <>
        <Stack direction={"row"} spacing={2} justifyContent={"center"} marginTop={"10px"} >
        <Box >
        <IconButton>

        <BorderColorOutlinedIcon style={{ color:'#B4B4B6' }} variant="contained" color="primary" size='small' onClick={()=>handleEditClick(params.row)} >Edit</BorderColorOutlinedIcon>
        </IconButton>

        </Box>
        <Box>
        <IconButton onClick={() => handleClickOpen(params.row.id)}>

          <DeleteOutlinedIcon variant="contained" color="error" size='small' >  Delete   </DeleteOutlinedIcon>
          </IconButton>

          </Box>
          <Link href={`/players/playerProfile/${params.row.id}`} >
              <IconButton  >
              <VisibilityIcon variant="contained" color="error" size='small'>Details</VisibilityIcon>
              </IconButton>

          </Link>
          <Box >

          <DrawerForm  open={isDrawerOpenEdit} setOpenParent={setIsDrawerOpenEdit} Data={EditData} />
          </Box>

      </Stack>
      {isDeletePopupOpen && <AlertDialog id={deleteId} open={isDeletePopupOpen} handleClose={handleClose} handleDelete={handleDelete} />}
    </>
    );
    }
    }
  ])


}

export default usePlayersColumns
