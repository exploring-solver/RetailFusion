import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Alert } from '@mui/material';

const SplitPayment = () => {
  const [productName, setProductName] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [participants, setParticipants] = useState([{ name: '', email: '' }]);
  const [showAlert, setShowAlert] = useState(false);

  const handleAddParticipant = () => {
    setParticipants([...participants, { name: '', email: '' }]);
  };

  const handleParticipantChange = (index, field, value) => {
    const updatedParticipants = [...participants];
    updatedParticipants[index][field] = value;
    setParticipants(updatedParticipants);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amountPerPerson = (parseFloat(totalAmount) / participants.length).toFixed(2);
    
    // In a real application, you would send this data to the backend
    console.log('Split payment details:', {
      productName,
      totalAmount,
      amountPerPerson,
      participants,
    });

    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Split Payment
      </Typography>
      {showAlert && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Payment request sent successfully!
        </Alert>
      )}
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Total Amount"
          type="number"
          value={totalAmount}
          onChange={(e) => setTotalAmount(e.target.value)}
          margin="normal"
          required
        />
        {participants.map((participant, index) => (
          <Box key={index} sx={{ mt: 2 }}>
            <Typography variant="h6">Participant {index + 1}</Typography>
            <TextField
              fullWidth
              label="Name"
              value={participant.name}
              onChange={(e) => handleParticipantChange(index, 'name', e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={participant.email}
              onChange={(e) => handleParticipantChange(index, 'email', e.target.value)}
              margin="normal"
              required
            />
          </Box>
        ))}
        <Button onClick={handleAddParticipant} sx={{ mt: 2 }}>
          Add Participant
        </Button>
        <Button type="submit" variant="contained" sx={{ mt: 2, ml: 2 }}>
          Send Payment Requests
        </Button>
      </Box>
    </Container>
  );
};

export default SplitPayment;