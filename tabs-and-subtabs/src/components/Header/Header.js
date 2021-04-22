import { useState } from 'react'

import Tab from 'components/Tab/Tab'
import { headerData } from 'constants.js'

const Header = () => {
  const [activeTab, setactiveTab] = useState(1)

  return (
    <ul className="navigation-list">
      {headerData?.tabs.map(({ id, name, subtabs }) => (
        <li key={id}>
          <Tab
            id={id}
            name={name}
            subtabs={subtabs}
            clickHandler={setactiveTab}
            active={activeTab === id}
          />
        </li>
      ))}
    </ul>
  )
}

export default Header
