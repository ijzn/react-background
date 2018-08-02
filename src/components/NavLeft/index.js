import React, { Component } from 'react'
import menuConfig from './../../config/menuConfig';
import { Menu, Icon } from 'antd';
function handleClick(e) {
  console.log('click', e);
}
export default class NavLeft extends Component {
  render() {
    const SubMenu = Menu.SubMenu;
    const MenuItemGroup = Menu.ItemGroup
    const MenuItem = Menu.Item
    return (
      <div>
        <Menu onClick={handleClick} style={{ width: 256 }} theme="dark" mode="vertical">
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
            <MenuItemGroup title="Item 1">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Iteom 2">
              <MenuItem key="3">Option 3</MenuItem>
              <MenuItem key="4">Option 4</MenuItem>
            </MenuItemGroup>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
            <MenuItem key="5">Option 5</MenuItem>
            <MenuItem key="6">Option 6</MenuItem>
            <SubMenu key="sub3" title="Submenu">
              <MenuItem key="7">Option 7</MenuItem>
              <MenuItem key="8">Option 8</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
            <MenuItem key="9">Option 9</MenuItem>
            <MenuItem key="10">Option 10</MenuItem>
            <MenuItem key="11">Option 11</MenuItem>
            <MenuItem key="12">Option 12</MenuItem>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
