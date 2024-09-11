import React from "react";
import EnvelopeIcon from "../../../assets/images/Mail.png";
import { CloseIcon } from "../icons";

const SignUpResponse = ({ setIsModalOpen, name }) => {
    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div className="flex flex-col gap-3 items-center">
            <div className="absolute top-4 right-4 text-2xl text-grey cursor-pointer">
                <CloseIcon onClick={closeModal} />
            </div>
            
            <img src={EnvelopeIcon} alt="Envelope opened" className="" />

            <h3 className="text-xl text-custom-green font-extrabold">Hi! {name}</h3>
            <p className="text-center mb-5">
                A confirmation message has been sent to your email
            </p>

            <p className="bg-custom-green text-white px-8 py-2 rounded-md">Confirm your email</p>
        </div>
    );
};

export default SignUpResponse;
