import Base from './Base'

export default ({header, main}) => (
  <Base>
    {header}

    <div className='body'>
      <div>
        <div className='main'>{main}</div>
      </div>
    </div>
  </Base>
)
