import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import http from '../services/api';
import { useNavigate } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { Button } from 'primereact/button';
import moment from 'moment';

const IssueList = () => {
const navigate = useNavigate();
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await http.get('/issue');
    setIssues(response.data);
  };

  const markAsResolved = async (id) => {
    await http.put(`/issue/${id}`);
    setIssues(issues.filter(item => item.id !== id));
    window.location.reload();
  };

  const dateTemplate=(rowdata)=>{
    return moment(rowdata.createdAt).format("MM-DD-YYYY h:mm A");
  }

  const MarkResolvedTemplate=(rowdata)=>{
    
        return !rowdata.issueResolved ? <Button label="Mark as resolved" icon="pi pi-check" severity="warning" onClick={(e)=>{markAsResolved(rowdata.issueID)}}  /> : <Button label="Resolved" severity="success"  />
      
  }

  return (
    <div>
      <h2>Issue List</h2>
      <DataTable value={issues} tableStyle={{ minWidth: '50rem' }} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}>
    <Column field="issueID" header="Issue ID"></Column>
    <Column field="issueTitle" header="Issue Title"></Column>
    <Column field="issueDescription" header="Issue Description"></Column>
    <Column field="createdAt" header="Date Occurrence" body={dateTemplate}></Column>
    <Column field="issueResolved" header="Issue Resolved" body={MarkResolvedTemplate} sortable  ></Column>
</DataTable>
    </div>
  );
};

export default IssueList;