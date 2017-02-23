import React, { PropTypes } from 'react'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'
import muiThemeable from 'material-ui/styles/muiThemeable';
import { MenuItem, SelectField } from 'material-ui'
import './ProdToolbar.css'


const ProdToolbar = ({ options, selected, onSelectSort, muiTheme }) => (
  <div>
    <Toolbar style={{backgroundColor: 'rgb(250,250,250)'}}>
      <ToolbarGroup>
        <h2 className="subTitle">New In: Clothing</h2>
      </ToolbarGroup>
      <ToolbarGroup>
        <span className="selectTitle">SORT BY</span>
        <SelectField
          style={{fontSize: '13px', marginTop: '-10px', width: '160px'}}
          labelStyle={{fontSize: '13px', color: muiTheme.palette.accent1Color}}
          value={selected}
          onChange={(e, key, val) => onSelectSort(val)}>
          {options.map(option => (
            <MenuItem key={option.val} value={option.val} primaryText={option.label} label={option.label} />
          ))}
        </SelectField>
      </ToolbarGroup>
    </Toolbar>
  </div>
)

ProdToolbar.PropTypes = {
  options: PropTypes.shape({
    val: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired,
  selected: PropTypes.number.isRequired,
  onSelectSort: PropTypes.func.isRequired
}

export default muiThemeable()(ProdToolbar)