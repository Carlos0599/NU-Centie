import { useState, useEffect } from "react";
import { makeStyles, Button, TextField, ButtonBase, Grid, Step, StepLabel, Stepper, Typography, Container} from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './Multistep.css'
import Gcash from '../../../assets/gcash.png'
import Paypal from '../../../assets/paypal.png'
import Profile from '../../../assets/profile.png'
import Swal from 'sweetalert2'
import { Redirect, useLocation } from "react-router"
import Axios from 'axios';
import {useHistory} from "react-router-dom"

export default function Multistepform() {

    const location = useLocation()
    const innovation = location.state.innovation
  
    const [data, setData] = useState({
        full_name: "",
        contact_number: "",
        email: "",
        amount: "",
        modeOfPayment: "",
        recieptNumber: "",
        uploadProof: "",
        remarks: "",
    });



    const [currentStep, setCurrentStep] = useState(0);

    const makeRequest = (formData) => {

        const investment = {
            invest_amount    : formData.amount,
            invest_date      : "2021-10-02",
            innovation_id    : innovation.innovation_id,
            investor_id      : 1,
            invest_refNumber : formData.recieptNumber,
            invest_proofPayment : formData.proofPayment,
            invest_pMethod      : formData.modeOfPayment
        }
            try{
                Axios.post('http://localhost:3003/api/investment',investment).then((response)=>
                {
                    if(response.status == 200){
                        console.log(response.data);
                    }else{
                        console.log('Error Saving Data');
                    }
                },[])
            }catch(e){
                console.log(e);
            }
    };

    const handleNextStep = (newData, final = false) => {
        setData((prev) => ({ ...prev, ...newData }));
        if (final) {
            makeRequest(newData);
            return;
        }

        setCurrentStep((prev) => prev + 1);
    };

    const handlePrevStep = (newData) => {
        setData((prev) => ({ ...prev, ...newData }));
        setCurrentStep((prev) => prev - 1);
    };

    const steps = [
        <StepOne next={handleNextStep} data={data} />,
        <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
        <StepThree next={handleNextStep} prev={handlePrevStep} data={data} />,
        <StepFour next={handleNextStep} prev={handlePrevStep} data={data} />,
    ];
    function getSteps() {
        return ["Personal Information", "Payment Method", "Upload Proof of Payment", "Confirmation"];
    }
    const inStep = getSteps();

    return <div className="App">
        <Stepper alternativeLabel activeStep={currentStep}>
            {inStep.map(label => (
                <Step key={label}>
                    <StepLabel>
                        {label}
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
        {steps[currentStep]}
    </div>;
}

const stepOneValidationSchema = Yup.object({
    full_name: Yup.string().required().label("Full name"),
    contact_number: Yup.number().required().label("Contact Number"),
    email: Yup.string().required().email().label("Email"),
    amount: Yup.number().required().label("Contact Number"),
});

const StepOne = (props) => {
    const classes = useStyles();
    const handleSubmit = (values) => {
        props.next(values);
    };

    return (
        <Formik
            validationSchema={stepOneValidationSchema}
            initialValues={props.data}
            onSubmit={handleSubmit}
        >
            {() => (
                <Form className="form1">
                    <div className="f1_div">
                        <p>Name: </p>
                        <Field name="full_name" className="f1_input" />
                    </div>
                    <ErrorMessage name="full_name">{msg => <div className="f1_error">{msg}</div>}</ErrorMessage>
                    <div className="f1_div">
                        <p>Contact Number: </p>
                        <Field name="contact_number" type={Number} className="f1_input" />
                    </div>
                    <ErrorMessage name="contact_number">{msg => <div className="f1_error">{msg}</div>}</ErrorMessage>
                    <div className="f1_div">
                        <p>Email Address: </p>
                        <Field name="email" className="f1_input" />
                    </div>
                    <ErrorMessage name="email">{msg => <div className="f1_error">{msg}</div>}</ErrorMessage>
                    <div className="f1_div">
                        <p>Amount: </p>
                        <Field name="amount" type={Number} className="f1_input" />
                    </div>
                    <ErrorMessage name="amount">{msg => <div className="f1_error">{msg}</div>}</ErrorMessage>
                    <div className="navigationBtns">
                        <Button variant="contained" color="primary" size="large" type="submit" className = {classes.nav_btn}>
                            Submit
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

const stepTwoValidationSchema = Yup.object({
    modeOfPayment: Yup.string().required("A radio option is required").label("Mode of Payment"),
});


const StepTwo = (props) => {
    const classes = useStyles();
    const handleSubmit = (values) => {
        props.next(values);
    };

    return (
        <Formik
            validationSchema={stepTwoValidationSchema}
            initialValues={props.data}
            onSubmit={handleSubmit}
        >
            {({ values }) => (
                <Form className="form2">
                    <ErrorMessage name="modeOfPayment">{msg => <div className="f2_error">{msg}</div>}</ErrorMessage>
                    <div className="inButton">
                        {/*<h2>{values.modeOfPayment}</h2>*/}
                        <label class="custom-radio">
                            <Field name="modeOfPayment" type="radio" value="GCash" />
                            <span class="radio-btn"
                            ><i class="las la-check"></i>
                                <div class="hobbies-icon">
                                    <img src={Gcash} />
                                    <h3>G Cash</h3>
                                </div>
                            </span>
                        </label>
                        <label class="custom-radio">
                            <Field name="modeOfPayment" type="radio" value="Paypal" />
                            <span class="radio-btn"
                            ><i class="las la-check"></i>
                                <div class="hobbies-icon">
                                    <img src={Paypal} />
                                    <h3>Paypal</h3>
                                </div>
                            </span>
                        </label>
                    </div>
                    <div className="in_intructions">
                        <h3>Kindly refer to the following account information and process</h3>
                        <p>1. Add an Account Name and Account Number</p>
                        <p>Account Name: Gonzales M.</p>
                        <p>Account Number: 09XX-XXX-XXXX</p>
                        <p>2. Add an amount and a number for "Send to".</p>
                        <p>Send: 09XX-XXX-XXXX</p>
                        <p>Amount: 'Amount of your Investment'</p>
                        <p>3. Kindly double check if the Account name is matched on our given
                            information before proceeding</p>
                        <p>4. Once you've sent your investment, screenshot the receipt or the <br />
                            text message that indicates your transaction and upload it as <br />
                            your proof of payment</p>
                    </div>
                    <div className="navigationBtns">
                        <Button variant="contained" color="default" size="large" onClick={() => props.prev(values)} className = {classes.nav_btn}>
                            Back
                        </Button>
                        <Button variant="contained" color="primary" size="large" type="submit" className = {classes.nav_btn}>
                            Submit
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

const stepThreeValidationSchema = Yup.object({
    //modeOfPayment: Yup.string().required("A radio option is required").label("Mode of Payment"),
    recieptNumber: Yup.number().required().label("Reciept Number"),

    // uploadProof: Yup.object().shape({
    //     text: Yup.string().required("A text is required"),
    //     file: Yup
    //         .mixed()
    //         .required("A file is required")
    //         .test(
    //             "fileSize",
    //             "File too large",
    //             value => value && value.size <= FILE_SIZE
    //         )
    //         .test(
    //             "fileFormat",
    //             "Unsupported Format",
    //             value => value && SUPPORTED_FORMATS.includes(value.type)
    //         )
    // }),

    remarks: Yup.string().required().label("remarks")
});

const StepThree = (props) => {
    const classes = useStyles();
    const handleSubmit = (values) => {
        props.next(values);
    };

    return (
        <Formik
            validationSchema={stepThreeValidationSchema}
            initialValues={props.data}
            onSubmit={handleSubmit}
        >
            {({ values, setFieldValue }) => (
                <Form className="form1">
                    <h3>Amount Invested: ₱{values.amount}</h3>
                    <h3>Payment Information</h3>
                    <div className="f1_div">
                        <p>Reference Number: </p>
                        <Field name="recieptNumber" className="f1_input" />
                    </div>
                    <ErrorMessage name="recieptNumber">{msg => <div className="f1_error">{msg}</div>}</ErrorMessage>
                    <div className="f1_div">
                        <p>Upload File: </p>
                        {/*<Field name="uploadProof" type={File} className="f1_input" />*/}
                        <Field
                            name="uploadProof"
                            render={({  /* { name, value, onChange, onBlur } */ }) => (
                                <input type="file" placeholder="uploadProof" class="f1_input" 
                                onChange={(e) => { 
                                    const fileReader = new FileReader();
                                    fileReader.onloadend  = () => {
                                      if (fileReader.readyState === 2) {
                                          setFieldValue('proofPayment', fileReader.result);
                                        //   setFieldValue('uploadProof', fileReader);
                                      }
                                    };
                                    fileReader.readAsDataURL(e.target.files[0]);
                                  }}
                                  />
                            )}
                        />
                        {/* <input id="file" name="uploadProof" type="file" className="f1_input" /> */}
                    </div>
                    <ErrorMessage name="uploadProof">{msg => <div className="f1_error">{msg}</div>}</ErrorMessage>
                    <div className="f1_div">
                        <p>Remarks: </p>
                        <Field name="remarks" className="f1_input" />
                    </div>
                    <ErrorMessage name="remarks">{msg => <div className="f1_error">{msg}</div>}</ErrorMessage>

                    <div className="navigationBtns">
                        <Button variant="contained" color="default" size="large" onClick={() => props.prev(values)} className = {classes.nav_btn}>
                            Back
                        </Button>
                        <Button variant="contained" color="primary" size="large" type="submit" className = {classes.nav_btn}>
                            Submit
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

const stepFourValidationSchema = Yup.object({

});
const useStyles = makeStyles({
    typography: {
        fontFamily: "Raleway",
        fontWeight: "bold",
    },
    typography2: {
        fontSize: "20px",
        fontWeight: "bold",
    },
    color: {
        backgroundColor: ''
    },
    nav_btn:{
        margin: "20px"
    },
});
var cardStyle = {
    display: 'block',
    width: '53vw',
    transitionDuration: '0.3s',
    height: '8vw',
    color: "black"
}
const StepFour = (props) => {

    const location = useLocation()
    const innovation = location.state.innovation
    const innovator = location.state.innovator

    const classes = useStyles();
    let history = useHistory();
    const handleSubmit = (values) => {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Thank you for Investing! We will review your payment for 3-5 days',
        })
        .then((e) => {
        
            history.push('/innovation');
        });
        props.next(values, true);
       
    };

    return (
        <Formik
            validationSchema={stepFourValidationSchema}
            initialValues={props.data}
            onSubmit={handleSubmit}
        >
            {({ values }) => (
                <Form>
                    <Container maxWidth="2">

                        <h3>Confirmation</h3>
                        <Grid container spacing={2} >

                            <Grid item>
                                <ButtonBase sx={{ width: 128, height: 128 }}>
                                    <img src={`data:image/jpeg;base64,${Buffer.from(innovation.innovation_pictures?.data).toString(
            `base64`
          )}`} width="80" height="80"
                        />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1" component="div" className={classes.typography}>
                                                {innovation.innovation_title}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom className={classes.typography}>
                                            Innovator/s: {innovator.innovator_fname} {innovator.innovator_lname}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className={classes.typography}>
                                            Status:  {innovation.innovation_status}
                                        </Typography>
                                    </Grid>

                                </Grid>

                            </Grid>
                        </Grid>

                        <Grid container spacing={2} className={classes.color}>
                            <Grid item>
                                <ButtonBase sx={{ width: 128, height: 128 }}>
                                    <img alt="complex" src={Profile} width="80" height="80" />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1" component="div" className={classes.typography}>
                                            Investor Information
                                        </Typography>
                                        <Typography variant="body2" gutterBottom className={classes.typography}>
                                            {values.full_name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className={classes.typography}>
                                            {values.email}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ cursor: 'pointer' }} variant="body2" className={classes.typography}>
                                            {values.contact_number}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>

                            <Grid item>

                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1" component="div" className={classes.typography2}>
                                            Amount Invested: {values.amount}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom className={classes.typography2}>
                                            Choose Payment Method: {values.modeOfPayment}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                    <div className="navigationBtns">
                        <Button variant="contained" color="default" size="large" onClick={() => props.prev(values)} className = {classes.nav_btn}>
                            Back
                        </Button>
                        <Button variant="contained" color="primary" size="large" type="submit" className = {classes.nav_btn}>
                            Submit
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};
