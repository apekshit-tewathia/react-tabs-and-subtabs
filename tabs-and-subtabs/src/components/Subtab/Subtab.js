const Subtab = (props) => {
  const anchorClass = props.active ? 'active' : 'inactive';

  return (
    <div>
      <a className={ anchorClass } onClick={ props.clickHandler }>{ props.name }</a>
      { props.active && props.content }
    </div>
  )
}

export default Subtab;
