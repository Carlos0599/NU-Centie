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
import Products from './Products';
import Orders from './Orders';

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

function ProductsOrder() {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  // Add Product 
  const [showUpdate, setShowUpdate] = useState(false);
  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = () => setShowUpdate(true);


  
  
    return (
        <div>

{/*Add Products*/}
<Modal
     
      // show={show}
      // onHide={handleClose1} 
      animation={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal show={show} onHide={handleClose1} animation={false}> */}
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Products & Orders</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h4>Add New Product</h4>
          <form>
            <div style={{ marginBottom: " 25%" }}>
              <label>
                Product Id:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Product Price:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Product Status:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Link:
                <br />  <input type="text" name="name" />
              </label>
            </div>
            <br />
            <div style={{ marginLeft: "45%", marginTop: "-50%" }}>
              <label>
                Product Category:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Product Picture:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Exhibit Id:
                <br />  <input type="text" name="name" />
              </label>
            </div>
          </form>
        </Modal.Body>

        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>Cancel</Button>
          <Button variant="primary" >Add Product</Button>
        </Modal.Footer> */}
      </Modal>


            <Row>
            <div style={{ padding: 10, color: '#30408D' }}>
              <h1>Product & Orders</h1>
            </div>
          </Row>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Products" {...a11yProps(0)} />
                <Tab label="Orders" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Products />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Orders />
            </TabPanel>

          </Box>
        </div>
    )
}

export default ProductsOrder
