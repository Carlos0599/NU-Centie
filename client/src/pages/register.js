import React, { Component, Fragment } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as Yup from 'yup'
import {
    Paper,
    Box,
    Grid,
    TextField,
    Typography,
    Checkbox,
    Button,
} from '@material-ui/core';

const Register = () => {
    const Validation = Yup.object().shape({
        fname: Yup.string().required('*This field cannot be empty!'),
        lname: Yup.string().required('*This field cannot be empty!'),
        email: Yup.string()
            .required('This field cannot be empty!')
            .email('Please use a valid email'),
        contact: Yup.string().required('*This field cannot be empty!'),
        address: Yup.string().required('*This field cannot be empty!'),
        password: Yup.string()
            .required('*This field cannot be empty!')
            .min(6, '*Password must be at least 6 characters')
            .max(40, '*Password must not exceed 40 characters'),
        cn_password: Yup.string()
            .required('*This field cannot be empty!')
            .oneOf([Yup.ref('password'), null, '*Passwords do not match']),
        acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required")
    });

    return (
        <Fragment>
            <Paper>
                <Box px={3} py={2}>
                    <Typography variant="h6" align="center" margin="dense">
                        Register
                    </Typography>

                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="fname"
                                label="First Name"
                                fullWidth
                                margin="dense"
                            />
                            <Typography variant="inherit" color="textSecondary">

                            </Typography>
                        </Grid>
                        <br/>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lsname"
                                label=" Last Name"
                                fullWidth
                                margin="dense"
                            />
                        </Grid>
                        <Typography>
                        </Typography>
                        <br/>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="email"
                                label="Email"
                                fullWidth
                                margin="dense"
                            />
                            <Typography>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="contact"
                                label="Contact"
                                fullWidth
                                margin="dense"
                            />
                            <Typography>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="password"
                                label="Password"
                                fullWidth
                                margin="dense"
                                type="password"
                            />
                            <Typography>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="address"
                                label="Address"
                                fullWidth
                                margin="dense"
                            />
                            <Typography>
                            </Typography>
                        </Grid>
                       
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="cn_password"
                                label="Confirm Password"
                                fullWidth
                                margin="dense"
                                type="password"
                            />
                            <Typography>
                            </Typography>
                        </Grid>
                        {/* <Grid item xs={12}>
                            <FormControlLabel
                                // control={
                                //     <Controller
                                //         control={control}
                                //         name="acceptTerms"
                                //         defaultValue="false"
                                //     inputRef={}
                                //     render={}
                                //     />
                                // }
                                label={
                                    <Typography>
                                        I have read and agree to the Terms *
                                    </Typography>
                                }
                            />
                        </Grid> */}
                    </Grid>
                    <Box mt={3}>
                    <center>
                        <Button
                            variant="contained"
                            color="primary"> Sign up </Button></center>
                    </Box>
                </Box>
            </Paper>
        </Fragment>
    )
}

export default Register