import React, { useEffect, useState } from 'react';
import { Grid, Card, CardHeader, CardContent, MenuItem, Divider, Toolbar } from '@mui/material';
import TextField from '@mui/material/TextField';
import DrawerForm from '../DrawerForm';
import { Box } from '@mui/system';
import Stack from '@mui/material/Stack';
import { styled, useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import PageHeader from 'src/@core/components/page-header';
import { useTranslation } from 'react-i18next';
import CustomDataGrid from 'src/@core/components/custom-datagrid'
import useReportColumns from '../../hooks/useReportColumns';
import { ReportData } from '../../infrstructure';

const ReportGrid = ({ rows }) => {
  const columns = useReportColumns();
  const [openParent, setOpenParent] = React.useState(false);
  const[reportDataGrid,SetReportData]=useState([])
  const { t } = useTranslation()
  useEffect(()=>{
    SetReportData(rows)
  })
  const handleDrawerOpen = () => {
    setOpenParent(true);
  };

  const theme = useTheme();

  const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    width: '30%',
    color: theme.palette.text.secondary,
  }));

  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');
  const [data, setData] = useState([]);

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };


  const gridStyles = {
    root: {
      '& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell': {
        borderRight: '0px solid #000',
      },
      '& .MuiDataGrid-columnsContainer': {
        backgroundColor: '#f0f0f0',
      },
      '& .MuiDataGrid-root': {
        scrollbarWidth: 'thin',
        scrollbarColor: '#000 #000',
        '&::-webkit-scrollbar': {
          width: '1px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#000',
        },

      },

    },
  };




  return (
    <>
      <PageHeader title={`${t("Report")}`} />

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Divider sx={{ m: '0 !important' }} />
              <CustomDataGrid columns={columns} sx={gridStyles.root} rows={ReportData(reportDataGrid)}  />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ReportGrid;
