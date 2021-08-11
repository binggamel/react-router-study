import React from 'react';

const profileData = {
    leader: {
        name: 'kim namjun',
        description: 'Example'
    },
    team: {
        name: '홍길',
        description: "길동이"
    }

};

function Profile({ match }) {
    
    const { username } = match.params;
    const profile = profileData[username];
    if (!profile) {
        return <div>존재하지 않는 유저</div>
    }
    return (
        <div>
             <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    )
}

export default Profile;