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

function PaymentInvestment() {

    const [valueThird, setValueThird] = React.useState(0);
    const handleChangeThird = (event, newValue) => {
      setValueThird(newValue);
    };


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    // Payment
  const [paymentlist, setpaymentlist] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3003/api/getPayments")
      .then((res) => {
        console.log(res);
        setpaymentlist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  // Investment
  const [investmentlist, setinvestmentlist] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3003/api/getInvestment")
      .then((res) => {
        console.log(res);
        setinvestmentlist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


    return (
        <div>
             <Row>
            <div style={{ padding: 10, color: '#30408D' }}>
              <h1>Payment</h1>
            </div>
          </Row>

          <Row>
            <div style={{ padding: 20 }}>
              <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={valueThird} onChange={handleChangeThird} aria-label="basic tabs example">
                    <Tab label="Payment" {...a11yProps(1)} />
                    <Tab label="Invesment" {...a11yProps(2)} />
                  </Tabs>
                </Box>
                <TabPanel value={valueThird} index={0}>
                  {/* Payment */}

                  <div style={{ padding: 20 }}>
                    <MaterialTable
                      title=""
                      columns={[
                        { title: 'Payment ID', field: 'payment_id' },
                        { title: 'Payment Type', field: 'payment_type' },
                        // { title: 'Payment Proof', field: 'payment_proof' },
                        { title: 'Order ID', field: 'order_id' },
                        { title: 'User ID', field: 'user_id' },
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
                              <div><EditIcon />
                                  <strong> Edit </strong>
                                </div>
                              </MenuItem>
                            {/* Archive Data */}
                              <MenuItem onClick={handleClose}>
                               <div><FileCopyIcon style={{ color: 'red' }} />
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
                          tooltip: 'Add Subscriber',
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
                      data={paymentlist}
                      options={{
                        sorting: true
                      }}
                    />
                  </div>
                </TabPanel>
                <TabPanel value={valueThird} index={1}>
                  {/* Investment */}
                  <div style={{ padding: 20 }}>
                    <MaterialTable
                      title=""
                      columns={[
                        //This column was edited by the innovation group
                        { title: 'Invest ID', field: 'invest_id' },
                        { title: 'Date', field: 'invest_date' },
                        { title: 'Amount', field: 'invest_amount' },
                        { title: 'Innovation ID', field: 'innovation_id' },
                        { title: 'Investor ID', field: 'investor_id' },
                        { title: 'Reference Number', field: 'invest_refNumber' },
                        { title: 'Payment Method', field: 'invest_pMethod' },
                        // { title: 'Payment Proof', field: 'invest_proofPayment' },
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

                            </StyledMenu>

                          </div>
                        }

                      ]}
                      actions={[
                        {
                          icon: 'add',
                          tooltip: 'Add Subscriber',
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
                      //Displaying list of investments
                      data={investmentlist}
                      options={{
                        sorting: true
                      }}
                    />
                  </div>
                </TabPanel>
              </Box>
            </div>
          </Row>
        </div>
    )
}

export default PaymentInvestment
