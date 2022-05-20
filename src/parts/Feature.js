import React from 'react'
import propTypes from 'prop-types';
import Fade from 'react-reveal/Fade'
export default function Feature(props) {
  return (
    <div class="tiles-item">
          <Fade bottom delay={props.delayInMS}>
              <div class="tiles-item-inner">
                <div class="features-tiles-item-header">
                    <div class="features-tiles-item-image mb-16" >
                        <img
                            src={props.data.imgSrc}
                            alt={props.data.imgAlt}
                            width="64"
                            height="64"
                        />
                    </div>
                </div>
                <div class="features-tiles-item-content" >
                    <h4 class="mt-0 mb-8">
                        {props.data.title}
                    </h4>
                    <p class="m-0 text-sm">
                        {props.data.description}
                    </p>
                </div>
            </div>
        </Fade>
    </div>
  )
}

Feature.propTypes = {
    delayInMS: propTypes.number,
    data: propTypes.object
}
