import { useState, useEffect } from 'react';
import Subtab from './../Subtab/Subtab'
import './Tab.scss';

const Tab = (props) => {
  const anchorClass = props.active ? 'active' : 'inactive';
  const [activeSubtab, setActiveSubtab] = useState(1);

  // To reset the selected subtab everytime a tab is changed
  useEffect(() => {
    setActiveSubtab(1)
  }, [props.active]);

  return (
    <div>
      <a className={ anchorClass } onClick={ props.clickHandler }>
        { props.name }
      </a>
      <ul>
      { props.active && props.subtabs && props.subtabs.map(function(subtabData, index) {
        return (
          <li key={ subtabData.id }>
            <Subtab name={ subtabData.name } content={subtabData.content} clickHandler={() => { setActiveSubtab(subtabData.id) } } active={ activeSubtab === subtabData.id } />
          </li>
        );
      }) }
    </ul>   
  </div>
  )
}

export default Tab;
