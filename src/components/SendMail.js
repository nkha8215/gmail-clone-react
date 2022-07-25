import React from "react";
import "./SendMail.css";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux/es/exports";
import { closeSendMessage } from '../features/mailSlice'
import { db } from '../firebase/init';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'


function SendMail() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  
    async function onSubmit(formData) {
        const post = {
          to: formData.to,
          subject: formData.subject,
          message: formData.message,
          timestamp: serverTimestamp(),
        }
        await addDoc(collection(db, "emails"), post)
        dispatch(closeSendMessage());
    }

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon onClick={() => dispatch(closeSendMessage())} className="sendMail__close" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="text"
          {...register("to", {required: true })}
        />
        {errors.to && (
            <p className="sendMail__error">To is Required</p>
        )}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject", {required: true })}
        />
        {errors.subject && (
            <p className="sendMail__error">Subject is Required</p>
        )}
        <input
          name="message"
          placeholder="Message..."
          type="text"
          className="sendMail__message"
          {...register("message", {required: true })}
        />
        {errors.message && (
            <p className="sendMail__error">Message is Required</p>
        )}
        
        <div className="sendMail__options">
          <Button className="sendMail__send" type="submit">Send</Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
