import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { SInputField } from '../Components/Styles';
import { FormControl, TextField } from '@mui/material'
import { TextFields } from '@mui/icons-material';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <>
    <Box sx={{ width: `500px`, background: `turquoise`, alignItems: `center` }}>
      <CardContent sx={{ padding: `40px` }}>

        <Typography variant="h5" component="div" sx={{ textAlign: `center` }}>
          Sign In
        </Typography>
        <Box component="div"  >
          <Box component="form">
            <SInputField>
              <FormControl sx={{width:`100%`}}>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />

              </FormControl>
            </SInputField>
            <SInputField>
              <FormControl>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  width="maxWidth"

                />

              </FormControl>
            </SInputField>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Box>
  </>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}