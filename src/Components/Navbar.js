import {useState}from 'react'
import '../Styles/Navbar.scss'
import { Icon } from '@iconify/react';



function Navbar() {

  const [open, setOpen] = useState(false);

  console.log(open)

  return (
    <div className={open ? 'navbar dropdown' : 'navbar' }>
      <div className="left-side">
        <a href='/' className="site-logo" > 
          <Icon className='icon logo' icon='emojione:open-book' />
        </a>
          <ul>
              <li>
                <a href="/roadmap"> ROADMAP</a>
              </li>
              <li>
                <a href="/faq"> FAQ</a>
              </li>
              <li>
                <a href="/rarity"> RARITY</a>
              </li>
              <li>
                <a href="/features"> FEATURES</a>
              </li>
          </ul>
        </div>
        <div className="right-side">
            <div className="icons">
              <a href="/">
              <Icon href='www.instagram.com' className='icon insta' icon='ant-design:instagram-outlined' />
              </a>
              <a href="/">
              <Icon className='icon medium' icon="akar-icons:medium-fill" />
              </a>

              <a href="/">
              <Icon className='icon discord' icon="bxl:discord" />
              </a>
              <a href="/">
              <Icon className='icon twitter' icon="akar-icons:twitter-fill" />
            </a>
        </div>
            <button className='mint'>
              MINT
            </button>
            <a href={(e) =>  e.preventDefault()} className="burger-button" onClick={() => setOpen(!open)}>
              <Icon  className='burger' icon="charm:menu-hamburger" />
            </a>
        </div>
    </div>
  )
}

export default Navbar