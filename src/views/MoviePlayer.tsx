import React from 'react';
import { useNavigate } from 'react-router-dom';

export const MoviePlayer = () => {
    const navigate = useNavigate();
    return (
        <div style={{position: "absolute", zIndex: 999, width:"100vw", height:"100vh"}}>
          
                <video style={{width: "100%", height:"100%"}}src="" autoPlay loop controls></video>
            
        </div>
    );
};
