import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions"
import { Statistics } from "components/Statistics/Statistics"
import { Component } from "react"

export class Vidgets extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

      handleLeaveFeedBack = (vote) => {
        this.setState((prevState) => ({[vote]: prevState[vote] + 1}))
      }

     countTotalFeedback = () => {
        return this.state.bad + this.state.neutral + this.state.good
     }

     countPositiveFeedbackPercentage = () => {
       return this.state.good === 0 ? "0" : Math.round((this.state.good * 100) / this.countTotalFeedback()) + "%"
     }

      render(){
        return(
            <>
            <FeedbackOptions onLeaveFeedBack={this.handleLeaveFeedBack}/>
            <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
            </>
        )
      }
}