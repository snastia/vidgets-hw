import { Vidgets } from "components/Vidgets/Vidgets"
import {Item} from "../Vidgets/Vidgets.styled"

export function Statistics({good, neutral, bad, total, positivePercentage}){
    return(
        <>
             <h2>Statistics</h2>
            <Item>Good: {good}</Item>
            <Item>Neutral: {neutral}</Item>
            <Item>Bad: {bad}</Item>
            <Item>Total: {total}</Item>

            <Item>Positive feedback: {positivePercentage}</Item>
    </>
    
    )
}