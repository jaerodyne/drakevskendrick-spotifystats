import CountUp from 'react-countup';

const PlaycountCounter = ({ playcount }) => {
  return (
    <CountUp start={10000000} end={playcount} delay={0}>
      {({ countUpRef }) => (
        <div className=''>
          <span ref={countUpRef} />
        </div>
      )}
    </CountUp>
  )
}
export default PlaycountCounter