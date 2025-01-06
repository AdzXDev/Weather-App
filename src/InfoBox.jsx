import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function  InfoBox({info}){
  const init_URL="https://images.unsplash.com/photo-1580687774725-4e23db308efc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const COLD_URL="https://images.unsplash.com/photo-1674407866481-a39b2239f771?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
  const RAIN_URL="https://images.unsplash.com/photo-1613739118724-2060ee526a9d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  
//   let info={
//     city:"Delhi",
//     feelslike: 24.84,
//     temp:25.05,
//     tempMin:25.05,
//     tempMax:25.05,
//     humidity:47,
//     weather:'haze'
//   };

  return ( 
    <div className="InfoBox">

    <div className='cardContainer'>
    <Card sx={{ maxWidth: 345 }}>
     <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity>80 && info.temp >30
            ? RAIN_URL
            :info.temp> 15 
            ? HOT_URL
            :COLD_URL
        }
        title="green iguana"
      />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city } { 
            info.humidity>80 && info.temp >30
            ? <ThunderstormIcon/>
            :info.temp> 15 
            ? <WbSunnyIcon/>
            :<AcUnitIcon/>
            }

        </Typography>
        
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Tempreture = {info.temp}&deg;C</p>    
            <p>Humidity = {info.humidity}</p>    
            <p> Min Temp  = {info.tempMin}</p>    
            <p> Max Temp  = {info.tempMax}&deg;C</p>    
            <p> The weather can be described as <i>{info.weather}</i>  and feels like  = {info.feelsLike} &deg;C</p>    
        </Typography>
    </CardContent>
    </Card>
     </div>
    </div>
  )
    
}