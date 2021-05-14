import React from 'react';

// Props are passed through our functional component.
function NavTabs(props) {
  const tabs = ['Home', 'About', 'Login', 'Logout'];
  return (
    <header >
      <div >
        Test Portfolio Builder
      </div>
      <ul className="nav">
        {tabs.map(tab => (
          <li className="nav-item" key={tab}>
            <a
              href={'#' + tab.toLowerCase()}
              // Clicking a tab sets
              // page w handlePageChange props.
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? 'nav-link-active' : 'nav-link'
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
      
    </header>

  );
}

export default NavTabs;
