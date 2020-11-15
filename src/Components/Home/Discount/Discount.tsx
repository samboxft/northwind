import React from "react";
import {"./Discount.css";

function Discount(): JSX.Element {
    const percent = 11;
    return (
        <div className="Discount">
			<p>Only now, on {getDate()}, {percent} % discount on all products</p>
        </div>
    );
}
function getDate(): string {
let now = new Date(); // 2020-06-21
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    return months[now.getMonth()] + "  " + now.getFullYear().toString()

}
export default Discount;
export const someValue =123;
export const anotherValue= 456;
export function someOtherFunction() {
    console.log("something");
    
}
