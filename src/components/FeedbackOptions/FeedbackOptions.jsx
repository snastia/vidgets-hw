import { Vidgets } from "components/Vidgets/Vidgets"
import {Button} from "../Vidgets/Vidgets.styled"

export function FeedbackOptions({onLeaveFeedBack}){
    return(
    <>
        <Button type="button" onClick={() => onLeaveFeedBack("good")}>Good</Button>
        <Button type="button" onClick={() => onLeaveFeedBack("neutral")}>Neutral</Button>
        <Button type="button" onClick={() => onLeaveFeedBack("bad")}>Bad</Button>
    </>
    )
    
}