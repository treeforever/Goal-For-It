import React from 'react'
import DropdownMenu from './DropdownMenu'

const Nav = (props) => (
  <DropdownMenu
    openAddGoalDialog={ props.openAddGoalDialog }
    openPotDialog={ props.openPotDialog }
    />
)
