// import firebase  from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';
//
// export const sendmessage = (TEXT,SENDER,GROUP) => {
//     console.log(TEXT+' '+SENDER+' '+GROUP);
//     return (dispatch)=>{
//         // const message= {text:TEXT,sender:SENDER};
//         firebase.database().ref('messages/SWE313').on('value',(snapshot)=>{console.log(snapshot.val())})
//         firebase.database().ref('messages/' + GROUP).set({text:TEXT,sender:SENDER});
//     };
// };
