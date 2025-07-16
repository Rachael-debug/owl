import Counter from "./Counter"

export default function Stats(){
    return(
      <div id="stats">
        <div>
          <Counter target={15} suffix="K+" />
          <p>Happy Customers</p>
        </div>
        <div>
          <Counter target={10} suffix=" Yrs" />
          <p>Customer Service</p>
        </div>
    </div>
    )
}