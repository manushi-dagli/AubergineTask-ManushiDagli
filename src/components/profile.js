import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';
import { useLocation } from 'react-router-dom';
import * as htmlToImage from 'html-to-image';

const Profile = () => {
    const cardRef = useRef(null);

    const [user, setUser] = useState();
    let location = useLocation();
    console.log(location);

    useEffect(() => {
        axios
            .get(`https://reqres.in/api/users/${location.state.id}`)
            .then((res) => {
                setUser(res.data.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const handleDownload = () => {

        const element = document.getElementById('container');

        htmlToImage.toJpeg(element, { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'screenshot.jpeg';
                link.href = dataUrl;
                link.click();

            });

    };

    return (
        <>
            <div className="container" id='container'>
                <div className="card" ref={cardRef}>
                    <div className="image">
                        {user && <img src={user.avatar} alt="image" />}
                    </div>
                    <div className="content">
                        {user && (
                            <>
                                <h3>
                                    {user.first_name} {user.last_name}
                                </h3>
                                <h5 className="email">{user.email}</h5>
                            </>
                        )}

                    </div>

                </div>


            </div>
            <div>
                <button onClick={handleDownload} style={{ background: 'black', color: 'white', margin: '5px', padding: '5px', borderRadius: '10px' }}>Download</button>
            </div>
        </>
    );
};

export default Profile;
