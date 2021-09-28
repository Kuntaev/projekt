// import React, { useEffect } from 'react';
// import Grid from '@material-ui/core/Grid';
// import { CardMedia, IconButton } from "@material-ui/core";
// import { makeStyles } from '@material-ui/core/styles';
// import { useDispatch, useSelector } from 'react-redux';
// import Typography from '@material-ui/core/Typography';
// import { deleteAccount, getAuthorizationCaptain, uploadAvatar } from '../../redux/features/captain';
// import Container from '@material-ui/core/Container';
// import Button from '@material-ui/core/Button';
// import { useHistory } from 'react-router-dom';
// import { PhotoCamera } from '@material-ui/icons';
//



// const useStyles = makeStyles({
// avatar: {
//   marginLeft: "250px",
//   width: "300px",
//   height: "350px",
//   borderRadius: "15px"
// },
//   img: {
//     backgroundImage: "URL(https://images.pexels.com/photos/54567/pexels-photo-54567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=700&w=1140)",
//     width: "1000px",
//     height: "690px"
//   },
//   area: {
//     alignItems: "center",
//     textAlign: "center"
//   },
//   data: {
//   color: "white"
//   },
//   delete: {
//   fontSize: "18px",
//   marginTop: "10px",
//     color: "white"
//   },
//   dataRemove: {
//    color: "white",
//    marginTop: "30px"
//   },
//   text: {
//     color: "white",
//
//   }
// });
//
// const PersonalCaptain = () => {
//   const classes = useStyles()
//   const dispatch = useDispatch()
//   useEffect(() => {
//     dispatch(getAuthorizationCaptain())
//   }, [])
//
//   const captain  = useSelector((state) => state.captain.captain)
//   const  history = useHistory()
//
//   console.log(captain.avatar)
//   const handleDelete = () => {
//     dispatch(deleteAccount());
//     history.push('/')
//   };
//   function handleChangeAvatar(e) {
//     const file = e.target.files[0];
//     dispatch(uploadAvatar(file));
//   }
//
//     return (
//       <Container className={classes.img}>
//
//             <Grid className={classes.area} container spacing={5}>
//               <input
//                 accept="image/*"
//                 className={classes.input}
//                 id="icon-button-file"
//                 type="file"
//                 onChange={handleChangeAvatar}
//               />
//               <label htmlFor="icon-button-file">
//                 <IconButton
//                   color="default"
//                   aria-label="upload picture"
//                   component="span"
//                   className={classes.button}
//                 >
//                   <PhotoCamera />
//                 </IconButton>
//               </label>
//             <Grid item={6}>
//               <Typography className={classes.text} variant="h5" component="span">
//                 <b>Аватарка</b>
//               </Typography>
//               <CardMedia component="img" className={classes.avatar} image={`http://localhost:3013${captain.avatar}`}/>
//             </Grid>
//             <Grid item={6}>
//               <Typography   className={classes.data} gutterBottom variant="h5" component="p">
//                 <b>Фамилия</b>:{captain?.surname}
//               </Typography>
//               <Typography  className={classes.data} gutterBottom variant="h5" component="p">
//                 <b>Имя</b>: {captain?.name}
//               </Typography>
//               <Typography  className={classes.data} gutterBottom variant="h5" component="p">
//                 <b>Почта</b>:{captain?.mail}
//               </Typography>
//               <Typography  className={classes.dataRemove} gutterBottom variant="h5" component="p">
//                 <Typography component="p" variant="h5"><b>Удалить аккаунт</b></Typography>
//                 <Button onClick={handleDelete} variant="contained" color="secondary" size="large" className={classes.delete}>
//                   Удалить
//                 </Button>
//               </Typography>
//             </Grid>
//           </Grid>
//       </Container>
//
//     );
// };
//
// export default PersonalCaptain


import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { deleteAccount, getAuthorizationCaptain } from '../../redux/features/captain';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import ImageUploading from "react-images-uploading";
import { IconButton } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

const useStyles = makeStyles({
avatar: {
  marginLeft: "250px",
  width: "300px",
  height: "350px",
  borderRadius: "15px"
},
  img: {
    backgroundImage: "URL(https://images.pexels.com/photos/54567/pexels-photo-54567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=700&w=1140)",
    width: "1000px",
    height: "690px"
  },
  area: {
    alignItems: "center",
    textAlign: "center"
  },
  data: {
  color: "white"
  },
  delete: {
  fontSize: "18px",
  marginTop: "10px",
    color: "white"
  },
  dataRemove: {
   color: "white",
   marginTop: "30px"
  },
  text: {
    color: "white",

  }
});

const PersonalCaptain = () => {

  const classes = useStyles()
  const dispatch = useDispatch()

  const [images, setImages] = React.useState([]);
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {

    setImages(imageList);
  };

  useEffect(() => {
    dispatch(getAuthorizationCaptain())
  }, [])

  const captain  = useSelector((state) => state.captain.captain)
  const  history = useHistory()

  console.log(captain.avatar)
  const handleDelete = () => {
    dispatch(deleteAccount());
    history.push('/')
  };
  // function handleChangeAvatar(e) {
  //   const file = e.target.files[0];
  //   dispatch(uploadAvatar(file));
  // }

    return (
      <Container className={classes.img}>

            <Grid className={classes.area} container spacing={5}>
            <Grid item={6}>

              <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
              >
                {({
                    imageList,
                    onImageUpload,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps
                  }) => (
                  // write your building UI
                  <div className="upload__image-wrapper">
                    <IconButton
                      onClick={onImageUpload}
                      {...dragProps}
                      color="default"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera style={{fontSize: "100px"}} />
                    </IconButton>

                    {imageList.map(( image, index) => (


                      <div key={index} className="image-item">
                        <Typography className={classes.text} variant="h5" component="div">
                          <b>Аватарка</b>
                        </Typography>
                        <img src={image.data_url} alt="" width="300" height="300" />
                        <div className="image-item__btn-wrapper">
                          <Button onClick={() => onImageUpdate(index)} variant="contained" color="primary" size="large">Изменить</Button>
                          &nbsp;
                          <Button onClick={() => onImageRemove(index)} variant="contained" color="secondary" size="large">
                            Удалить
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ImageUploading>
              {/*<CardMedia component="img" className={classes.avatar} image={`http://localhost:3013${captain.avatar}`}/>*/}
            </Grid>
            <Grid item={6}>
              <Typography   className={classes.data} gutterBottom variant="h5" component="p">
                <b>Фамилия</b>:{captain?.surname}
              </Typography>
              <Typography  className={classes.data} gutterBottom variant="h5" component="p">
                <b>Имя</b>: {captain?.name}
              </Typography>
              <Typography  className={classes.data} gutterBottom variant="h5" component="p">
                <b>Почта</b>:{captain?.mail}
              </Typography>
              <Typography  className={classes.dataRemove} gutterBottom variant="h5" component="p">
                <Typography component="p" variant="h5"><b>Удалить аккаунт</b></Typography>
                <Button onClick={handleDelete} variant="contained" color="secondary" size="large" className={classes.delete}>
                  Удалить
                </Button>
              </Typography>
            </Grid>
          </Grid>
      </Container>
    );
};

export default PersonalCaptain