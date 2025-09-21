
import { Box, Grid } from '@mui/material';
import type { ICard } from './models';
import ActionAreaCard from './Card';
import { catalog } from './catalog';


export default function App() {


  return (
    <Box sx={{ width: '100%' }}>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {catalog.map((item: ICard) => {
          return (<Grid key={item.name} size={{ xs: 2, sm: 4, md: 4 }}>
            <ActionAreaCard item={item} />
          </Grid>)
        })}
      </Grid>

    </Box>

  );
}