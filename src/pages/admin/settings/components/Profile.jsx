import React from 'react';
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PWD_REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%*&_-])[A-Za-z\d!@#$%*&_-]{8,24}$/;
const Profile = () => {
    const [proflieData, setProfileData] = useState({
        full_name: "",
        user_name:"",
        email:"",
        password: "",
        dob:"",
        current_address:"",
        permanent_address:"",
        city:"",
        postal_code:"",
        country:"",
    })
    const [errors, setErrors] = useState({
        full_name: "",
        user_name:"",
        email:"",
        password: "",
        dob:"",
        current_address:"",
        permanent_address:"",
        city:"",
        postal_code:"",
        country:"",
    })

    console.log({errors})

    const handleChange = (event) =>{
        const { name, value} = event.target

        setProflieData({
            ...proflieData,
            [name] : value
        })
        setErrors({
            ...errors,
            [name] : ""
        })

    }

    const validate = () =>{
        let error = {}
        if(!proflieData.full_name){
            error.name="field is required"
        }
        if(!proflieData.user_name){
            error.name="field is required"
        }
        if(!proflieData.email){
            error.email = "field is required"
        }else if(!EMAIL_REGEX.test(proflieData.email)){
            error.email= "invalid email"
        }
        if(!proflieData.password){
            error.password = "field is required"
        }else if(!PWD_REGEX.test(proflieData.password)){
            error.password= "invalid email"
        }

        if(!proflieData.postal_code){
            error.postal_code = "field is required"
        }else if(!(proflieData.phone.length <= 10 || proflieData.phone.length > 11)){
            error.postal_code= "incomplete phone number"
        }

        if(!proflieData.country){
            error.country = "field is required"
        }
        if(!proflieData.city){
            error.country = "field is required"
        }
        if(!proflieData.current_address){
            error.state= "field is required"
        }
        if(!proflieData.permanent_address){
            error.city = "field is required"
        }
        if(!proflieData.dob){
            error.access_level= "field is required"
        }

        setErrors(error)
    return Object.values(error).every(value => value === null);
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(validate()){
            const word = "/admin"
            const match = state.pathname.match(new RegExp(`\\b${word}\\b`, 'i'));
                console.log(match)
                console.log(match.input)
             const  baseURL= match.input.slice(0,match.index)
        console.log("validated")
        navigate("/dashboard/accounts/admin/new-admin/confirmPIN", { state: { value: "account creation", location: baseURL }})
        }
    }
    return (
        <div className='grid grid-[160px_1fr] gap-8'>
            <label className="relative row-span-3 rounded-full overflow-hidden">
                    <input type="file" accept='image/' className="hidden"/>
                    <img src={""} alt="profile image" className='aspect-square rounded-full h-[130px]'/>
                    <div className='w-8 h-8 flex items-center justify-center bg-[#15803D] absolute bottom-0 -right-3'>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_230_3380)">
                            <path d="M14.5872 4.16333L13.2366 5.51392C13.0989 5.65161 12.8763 5.65161 12.7386 5.51392L9.48661 2.26196C9.34892 2.12427 9.34892 1.90161 9.48661 1.76392L10.8372 0.41333C11.385 -0.134521 12.2757 -0.134521 12.8265 0.41333L14.5872 2.17407C15.138 2.72192 15.138 3.61255 14.5872 4.16333ZM8.32646 2.92407L0.633095 10.6174L0.0120011 14.177C-0.0729598 14.6575 0.345986 15.0735 0.826454 14.9915L4.38602 14.3674L12.0794 6.67407C12.2171 6.53638 12.2171 6.31372 12.0794 6.17603L8.82743 2.92407C8.68681 2.78638 8.46415 2.78638 8.32646 2.92407ZM3.63602 9.95825C3.47489 9.79712 3.47489 9.53931 3.63602 9.37817L8.14774 4.86646C8.30888 4.70532 8.56669 4.70532 8.72782 4.86646C8.88895 5.02759 8.88895 5.2854 8.72782 5.44653L4.2161 9.95825C4.05497 10.1194 3.79716 10.1194 3.63602 9.95825ZM2.57841 12.4221H3.98466V13.4856L2.09501 13.8167L1.18388 12.9055L1.51493 11.0159H2.57841V12.4221Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_230_3380">
                            <rect width="15" height="15" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>
            </label>
            <div className='grid grid-cls-2'>

            </div>
            <div>
                <button></button>
            </div>
        </div>
    )
}

export default Profile
