import React, { useEffect, useState } from 'react';
import { Grid, Card, CardHeader, CardContent, MenuItem, Divider } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import PageHeader from 'src/@core/components/page-header';
import { useTranslation } from 'react-i18next';
import CustomDataGrid from 'src/@core/components/custom-datagrid'
import {  SubscriptionsData } from '../../infrastructure'
import useSubscriptionColumn from '../../Hook/useSubscriptionColumn';
 
const SubscriptionsGrid = ({ rows }) => {
  const columns = useSubscriptionColumn();
  const [DataUser,setDataUser]=useState([])




  const { t } = useTranslation()
  
  useEffect(() => {
    setDataUser(rows)
  
  })

  const theme = useTheme();

  const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    width: '30%',
    color: theme.palette.text.secondary,
  }));



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
      <PageHeader title={`${t("Subscriptions")}`}/>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
             

              <Divider sx={{ m: '0 !important' }} />
              <CustomDataGrid  columns={columns}  sx={gridStyles.root} rows={SubscriptionsData(DataUser)}/>

            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default SubscriptionsGrid;
