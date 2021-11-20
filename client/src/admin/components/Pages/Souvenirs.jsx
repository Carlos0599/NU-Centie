import React, { useEffect, useState } from 'react'
import { Col, Row, Modal, Form, Button } from "react-bootstrap";
import SideNavBar from './SideNavBar';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MaterialTable from 'material-table';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import TextField from "@material-ui/core/TextField";
import Axios from 'axios';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));


function Souvenirs() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
      // Souvenirs
   const [souvenirslist, setsouvenirslist] = useState([]);
   useEffect(() => {
     Axios.get("http://localhost:3003/api/getSouvenirs")
       .then((res) => {
         console.log(res);
         setsouvenirslist(res.data);
       })
       .catch((err) => {
         console.log(err);
       });
   }, []);


    return (
        <div style={{ padding: 20 }}>
        <MaterialTable
          title=""
          columns={[
            { title: 'Souvenir ID', field: 'souvenir_id' },
            { title: 'Souvenir Name', field: 'souvenir_name' },
            { title: 'Souvenir Description', field: 'souvenir_description' },
            { title: 'Seller ID', field: 'seller_id' },
            { title: 'Product ID', field: 'product_id' },
            {
              title: '',
              render: rowData => <div style={{ cursor: 'pointer' }}>

                <MoreHorizIcon onClick={handleClick} />
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <div ><EditIcon />
                      <strong> Edit </strong>
                    </div>
                  </MenuItem>
                     {/* Archive Data */}
                  <MenuItem onClick={handleClose}>
                    <div ><FileCopyIcon style={{ color: 'red' }} />
                      <strong style={{ color: 'red', marginTop: 5 }}>Archive</strong>
                    </div>
                  </MenuItem>
                  </StyledMenu>
              </div>
            }

          ]}
          actions={[
            {
              icon: 'add',
              tooltip: 'Add Souvenirs',
              isFreeAction: true,
              onClick: (event, rowData) => {
                
              }
            },
            {
              icon: ArchiveIcon,
              tooltip: 'View Archive',
              isFreeAction: true,
              onClick: (event) => alert("You want to add a new row")
            }
          ]}
          data={souvenirslist}
          options={{
            sorting: true
          }}
        />
      </div>
    )
}

export default Souvenirs
