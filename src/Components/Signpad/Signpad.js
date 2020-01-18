import React,{useRef,useState,useEffect} from 'react';
import Popup from 'reactjs-popup';
import SignaturePad from 'react-signature-canvas';
import './Signpad.css';

const Signpad = (props) =>{
    const [imageURL, setImageURL] = useState(null);
    const sigCanvas = useRef({});

    const clear = () => sigCanvas.current.clear();
    const save = () => {
        setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
    }
    useEffect(()=>{
        props.setImageURL(imageURL);
    });
    return(
        <div className="sign-pad">
            <Popup
                modal
                trigger={<button type="button" className="btn btn-default">Open Signature Pad</button>}
                closeOnDocumentClick={false}
            >
                {close =>(
                    <>
                        <SignaturePad
                        ref={sigCanvas} 
                        canvasProps={{
                        className:"signatureCanvas"
                        }}
                    />
                    <div className="container">
                        <div className="row">
                            <p style={{textAlign:"center",margin:"0 auto"}}>(After sign click save and then close)</p>
                        </div>
                        <div className="row">
                            <div className="col">
                            <button type="button" className="btn btn-danger" style={{width:"100%"}} onClick={close}>Close</button>
                            </div>
                            <div className="col">
                            <button type="button" className="btn btn-warning" style={{width:"100%"}} onClick={clear}>Clear</button>
                            </div>
                            <div className="col">
                            <button type="button" className="btn btn-success" style={{width:"100%"}} onClick={save}>Save</button>
                            </div>
                        </div>
                    </div>
                    </>
                )}
            </Popup>
            <br></br>
            <br></br>
             {/* {imageURL?(
                <img className="img-fluid rounded shadow"
                 src={imageURL}
                 alt="signature"
                 style={{
                     display:"block",
                     margin:"0 auto",
                     border:"1px solid black",
                     maxHeight:"350px"
                    }}
                />)
                :null} } */}
        </div>
    );
};

export default Signpad;