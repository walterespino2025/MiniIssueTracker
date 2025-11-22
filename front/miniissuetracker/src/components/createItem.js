import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { Button } from 'primereact/button';

import { InputText } from 'primereact/inputtext';
//import { Calendar } from 'primereact/calendar';

const CreateItem = () => {
  const [issueTitle, setIssueTitle] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [issueCreatedBy, setIssueCreatedBy] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/issue', { IssueTitle:issueTitle, IssueDescription:issueDescription, CreatedBy:issueDescription });
    navigate('/'); // Redirect to the list view after creation
  };

  return (
    <div>
      <h2>Report an Issue</h2>
      <form onSubmit={handleSubmit}>
        <div style={{padding:'10px'}}>
          <InputText value={issueTitle} placeholder="Issue Title" onChange={(e) => setIssueTitle(e.target.value)} required />

        </div>
        <div style={{padding:'10px'}}>
          <InputText value={issueDescription} placeholder="Issue Description" onChange={(e) => setIssueDescription(e.target.value)} required />

        </div>
        <div style={{padding:'10px'}}>
          <InputText value={issueCreatedBy} placeholder="Reported by" onChange={(e) => setIssueCreatedBy(e.target.value)} required />

        </div>
        <div style={{padding:'10px'}}>
          <Button label="Submit" icon="pi pi-check" iconPos="right" />
        </div>

      </form>
    </div>
  );
};

export default CreateItem;
