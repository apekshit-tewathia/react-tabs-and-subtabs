import { useState } from 'react';
import Tab from './../Tab/Tab'

const Header = () => {
  const [activeTab, setactiveTab] = useState(1);

  const data =  { 
    tabs: [
      {
        id: 1,
        name: 'introduction',
        subtabs: [
          { id: 1, name: 'what is react.js', content: 'Random Content 1' },
          { id: 2, name: 'getting started', content: 'Random Content 2' }
        ]
      },
      {
        id: 2,
        name: 'the instance',
        subtabs: [
          { id: 1, name: 'creating a instance', content: 'Random Content 3' },
          { id: 2, name: 'data and methods', content: 'Random Content 4' },
          { id: 3, name: 'instance lifecycle hooks', content: 'Random Content 5' }
        ]
      },
      {
        id: 3,
        name: 'list rendering',
        subtabs: [
          { id: 1, name: 'mapping an array to elements', content: 'Random Content 6' },
          { id: 2, name: 'mapping an array to elements 2', content: 'Random Content 7' },
        ]
      },
    ]
  }

  return (
    <ul className='navigation-list'>
      {data.tabs && data.tabs.map(function(tabData) {
        return (
          <li key={ tabData.id }>
            <Tab name={ tabData.name } subtabs={ tabData.subtabs } clickHandler={ () => { setactiveTab(tabData.id) } } active={ activeTab === tabData.id }/>
          </li>
        );
      }) }
    </ul>
  );
}

export default Header;
