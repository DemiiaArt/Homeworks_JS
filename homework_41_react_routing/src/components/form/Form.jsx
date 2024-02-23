// import React, {useState, useEffect} from "react";
// import InputField from "./InputField.jsx";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import { Switch, Route, Link } from "react-router-dom";



// export default function Form ({userInfo, onSubmitForm, setUser}) {
//     const [user, setUserState] = useState();
//     console.log(userInfo);

//     useEffect(()=> {
//         setUserState(userInfo)
//     }, [])

//     const handleFieldChange = (field, value) => {
//         // setUserState(prevUser => ({
//         //   ...prevUser,
//         //   [field]: value
//         // }));
//         // setUser((prevUser) => ({
//         //     ...prevUser,
//         //     [field]: value
//         //   }));
//       };

   
//   return (
//     <form onSubmit={onSubmitForm} >
//       <Stack spacing={2}>
//         <InputField liftValue={value=> handleFieldChange('name', value)} type="text" input="Name" defVal={userInfo.name ? userInfo.name : ''}/>
//         <InputField liftValue={value=> handleFieldChange('username', value)} type="text" input="Username" defVal={userInfo.username ? userInfo.username : ''}/>
//         <InputField liftValue={value=> handleFieldChange('email', value)} type="email" input="Email" defVal={userInfo.email ? userInfo.email : ''}/>
//         <InputField liftValue={value=> handleFieldChange('city', value)} type="text" input="City" defVal={(userInfo.address) ? (userInfo.address.city) : ''}/>
//         <InputField liftValue={value=> handleFieldChange('street', value)} type="text" input="Street" defVal={(userInfo.address) ? (userInfo.address.street) : ''}/>
//         <Stack spacing={2} direction="row">
//           <Link to="/">
//             <Button variant="outlined">Back</Button>
//           </Link>
//           <Button variant="contained" type="submit">
//             Save
//           </Button>
//         </Stack>
//       </Stack>
//     </form>
//   );
// }
