import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../data/jsonAnimation/lottie-airplane.json'

const AnimacaoAviao = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
    }
  return (
    <div>
        <Lottie options={defaultOptions}
              height={400}
              width={400}
        />
    </div>
  )
}

export default AnimacaoAviao