import CountUp from 'react-countup';

const PlaycountCounter = ({ playcount }) => {
  return (
    <CountUp
      start={10000000}
      end={playcount}
      delay={0}
      onEnd={() => console.log('Ended! 👏')}
    >
      {({ countUpRef }) => (
        <div className=''>
          <span ref={countUpRef} />
          <span> plays</span>
        </div>
      )}
    </CountUp>
  )
}
export default PlaycountCounter