import React from "react";

interface PrayerRequest {
    key?: number;
    name: string;
    email: string;
    message: string;
}
const prayerRequestInfoCard: React.FC<PrayerRequest> = ({ name, email, message }) => {
    return ( 
        <div className="bg-background-200 border-2 p-6 rounded-lg text-text-500">
           <h2 className="text-secondary-500 text-xl font-semibold">{name}</h2>
            <p>{email}</p>
            <p>{message}</p>
        </div>
     )
}
export default prayerRequestInfoCard;