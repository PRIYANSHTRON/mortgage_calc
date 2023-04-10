import React from 'react'
import SliderComponent from '../Common/SliderComponent'
import { Container } from '@mui/material'

const SliderSelect = ({ data, setData }) => {
    console.log(data)
    return (
        <Container>
            <SliderComponent
                min={1000}
                max={10000}
                defaultValue={data.homeValue}           //responsible for default amount & slider position
                step={100}
                onChange={(e, value) => setData({
                    ...data,
                    downPayment: 0.2 * value,
                    loanAmount:0.8 * value,
                    homeValue: value
                })}
                sliderHeading={'Home Value'}
                amount={data.homeValue}                     //responsible for amount shown
                unit={'$'}
                value={data.homeValue}                  //resposible for slider movement
            />
            <SliderComponent
                min={0}
                max={data.homeValue}
                defaultValue={data.downPayment}          //responsible for default amount & slider position
                step={100}
                onChange={(e, value) => setData({
                    ...data,
                    loanAmount:(data.homeValue - value),
                    downPayment: value
                })}
                sliderHeading={'Down Payment'} 
                amount={data.downPayment}        //responsible for amount shown
                unit={'$'}
                value={data.downPayment}   //resposible for slider movement
            />
            <SliderComponent
                min={0}
                max={data.homeValue} 
                defaultValue={data.loanAmount}                  //responsible for default amount & slider position
                sliderHeading={'Loan Amount'}
                onChange={(e, value) => setData({
                    ...data,
                    downPayment:(data.homeValue - value),
                    loanAmount: value
                })}
                step={100}
                amount={data.loanAmount}                    //responsible for amount shown
                unit={'$'}
                value={data.loanAmount}                 //resposible for slider movement
            />
            <SliderComponent
                min={2}
                max={18}
                defaultValue={data.interestRate}
                sliderHeading={'Interest Rate'}
                onChange={(e, value) => setData({ ...data,interestRate: value })}
                step={1}
                amount={data.interestRate}
                unit={'%'}
            />
        </Container>
    )
}


export default SliderSelect