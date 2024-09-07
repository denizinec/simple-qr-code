import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrGenerator(){

    const [qrCode, setqrCode] = useState('')
    const [input, setInput] = useState('')

    function handleGenerateQrCode(){
        setqrCode(input)
    }

    return(
        <>
        <div>
            <h1>QR GENERATOR</h1>
        </div>
        <div>
        <input onChange={(e) => setInput(e.target.value)} type="text" name="qr-code" placeholder="Enter
        your value here" />
        <button disabled={input && input.trim() !== "" ? false : true} onClick={handleGenerateQrCode} >Generate</button>
        </div>
        <div className="qr">
        <QRCode 
        id="qr-code-value"
        value={qrCode} size={400} bgColor="#ffffff" />
        </div>
        </>
    );



}