import { useState } from 'react';

const DisplayName = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (firstName.trim() && lastName.trim()) {
            setFullName(`${firstName} ${lastName}`);
            setError('');
        } else {
            setError('Please fill in both fields.');
            setFullName('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Full Name Display</h1>
                <label htmlFor="firstName">First Name:</label>
                <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <br />
                <label htmlFor="lastName">Last Name:</label>
                <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <h3>Full Name: {fullName}</h3>
        </div>
    );
};

export default DisplayName;
