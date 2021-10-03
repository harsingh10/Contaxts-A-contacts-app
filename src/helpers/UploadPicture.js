// import storage from '@react-native-firebase/storage';


// function getBase64(file) {
//   var reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onload = function () {
//     console.log(reader.result);
//   };
//   reader.onerror = function (error) {
//     console.log('Error: ', error);
//   };
// }

// export default (file) => onSuccess => onError => {
//   console.log('UploadPicture===>>>>OnFile', file);
//   const path = 'contact-pictures/user/777/' + (file.path);
//   const ref = storage().ref();
//   const name = "+new Date().toString + '-' + file.path";
//   // const metadata = {
//   //   contentType: file.mime,
//   // };

//   // const ref = storage().ref(path);

//   const task = ref.putFile(file?.path);

//   // const file = document.querySelector('#photo').files[0]

//   console.log("BASE64===>>>>>>url",getBase64("gs://"+file.path));

//   // const task = ref.child(name).put(file);
//   task
//     .then(snapshot => snapshot.ref.getDownloadURL())
//     .then((url) => {
//       console.log("url======>>>>",url);
//       // onSuccess(url);
//       // document.querySelector('#someImageTagID').src = url;
//     })
//     .catch(console.error);
//   // task
//   //   .then(async () => {
//   //     // console.log("UploadPicture===>>>>Onsuccess");
//   //     const url = await ref.getDownloadURL();
//   //     onSuccess(url);
//   //     console.log('url========>>>>>>>>>', url);
//   //   })
//   //   .catch(error => {
//   //     console.log('UploadPicture===>>>>OnError');
//   //     onError(error);
//   //   });
// };


import storage from '@react-native-firebase/storage';

export default (file) => (onSuccess) => (onError) => {
  const path = 'contact-pictures/user/777/' + file.creationDate || file.path;
  const ref = storage().ref(path);

  const task = ref.putFile(file.path);

  task
    .then(async () => {
      const url = await ref.getDownloadURL();
      onSuccess(url);
      console.log('url=========================>>---====>>>', url);
    })
    .then((error) => {
      onError(error);
    });
};