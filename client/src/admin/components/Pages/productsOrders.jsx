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
import ProductCategories from './ProductCategories';
import PaymentInvestment from './PaymentInvestment';
import ProductsOrder from './ProductsOrder';
// import  '../../css/SystemAdmin.css';



function MyVerticallyCenteredModal(props) {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          User Registration
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>



          <Button type="submit">Submit form</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

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


function ProductsOrders(props) {
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

  const [modalShow, setModalShow] = React.useState(false);
  
  const [show, setShow] = useState(false);

  const [show1, setShow1] = useState(false);

  const [show2, setShow2] = useState(false);

  const [show3, setShow3] = useState(false);

  const [show4, setShow4] = useState(false);

  const [show5, setShow5] = useState(false);

  const [show6, setShow6] = useState(false);

  const handleClose1 = () => setShow(false);
  const handleShow1 = () => setShow(true);

  const handleClose2 = () => setShow1(false);
  const handleShow2 = () => setShow1(true);

  const handleClose3 = () => setShow2(false);
  const handleShow3 = () => setShow2(true);

  const handleClose4 = () => setShow3(false);
  const handleShow4 = () => setShow3(true);

  const handleClose5 = () => setShow4(false);
  const handleShow5 = () => setShow4(true);

  const handleClose6 = () => setShow5(false);
  const handleShow6 = () => setShow5(true);

  const handleClose7 = () => setShow6(false);
  const handleShow7 = () => setShow6(true);


  <Modal.Dialog>
    <Modal.Header closeButton>
      <Modal.Title>Invest Payment Confirmation</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <p>Invest Payment Proof</p>
      <form>
        <label>
          Invest Id:
          <br />  <input type="text" name="name" />
        </label>
        <br />
        <label>
          Amount:
          <br />  <input type="text" name="name" />
        </label>
        <br />
        <label>
          Reference:
          <br />  <input type="text" name="name" />
        </label>
        <br />
        <label>
          Date:
          <br />  <input type="text" name="name" />
        </label>
      </form>
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary">Cancel</Button>
      <Button variant="primary">Verify Payment</Button>
    </Modal.Footer>
  </Modal.Dialog>

  // function PopUpModal() {
  //   return (
  //     <Modal show={show} onHide={handleClose}>
  //       <Modal.Header closeButton>
  //         <Modal.Title>Modal heading</Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         <p>Invest Payment Proof</p>
  //         <form>
  //           <label>
  //             Invest Id:
  //             <br />  <input type="text" name="name" />
  //           </label>
  //           <br />
  //           <label>
  //             Amount:
  //             <br />  <input type="text" name="name" />
  //           </label>
  //           <br />
  //           <label>
  //             Reference:
  //             <br />  <input type="text" name="name" />
  //           </label>
  //           <br />
  //           <label>
  //             Date:
  //             <br />  <input type="text" name="name" />
  //           </label>
  //         </form>
  //       </Modal.Body>
  //       <Modal.Footer>
  //         <Button variant="secondary" onClick={handleClose}>
  //           Close
  //         </Button>
  //         <Button variant="primary" onClick={handleClose}>
  //           Save Changes
  //         </Button>
  //       </Modal.Footer>
  //     </Modal>
  //   )

  // }



 


  return (




    <div style={{ marginTop: 100 }}>



      {/* Orders View */}
      <Modal
      {...props}
      show={show1}
      onHide={handleClose2} 
      animation={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal show={show1} onHide={handleClose2} animation={false}> */}
        <Modal.Header closeButton>
          <Modal.Title>Products & Orders</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h4>View Orders </h4>
          <form>
            <div style={{ marginBottom: " 26%" }}>
              <label>
                Order Id:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Order Date:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Product ID:
                <br />  <input type="text" name="name" />
              </label>
              <br />
            </div>
            <br />
            <div style={{ marginLeft: "45%", marginTop: "-50%" }}>
              <label>
                Payment Proof:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Payment Type:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Total Price:
                <br />  <input type="text" name="name" />
              </label>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleClose2}>OK</Button>
        </Modal.Footer>
      </Modal>

      

 {/* Add New Book */}
 <Modal
      {...props}
      show={show3}
      onHide={handleClose4} 
      animation={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
 {/* <Modal show={show3} onHide={handleClose4} animation={false}> */}
        <Modal.Header closeButton>
          <Modal.Title>Product Categories </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Add New Book</p>
          <form>
            <div style={{ marginBottom: " 35%" }}>
              <label>
                Book Id:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Book Name:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Book Description:
                <br />  <input type="text" name="name" />
              </label>
              <br />
            </div>
            <br />
            <div style={{ marginLeft: "45%", marginTop: "-52%" }}>
              <label>
                Book Author:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Product ID:
                <br />  <input type="text" name="name" />
              </label>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose4}>Cancel</Button>
          <Button variant="primary" onClick={handleClose4}>Add to List</Button>
        </Modal.Footer>
      </Modal>

      {/* Add New Innovation */}
      <Modal
      {...props}
      show={show4}
      onHide={handleClose5} 
      animation={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal show={show4} onHide={handleClose5} animation={false}> */}
        <Modal.Header closeButton>
          <Modal.Title>Product Categories </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Add New Innovation</p>
          <form>
            <div style={{ marginBottom: " 35%" }}>
              <label>
                Innovation Id:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Innovation Name:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Innovation Description:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Innovation Story:
                <br />  <input type="text" name="name" />
              </label>
              <br />
            </div>
            <br />
            <div style={{ marginLeft: "40%", marginTop: "-66%" }}>
              <label>
                Innovation Title:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Innovation Status:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Product ID:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Innovation ID:
                <br />  <input type="text" name="name" />
              </label>
              <br />
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose5}>Cancel</Button>
          <Button variant="primary" onClick={handleClose5}>Add to List</Button>
        </Modal.Footer>
      </Modal>


       {/* Payment Confirmation */}
       <Modal
      {...props}
      show={show5}
      onHide={handleClose6} 
      animation={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
       {/* <Modal show={show5} onHide={handleClose6} animation={false}> */}
        <Modal.Header closeButton>
          <Modal.Title>Payment </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Payment Confirmation</p>
          <form>
            <div style={{ marginBottom: " 40%" }}>
              PROOF OF PAYMENT
            </div>
            <br />
            <div style={{ marginLeft: "45%", marginTop: "-50%" }}>
              <label>
                Payment ID:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Payment Type:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Order ID:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                User ID:
                <br />  <input type="text" name="name" />
              </label>
              <br />
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose6}>Cancel</Button>
          <Button variant="primary" onClick={handleClose6}>Verify Payment</Button>
        </Modal.Footer>
      </Modal>

       {/* Archive */}
       <Modal
      {...props}
      show={show6}
      onHide={handleClose7} 
      animation={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal show={show1} onHide={handleClose2} animation={false}> */}
        <Modal.Header closeButton>
          <Modal.Title>Archive</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h4>Are you sure you want to delete?</h4>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleClose7}>Yes</Button>
          <Button variant="primary" onClick={handleClose7}>No</Button>
        </Modal.Footer>
      </Modal>

      <Row>

        <Col sm={2}>
          <SideNavBar active={'productsOrders'} />
        </Col>

        <Col sm={10}>
          
          <ProductsOrder />
          
          <ProductCategories />

          <PaymentInvestment />
                
        </Col>


      </Row>

    </div>
  )
}

export default ProductsOrders