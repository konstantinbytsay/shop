
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import type { ICard } from './models';
import { Icon } from './Icon';


interface IProps {
    item: ICard
}


const css = `
    .icon {
        font-size: 18rem;
        display:block;
        margin: 0 auto;
    }
    .flex{
        display:flex;
        justify-content:space-between;
    }
        
`
export default function ActionAreaCard({ item }: IProps) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <style>{css}</style>
            <CardActionArea>
                <item.icon className='icon' />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.description}
                    </Typography>
                    <div className='flex'>
                        <Typography variant="subtitle1" >
                            Price
                        </Typography>
                        <Typography variant="subtitle1" >
                            {item.price}
                            <Icon />
                        </Typography>
                    </div>
                </CardContent>

            </CardActionArea>
        </Card>
    );
}