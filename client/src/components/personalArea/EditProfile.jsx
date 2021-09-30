// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Grid from '@material-ui/core/Grid';
// import { Button, Paper, TextField } from '@material-ui/core';
// import Box from '@material-ui/core/Box';
// import { editCaptainById } from '../../redux/features/captain';
// import { makeStyles } from '@material-ui/core/styles';
//
//
// const useStyles = makeStyles({
//   save: {
//     fontSize: "18px",
//     color: "white",
//     backgroundColor: "green"
//   },
//   BoxSave: {
//     marginTop: "20px",
//     marginLeft: "180px",
//
//   },
//   editPaper: {
//     borderRadius: "10px 10px 10px 10px",
//     width: "500px",
//     height: "200px"
//   },
//   modal: {
//     marginLeft: "6px"
//   }
//
// })
//
// const EditProfile = () => {
//   const classes = useStyles()
//   const  dispatch = useDispatch()
//
//   const [name, setName] = useState("")
//   const [surname, setSurname] = useState("")
//
//
//
//   const handleEditName = (e) => {
//     setName(e.target.value)
//   }
//   const handleEditSurname = (e) => {
//     setSurname(e.target.value)
//   }
//
//   const handleEdit = () => {
//     dispatch(editCaptainById({name, surname}))
//   }
//
//
//   return (
//     <Paper className={classes.editPaper}>
//       <Grid className={classes.modal} container spacing={4}>
//         <Grid item={5}>
//           <TextField
//             onChange={handleEditName}
//             value={name}
//             variant="outlined"
//             required
//             label="Имя"
//           />
//         </Grid>
//         <Grid item={5}>
//           <TextField
//             onChange={handleEditSurname}
//             value={surname}
//             variant="outlined"
//             required
//             label="Фамилия"
//           />
//         </Grid>
//       </Grid>
//       <Box className={classes.BoxSave}>
//         <Button variant="contained"  className={classes.save} onClick={handleEdit}>Сохранить</Button>
//       </Box>
//     </Paper>
//   );
// };
//
// export default EditProfile;