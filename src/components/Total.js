import accounting from "accounting"
import Button from '@mui/material/Button';


const Total = () => {
  return (
    <div className="root">
        <h5>Total items: 3</h5>
        <h5>
            {accounting.formatMoney(5000,{
                symbol : "$",
                thousand : ".",
                precision : 0,
            })}
        </h5>
        <Button variant='contained' color='secondary'>Chechou</Button>
    </div>
  )
}
export default Total