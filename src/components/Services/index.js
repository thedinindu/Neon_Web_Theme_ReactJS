import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, SevricesIcon, ServicesH2, ServicesP } from './ServicesElement'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <SevricesIcon src={Icon1} />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce you fess and increase your overall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <SevricesIcon src={Icon2} />
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>We help reduce you fess and increase your overall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <SevricesIcon src={Icon3} />
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>We help reduce you fess and increase your overall revenue.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
