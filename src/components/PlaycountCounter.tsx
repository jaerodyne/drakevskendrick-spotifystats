import { useState } from 'react';
import CountUp from 'react-countup';
import { PlaycountCounterProps } from '../utils/Types';

const PlaycountCounter = ({ playcount }: PlaycountCounterProps) => {
  const [showAwardEmoji, setShowAwardEmoji] = useState(false);

  return (
    <CountUp
      start={10000000}
      end={playcount}
      delay={0}
      onEnd={() => setShowAwardEmoji(true)}
    >
      {({ countUpRef }) => (
        <div className=''>
          {showAwardEmoji && <span className='award'>🏆</span>}
          <span className='count-up' ref={countUpRef} />
          <span> plays</span>
        </div>
      )}
    </CountUp>
  )
}
export default PlaycountCounter