import React from 'react'
import { withLogging } from './withLogging';
import { WithFadeIn } from './withFadeIn';

function SampleComponent() {
  return (
    <div>Check Console</div>
  )
}

const EnhancedComponent = WithFadeIn(withLogging(SampleComponent));


export default EnhancedComponent;