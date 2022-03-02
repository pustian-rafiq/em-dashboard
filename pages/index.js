import Head from 'next/head'
import DataTable from '../components/DataTable'
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
        <Box sx={{ flexGrow: 1 }} style={{ marginTop: '50px',background:'rgb(218, 219, 219)' }}>
     
          <Grid container spacing={2} >
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={8} >
              <DataTable />
            </Grid>
            <Grid item xs={2}>
            </Grid>

          </Grid>
       
        </Box>

    </div>
  )
}
